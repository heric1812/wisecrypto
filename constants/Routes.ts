export const Routes = {
  // Tabs
  home: {
    name: 'index',
    pathname: '/',
    title: 'Home',
  },
  market: {
    name: 'market',
    pathname: '/market',
    title: 'Market',
  },
  profile: {
    name: 'profile',
    pathname: '/profile',
    title: 'Profile',
  },

  // Stack
  login: {
    name: 'login',
    pathname: '/login',
    title: 'Login',
  },
  register: {
    name: 'register',
    pathname: '/register',
    title: 'Register',
  },

  // Inner Routes
  dataTransactions: {
    name: 'data-transactions',
    pathname: '/data-transactions',
    title: 'Data Transactions',
  },
  notifications: {
    name: 'notifications',
    pathname: '/notifications',
    title: 'Notifications',
  },
  notificationSettings: {
    name: 'notification-settings',
    pathname: '/notification-settings',
    title: 'Notification Settings',
  },
  paymentSettings: {
    name: 'payment-settings',
    pathname: '/payment-settings',
    title: 'Payment Settings',
  },
  privacy: {
    name: 'privacy',
    pathname: '/privacy',
    title: 'Privacy',
  },
}
