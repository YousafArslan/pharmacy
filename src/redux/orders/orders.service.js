import { get, post, put } from '../api/apiClient';

/**
 * Orders API Service
 */
const ordersService = {
  /**
   * Get all orders with optional filters
   */
  getAll: (filters) => post('/orders/getAll', filters),

  /**
   * Get orders with pending payments
   */
  getPendingPayments: (filters) => post('/orders/pending-payments', filters),

  /**
   * Get pending orders
   */
  getPending: () => get('/orders/pendingOrders'),

  /**
   * Create a new order
   */
  create: (orderData) => post('/orders', orderData),

  /**
   * Update an existing order
   */
  update: (id, orderData) => put(`/orders/${id}`, orderData),
};

export default ordersService;
