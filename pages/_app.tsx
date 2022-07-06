import type { AppProps } from 'next/app';
import ProtectedRoute from '../components/ProtectedRoutes';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedRoute router={router}>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default MyApp;
