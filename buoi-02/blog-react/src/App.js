import Header from './components/Header';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
import Spacing from './components/shared/Spacing';
import Login from './pages/Login';

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      {/* <HomePage /> */}
      <Login />
      <Spacing />
      <Footer />
    </div>
  );
}

export default App;
