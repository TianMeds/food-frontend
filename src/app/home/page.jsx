import Navbar from "../../components/Navbar"
import ScrollingImage from "../../components/ScrollingImage"
import MainFeature from "../../components/MainFeature"
import Footer from "../../components/Footer"
import Sisig from '../assets/G&R_Sisig_Slider.svg'
import Catering from '../assets/G&R_Catering.svg'
import HaloHalo from '../assets/G&R_HaloHalo.svg'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <br/> <br/>     <br/>
    <ScrollingImage 
        images={[
            { src: Sisig, alt: 'Image 1' },
            { src: Catering, alt: 'Image 2' },
            { src: HaloHalo, alt: 'Image 3' },
        ]}
    />
    <br/> 
    <MainFeature />

    <Footer/>
    </>
  )
}

export default HomePage