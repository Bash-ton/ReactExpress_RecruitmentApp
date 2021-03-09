import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../Model/Redux/Actions/AuthActions";
/**
 * View presented when API error occurs.
 * @returns {JSX} graphical view 
 */
export const Page404 = () => (
    <div>
        <h1>404 Error</h1>
        <p>The requested URL was not found on this server.</p>
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
/**
 * View presented when API error occurs.
 * 401 error occurs when a client authentication has expired or API error were current authentication session is lost. 
 * Client is logged-out of main app and navigated to log-in view. 
 * @returns {JSX} graphical view 
 */
export const Page401 = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>401 Error</h1>
            <p>Unauthorized access.</p>
            <Link to="/"><button type="button" onClick={()=> dispatch(signOut())}>back to main app</button></Link>
        </div>
    );
};
/**
 * View presented when API error occurs.
 * @returns {JSX} graphical view 
 */
export const Page500 = () => (
    <div>
        <h1>500 Error</h1>
        <p>Server encountered a internal error and cannot handle the request.</p>
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
/**
 * View presented when API error occurs.
 * @returns {JSX} graphical view 
 */
export const Page501 = () => (
    <div>
        <h1>501 Error</h1>
        <p>Server encountered a error and currently cannot handle the request.</p> 
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);
/**
 * View presented when API error occurs.
 * @returns {JSX} graphical view 
 */
export const Page503 = () => (
    <div>
        <h1>503 Error</h1>
        <p>Server encountered a error and currently cannot handle the request.</p> 
        <Link to="/"><button type="button">back to main app</button></Link>
    </div>
);

