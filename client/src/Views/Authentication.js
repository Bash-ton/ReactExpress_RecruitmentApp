import React, {useEffect, useState} from 'react'
import {Form, Formik, useField} from "formik";
import {TextField, Button, Select, MenuItem} from "@material-ui/core";
import * as Yup from "yup"
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../Model/Redux/Actions/AuthActions";
import "./css/login-signup.css";
import Loader from "react-loader-spinner";
import { useHistory } from 'react-router-dom';

//TODO remove the <Pre-tags> when done testing

/**
 * This is the authentication page that handles login and signup including validation.
 * @param apiCall a model document containingn axios calls to the express rest API
 * @returns {JSX.Element} renders login and signup form
 */
const Authentication = ({apiCall}) => {

    //constants from useState and redux
    const [authStatus, setAuthStatus] = useState("Sign up");
    const [changeAuthStatus, setChangeAuthStatus] = useState("Login");
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();


    //life cycle methods
    useEffect(() => {
        if (role === "client") {
            window.location = "/user/application";

        } else if (role === "admin") {
            window.location = "/admin/applications";

        }
    }, [isLoggedIn])



    //custom formik components
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
    //yup schema for validation
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

    return (
        <div className="outer-wrapper">
            {isLoading? <Loader visible={isLoading} type="TailSpin" color="#00BFFF" height={80} width={80}/>:
            <div>
                {!isLoggedIn
                    ? <div className="inner-wrapper" >
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
                                setLoading(isLoading => !isLoading);

                                if (authStatus === "Sign up") {
                                    const instance = apiCall.apiAxios();

                                    instance.post('auth/register', {data})
                                        .then((response) => {

                                            const instance = apiCall.apiAxios();
                                            instance.post('auth/login', {email: data.email, password: data.password})
                                                .then((response1) => {
                                                    dispatch(signIn(response1))
                                                }, (error) => {
                                                    setLoading(isLoading => !isLoading);
                                                    //Validation error
                                                    if(error.response.status == 400) alert("Wrong email and/or password");
                                                    //All other errors
                                                    else{
                                                        history.replace(history.location.pathname, { 
                                                            errorStatusCode: error.response.status
                                                        });
                                                    }
                                                });

                                        }, (err) => {
                                            setLoading(isLoading => !isLoading);
                                            //Validation error
                                            if(err.response.status == 400) alert("email already in use");
                                            //All other errors
                                            else{
                                                history.replace(history.location.pathname, { 
                                                    errorStatusCode: err.response.status
                                                });
                                            }
                                        });
                                } else {
                                    const instance = apiCall.apiAxios();
                                    instance.post('auth/login', {email: data.email, password: data.password})
                                        .then((response1) => {
                                            setLoading(isLoading => !isLoading);
                                            dispatch(signIn(response1))

                                        }, (error) => {
                                            setLoading(isLoading => !isLoading);
                                            //Validation error
                                            if(error.response.status == 400) alert("Wrong email and/or password");
                                            //All other errors
                                            else{
                                                history.replace(history.location.pathname, { 
                                                    errorStatusCode: error.response.status
                                                });
                                            }
                                        });
                                }
                                setSubmitting(false);
                            }}
                            validationSchema={AuthSchema}
                        >
                            {({values, isSubmitting, resetForm, errors}) => (
                                
                        
                                <Form >
                                    {(authStatus === "Sign up") ? <div>
                                    <p>Create an account</p>
                                    </div> : <div>Log in</div>}
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
                                    </div> : ""}<br/>
                                    {(authStatus === "Sign up") ? <div>
                                        <AuthTextField
                                            placeholder="Year"
                                            name="dateOfBirth[0].year"
                                            type="number"
                                        /><br/>
                                        <AuthTextField
                                            placeholder="Month"
                                            name="dateOfBirth[0].month"
                                            type="number"
                                        /><br/>
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


                    </div>
                    : ""}
            </div>}
        </div>
    )
}
export default Authentication;