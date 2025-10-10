import React, { useState, useEffect, useCallback } from 'react';
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
  const toast = useToast();

  // New data structure: array of customer groups, each with customer info and items
  const [customerGroups, setCustomerGroups] = useState([]);

  // Customer search states
  const [showCustomerSearch, setShowCustomerSearch] = useState(false);
  const [customerSearchQuery, setCustomerSearchQuery] = useState('');
  const [customerSearchResults, setCustomerSearchResults] = useState([]);
  const [customerLoading, setCustomerLoading] = useState(false);

  // Item search states
  const [activeCustomerIndex, setActiveCustomerIndex] = useState(null);
  const [showItemSearch, setShowItemSearch] = useState(false);
  const [itemSearchQuery, setItemSearchQuery] = useState('');
  const [itemSearchResults, setItemSearchResults] = useState([]);
  const [itemLoading, setItemLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  // Get dist_id and dss_id from Redux state
  const dssData = dssReducer?.getDssById;
  const selectedDssItem = dssData && Array.isArray(dssData) && dssData.length > 0 ? dssData[0] : null;
  const dist_id = selectedDssItem?.dist_id || route.params?.dist_id || authReducer?.currentUser?.user?.dist_id;
  const dss_id = selectedDssItem?.dss_id || route.params?.dss_id;
  // Fetch customers - only when 2+ characters
  const fetchCustomers = async (query) => {
    if (!query || query.trim().length < 2) {
      setCustomerSearchResults([]);
      return;
    }

    setCustomerLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/customers`);
      const customers = response.data || [];
      const filtered = customers.filter(customer =>
        customer.cust_name?.toLowerCase().includes(query.toLowerCase())
      );
      setCustomerSearchResults(filtered);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setCustomerSearchResults([]);
    } finally {
      setCustomerLoading(false);
    }
  };

  const debouncedFetchCustomers = useCallback(
    debounce((query) => {
      fetchCustomers(query);
    }, 500),
    [],
  );

  const handleCustomerSearchChange = text => {
    setCustomerSearchQuery(text);
    debouncedFetchCustomers(text);
  };

  // Fetch items
  const fetchItems = async query => {
    if (!query) return;
    setItemLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/items`, {
        params: {
          item_name: query,
          limit: 10,
        },
      });
      setItemSearchResults(response.data || []);
    } catch (error) {
      console.error('Error fetching items:', error);
      setItemSearchResults([]);
    } finally {
      setItemLoading(false);
    }
  };

  const debouncedFetchItems = useCallback(
    debounce(query => {
      fetchItems(query);
    }, 500),
    [],
  );

  const handleItemSearchChange = text => {
    setItemSearchQuery(text);
    debouncedFetchItems(text);
  };

  // Add new customer group
  const handleSelectCustomer = (customer) => {
    const newGroup = {
      customer: {
        id: customer.cust_id,
        name: customer.cust_name,
        region: customer.region_name,
        type: customer.type_name,
      },
      items: [],
    };
    setCustomerGroups(prev => [...prev, newGroup]);
    setCustomerSearchQuery('');
    setCustomerSearchResults([]);
    setShowCustomerSearch(false);
  };

  // Add item to specific customer group
  const handleAddItemToCustomer = (customerIndex, item) => {
    setCustomerGroups(prev => {
      const updated = [...prev];
      updated[customerIndex].items.push({
        ...item,
        batchNo: '',
        expiryDate: '',
        returnQty: '',
      });
      return updated;
    });
    setItemSearchQuery('');
    setItemSearchResults([]);
    setShowItemSearch(false);
    setActiveCustomerIndex(null);
  };

  // Remove item from customer group
  const handleRemoveItem = (customerIndex, itemIndex) => {
    setCustomerGroups(prev => {
      const updated = [...prev];
      updated[customerIndex].items.splice(itemIndex, 1);
      return updated;
    });
  };

  // Remove entire customer group
  const handleRemoveCustomerGroup = (customerIndex) => {
    setCustomerGroups(prev => prev.filter((_, idx) => idx !== customerIndex));
  };

  // Update item field in customer group
  const handleUpdateItemField = (customerIndex, itemIndex, field, value) => {
    setCustomerGroups(prev => {
      const updated = [...prev];
      updated[customerIndex].items[itemIndex][field] = value;
      return updated;
    });
  };

  // Submit returns
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

    if (customerGroups.length === 0) {
      toast.show('Please add at least one customer with items', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    // Check each customer has at least one item
    const emptyGroups = customerGroups.filter(group => group.items.length === 0);
    if (emptyGroups.length > 0) {
      toast.show('Each customer must have at least one item', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    // Validate all items have required fields
    let hasInvalidItems = false;
    customerGroups.forEach(group => {
      group.items.forEach(item => {
        if (!item.batchNo || !item.expiryDate || !item.returnQty) {
          hasInvalidItems = true;
        }
      });
    });

    if (hasInvalidItems) {
      toast.show('Please fill all fields for each item', {
        type: 'warning',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    // Validate expiry date format (DD-MM-YYYY)
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
    let hasInvalidDates = false;
    customerGroups.forEach(group => {
      group.items.forEach(item => {
        if (!dateRegex.test(item.expiryDate)) {
          hasInvalidDates = true;
        }
      });
    });

    if (hasInvalidDates) {
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

      // Prepare bulk data from all customer groups
      const bulkData = [];
      customerGroups.forEach(group => {
        group.items.forEach(item => {
          let itemId = '';
          if (item.item_id) {
            itemId = String(item.item_id);
          } else if (item.id) {
            itemId = String(item.id);
          }

          bulkData.push({
            dss_id: dss_id,
            dist_id: dist_id,
            app_user_id: app_user_id,
            cust_id: group.customer.id,
            customer_name: group.customer.name,
            item_id: itemId,
            batch_no: item.batchNo,
            expiry_date: item.expiryDate,
            quantity: parseInt(item.returnQty),
            total_amount: parseFloat(((item.item_rate || 0) * parseInt(item.returnQty)).toFixed(2)),
          });
        });
      });

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

        // Clear all customer groups after successful submission
        setCustomerGroups([]);
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

  // Cleanup
  useEffect(() => {
    return () => {
      debouncedFetchCustomers.cancel();
      debouncedFetchItems.cancel();
    };
  }, [debouncedFetchCustomers, debouncedFetchItems]);

  // Calculate total items and amount
  const totalItems = customerGroups.reduce((sum, group) => sum + group.items.length, 0);
  const totalAmount = customerGroups.reduce((sum, group) => {
    return sum + group.items.reduce((itemSum, item) => {
      return itemSum + (item.item_rate || 0) * (parseInt(item.returnQty) || 0);
    }, 0);
  }, 0);

  const styles = OpenReturnStyle;

  return (
    <View style={[CartTabStyle.minstyleviewphotograpgy, CartTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ width: '100%', paddingBottom: 120 }}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyle.minflexview, CartTabStyle.bgcolorset]}>
            <View style={styles.container}>
              {/* Header */}
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Return Items</Text>
                <TouchableOpacity
                  style={[styles.addButton, { backgroundColor: colorrdata }]}
                  onPress={() => setShowCustomerSearch(!showCustomerSearch)}>
                  <IconA name={showCustomerSearch ? 'cross' : 'plus'} size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Customer Search Section */}
              {showCustomerSearch && (
                <View style={styles.searchContainer}>
                  <Text style={styles.sectionSubtitle}>Select Customer</Text>
                  <View style={styles.searchInputContainer}>
                    <IconM name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                      value={customerSearchQuery}
                      onChangeText={handleCustomerSearchChange}
                      placeholder="Search customer (min 2 characters)"
                      style={styles.searchInput}
                      placeholderTextColor="#999"
                    />
                  </View>

                  {/* Hint for less than 2 characters */}
                  {customerSearchQuery && customerSearchQuery.length < 2 && (
                    <Text style={styles.hintText}>
                      Please enter at least 2 characters
                    </Text>
                  )}

                  {/* Customer Search Results */}
                  {customerLoading ? (
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size="small" color={colorrdata} />
                    </View>
                  ) : (
                      customerSearchQuery &&
                      customerSearchQuery.length >= 2 &&
                      customerSearchResults.length > 0 && (
                        <View style={styles.searchResultsContainer}>
                          {customerSearchResults.map((customer, idx) => (
                          <TouchableOpacity
                              key={`${customer.cust_id}-${idx}`}
                            style={styles.searchResultItem}
                              onPress={() => handleSelectCustomer(customer)}>
                              <View style={{ flex: 1 }}>
                                <Text style={styles.searchResultText}>
                                  {customer.cust_name}
                                </Text>
                                <Text style={styles.searchResultSubtext}>
                                  {customer.region_name} • {customer.type_name}
                                </Text>
                              </View>
                              <IconA name="chevron-right" size={20} color="#999" />
                            </TouchableOpacity>
                          ))}
                      </View>
                    )
                  )}

                  {!customerLoading &&
                    customerSearchQuery &&
                    customerSearchQuery.length >= 2 &&
                    customerSearchResults.length === 0 && (
                      <View style={styles.emptySearchContainer}>
                        <Text style={styles.emptySearchText}>No customers found</Text>
                      </View>
                    )}
                </View>
              )}

              {/* Customer Groups List */}
              {customerGroups.length > 0 ? (
                <>
                  <Text style={styles.sectionTitle}>
                    Customers ({customerGroups.length})
                  </Text>
                  {customerGroups.map((group, customerIdx) => (
                    <View key={`customer-${customerIdx}`} style={styles.customerGroupCard}>
                      {/* Customer Header */}
                      <View style={styles.customerHeader}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.customerName}>
                            {group.customer.name}
                          </Text>
                          <Text style={styles.customerInfo}>
                            {group.customer.region} • {group.customer.type}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => handleRemoveCustomerGroup(customerIdx)}
                          style={[styles.removeButton, { backgroundColor: '#ff4444' }]}>
                          <IconM name="delete" size={18} color="#fff" />
                        </TouchableOpacity>
                      </View>

                      {/* Add Item Button */}
                      <TouchableOpacity
                        style={[styles.addItemButton, { borderColor: colorrdata }]}
                        onPress={() => {
                          setActiveCustomerIndex(customerIdx);
                          setShowItemSearch(true);
                        }}>
                        <IconA name="plus" size={16} color={colorrdata} />
                        <Text style={[styles.addItemButtonText, { color: colorrdata }]}>
                          Add Item
                        </Text>
                      </TouchableOpacity>

                      {/* Item Search for this customer */}
                      {showItemSearch && activeCustomerIndex === customerIdx && (
                        <View style={styles.itemSearchContainer}>
                          <View style={styles.searchInputContainer}>
                            <IconM name="search" size={20} color="#999" style={styles.searchIcon} />
                            <TextInput
                              value={itemSearchQuery}
                              onChangeText={handleItemSearchChange}
                              placeholder="Search medicine"
                              style={styles.searchInput}
                              placeholderTextColor="#999"
                              autoFocus
                            />
                            <TouchableOpacity
                              onPress={() => {
                                setShowItemSearch(false);
                                setActiveCustomerIndex(null);
                                setItemSearchQuery('');
                              }}>
                              <IconM name="close" size={20} color="#999" />
                            </TouchableOpacity>
                          </View>

                          {itemLoading ? (
                            <View style={styles.loadingContainer}>
                              <ActivityIndicator size="small" color={colorrdata} />
                            </View>
                          ) : (
                            itemSearchQuery &&
                            itemSearchResults.length > 0 && (
                              <View style={styles.searchResultsContainer}>
                                {itemSearchResults.map((item, idx) => (
                                  <TouchableOpacity
                                    key={`item-${item.id}-${idx}`}
                                    style={styles.searchResultItem}
                                    onPress={() => handleAddItemToCustomer(customerIdx, item)}>
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

                      {/* Items List */}
                      {group.items.length > 0 ? (
                        group.items.map((item, itemIdx) => (
                          <View key={`item-${customerIdx}-${itemIdx}`} style={styles.itemCard}>
                            <View style={styles.itemHeader}>
                              <Text style={styles.itemName}>
                                {itemIdx + 1}. {item.item_name}
                              </Text>
                              <TouchableOpacity
                                onPress={() => handleRemoveItem(customerIdx, itemIdx)}
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
                                  handleUpdateItemField(customerIdx, itemIdx, 'batchNo', text)
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
                                  let formatted = text.replace(/[^0-9-]/g, '');
                                  if (formatted.length === 2 && !formatted.includes('-')) {
                                    formatted = formatted + '-';
                                  } else if (formatted.length === 5 && formatted.split('-').length === 2) {
                                    formatted = formatted + '-';
                                  }
                                  if (formatted.length <= 10) {
                                    handleUpdateItemField(customerIdx, itemIdx, 'expiryDate', formatted);
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
                                  handleUpdateItemField(
                                    customerIdx,
                                    itemIdx,
                                    'returnQty',
                                    qty ? parseInt(qty) : ''
                                  );
                                }}
                                placeholder="Enter quantity"
                                keyboardType="numeric"
                                placeholderTextColor="#999"
                              />
                            </View>
                          </View>
                        ))
                      ) : (
                        <View style={styles.emptyItemsContainer}>
                          <Text style={styles.emptyItemsText}>
                            No items added yet
                          </Text>
                        </View>
                      )}
                    </View>
                  ))}
                </>
              ) : (
                <View style={styles.emptyContainer}>
                  <IconM name="shopping-cart" size={64} color="#ccc" />
                    <Text style={styles.emptyText}>No customers added yet</Text>
                  <Text style={styles.emptySubtext}>
                      Tap the + button to add a customer
                  </Text>
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* Submit Button */}
      {customerGroups.length > 0 && totalItems > 0 && (
        <View style={styles.bottomContainer}>
          <View style={styles.totalContainer}>
            <View>
              <Text style={styles.totalLabel}>Total Items: {totalItems}</Text>
              <Text style={[styles.totalLabel, { color: colorrdata }]}>
                Total Amount
              </Text>
            </View>
            <Text style={styles.totalAmount}>₨ {totalAmount.toFixed(2)}</Text>
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

export default OpenReturn;
