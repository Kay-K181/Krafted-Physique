import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer.jsx"
import Home from "./Components/Home"
import ErrorPage from "./Components/ErrorPage.jsx"

const TopRated = lazy(() => import('./Components/TopRated'))
const FAQs = lazy(() => import('./Components/FAQ.jsx'))
const ContactUs = lazy(() => import("./Components/ContactUs"))
const Chest = lazy(() => import("./Components/MusclePages/Chest.jsx"))
const Back = lazy(() => import("./Components/MusclePages/Back.jsx"))
const Shoulders = lazy(() => import("./Components/MusclePages/Shoulders.jsx"))
const Legs = lazy(() => import("./Components/MusclePages/Legs.jsx"))
const Arms = lazy(() => import("./Components/MusclePages/Arms.jsx"))

export default function App(){

  return (
    <>
      <Navbar/>
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<ErrorPage />}/>        
        <Route path="/Chest" element={<Chest />}/>
        <Route path="/Back" element={<Back />}/>
        <Route path="/Shoulders" element={<Shoulders />}/>
        <Route path="/Legs" element={<Legs />}/>
        <Route path="/Arms" element={<Arms />}/>
        <Route path="/TopRated" element={<TopRated />}/>
        <Route path="/FAQs" element={<FAQs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>        
      </Routes>
      </Suspense>
      <Footer/>
    </>    
  )
}
