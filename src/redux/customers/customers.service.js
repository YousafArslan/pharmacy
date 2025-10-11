import { get, post, put } from '../api/apiClient';

/**
 * Customers API Service
 */
const customersService = {
  /**
   * Get all customers
   */
  getAll: () => get('/customers'),

  /**
   * Create a new customer
   */
  create: (customerData) => post('/customers', customerData),

  /**
   * Update an existing customer
   */
  update: (id, customerData) => put(`/customers/${id}`, customerData),
};

export default customersService;
