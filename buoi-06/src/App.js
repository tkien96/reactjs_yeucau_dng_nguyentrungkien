import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import Search from './pages/Search'
import PostDetail from './pages/PostDetail'

// Only for Demo
// import DemoButtonComp from './demo/DemoButtonComp';
// import DemoMainTitle from './demo/DemoMainTitle';
// import DemoInput from './demo/DemoInput';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="wrapper-content">
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/post/:slug">
            <PostDetail />
          </Route>
        </Switch>

        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
