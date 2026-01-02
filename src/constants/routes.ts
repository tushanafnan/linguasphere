/**
 * Application routes - single source of truth for all navigation paths
 * Update here to change routes across the entire application
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  FEATURES: "/features",
  SUBSCRIPTION: "/subscription",
  CONTACT: "/contact",
  LOGIN: "/login",
} as const;

export type RouteKey = keyof typeof ROUTES;
