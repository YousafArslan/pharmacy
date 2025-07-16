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
import {Button} from '../../components';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import apiBaseUrl from '../../utils/api';
import debounce from 'lodash.debounce';
import {CartTabStyle} from '../../styles';

const OpenReturn = ({route}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const toast = useToast();
  const [selectedItems, setSelectedItems] = useState([]);

  const fetchData = async query => {
    if (fetching) return; // Prevent fetching if already fetching
    setFetching(true);
    setLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/items`, {
        params: {
          item_name: query, // Send the search query to the API
          limit: 10, // Limit the results to 10 items
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

  // Debounced function to call fetchData on search input change
  const debouncedFetchData = useCallback(
    debounce(query => {
      fetchData(query);
    }, 500),
    [],
  );

  // Handle search input change
  const handleSearchChange = text => {
    setSearchQuery(text);
    debouncedFetchData(text); // Trigger debounced fetch
  };

  // Fetch invoice details on component mount
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
        contentContainerStyle={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyle.minflexview, CartTabStyle.bgcolorset]}>
            <View>
              <ScrollView>
                <View
                  style={[CartTabStyle.setwhitebox, CartTabStyle.cartboxwrap]}>
                  {/* Search input */}
                  <TextInput
                    value={searchQuery}
                    onChangeText={handleSearchChange}
                    placeholder="Search Medicine"
                    style={CartTabStyle.setinputtext}
                  />

                  {/* Display search results dropdown */}
                  {loading ? (
                    <ActivityIndicator size="small" color={colorrdata} />
                  ) : (
                    searchQuery && (
                      <View
                        style={{
                          // maxHeight: 200,
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRadius: 10,
                        }}>
                        {searchResults.map(item => (
                          <TouchableOpacity
                            key={item.id}
                            style={{padding: 10}}
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
                            }}>
                            <Text>{item.item_name}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )
                  )}
                  {selectedItems.length > 0 && (
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 16,
                      }}>
                      Invoice Items ({selectedItems.length})
                    </Text>
                  )}
                  {selectedItems.map((item, idx) => (
                    <View key={item.id} style={styles.card}>
                      <Text style={styles.cardTitle}>
                        {idx + 1}. {item.item_name}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={item.batchNo || ''}
                        onChangeText={text =>
                          setSelectedItems(prev =>
                            prev.map((it, i) =>
                              i === idx ? {...it, batchNo: text} : it,
                            ),
                          )
                        }
                        placeholder="Batch No"
                      />
                      <TextInput
                        style={styles.input}
                        value={item.expiryDate || ''}
                        onChangeText={text =>
                          setSelectedItems(prev =>
                            prev.map((it, i) =>
                              i === idx ? {...it, expiryDate: text} : it,
                            ),
                          )
                        }
                        placeholder="Expiry Date (e.g. 2025-12-31)"
                      />
                      <TextInput
                        style={styles.input}
                        value={item.returnQty ? String(item.returnQty) : ''}
                        onChangeText={text => {
                          const qty = text.replace(/[^0-9]/g, '');
                          setSelectedItems(prev =>
                            prev.map((it, i) =>
                              i === idx
                                ? {...it, returnQty: qty ? parseInt(qty) : ''}
                                : it,
                            ),
                          );
                        }}
                        placeholder="Enter quantity"
                        keyboardType="numeric"
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setSelectedItems(prev =>
                            prev.filter((_, i) => i !== idx),
                          )
                        }
                        style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  ))}

                  <ScrollView>
                    {selectedItems.length === 0 && (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 200,
                        }}>
                        <Text>No items found.</Text>
                      </View>
                    )}
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      {selectedItems.length > 0 && (
        <View
          style={[
            CartTabStyle.positionabsolutesetbutton,
            CartTabStyle.bgcolorset,
          ]}>
          <View style={CartTabStyle.accountbutton}>
            <View style={CartTabStyle.amountView}>
              <Text
                style={[
                  CartTabStyle.viewdetailesbilltext,
                  {color: colorrdata},
                ]}>
                Total Amount
              </Text>
              <Text style={CartTabStyle.digitaltextsettwo}>
                {selectedItems.reduce(
                  (sum, item) =>
                    sum +
                    (item.item_rate || 0) * (parseInt(item.returnQty) || 0),
                  0,
                )}
              </Text>
            </View>
            <View style={CartTabStyle.setbuttonwidthview}>
              <Button
                title="Submit"
                buttonTextStyle={CartTabStyle.textstylepayment}
                buttonStyle={{backgroundColor: colorrdata}}
                onPress={() =>
                  toast.show('Summary has been submitted', {
                    type: 'success',
                    placement: 'center',
                    style: {backgroundColor: colorrdata},
                  })
                }
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  qtyButton: {
    backgroundColor: '#eee',
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 8,
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 16,
    minWidth: 32,
    textAlign: 'center',
  },
};

export default OpenReturn;
