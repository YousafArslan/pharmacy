# Redux Migration Examples

This document shows real examples of migrating from the old Redux pattern to the new one.

## Example 1: Summary.js - DSS Integration

### Before:
```javascript
import { GetDssByIDAction } from '../../../redux/dss/dss.slice';

// Usage
dispatch(GetDssByIDAction({
  data: { id: distId, username },
  moveToNext: (message, type) => {
    if (type === 'success') {
      toast.show(message, { type: 'success' });
    } else {
      toast.show(message, { type: 'error' });
    }
  }
}));

// Accessing state
const dssReducer = useSelector(state => state.dss);
const data = dssReducer.getDssById;
const loading = dssReducer.getDssByIdLoading;
const error = dssReducer.getDssByIdError;
```

### After:
```javascript
import { fetchDssById } from '../../../redux/dss/dss.slice';
import { useDss } from '../../../redux/hooks/useRedux';

// Usage
try {
  await dispatch(fetchDssById({ id: distId, username })).unwrap();
  toast.show('Data loaded successfully', { type: 'success' });
} catch (error) {
  toast.show(error, { type: 'error' });
}

// Accessing state
const { details } = useDss();
const data = details.data;
const loading = details.loading;
const error = details.error;
```

## Example 2: Customer Management

### Before:
```javascript
import {
  GetAllCustomersAction,
  CreateCustomerAction,
  EditCustomerAction
} from '../redux/customers/customers.slice';

// Fetch customers
dispatch(GetAllCustomersAction({
  data: {},
  moveToNext: (message, type) => {
    // Handle success/error
  }
}));

// State access
const getAllCustomers = useSelector(state => state.customers.getAllCustomers);
const getAllCustomersLoading = useSelector(state => state.customers.getAllCustomersLoading);
const getAllCustomersError = useSelector(state => state.customers.getAllCustomersError);

const createCustomerLoading = useSelector(state => state.customers.createCustomerLoading);
const createCustomerSuccess = useSelector(state => state.customers.createCustomerSuccess);
```

### After:
```javascript
import {
  fetchCustomers,
  createCustomer,
  updateCustomer,
  resetCreateState
} from '../redux/customers/customers.slice';
import { useCustomers } from '../redux/hooks/useRedux';

// Fetch customers
const loadCustomers = async () => {
  try {
    await dispatch(fetchCustomers()).unwrap();
  } catch (error) {
    toast.show(error, { type: 'error' });
  }
};

// State access
const { list, create, update } = useCustomers();
// list.data, list.loading, list.error
// create.data, create.loading, create.error

// Reset after create
useEffect(() => {
  if (create.data) {
    toast.show('Customer created!', { type: 'success' });
    dispatch(resetCreateState());
  }
}, [create.data]);
```

## Example 3: Orders Screen

### Before:
```javascript
import {
  GetAllOrdersAction,
  CreateOrderAction,
  GetPendingPaymentOrdersAction
} from '../redux/orders/orders.slice';

const ordersReducer = useSelector(state => state.orders);

// Fetch all orders
dispatch(GetAllOrdersAction({
  data: filters,
  moveToNext: (message, type) => {
    if (type === 'success') {
      console.log('Success:', message);
    } else {
      Alert.alert('Error', message);
    }
  }
}));

// Access state
if (ordersReducer.getAllOrdersLoading) {
  return <ActivityIndicator />;
}

if (ordersReducer.getAllOrdersError) {
  return <Error />;
}

const orders = ordersReducer.getAllOrders;
```

### After:
```javascript
import {
  fetchAllOrders,
  createOrder,
  fetchPendingPaymentOrders,
  resetCreateState
} from '../redux/orders/orders.slice';
import { useOrders } from '../redux/hooks/useRedux';

const { all, pendingPayments, create } = useOrders();

// Fetch all orders
const loadOrders = async () => {
  try {
    await dispatch(fetchAllOrders(filters)).unwrap();
    console.log('Success!');
  } catch (error) {
    Alert.alert('Error', error);
  }
};

// Access state
if (all.loading) {
  return <ActivityIndicator />;
}

if (all.error) {
  return <Error message={all.error} />;
}

const orders = all.data;

// Create order with loading state
const handleCreateOrder = async (orderData) => {
  try {
    const result = await dispatch(createOrder(orderData)).unwrap();
    toast.show('Order created!', { type: 'success' });
    dispatch(resetCreateState());
    // Refresh list
    dispatch(fetchAllOrders(filters));
  } catch (error) {
    toast.show(error, { type: 'error' });
  }
};

// Button shows loading state
<Button
  onPress={handleCreateOrder}
  disabled={create.loading}
>
  {create.loading ? 'Creating...' : 'Create Order'}
</Button>
```

## Example 4: Login Screen

### Before:
```javascript
import { LoginAction, reset } from '../redux/auth/auth.slice';

const authState = useSelector(state => state.auth);

const handleLogin = () => {
  dispatch(LoginAction({
    data: credentials,
    moveToNext: (message, type) => {
      if (type === 'success') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', message);
      }
    }
  }));
};

// Check loading
if (authState.isLoginLoading) {
  return <Loader />;
}

// Check success
useEffect(() => {
  if (authState.isLoginSuccess) {
    navigation.navigate('Home');
    dispatch(reset());
  }
}, [authState.isLoginSuccess]);

// Show error
if (authState.isLoginError) {
  Alert.alert('Error', authState.loginMessage);
}
```

