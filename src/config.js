/**
 * Application Configuration
 * 
 * Configuration values can be overridden using environment variables.
 * For Vite, use VITE_ prefix for environment variables.
 * 
 * Create a .env file in the frontend root to override defaults:
 * VITE_API_DOMAIN=https://backend-generation.onrender.com
 */

const config = {
  /**
   * API Domain - Base URL for API requests
   * @type {string}
   * @default 'https://backend-generation.onrender.com'
   */
  apiDomain: import.meta.env.VITE_API_DOMAIN || 'https://backend-generation-w4zi.onrender.com',
};

// Freeze config to prevent accidental mutations
export default Object.freeze(config);
