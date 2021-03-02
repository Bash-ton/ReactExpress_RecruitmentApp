import React, {useEffect, useState} from "react"
import { Form, Formik, useField } from "formik";
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import ApplicationList from "./ApplicationList";
import {useSelector} from "react-redux";

/**
 * Handles the admin page.
 * A logged in admin may go through all applications and sort by skills
 * The admin can also give a status to an application (accepted, unhandled, rejected)
 * @param apiCall model that handles axios api calls to the backend REST API
 * @returns {JSX.Element} renders the Admin page showing applications
 */
const AdminApplications = ({apiCall}) => {
    //constants from useState and redux
    const [result, setResult] = useState([])
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);


    //life cycle methods
    useEffect(() => {
        if ((role !== "admin") || (isLoggedIn === false))
            window.location = "/"
    }, [isLoggedIn, role])


    //custom formik components
    const CustomCheckboxes = ({label, ...props}) => {
        const [field] = useField(props);
        return <FormControlLabel {...field} control={<Checkbox/>} label={label}/>;
    }


    return (
        <div>
            {(role === "admin") && (isLoggedIn === true)
                ? <div>
                    <Formik
                        initialValues={{

                            competences: []

                        }}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            let param = "posts"
                            if (data.competences.length === 2) {
                                param = "posts/competence/or=" + data.competences[0] + "&=" + data.competences[1];
                            } else if (data.competences.length === 1) {
                                param = "posts/competence=" + data.competences[0];
                            }

                            const instance = apiCall.apiAxios();
                            instance.get(param).then(r =>( setSubmitting(false), setResult(r.data),setResult(r.data)))
                        }}
                    >
                        {({values, isSubmitting, errors}) => (
                            <Form>
                                <CustomCheckboxes name="competences" value="A-skills" type="checkbox" label="A-skills"/>
                                <CustomCheckboxes name="competences" value="B-skills" type="checkbox" label="B-skills"/>
                                <CustomCheckboxes name="competences" value="C-skills" type="checkbox" label="C-skills"/>
                                <CustomCheckboxes name="competences" value="D-skills" type="checkbox" label="D-skills"/>
                                <CustomCheckboxes name="competences" value="E-skills" type="checkbox" label="E-skills"/>
                                <Button disabled={isSubmitting} type="submit">Get Applications</Button>
                                <div>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                                </div>
                            </Form>

                        )}
                    </Formik>
                    {(result.length > 0) ? <ApplicationList apiCall={apiCall} applications={result}/> : ""}
                </div>
                : ""}
        </div>
    )
}

export default AdminApplications;