import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <PrivacyPolicy />
    ),
  },
  {
    path: '/terms-of-service',
    element: (
      <TermsOfService />
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
