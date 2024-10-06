'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/context/AuthProvider';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}