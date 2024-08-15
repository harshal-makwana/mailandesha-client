import Hero from './Hero'
import Info from './Info'
import ServicesSection from './ServiceSection'
import Card from './Cards'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import info1 from './assets/notebook2.svg'
import info2 from "./assets/brain2.svg"

export default function Body() {

const text1 = "You’ll get insider knowledge around what new marketing strategies and tactics perform best across 250+ other companies."
const text2 = "You’ll get help from 130+ brains for less than the price of one ( we did the research on actual brain cost ) "

  return (
    <div>
        <Navbar/>
        <Hero/>
        <Info image1={info1} image2={info2} text1={text1} text2={text2}/>
        <ServicesSection/>
        {/* <Info/> */}
        <Card/>
        <Contact/>      
        <Footer/>
    </div>
  )
}
