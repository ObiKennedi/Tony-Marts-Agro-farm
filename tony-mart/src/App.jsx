import './App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../component/nav-bar'
import HeroSection from '../component/hero-section'
import About from '../component/about-us'
import Services from '../component/services';
import ContactForm from '../component/contact-form';
import Footer from '../component/footer';
import FoundersSection from '../component/founders';

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <HeroSection/>
        <About/>
        <FoundersSection/>
        <Services/>
        <ContactForm/>
      </main>
      <Footer/>
    </>
  )
}

export default App
