import EmailHero from './EmailHero'
import EmailCampaigns from './EmailCampaigns'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

function EmailMarketingBody() {
  return (
    <div>
    <Navbar/>
    <EmailHero/>
     <EmailCampaigns/>
     <Footer/>
    </div>
  )
}

export default EmailMarketingBody