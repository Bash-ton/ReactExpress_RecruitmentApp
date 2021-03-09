import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../Model/Redux/Actions/AuthActions";
import "./css/Header.css";

/**
 * Header component. Renders logo and logout button
 * @returns {JSX.Element} returns header, logo and logout button
 */
const Header = () => {
    //constants from redux
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const loginRole = useSelector(state => state.UserReducer.userInfo[0].role);
    const dispatch = useDispatch();

    console.log(loginRole)
    return (
        <div className="Header-wrapper">
            <div className="logo">Recruitment Logo Here</div>
            {isLoggedIn
                ? <button className="authButton" onClick={ ()=> dispatch(signOut())  }>Log out</button>
                : ""}
            {loginRole === "admin"
                ? <button className="migrateButton" onClick={ ()=> { window.location = "/admin/Migrate" }  }>Migrate from old DB</button>
                : ""}
        </div>
    )
}

export default Header;