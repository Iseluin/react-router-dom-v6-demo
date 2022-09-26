import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar";
import DeliveryInfoPage from "./components/DeliveryInfoPage";
import NoMatch from "./components/NoMatch";
import Movies from "./components/Movies";
import NewMovies from "./components/NewMovies";
import BestMovies from "./components/BestMovies";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";


function App() {
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="delivery-info" element={<DeliveryInfoPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="movies" element={<Movies/>}>
          {/* <Route index element={<BestMovies/>}/> */}
          <Route path="new-movies" element={<NewMovies/>}/>
          <Route path="best-movies" element={<BestMovies/>}/>  
        </Route> 
        <Route path="users" element={<Users/>} />
        <Route path="users/:id" element={<UserDetails/>}/>
        {/* </Route> */}
      </Routes>
    
    </>

  );
}

export default App;
