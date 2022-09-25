import {Link} from "react-router-dom";
import {FaHome} from 'react-icons/fa';

const NotFound = () => {
  return <div className="hero">
    <div className="text-center hero-content">
      <div className="max-w-lg">
        <h1 className="text-8xl font-bold mb-8">
          404
        </h1>
        <p className="text-4xl mb-8">This is not the web page you are looking for!</p>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-2"/>
          Back To Home
        </Link>
      </div>
    </div>
  </div>;
};

export default NotFound;