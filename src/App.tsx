import './App.css'
import { Routes, Route } from "react-router-dom"
import Body from "./Components/Body";
import Contact from './Components/Contact';
import EmailMarketingBody from './Components/EmailMarketing/EmailMarketingBody';
import EmailMarketingForm from './Components/EmailMarketing/EmailMarketingForm';
import EmailBodyCanvas from './Components/EmailMarketing/EmailBodyCanvas';
import AuthPage from './Components/AuthPages/AuthPage';
import ProtectedRoute from './Components/ProctedRoutes/ProctedRoutes';
import Profile from './Components/user/Profile';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './Components/stripe/stripeConfig';
import Checkout from './Components/stripe/Checkout';
import WebDevelopement from './Components/WebDevelopement/WebDevelopement';
import Pricing from './Components/Pricing/Pricing';
import WhyUs from './Components/AboutUs/AboutUs';
import Experience from './Components/Experience/Experience';
import Team from './Components/Team/Team';
// import Demo from './Components/EmailMarketing/Demo'

function App() {

  return (
  
      <div>  
         <Elements stripe={stripePromise}>
         <Routes>
        <Route path="/" element={ <Body/> } />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/email-marketing" element={<EmailMarketingBody/>}/>
        <Route path="/email-marketing-form" element={ <ProtectedRoute><EmailMarketingForm/></ProtectedRoute>}/>
        <Route path='/email-marketing-canvas' element = {<EmailBodyCanvas  />}/>
        <Route path='/profile' element = {<Profile/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/web-developement' element={<WebDevelopement/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/about-us' element={<WhyUs/>}/>
        <Route path="/experience" element={<Experience />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path='demo' element = {<Demo/>}/> */}
        </Routes> 
         </Elements> 
       </div>
  )
}

export default App
