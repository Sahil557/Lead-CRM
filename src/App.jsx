import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Challenges from './components/Challenges';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SalesSolutions from './components/SalesSolutions';
import CRMSupport from './components/CRMSupport';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Challenges />
      <HowItWorks />
      <Testimonials />
      <SalesSolutions />
      <CRMSupport />
      <CTABanner />
      <Footer />
    </>
  );
}
