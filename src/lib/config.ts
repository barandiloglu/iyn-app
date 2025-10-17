/**
 * Environment Configuration Helper
 * Manages environment-specific settings for local development and production
 */

interface AppConfig {
  databaseUrl: string;
  jwtSecret: string;
  nextAuthSecret: string;
  nextAuthUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
  baseUrl: string;
}

function getEnvironmentConfig(): AppConfig {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  // Get base URL based on environment
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      // Client-side: use current origin
      return window.location.origin;
    }
    
    // Server-side: use environment variable or default
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    
    if (process.env.NEXTAUTH_URL) {
      return process.env.NEXTAUTH_URL;
    }
    
    // Default fallbacks
    if (isDevelopment) {
      return 'http://localhost:3000';
    }
    
    return 'https://iyn-app.vercel.app';
  };

  const baseUrl = getBaseUrl();

  return {
    databaseUrl: process.env.DATABASE_URL || '',
    jwtSecret: process.env.JWT_SECRET || '',
    nextAuthSecret: process.env.NEXTAUTH_SECRET || '',
    nextAuthUrl: baseUrl,
    isDevelopment,
    isProduction,
    baseUrl,
  };
}

export const config = getEnvironmentConfig();

/**
 * Get API URL for the current environment
 */
export function getApiUrl(endpoint: string = ''): string {
  if (typeof window !== 'undefined') {
    // Client-side: use current origin
    return `${window.location.origin}/api${endpoint}`;
  }
  
  // Server-side: use configured base URL
  return `${config.baseUrl}/api${endpoint}`;
}

/**
 * Check if we're running in development mode
 */
export function isDevelopment(): boolean {
  return config.isDevelopment;
}

/**
 * Check if we're running in production mode
 */
export function isProduction(): boolean {
  return config.isProduction;
}

/**
 * Get environment-specific database URL
 */
export function getDatabaseUrl(): string {
  if (!config.databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return config.databaseUrl;
}

/**
 * Get JWT secret with fallback for development
 */
export function getJwtSecret(): string {
  if (config.jwtSecret) {
    return config.jwtSecret;
  }
  
  if (isDevelopment()) {
    console.warn('JWT_SECRET not set, using development fallback. This is not secure for production!');
    return 'development-jwt-secret-not-secure';
  }
  
  throw new Error('JWT_SECRET environment variable is not set');
}

/**
 * Validate environment configuration
 */
export function validateConfig(): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!config.databaseUrl) {
    errors.push('DATABASE_URL is required');
  }
  
  if (!config.jwtSecret && isProduction()) {
    errors.push('JWT_SECRET is required in production');
  }
  
  if (!config.nextAuthSecret && isProduction()) {
    errors.push('NEXTAUTH_SECRET is required in production');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Validate configuration on import (server-side only)
if (typeof window === 'undefined') {
  const validation = validateConfig();
  if (!validation.isValid) {
    console.error('Environment configuration errors:', validation.errors);
    if (isProduction()) {
      throw new Error(`Invalid environment configuration: ${validation.errors.join(', ')}`);
    }
  }
}
