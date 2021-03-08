import React from 'react';
import { Link } from "react-router-dom";

export const Page404 = () => (
    <div>
        <h1>404 Error</h1>
        <p>The requested URL was not found on this server.</p>
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
export const Page401 = () => (
    <div>
        <h1>401 Error</h1>
        <p>Unauthorized access.</p>
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
export const Page500 = () => (
    <div>
        <h1>500 Error</h1>
        <p>Server encountered a internal error and cannot handle the request.</p>
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
export const Page501 = () => (
    <div>
        <h1>501 Error</h1>
        <p>Server encountered a error and currently cannot handle the request.</p> 
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
export const Page503 = () => (
    <div>
        <h1>503 Error</h1>
        <p>Server encountered a error and currently cannot handle the request.</p> 
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);

