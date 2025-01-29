import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

/**
 * Props interface for the ProtectedRoute component
 * @property {React.ReactNode} children - The child components/elements to render when authenticated
 */
interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * ProtectedRoute Component
 * 
 * A wrapper component that protects routes by checking user authentication status.
 * Redirects unauthenticated users to the login page while allowing authenticated
 * users to access the protected content.
 *
 * @component
 * @param {ProtectedRouteProps} props - Component props
 * @param {React.ReactNode} props.children - The protected content to render
 * 
 * Usage:
 * ```tsx
 * <ProtectedRoute>
 *   <PrivateContent />
 * </ProtectedRoute>
 * ```
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Get authentication status from Redux store
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  // Redirect to login page if user is not authenticated
  if (!isAuthenticated) {
    // 'replace' prop replaces the current entry in the history stack
    // to prevent navigating back to the protected route after login
    return <Navigate to="/login" replace />;
  }

  // Render protected content if user is authenticated
  return <>{children}</>;
};

export default ProtectedRoute;