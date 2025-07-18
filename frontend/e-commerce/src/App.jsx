import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing'
import Contact from './pages/contact'
import Helpcentre from './pages/helpcentre'
import About from './pages/about'
import CategoryShopAll from "./pages/category-shop-all";
import CategoryComputers from "./pages/category-computers";
import CategoryTablets from "./pages/category-tablets";
import CategoryDronesCameras from "./pages/category-drones-cameras";
import CategoryAudio from "./pages/category-audio";
import CategoryMobile from "./pages/category-mobile";
import CategoryTVHomeCinema from "./pages/category-tv-home-cinema";
import CategoryWearableTech from "./pages/category-wearable-tech";
import CategorySales from "./pages/category-sales";
import CategoryBestSellers from './pages/category-best-sellers';
import CategoryHeadphones from './pages/category-headphones';
import CategoryHomePageBestSellers from './pages/category-home-page-best-sellers';
import CategoryHomePageSale from './pages/category-home-page-sale';
import CategorySpeakers from './pages/category-speakers';
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import Signin from './pages/signin';
import Register from './pages/register';
import Wishlist from './pages/wishlist';
import Cart from './pages/cart';
import Search from './pages/search';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="helpcentre" element={<Helpcentre />} />
        <Route path="about" element={<About/>} />
        <Route path="/category/shop-all" element={<CategoryShopAll />} />
        <Route path="/category/computers" element={<CategoryComputers />} />
        <Route path="/category/tablets" element={<CategoryTablets />} />
        <Route path="/category/drones-cameras" element={<CategoryDronesCameras />} />
        <Route path="/category/audio" element={<CategoryAudio />} />
        <Route path="/category/mobile" element={<CategoryMobile />} />
        <Route path="/category/tv-home-cinema" element={<CategoryTVHomeCinema />} />
        <Route path="/category/wearable-tech" element={<CategoryWearableTech />} />
        <Route path="/category/sales" element={<CategorySales />} />
        <Route path="/category/best-sellers" element={<CategoryBestSellers />} />
        <Route path="/category/headphones" element={<CategoryHeadphones />} />
        <Route path="/category/home-page-best-sellers" element={<CategoryHomePageBestSellers />} />
        <Route path="/category/home-page-sale" element={<CategoryHomePageSale />} />
        <Route path="/category/speakers" element={<CategorySpeakers />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    
  
  )
}

export default App
