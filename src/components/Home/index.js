import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoTitle} alt="devoloper" />
            lobodan
            <br />
            web developer
          </h1>
          Link
          <h2>Frontend Developer / JavaScript Dev</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
