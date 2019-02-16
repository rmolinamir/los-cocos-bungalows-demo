import React, { Suspense } from 'react';
// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';
// JSX
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './hoc/Layout/Layout';
import RouterScrollToTop from './hoc/RouterScrollToTop/RouterScrollToTop';
import Booking from './containers/Booking/Booking';
import LoadingPage from './components/UI/LoadingPage/LoadingPage';


const app = () => {
	return (
    <Layout>
      <RouterScrollToTop /> {/* After every route change, scroll to top */}
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnVisibilityChange
        draggable
        pauseOnHover />
      <Switch>
          <Route path="/" exact render={ () => <Suspense fallback={<LoadingPage />}><Booking /></Suspense>} />
          <Redirect to="/" />
        </Switch>
    </Layout>
  );
}

export default app;
