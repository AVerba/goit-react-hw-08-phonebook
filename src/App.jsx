import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from './components/Container/Container';
import { AppBar } from './components/AppBar';
// const HomeView = lazy(() => import('../'));
// const RegisterView = lazy(() => import('../'));
// const LoginView = lazy(() => import('../'));
// const ContactsView = lazy(() => import('../'))
// const NotFoundPageView = lazy(() => import('../'))

import { HomeView } from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from './views/LoginView';
import { ContactsView } from './views/ContactsView';
import { NotFoundPageView } from './views/NotFoundPageView';
import { authOperations } from './redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AppBar />
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFoundPageView />} />
      </Routes>
      {/*</Suspense>*/}
    </>
  );
};
