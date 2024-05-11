import HeroSection from '../components/heroSection';
import About from '../components/about';
import Qualities from '../components/Qualities';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import WhoAreWe from '../components/WhoAreWe';
import Reservation from '../components/Reservation';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      < Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Home;
