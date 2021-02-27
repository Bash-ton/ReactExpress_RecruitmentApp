import React, {useEffect, useState} from 'react'
import {Field, Form, Formik, useField} from "formik";
import {TextField, Button, Select, MenuItem} from "@material-ui/core";
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import UserReducer from "../Model/Redux/Reducers/UserReducer";
import {signUP, testing} from "../Model/Redux/Actions/testLogInLocalStorage";
import ApiCall from "../Model/apiCall";
import axios from "axios";
const Authentication = ({apiCall}) => {

    //hooks
    const [authStatus, setAuthStatus] = useState("Sign up");
    const [changeAuthStatus, setChangeAuthStatus] = useState("Login");
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);
    const dispatch = useDispatch();


   useEffect(()=>{
        if(role === "client"){
            window.location = "/user/application";

        }else if(role === "admin"){
            window.location = "/admin/applications";

        }
    }, [isLoggedIn])


// let param = auth/login

    //custom Formik components
    const AuthTextField = ({
                               placeholder,
                               ...props
                           }) => {
        const [field, meta] = useField(props);
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
            <TextField
                placeholder={placeholder}
                {...field}
                helperText={errorText}
                error={!!errorText}//casting string to boolean
                type={props.type}
            />
        )
    }
    //yup schema
    const AuthSchema = Yup.object().shape({
        email: Yup.string()
            .min(4, 'Too Short!')
            .required('Required')
            .email('Invalid email'),
        password: Yup.string()
            .min(4, 'Too Short!')
            .required('Required'),
        firstName: (authStatus === "Login")
            ? Yup.string()
            : Yup.string()
                .required('Required'),
        lastName: (authStatus === "Login")
            ? Yup.string()
            : Yup.string()
                .required('Required'),
        dateOfBirth: Yup.array()
            .of(
                Yup.object().shape({
                    year: (authStatus === "Login")
                        ? Yup.number()
                        : Yup.number().required('Required'),
                    month: (authStatus === "Login")
                        ? Yup.number()
                        : (Yup.number()
                            .min(1, "must be between 1 and 12")
                            .max(12, "must be between 1 and 31")
                            .required('Required')),
                    day: (authStatus === "Login")
                        ? Yup.number()
                        : Yup.number()
                            .min(1, "must be between 1 and 31")
                            .max(31, "must be between 1 and 31")
                            .required('Required'),
                })
            )
    })

    //event handlers
    const handleAuthStatusChange = () => {
        if (authStatus === "Login") {
            setAuthStatus("Sign up")
            setChangeAuthStatus("Login")
        } else {
            setAuthStatus("Login")
            setChangeAuthStatus("Sign up")
        }
    }

    const changeView = (url) => {
        window.location = url
    }

    return (
        <div>
            {!isLoggedIn
                ?<div>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        firstName: "",
                        lastName: "",
                        dateOfBirth: [{year: "", month: "", day: ""}]
                    }}
                    onSubmit={(data, {setSubmitting, resetForm}) => {
                        setSubmitting(true);
                        resetForm();
                        //TODO uncomment this and use real actions with dispatch (call api from within actions)
                       /*  switch(authStatus){
                            case "Login":
                            dispatch()//to action that handles login
                            break;
                            case "Sign up":
                            dispatch()//to action that handles signup
                            break;
                            default:
                            break;
                        } */
                         
                        let obj = {email: "test@kth.se", password:"test"};
                        let param = "auth/login";
                        /*
                        apiCall.apiCallPost(obj, param)
                            .then(response => {console.log(response);apiCall.apiCallGet("posts").then(response => (console.log(response)))
                                .catch(error => console.log(error)) })
                            .catch(error => console.log( error))

                         */
                        /*
                            withCredentials: true,
                            credentials: 'same-origin',
                            old url: baseURL: "https://restapikth.herokuapp.com/",
                            local: baseURL: "http://localhost:3001/",
*headers
                         */
                        if(authStatus ===  "Sign up"){
                            const instance = apiCall.apiAxios();
                            console.log(data);


                            instance.post('auth/register', {data})
                                .then((response) => {
                                    console.log(response.headers["set-cookie"]);
                                    console.log(response)
                                    console.log(document.cookie)
                                    //dispatch(signUP(response))
                                    const instance = apiCall.apiAxios();
                                    instance.post('auth/login', {email: data.email, password: data.password})
                                        .then((response1) => {
                                            // console.log(response.headers["set-cookie"]);
                                            console.log(response1)
                                            // console.log(document.cookie)
                                            dispatch(signUP(data))
                                           // instance.get("posts").then(r =>console.log(r) )
                                        }, (error) => {
                                            console.log(error);
                                        });
                                   // instance.get("posts").then(r =>console.log(r) )
                                }, (error) => {
                                    console.log(error);
                                });
                        }
                      else{
                            const instance = apiCall.apiAxios();
                            console.log(data);

                            instance.post('auth/login', {email: data.email, password: data.password})
                                .then((response1) => {
                                    // console.log(response.headers["set-cookie"]);
                                    console.log(response1)
                                    // console.log(document.cookie)
                                    dispatch(testing())
                                    // instance.get("posts").then(r =>console.log(r) )
                                }, (error) => {
                                    console.log(error);
                                });


                            //instance.get("posts").then(r => console.log(r))

                        } 
                    
                        //;//testing remove this when the TODO above is done
                        console.log("submit:", {data: data});
                        setSubmitting(false);
                    }}


                    
                    validationSchema={AuthSchema}

                >
                    {({values, isSubmitting, resetForm, errors}) => (
                        <Form>
                            <div>
                                <AuthTextField
                                    placeholder="Email"
                                    name="email"
                                    type="input"
                                />
                            </div>
                            <div>
                                <AuthTextField
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                />
                            </div>
                            {(authStatus === "Sign up") ? <div>
                                <AuthTextField
                                    placeholder="Username"
                                    name="username"
                                    type="input"
                                />
                            </div> : ""}
                            {(authStatus === "Sign up") ? <div>
                                <AuthTextField
                                    placeholder="First Name"
                                    name="firstName"
                                    type="input"
                                />
                            </div> : ""}
                            {(authStatus === "Sign up") ? <div>
                                <AuthTextField
                                    placeholder="Last Name"
                                    name="lastName"
                                    type="input"
                                />
                            </div> : ""}
                            {(authStatus === "Sign up") ? <div>
                                <AuthTextField
                                    placeholder="Year"
                                    name="dateOfBirth[0].year"
                                    type="number"
                                />
                                <AuthTextField
                                    placeholder="Month"
                                    name="dateOfBirth[0].month"
                                    type="number"
                                />
                                <AuthTextField
                                    placeholder="Day"
                                    name="dateOfBirth[0].day"
                                    type="number"
                                />
                            </div> : ""}
                            <div>
                                <Button disabled={isSubmitting} type="submit">{authStatus}</Button>
                            </div>

                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>


                            <div onClick={() => {
                                handleAuthStatusChange();
                                resetForm()
                            }}>{changeAuthStatus}</div>
                        </Form>
                    )}


                </Formik>
                <div onClick={() => {
                    changeView("/admin/signup")
                }}>sign up new admin
                </div>

            </div>
            :""}
        </div>
    )
}
export default Authentication;