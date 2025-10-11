# Redux Quick Reference Card

## Import Actions

```javascript
// Customers
import {
  fetchCustomers,
  createCustomer,
  updateCustomer,
  resetCreateState,
  resetUpdateState,
} from '../redux/customers/customers.slice';

// Orders
import {
  fetchAllOrders,
  fetchPendingPaymentOrders,
  fetchPendingOrders,
  createOrder,
  updateOrder,
  resetCreateState,
  resetUpdateState,
} from '../redux/orders/orders.slice';

// Cheques
import {
  uploadCheque,
  resetUploadState,
} from '../redux/cheques/cheques.slice';

// DSS
import {
  fetchDssById,
  fetchSaleSummaryDetails,
  fetchOfflineData,
  resetDssDetails,
  resetSaleSummary,
} from '../redux/dss/dss.slice';

// Auth
import {
  loginUser,
  registerUser,
  checkEmailAvailability,
  logoutUser,
  setUser,
  clearAuthState,
  logout,
} from '../redux/auth/auth.slice';

// Common (Theme)
import {
  setPriceSymbol,
  setColorPicker,
  toggleDarkMode,
  setDarkMode,
} from '../redux/common/common.slice';
```

## Custom Hooks

```javascript
import {
  useCustomers,
  useOrders,
  useCheques,
  useDss,
  useAuth,
  useCommon,
  useCurrentUser,
  useIsLoggedIn,
  useThemeColors,
} from '../redux/hooks/useRedux';
```

## State Structure

All async operations follow this pattern:

```javascript
{
  data: null | any,    // The response data
  loading: boolean,    // Loading state
  error: null | string // Error message
}
```

### Customers State
```javascript
const { list, create, update } = useCustomers();
// list.data, list.loading, list.error
// create.data, create.loading, create.error
// update.data, update.loading, update.error
```

### Orders State
```javascript
const { all, pendingPayments, pending, create, update } = useOrders();
```

### Cheques State
```javascript
const { upload } = useCheques();
```

### DSS State
```javascript
const { details, saleSummary, offlineData } = useDss();
```

### Auth State
```javascript
const { currentUser, isLoggedIn, login, register, checkEmail } = useAuth();
```

## Common Patterns

### 1. Fetch Data
```javascript
useEffect(() => {
  dispatch(fetchCustomers());
}, [dispatch]);
```

### 2. Handle Loading & Error
```javascript
if (list.loading) return <Loader />;
if (list.error) return <Error message={list.error} />;
```

### 3. Submit Form
```javascript
const handleSubmit = async () => {
  try {
    await dispatch(createCustomer(formData)).unwrap();
    toast.show('Success!', { type: 'success' });
    dispatch(resetCreateState());
  } catch (error) {
    toast.show(error, { type: 'error' });
  }
};
```

### 4. Button with Loading
```javascript
<Button
  onPress={handleSubmit}
  disabled={create.loading}
>
  {create.loading ? 'Saving...' : 'Save'}
</Button>
```

### 5. Pull to Refresh
```javascript
<FlatList
  data={list.data}
  refreshing={list.loading}
  onRefresh={() => dispatch(fetchCustomers())}
/>
```

### 6. Reset State
```javascript
dispatch(resetCreateState());
```

## Action Mapping (Old → New)

| Module | Old Action | New Action |
|--------|-----------|------------|
| **Customers** |
| | `GetAllCustomersAction` | `fetchCustomers()` |
| | `CreateCustomerAction` | `createCustomer(data)` |
| | `EditCustomerAction` | `updateCustomer({ id, ...data })` |
| **Orders** |
| | `GetAllOrdersAction` | `fetchAllOrders(filters)` |
| | `GetPendingPaymentOrdersAction` | `fetchPendingPaymentOrders(filters)` |
| | `GetPendingOrdersAction` | `fetchPendingOrders()` |
| | `CreateOrderAction` | `createOrder(data)` |
| | `EditOrderAction` | `updateOrder({ id, ...data })` |
| **Cheques** |
| | `AddChequeAction` | `uploadCheque(data)` |
| **DSS** |
| | `GetDssByIDAction` | `fetchDssById({ id, username })` |
| | `GetSaleSummaryDetailsAction` | `fetchSaleSummaryDetails({ dist_id, dss_id })` |
| | `GetOfflineDataAction` | `fetchOfflineData(id)` |
| **Auth** |
| | `LoginAction` | `loginUser(credentials)` |
| | `registerAction` | `registerUser(userData)` |
| | `CheckEmail` | `checkEmailAvailability(email)` |
| | `logout` (thunk) | `logoutUser()` |

## State Access (Old → New)

### Old Way
```javascript
const customers = useSelector(state => state.customers);
const loading = customers.getAllCustomersLoading;
const error = customers.getAllCustomersError;
const data = customers.getAllCustomers;
```

### New Way
```javascript
const { list } = useCustomers();
const loading = list.loading;
const error = list.error;
const data = list.data;
```

## Dispatch Pattern

### Old Way (with moveToNext)
```javascript
dispatch(GetAllCustomersAction({
  data: {},
  moveToNext: (message, type) => {
    if (type === 'success') {
      toast.show(message, { type: 'success' });
    } else {
      toast.show(message, { type: 'error' });
    }
  }
}));
```

### New Way (with unwrap)
```javascript
try {
  await dispatch(fetchCustomers()).unwrap();
  toast.show('Customers loaded!', { type: 'success' });
} catch (error) {
  toast.show(error, { type: 'error' });
}
```

## Tips

1. **Always use `.unwrap()`** when you need to handle success/error
2. **Reset state** after successful operations
3. **Use custom hooks** for cleaner code
4. **Check loading/error** before rendering data
5. **Disable buttons** during loading
6. **Show loading indicators** for better UX
7. **Display error messages** to users

## Examples

### Complete Component Example
```javascript
import React, { useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  fetchCustomers,
  createCustomer,
  resetCreateState,
} from '../redux/customers/customers.slice';
import { useCustomers } from '../redux/hooks/useRedux';
import { useToast } from 'react-native-toast-notifications';

function CustomersScreen() {
  const dispatch = useDispatch();
  const { list, create } = useCustomers();
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleCreate = async (customerData) => {
    try {
      await dispatch(createCustomer(customerData)).unwrap();
      toast.show('Customer created!', { type: 'success' });
      dispatch(resetCreateState());
      dispatch(fetchCustomers()); // Refresh list
    } catch (error) {
      toast.show(error, { type: 'error' });
    }
  };

  if (list.loading && !list.data.length) {
    return <Loader />;
  }

  if (list.error) {
    return <ErrorView message={list.error} />;
  }

  return (
    <View>
      <FlatList
        data={list.data}
        refreshing={list.loading}
        onRefresh={() => dispatch(fetchCustomers())}
        renderItem={({ item }) => <CustomerCard customer={item} />}
      />
      <Button
        title="Add Customer"
        onPress={() => navigation.navigate('AddCustomer')}
        disabled={create.loading}
      />
    </View>
  );
}
```
