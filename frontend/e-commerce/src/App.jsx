
import Landing from './pages/landing'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'
import Helpcentre from './pages/helpcentre'
import About from './pages/about'
import Register from './pages/register';
import Signin from './pages/signin';
import Cart from './pages/cart';
import UserProfile from './pages/userprofile';
import CategoryAudio from './pages/category-audio';
import CategorySales from './pages/category-sales';
import CategoryMobile from './pages/category-mobile';
import CategoryTablets from './pages/category-tablets';
import CategoryShopAll from './pages/category-shop-all';
import CategorySpeakers from './pages/category-speakers';
import CategoryComputers from './pages/category-computers';
import CategoryHeadphones from './pages/category-headphones';
import CategoryBestSellers from './pages/category-best-sellers';
import CategoryTVHomeCinema from './pages/category-tv-home-cinema';
import CategoryDronesCameras from './pages/category-drones-cameras';
import CategoryWearableTech from './pages/category-wearable-tech';
import CategoryHomePageSale from './pages/category-home-page-sale';
import CategoryHomePageBestSellers from './pages/category-home-page-best-sellers';
import Search from './pages/search';
import OrderSummary from './pages/order-summary';
import Wishlist from './pages/wishlist';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="helpcentre" element={<Helpcentre />} />
        <Route path="about" element={<About/>} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<Signin />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="search" element={<Search />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="category/audio" element={<CategoryAudio />} />
        <Route path="category/sales" element={<CategorySales />} />
        <Route path="category/mobile" element={<CategoryMobile />} />
        <Route path="category/tablets" element={<CategoryTablets />} />
        <Route path="category/shop-all" element={<CategoryShopAll />} />
        <Route path="category/speakers" element={<CategorySpeakers />} />
        <Route path="category/computers" element={<CategoryComputers />} />
        <Route path="category/headphones" element={<CategoryHeadphones />} />
        <Route path="category/best-sellers" element={<CategoryBestSellers />} />
        <Route path="category/tv-home-cinema" element={<CategoryTVHomeCinema />} />
        <Route path="category/drones-cameras" element={<CategoryDronesCameras />} />
        <Route path="category/wearable-tech" element={<CategoryWearableTech />} />
        <Route path="category/home-page-sale" element={<CategoryHomePageSale />} />
        <Route path="category/home-page-best-sellers" element={<CategoryHomePageBestSellers />} />
      </Routes>
      
    </>
  )
}

export default App
