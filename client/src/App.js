import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CreateListing from './pages/CreateListing.jsx';
import ListingDetails from './pages/ListingDetails.jsx';
import TripList from './pages/TripList.jsx';
import WishList from './pages/WishList.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/create-listing' element={<CreateListing />}/>
          <Route path='/properties/:listingId' element={<ListingDetails />}/>
          <Route path="/:userId/trips" element={<TripList />} />
          <Route path="/:userId/wishList" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
