import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';

import { Fragment } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import DataDeletionInstruction from './pages/DataDeletionInstruction';

// Components
import Footer from './components/Footer';
import Header from './components/Header';

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
  {
    path: '/contact-us',
    element: (
      <ContactUs />
    ),
  },
  {
    path: '/data-deletion-instruction',
    element: (
      <DataDeletionInstruction />
    ),
  },
]);

function App() {
  return (
    <Fragment>
      <div className="main">
        <Header />

        <RouterProvider router={router} />

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
