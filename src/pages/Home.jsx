import { Banner, Logo } from "../components/HomepageComponents/HeroSection.jsx";
import Services from "../components/HomepageComponents/Services.jsx";
import CallToAction from "../components/CTA.jsx";
import CaseStudies from "../components/HomepageComponents/CaseStudy.jsx";
import WorkProcess from "../components/HomepageComponents/WorkProcess.jsx";
import Team from "../components/HomepageComponents/Teams.jsx";
import Testimonial from "../components/HomepageComponents/Testimonials.jsx";
import ContactUs from "../components/HomepageComponents/Contact.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Logo />
      <Services />
      <CallToAction />
      <CaseStudies />
      <WorkProcess />
      <Team />
      <Testimonial />
      <ContactUs />
      <Footer/>
      
     
    </main>
  );
}

export default Home;