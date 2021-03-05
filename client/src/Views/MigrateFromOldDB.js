import React from 'react'
import {Field, Form, Formik} from "formik";
import {TextField, Button} from "@material-ui/core";
import {signIn} from "../Model/Redux/Actions/AuthActions";

const MigrateFromOldDB = ({apiCall}) => {

    let incompleteUsers = [];
    let errorMsgInfo = [];
    return (
        <div className="wrapper">
            <Formik
                initialValues={{VALUES: ""}}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    resetForm();

                    let SQLSTATE = "";
                    console.log(data.VALUES)
                    if (data.VALUES.includes("INSERT INTO person") || data.VALUES.includes('INSERT INTO "person"')) {
                        SQLSTATE = "MIGRATE_USER"
                    }
                    let sqlValues = data.VALUES.split("VALUES");
                    console.log(sqlValues)

                    //get the order of the inputs
                    let order = sqlValues[0].split("\\").join("");
                    order = order.split("person").join("");
                    order = order.split("INSERT INTO").join("");
                    order = order.split("(").join("");
                    order = order.split(")").join("");
                    order = order.split('"').join("");
                    order = order.split("’").join("");
                    console.log(order.split("’").join(""))
                    order = order.split(" ").join("");
                    order = order.split(",");
                    console.log(order)


                    //get the inputs
                    sqlValues = sqlValues[1].split("\\").join("");
                    sqlValues = sqlValues.split("(").join("");
                    sqlValues = sqlValues.split(")").join("");
                    sqlValues = sqlValues.split('"').join("");
                    sqlValues = sqlValues.split("’").join("");
                    sqlValues = sqlValues.split("'").join("");
                    console.log(sqlValues)
                    let newData = sqlValues.split(" ").join("");
                    let split = newData.split(",");
                    console.log(split.length)


                    //save order of inputs that exists
                    let orderOfData = {}
                    let i = 0;
                    order.forEach((val) => {
                        if (val === "_id" && (split[i] !== "NULL")) {
                            orderOfData.userID = i;
                        } else if (val === "name" && (split[i] !== "NULL")) {
                            orderOfData.firstname = i;
                        } else if (val === "surname" && (split[i] !== "NULL")) {
                            orderOfData.lastname = i;
                        } else if (val === "ssn" && (split[i] !== "NULL")) {
                            orderOfData.dateOfBirth = i;
                        } else if (val === "email" && (split[i] !== "NULL")) {
                            orderOfData.email = i;
                        } else if (val === "password" && (split[i] !== "NULL")) {
                            orderOfData.password = i;
                        } else if (val === "role_id" && (split[i] !== "NULL")) {
                            orderOfData.role = i;
                        } else if (val === "username" && (split[i] !== "NULL")) {
                            orderOfData.username = i;
                        }
                        i++;
                    })
                    console.log(orderOfData)
                    console.log(split[orderOfData.username]);

                    //handle migrate user
                    if (SQLSTATE === "MIGRATE_USER") {//if sql is INSERT INTO "person"
                        console.log(split)
                        //check for stored info -> add info -> is enough -> API, remove errormsg
                        //else store info in array, update errormsg
                        let userInfo = {};
                        incompleteUsers.forEach((user) => {
                            if (user.userID === split[orderOfData.userID]) {//found information
                                console.log(user)
                                userInfo = user


                            }

                        })
                        incompleteUsers = incompleteUsers.filter((value) => {
                            return value.userID !== split[orderOfData.userID];
                        })

                        console.log(orderOfData)
                        console.log(orderOfData.email);
                        console.log(split[orderOfData.firstname]);
                        if (orderOfData.username >= 0) {
                            userInfo.username = split[orderOfData.username]
                        }
                        if (orderOfData.email >= 0) {
                            userInfo.email = split[orderOfData.email]
                        }
                        if (orderOfData.password >= 0) {
                            userInfo.password = split[orderOfData.password]
                        }
                        if (orderOfData.firstname >= 0) {
                            userInfo.firstName = split[orderOfData.firstname]
                        }
                        if (orderOfData.lastname >= 0) {
                            userInfo.lastName = split[orderOfData.lastname]
                        }
                        if (orderOfData.dateOfBirth >= 0) {
                            userInfo.dateOfBirth = split[orderOfData.dateOfBirth]
                            let dob = split[orderOfData.dateOfBirth].split("-").join("");
                            let year = dob.substring(0, 4);
                            let month = dob.substring(4, 6);
                            let day = dob.substring(6, 8);
                            userInfo.dateOfBirth =
                                [
                                    {
                                        "year": parseInt(year),
                                        "month": parseInt(month),
                                        "day": parseInt(day)
                                    }
                                ]
                        }
                        if (orderOfData.role >= 0) {
                            let role;
                            if (parseInt(split[orderOfData.role]) === 1) {
                                role = "admin";
                            } else {
                                role = "client";
                            }
                            userInfo.role = role;
                        }
                        console.log(userInfo)

                        userInfo.userID = split[orderOfData.userID]
                        console.log(split[orderOfData.userID])

                        console.log(Object.keys(userInfo).length)
                        if (Object.keys(userInfo).length < 8) {
                            incompleteUsers.push(userInfo)

                            let errorMessage = "The following attributes are missing to be able to migrate to the new system:";
                            if (!userInfo.email) {
                                errorMessage = errorMessage + " email,"
                            }
                            if (!userInfo.username) {
                                errorMessage = errorMessage + " username,"
                            }
                            if (!userInfo.password) {
                                errorMessage = errorMessage + " password,"
                            }
                            if (!userInfo.firstName) {
                                errorMessage = errorMessage + " firstName,"
                            }
                            if (!userInfo.lastName) {
                                errorMessage = errorMessage + " lastName,"
                            }
                            if (!userInfo.dateOfBirth) {
                                errorMessage = errorMessage + " dateOfBirth/ssn,"
                            }
                            errorMsgInfo = errorMsgInfo.filter((value) => {
                                return value.userID !== split[orderOfData.userID];
                            })
                            errorMsgInfo.push({
                                "userID": split[orderOfData.userID],
                                "msg": errorMessage
                            })
                            console.log(userInfo)
                            console.log(incompleteUsers)
                        } else {
                            console.log("DONE")
                            errorMsgInfo = errorMsgInfo.filter((value) => {
                                return value.userID !== split[orderOfData.userID];
                            })
                            //call api

                            console.log(userInfo)
                            const instance = apiCall.apiAxios();
                            let testar = {
                                "username": userInfo.username,
                                "email": userInfo.email,
                                "password": userInfo.password,
                                "firstName": userInfo.firstName,
                                "lastName": userInfo.lastName,
                                "dateOfBirth": userInfo.dateOfBirth,
                                "role": userInfo.role

                            }
                            console.log(testar)
                            instance.post('auth/register', {
                                "data": {
                                    "username": userInfo.username,
                                    "email": userInfo.email,
                                    "password": userInfo.password,
                                    "firstName": userInfo.firstName,
                                    "lastName": userInfo.lastName,
                                    "dateOfBirth": userInfo.dateOfBirth,
                                    "role": userInfo.role

                                }

                            })
                                .then((response) => {


                                }, (err) => {
                                    console.log(err);
                                    alert("something went wrong");
                                });
                        }


                    }


                    //make async calls here to auth
                    console.log("submit:", data);
                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting}) => (
                    <div>
                        <Form>
                            <div>
                                <div>Insert sql code here:</div>
                                <Field
                                    placeholder="values"
                                    name="VALUES"
                                    type="input"
                                    as={TextField}
                                />
                            </div>

                            <div>
                                <Button disabled={isSubmitting} type="submit">Create User</Button>
                            </div>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>Errors: {JSON.stringify(errorMsgInfo, null, 2)}</pre>

                        </Form>
                    </div>
                )}


            </Formik>


        </div>
    )
}

export default MigrateFromOldDB;