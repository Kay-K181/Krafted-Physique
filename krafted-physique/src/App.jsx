import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home"
import TopRated from "./Components/TopRated"
import FAQs from "./Components/FAQ.jsx"
import ContactUs from "./Components/ContactUs"
import ErrorPage from "./Components/ErrorPage.jsx"
import Chest from "./Components/MusclePages/Chest.jsx"
import Back from "./Components/MusclePages/Back.jsx"
import Shoulders from "./Components/MusclePages/Shoulders.jsx"
import Legs from "./Components/MusclePages/Legs.jsx"
import Arms from "./Components/MusclePages/Arms.jsx"


export default function App(){

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Chest" element={<Chest />}/>
        <Route path="/Back" element={<Back />}/>
        <Route path="/Shoulders" element={<Shoulders />}/>
        <Route path="/Legs" element={<Legs />}/>
        <Route path="/Arms" element={<Arms />}/>
        <Route path="/TopRated" element={<TopRated />}/>
        <Route path="/FAQs" element={<FAQs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer/>
    </>    
  )
}
