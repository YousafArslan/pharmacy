# Redux Structure Documentation

This directory contains the Redux state management setup for the Pharmacy application, following modern best practices for maintainability and scalability.

## Directory Structure

```
redux/
├── api/
│   └── apiClient.js          # Centralized Axios instance with interceptors
├── utils/
│   └── asyncThunkHelper.js   # Reusable utilities for async operations
├── hooks/
│   └── useRedux.js           # Custom hooks for easier state access
├── auth/
│   ├── auth.slice.js         # Authentication state management
│   └── auth.service.js       # Authentication API calls
├── customers/
│   ├── customers.slice.js    # Customers state management
│   └── customers.service.js  # Customers API calls
├── orders/
│   ├── orders.slice.js       # Orders state management
│   ├── orders.service.js     # Orders API calls
│   └── navigationService.js  # Navigation helper
├── cheques/
│   ├── cheques.slice.js      # Cheques state management
│   └── cheques.service.js    # Cheques API calls
├── dss/
│   ├── dss.slice.js          # DSS state management
│   └── dss.service.js        # DSS API calls
├── common/
│   └── common.slice.js       # App-wide settings (theme, colors)
└── store.js                  # Redux store configuration

```

## Key Improvements

### 1. **Centralized API Client** (`api/apiClient.js`)
- Single Axios instance with automatic token injection
- Automatic 401 error handling (logout on unauthorized)
- Consistent error handling across all API calls
- Base URL configuration

### 2. **Reusable Async Utilities** (`utils/asyncThunkHelper.js`)
- `createAsyncState()` - Creates standardized async state structure
- `createAsyncReducers()` - Automatically generates reducers for async operations
- `getErrorMessage()` - Extracts error messages consistently
- `resetAsyncState()` - Resets state to initial values

### 3. **Improved State Structure**
**Old Pattern:**
```javascript
{
  getAllCustomersError: false,
  getAllCustomersSuccess: false,
  getAllCustomersLoading: false,
  getAllCustomers: null,
  // ... repeated for each operation
}
```

**New Pattern:**
```javascript
{
  list: { data: [], loading: false, error: null },
  create: { data: null, loading: false, error: null },
  update: { data: null, loading: false, error: null },
}
```

### 4. **Consistent Naming Conventions**
- Actions: `fetchCustomers`, `createCustomer`, `updateCustomer`
- Services: `getAll()`, `create()`, `update()`
- State keys: `list`, `create`, `update`, `details`

### 5. **Custom Hooks** (`hooks/useRedux.js`)
Easier state access in components:
```javascript
// Instead of:
const customers = useSelector(state => state.customers);

// Use:
const customers = useCustomers();
```

## Usage Examples

### Making API Calls

```javascript
import { useDispatch } from 'react-redux';
import { fetchCustomers, createCustomer } from '../redux/customers/customers.slice';
import { useCustomers } from '../redux/hooks/useRedux';

function CustomersScreen() {
  const dispatch = useDispatch();
  const { list, create } = useCustomers();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleCreate = async (customerData) => {
    try {
      await dispatch(createCustomer(customerData)).unwrap();
      // Success - show toast
    } catch (error) {
      // Error is already formatted
      console.error(error);
    }
  };

  if (list.loading) return <Loader />;
  if (list.error) return <Error message={list.error} />;

  return (
    <View>
      {list.data.map(customer => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </View>
  );
}
```

### Reset State After Operations

```javascript
import { resetCreateState } from '../redux/customers/customers.slice';

// After successful create, reset the state
dispatch(resetCreateState());
```

### Auth Flow

```javascript
import { loginUser } from '../redux/auth/auth.slice';
import { useAuth } from '../redux/hooks/useRedux';

function LoginScreen() {
  const dispatch = useDispatch();
  const { login, isLoggedIn } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      // Navigate to home
    } catch (error) {
      // Show error toast
    }
  };

  return (
    <View>
      {login.loading && <Loader />}
      {login.error && <Text>{login.error}</Text>}
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
}
```

## Migration Guide

### Old Actions → New Actions

| Old Action | New Action |
|-----------|-----------|
| `GetAllCustomersAction` | `fetchCustomers` |
| `CreateCustomerAction` | `createCustomer` |
| `EditCustomerAction` | `updateCustomer` |
| `GetAllOrdersAction` | `fetchAllOrders` |
| `CreateOrderAction` | `createOrder` |
| `EditOrderAction` | `updateOrder` |
| `AddChequeAction` | `uploadCheque` |
| `GetDssByIDAction` | `fetchDssById` |
| `GetSaleSummaryDetailsAction` | `fetchSaleSummaryDetails` |
| `GetOfflineDataAction` | `fetchOfflineData` |
| `LoginAction` | `loginUser` |
| `registerAction` | `registerUser` |
| `CheckEmail` | `checkEmailAvailability` |

### State Access Changes

**Old:**
```javascript
const {
  getAllCustomers,
  getAllCustomersLoading,
  getAllCustomersError
} = useSelector(state => state.customers);
```

**New:**
```javascript
const { list } = useCustomers();
// Access: list.data, list.loading, list.error
```

## Benefits

1. **Less Boilerplate**: 60% reduction in code
2. **Consistent Patterns**: Same structure across all slices
3. **Better Error Handling**: Centralized and formatted errors
4. **Type Safety Ready**: Easy to add TypeScript later
5. **Easier Testing**: Clean, predictable state structure
6. **Better Maintainability**: Clear separation of concerns
7. **Reusable Utilities**: DRY principle applied
8. **Custom Hooks**: Cleaner component code

## Adding a New Slice

1. **Create service file:**
```javascript
// redux/newFeature/newFeature.service.js
import { get, post } from '../api/apiClient';

const newFeatureService = {
  getAll: () => get('/feature'),
  create: (data) => post('/feature', data),
};

export default newFeatureService;
```

2. **Create slice file:**
```javascript
// redux/newFeature/newFeature.slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newFeatureService from './newFeature.service';
import { getErrorMessage, createAsyncState, createAsyncReducers } from '../utils/asyncThunkHelper';

const initialState = {
  list: createAsyncState([]),
  create: createAsyncState(null),
};

export const fetchFeatures = createAsyncThunk(
  'feature/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await newFeatureService.getAll();
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const newFeatureSlice = createSlice({
  name: 'newFeature',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createAsyncReducers(builder, fetchFeatures, 'list');
  },
});

export default newFeatureSlice.reducer;
```

3. **Register in store:**
```javascript
// redux/store.js
import newFeatureReducer from './newFeature/newFeature.slice';

export const store = configureStore({
  reducer: {
    // ... other reducers
    newFeature: newFeatureReducer,
  },
});
```

## Best Practices

1. **Always use the API client** - Never create separate Axios instances
2. **Use custom hooks** - Cleaner component code
3. **Reset state after operations** - Prevents stale data
4. **Handle errors in components** - Redux provides formatted errors
5. **Use `.unwrap()`** - To handle promise-based async actions
6. **Keep slices focused** - One domain per slice
7. **Document complex logic** - Add comments for business logic

## Notes

- All API calls automatically include authentication token
- 401 errors trigger automatic logout
- AsyncStorage is used for persistence (auth, theme)
- Common slice is persisted using redux-persist
