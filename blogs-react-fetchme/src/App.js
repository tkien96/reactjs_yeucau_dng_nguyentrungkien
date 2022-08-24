import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchAllCategoriesAsync } from './store/category/actions';
import { actFetchMeAsync } from './store/auth/actions';
import { actMenuAsync } from './store/menu/actions';
import { getToken } from './helpers'

function App() {
  const dispatch = useDispatch();
  const token = getToken()

  useEffect(() => {
    dispatch(actMenuAsync());
    dispatch(actFetchAllCategoriesAsync());
    dispatch(actFetchMeAsync(token));
  }, [dispatch, token]);

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
