import React from 'react';
import { useLocation} from 'react-router-dom';
import { get } from 'lodash';
import { Page401, Page404, Page500, Page501, Page503 } from './Views/ErrorPages';

const ErrorHandler = ({ children }) => {
  const location = useLocation();

  switch (get(location.state, 'errorStatusCode')) {
    case 404:
      return <Page404/>
    case 401:
      return <Page401/>
    case 500:
      return <Page500/>
    case 501:
      return <Page501/>
    case 503:
      return <Page503/>

    default:
      return children
  }
};

export default ErrorHandler;
