import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="container relative max-w-screen-xl mx-auto  px-4 min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