### After:
```javascript
import { loginUser, clearAuthState } from '../redux/auth/auth.slice';
import { useAuth } from '../redux/hooks/useRedux';

const { login, isLoggedIn } = useAuth();

const handleLogin = async () => {
  try {
    await dispatch(loginUser(credentials)).unwrap();
    toast.show('Login successful!', { type: 'success' });
    navigation.navigate('Home');
  } catch (error) {
    Alert.alert('Login Failed', error);
  }
};

// Loading state
if (login.loading) {
  return <Loader />;
}

// Navigate on success
useEffect(() => {
  if (isLoggedIn) {
    navigation.navigate('Home');
    dispatch(clearAuthState());
  }
}, [isLoggedIn]);

// Button with loading
<Button
  onPress={handleLogin}
  disabled={login.loading}
>
  {login.loading ? 'Logging in...' : 'Login'}
</Button>

// Error display
{login.error && (
  <Text style={styles.error}>{login.error}</Text>
)}
```

## Example 5: Cheque Upload

### Before:
```javascript
import { AddChequeAction } from '../redux/cheques/cheques.slice';

const chequesState = useSelector(state => state.cheques);

dispatch(AddChequeAction({
  data: chequeData,
  moveToNext: (message, type) => {
    if (type === 'success') {
      navigation.goBack();
      showSuccessToast(message);
    } else {
      showErrorToast(message);
    }
  }
}));

// Access state
const isUploading = chequesState.addChequeLoading;
const uploadSuccess = chequesState.addChequeSuccess;
const uploadError = chequesState.addChequeError;
```

### After:
```javascript
import { uploadCheque, resetUploadState } from '../redux/cheques/cheques.slice';
import { useCheques } from '../redux/hooks/useRedux';

const { upload } = useCheques();

const handleUpload = async () => {
  try {
    await dispatch(uploadCheque(chequeData)).unwrap();
    showSuccessToast('Cheque uploaded successfully!');
    dispatch(resetUploadState());
    navigation.goBack();
  } catch (error) {
    showErrorToast(error);
  }
};

// Access state
const isUploading = upload.loading;

// Upload button
<Button
  onPress={handleUpload}
  disabled={upload.loading}
>
  {upload.loading ? 'Uploading...' : 'Upload Cheque'}
</Button>

// Show error
{upload.error && (
  <Text style={styles.error}>{upload.error}</Text>
)}
```

## Common Patterns

### Pattern 1: Loading, Error, and Data Display

```javascript
const { list } = useCustomers();

if (list.loading && !list.data.length) {
  return <ActivityIndicator />;
}

if (list.error) {
  return (
    <ErrorView
      message={list.error}
      onRetry={() => dispatch(fetchCustomers())}
    />
  );
}

return (
  <FlatList
    data={list.data}
    renderItem={({ item }) => <CustomerCard customer={item} />}
    refreshing={list.loading}
    onRefresh={() => dispatch(fetchCustomers())}
  />
);
```

### Pattern 2: Form Submission with Loading State

```javascript
const { create } = useCustomers();
const [formData, setFormData] = useState({});

const handleSubmit = async () => {
  try {
    await dispatch(createCustomer(formData)).unwrap();
    toast.show('Customer created!', { type: 'success' });
    dispatch(resetCreateState());
    navigation.goBack();
  } catch (error) {
    toast.show(error, { type: 'error' });
  }
};

return (
  <View>
    <TextInput
      value={formData.name}
      onChangeText={(text) => setFormData({ ...formData, name: text })}
      editable={!create.loading}
    />

    <Button
      onPress={handleSubmit}
      disabled={create.loading}
      loading={create.loading}
    >
      {create.loading ? 'Saving...' : 'Save Customer'}
    </Button>

    {create.error && (
      <Text style={styles.error}>{create.error}</Text>
    )}
  </View>
);
```

### Pattern 3: Dependent Data Loading

```javascript
const { details, saleSummary } = useDss();

// Load DSS details first
useEffect(() => {
  if (distId && username) {
    dispatch(fetchDssById({ id: distId, username }));
  }
}, [distId, username]);

// Load summary when details are loaded
useEffect(() => {
  if (details.data?.dss_id) {
    dispatch(fetchSaleSummaryDetails({
      dist_id: details.data.dist_id,
      dss_id: details.data.dss_id
    }));
  }
}, [details.data]);

// Display
if (details.loading) return <Loader />;
if (details.error) return <Error message={details.error} />;

return (
  <View>
    <DssDetails data={details.data} />
    {saleSummary.loading ? (
      <Loader />
    ) : saleSummary.data ? (
      <SaleSummary data={saleSummary.data} />
    ) : null}
  </View>
);
```

## Key Differences Summary

| Old | New |
|-----|-----|
| `moveToNext` callback | `try/catch` with `.unwrap()` |
| Multiple state flags | Single object with `data`, `loading`, `error` |
| `isSuccess`, `isError`, `isLoading` | `loading`, `error`, `data` |
| Action names like `GetAllCustomersAction` | `fetchCustomers` |
| Direct selector access | Custom hooks |
| Manual error extraction | Automatic error formatting |
| No reset actions | Built-in reset actions |
| Repetitive code | Reusable utilities |

## Tips for Migration

1. **Start with one screen** - Don't try to migrate everything at once
2. **Test thoroughly** - Ensure all functionality works
3. **Use custom hooks** - They make components cleaner
4. **Remove old imports** - Clean up unused action imports
5. **Update tests** - If you have tests, update them too
6. **Check for `moveToNext`** - Replace all callback patterns
7. **Use `.unwrap()`** - It throws errors for proper try/catch handling
8. **Reset state** - Use reset actions after successful operations

## Need Help?

Check the main [README.md](./README.md) for full documentation and the [Redux Toolkit docs](https://redux-toolkit.js.org/) for more information.
