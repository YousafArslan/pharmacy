import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import IconA from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import apiBaseUrl from '../../utils/api';
import debounce from 'lodash.debounce';
import {CartTabStyle} from '../../styles';
import OpenReturnStyle from './OpenReturnStyle';

const OpenReturn = ({route}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const authReducer = useSelector(state => state.auth);
  const dssReducer = useSelector(state => state.dss);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
  const [selectedItems, setSelectedItems] = useState([]);

  // Get dist_id and dss_id from Redux state (getDssById)
  const dssData = dssReducer?.getDssById;

  // Use the first item from dssData array if available
  const selectedDssItem = dssData && Array.isArray(dssData) && dssData.length > 0 ? dssData[0] : null;

  const dist_id = selectedDssItem?.dist_id || route.params?.dist_id || authReducer?.currentUser?.user?.dist_id;
  const dss_id = selectedDssItem?.dss_id || route.params?.dss_id;
  const fetchData = async query => {
    if (fetching) return;
    setFetching(true);
    setLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/items`, {
        params: {
          item_name: query,
          limit: 10,
        },
      });
      setSearchResults(response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  const debouncedFetchData = useCallback(
    debounce(query => {
      fetchData(query);
    }, 500),
    [],
  );

  const handleSearchChange = text => {
    setSearchQuery(text);
    debouncedFetchData(text);
  };

  const handleSubmitReturn = async () => {
    // Validation
    if (!dist_id || !dss_id) {
      toast.show('Missing required parameters (dist_id or dss_id)', {
        type: 'danger',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    if (selectedItems.length === 0) {
      toast.show('Please add at least one item', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    // Validate all items have required fields
    const invalidItems = selectedItems.filter(
      item => !item.batchNo || !item.expiryDate || !item.returnQty,
    );

    if (invalidItems.length > 0) {
      toast.show('Please fill all fields for each item', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    // Validate expiry date format (DD-MM-YYYY)
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
    const invalidDates = selectedItems.filter(
      item => !dateRegex.test(item.expiryDate),
    );

    if (invalidDates.length > 0) {
      toast.show('Please enter valid expiry dates in DD-MM-YYYY format', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    setSubmitting(true);

    try {
      const app_user_id = authReducer?.currentUser?.user?.username || '';

      // Prepare the bulk data array with all required fields
      const bulkData = selectedItems.map(item => {
        // Preserve item_id with leading zeros (e.g., "000012" not "12")
        let itemId = '';
        if (item.item_id) {
          itemId = String(item.item_id); // Use item_id if available
        } else if (item.id) {
          itemId = String(item.id); // Fallback to id
        }

        return {
          dss_id: dss_id,
          dist_id: dist_id,
          app_user_id: app_user_id,
          item_id: itemId,
          batch_no: item.batchNo,
          expiry_date: item.expiryDate,
          quantity: parseInt(item.returnQty),
          total_amount: parseFloat(((item.item_rate || 0) * parseInt(item.returnQty)).toFixed(2)),
        };
      });

      // Send bulkData as an array directly
      const response = await axios.post(
        `${apiBaseUrl}/openReturn/bulk/${dist_id}/${dss_id}`,
        bulkData,
      );

      if (response.status === 200 || response.status === 201) {
        toast.show('Return submitted successfully', {
          type: 'success',
          placement: 'center',
          duration: 2000,
        });

        // Clear selected items after successful submission
        setSelectedItems([]);
      }
    } catch (error) {
      console.error('Error submitting return:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to submit return. Please try again.';

      toast.show(errorMessage, {
        type: 'danger',
        placement: 'center',
        duration: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    async function fetchInvoiceDetails() {
      try {
        const res = await axios.get(`${apiBaseUrl}/invoiceDetail/D307`);
        setInvoiceItems(res.data);
      } catch (err) {
        setInvoiceItems([]);
      }
    }
    fetchInvoiceDetails();
  }, []);

  return (
    <View
      style={[CartTabStyle.minstyleviewphotograpgy, CartTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ width: '100%', paddingBottom: 100 }}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyle.minflexview, CartTabStyle.bgcolorset]}>
            <View style={styles.container}>
              {/* Header with Add Button */}
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Return Items</Text>
                <TouchableOpacity
                  style={[styles.addButton, { backgroundColor: colorrdata }]}
                  onPress={() => setShowSearch(!showSearch)}>
                  <IconA name={showSearch ? 'cross' : 'plus'} size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Search Section */}
              {showSearch && (
                <View style={styles.searchContainer}>
                  <View style={styles.searchInputContainer}>
                    <IconM name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                      value={searchQuery}
                      onChangeText={handleSearchChange}
                      placeholder="Search Medicine"
                      style={styles.searchInput}
                      placeholderTextColor="#999"
                    />
                  </View>

                  {/* Search Results Dropdown */}
                  {loading ? (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="small" color={colorrdata} />
                    </View>
                  ) : (
                      searchQuery &&
                      searchResults.length > 0 && (
                        <View style={styles.searchResultsContainer}>
                        {searchResults.map(item => (
                          <TouchableOpacity
                            key={item.id}
                            style={styles.searchResultItem}
                            onPress={() => {
                              setSelectedItems(prev => [
                                ...prev,
                                {
                                  ...item,
                                  batchNo: '',
                                  expiryDate: '',
                                  returnQty: '',
                                },
                              ]);
                              setSearchQuery('');
                              setSearchResults([]);
                              setShowSearch(false);
                            }}>
                            <Text style={styles.searchResultText}>
                              {item.item_name}
                            </Text>
                            <IconA name="chevron-right" size={20} color="#999" />
                          </TouchableOpacity>
                        ))}
                      </View>
                    )
                  )}
                </View>
              )}

              {/* Selected Items List */}
              {selectedItems.length > 0 ? (
                <>
                  <Text style={styles.sectionTitle}>
                    Selected Items ({selectedItems.length})
                  </Text>
                  {selectedItems.map((item, idx) => (
                    <View key={`${item.id}-${idx}`} style={styles.itemCard}>
                      <View style={styles.itemHeader}>
                        <Text style={styles.itemName}>
                          {idx + 1}. {item.item_name}
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            setSelectedItems(prev =>
                              prev.filter((_, i) => i !== idx),
                            )
                          }
                          style={[styles.removeButton, { backgroundColor: colorrdata }]}>
                          <IconM name="close" size={18} color="#fff" />
                        </TouchableOpacity>
                      </View>

                      <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Batch No</Text>
                        <TextInput
                          style={styles.inputField}
                          value={item.batchNo || ''}
                          onChangeText={text =>
                            setSelectedItems(prev =>
                              prev.map((it, i) =>
                                i === idx ? { ...it, batchNo: text } : it,
                              ),
                            )
                          }
                          placeholder="Enter batch number"
                          placeholderTextColor="#999"
                        />
                      </View>

                      <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Expiry Date</Text>
                        <TextInput
                          style={styles.inputField}
                          value={item.expiryDate || ''}
                          onChangeText={text => {
                            // Format: DD-MM-YYYY, allow only numbers and hyphens
                            let formatted = text.replace(/[^0-9-]/g, '');

                            // Auto-add hyphens after DD and MM
                            if (formatted.length === 2 && !formatted.includes('-')) {
                              formatted = formatted + '-';
                            } else if (formatted.length === 5 && formatted.split('-').length === 2) {
                              formatted = formatted + '-';
                            }

                            // Limit to DD-MM-YYYY format (10 characters)
                            if (formatted.length <= 10) {
                              setSelectedItems(prev =>
                                prev.map((it, i) =>
                                  i === idx ? { ...it, expiryDate: formatted } : it,
                                ),
                              );
                            }
                          }}
                          placeholder="DD-MM-YYYY"
                          placeholderTextColor="#999"
                          maxLength={10}
                          keyboardType="numeric"
                        />
                      </View>

                      <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Return Quantity</Text>
                        <TextInput
                          style={styles.inputField}
                          value={item.returnQty ? String(item.returnQty) : ''}
                          onChangeText={text => {
                            const qty = text.replace(/[^0-9]/g, '');
                            setSelectedItems(prev =>
                              prev.map((it, i) =>
                                i === idx
                                  ? { ...it, returnQty: qty ? parseInt(qty) : '' }
                                  : it,
                              ),
                            );
                          }}
                          placeholder="Enter quantity"
                          keyboardType="numeric"
                          placeholderTextColor="#999"
                        />
                      </View>
                    </View>
                  ))}
                </>
              ) : (
                <View style={styles.emptyContainer}>
                  <IconM name="shopping-cart" size={64} color="#ccc" />
                  <Text style={styles.emptyText}>No items added yet</Text>
                  <Text style={styles.emptySubtext}>
                    Tap the + button to add items
                  </Text>
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* Submit Button */}
      {selectedItems.length > 0 && (
        <View style={styles.bottomContainer}>
          <View style={styles.totalContainer}>
            <Text style={[styles.totalLabel, { color: colorrdata }]}>
              Total Amount
            </Text>
            <Text style={styles.totalAmount}>
              ₨{' '}
              {selectedItems
                .reduce(
                  (sum, item) =>
                    sum + (item.item_rate || 0) * (parseInt(item.returnQty) || 0),
                  0,
              )
                .toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.submitButton,
              { backgroundColor: submitting ? '#ccc' : colorrdata },
            ]}
            onPress={handleSubmitReturn}
            disabled={submitting}>
            {submitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>Submit Return</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = OpenReturnStyle;

export default OpenReturn;
