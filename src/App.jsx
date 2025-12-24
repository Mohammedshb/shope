import Banner from "./Component/Banner/Banner"
import Brand from "./Component/Brand/Brand"
import Navbar from "./Component/Navbar/Navbar"
import Explore from "./Component/Explore/Explore"
import Newsletter from "./Component/Newsletter/Newsletter"
import Collection from "./Component/Collection/Collection"
import Bestseller from "./Component/BestSeller/BestSeller"
import Follow from "./Component/Follow/Follow"
import Footer from "./Component/Footer.jsx/Footer";

function App() {
 

  return (
   <div>
    {/* Navbar */}
     <Navbar/>
     <Banner/>
     <Brand/>
     <Explore/>
     <Newsletter/>
      <Collection/>
      <Bestseller/>
      <Follow/>
       <Footer/>
   </div>
  )
}

export default App
