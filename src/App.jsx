import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from './components/Container/Container';
import { AppBar } from './components/AppBar';
import { HomeView } from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from './views/LoginView';
import { ContactsView } from './views/ContactsView';
import { NotFoundPageView } from './views/NotFoundPageView';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="*" element={<NotFoundPageView />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
