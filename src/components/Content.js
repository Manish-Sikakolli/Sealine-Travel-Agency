import BannerImage from '../assets/surfing.jpg';
import { Link } from 'react-router-dom'
function Content() {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> THE TRIP OF YOUR DREAM </h1>
          <p>We offer a variety of destinations to travel to, ranging from exotic to some extreme ones. They include very popular countries and cities like Paris, Rio de Janeiro, Cairo and a lot of others.</p>
          <Link to="/menu">
            <button> LEARN MORE </button>
          </Link>
        </div>
      </div>
    );
  }
  export default Content