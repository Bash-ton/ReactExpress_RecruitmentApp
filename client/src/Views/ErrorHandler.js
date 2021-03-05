import React from 'react';
import { useLocation} from 'react-router-dom';
import { get } from 'lodash';
import { Link } from "react-router-dom";

const ErrorHandler = ({ children }) => {
  const location = useLocation();

  switch (get(location.state, 'errorStatusCode')) {
    case 404:
      return (
        <div>
          <h1>404 Error</h1>
          <p>The requested URL was not found on this server.</p>
          <Link to="/"><button type="button">back to main app</button></Link>
        </div>
      );
    case 401:
      return (
        <div>
          <h1>401 Error</h1>
          <p>Unauthorized access.</p>
          <Link to="/"><button type="button">back to main app</button></Link>
        </div>);
    case 500:
      return (
        <div>
          <h1>500 Error</h1>
          <p>Server encountered a internal error and cannot handle the request.</p>
          <Link to="/"><button type="button">back to main app</button></Link>
        </div>);
    case 501:
      return (
        <div>
          <h1>501 Error</h1>
          <p>Server encountered a error and currently cannot handle the request.</p> 
          <Link to="/"><button type="button">back to main app</button></Link>
        </div>);
    case 503:
      return (
        <div>
          <h1>503 Error</h1>
          <p>Server encountered a error and currently cannot handle the request.</p> 
          <Link to="/"><button type="button">back to main app</button></Link>
        </div>);

    default:
      return children
  }
};

export default ErrorHandler;
