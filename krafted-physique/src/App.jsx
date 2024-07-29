import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import TopRated from "./Components/TopRated"
import FAQs from "./Components/FAQ.jsx"
import ContactUs from "./Components/ContactUs"


export default function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/TopRated" element={<TopRated />}/>
        <Route path="/FAQs" element={<FAQs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
      </Routes>
    </>    
  )
}
