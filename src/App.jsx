import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import QRWhatsApp from './pages/QRWhatsApp';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
   <BrowserRouter basename="/k-prakash/">
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          {/* Sidebar - Fixed height with internal scroll */}
          <div className="hidden md:block">
            {/* <Sidebar /> */}
          </div>

          {/* Main Content - Scrolls independently */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/qr-whatsapp" element={<QRWhatsApp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;