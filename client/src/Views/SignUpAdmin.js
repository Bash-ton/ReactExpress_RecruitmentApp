import React from 'react'
import {Field, Form, Formik} from "formik";
import { TextField, Button } from "@material-ui/core";


const SignUpAdmin = () =>{



    //event handlers
    const changeView = (url) => {
        window.location =  url
    }
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "", adminKey: ""}}
                onSubmit={( data, { setSubmitting , resetForm}) =>{
                    setSubmitting(true);
                    resetForm();
                    //make async calls here to auth
                    console.log("submit:", data);
                    setSubmitting(false);
                } }
            >
                {({  values, isSubmitting  })  => (
                    <Form >
                        <Field
                            placeholder="Email"
                            name="email"
                            type="input"
                            as={TextField}
                        />
                        <div>
                            <Field
                                placeholder="Password"
                                name="password"
                                type="password"
                                as={TextField}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Key"
                                name="adminKey"
                                type="password"
                                as={TextField}
                            />
                        </div>
                        <div>
                            <Button disabled={isSubmitting} type="submit">Sign up</Button>
                        </div>
                        <pre>{JSON.stringify(values, null, 2)}</pre>

                    </Form>
                )}


            </Formik>
            <div onClick={()=>{changeView("/")}}>log in</div>

        </div>
    )
}

export default SignUpAdmin;