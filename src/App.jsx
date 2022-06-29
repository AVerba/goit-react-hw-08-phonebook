import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

import { AppBar } from './components/AppBar';
import Loader from './components/UI/Loader/Loader';
import { TodosView } from './views/TodosView';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const NotFoundPageView = lazy(() =>
  import('./views/NotFoundPageView/NotFoundPageView')
);

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                component={
                  <Suspense fallback={<Loader />}>
                    <RegisterView />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                component={
                  <Suspense fallback={<Loader />}>
                    <LoginView />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={
                  <Suspense fallback={<Loader />}>
                    <ContactsView />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path="/todos"
            element={
              <PrivateRoute
                component={
                  <Suspense fallback={<Loader />}>
                    <TodosView />
                  </Suspense>
                }
              />
            }
          />
          <Route path="*" element={<NotFoundPageView />} />
        </Routes>
      </Suspense>
    </>
  );
};
