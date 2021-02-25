import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {testingSignOut} from "../Model/Redux/Actions/testLogInLocalStorage";
import "./css/Header.css";

const Header = () => {

    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const dispatch = useDispatch();

    return (
        <div className="Header-wrapper">
            <div className="logo">Recruitment Logo Here</div>
            {isLoggedIn
                ? <button className="authButton" onClick={ ()=> dispatch(testingSignOut())  }>Log out</button>
                : ""}
        </div>
    )
}

export default Header;