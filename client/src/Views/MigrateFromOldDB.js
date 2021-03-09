import React, {useEffect, useState}  from 'react'
import {Field, Form, Formik} from "formik";
import {TextField, Button} from "@material-ui/core";
import {signIn} from "../Model/Redux/Actions/AuthActions";
import ReactFileReader from 'react-file-reader';
import {useSelector} from "react-redux";

const MigrateFromOldDB = ({apiCall}) => {
    
    //constants from useState and redux
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);

     //life cycle methods
     useEffect(() => {
        if ((role !== "admin") || (isLoggedIn === false))
            window.location = "/"
    }, [isLoggedIn, role])

    let incompleteUsers = [];
    let errorMsgInfo = [];
    let errorMsgInfoApplications = [];
    let incompleteApplications = [];
    let completedUsers = [];
    let completedApplications = [];
    let compReason = "";
    let applicationsSentToDB = [];
    let allEmails = [];

    const handleFiles = (files) => {

        var reader = new FileReader();
        reader.onload = (e) => {
            // Use reader.result
            /*   this.setState({
                   data: reader.result
               })

             */
            let num = 1;
            let str = reader.result.split(";")[0];
            while (typeof str == "string") {
                // console.log(str)// andropa här
                if (str.includes("person") || str.includes("competence_profile") || str.includes("availability")) {
                    migrationHandler(str)
                }
                str = reader.result.split(";")[num++];
            }

        }
        reader.readAsText(files[0]);
    }

    const migrationHandler = (sqlRow) => {
        let splitByWord = "";
        let SQLSTATE = "";
        console.log(sqlRow)
        if (sqlRow.includes("INSERT INTO person") || sqlRow.includes('INSERT INTO "person"')) {
            SQLSTATE = "MIGRATE_USER"
            splitByWord = "person";
        } else if (sqlRow.includes("INSERT INTO competence_profile") || sqlRow.includes('INSERT INTO "competence_profile"')) {
            SQLSTATE = "MIGRATE_APPLICATION"
            splitByWord = "competence_profile";
        } else {
            SQLSTATE = "MIGRATE_APPLICATION"
            splitByWord = "availability";
        }
        let sqlValues = sqlRow.split("VALUES");
        console.log(sqlValues)

        //get the order of the inputs
        let order = sqlValues[0].split("\\").join("");
        order = order.split(splitByWord).join("");
        order = order.split("INSERT INTO");
        order = order[1].split("(").join("");
        order = order.split("↵").join("");
        order = order.split(")").join("");
        order = order.split('"').join("");
        order = order.split("’").join("");
        console.log(order.split("’").join(""))
        order = order.split(" ").join("");
        order = order.split(";").join("");
        order = order.split(",");
        console.log(order)


        //get the inputs
        sqlValues = sqlValues[1].split("\\").join("");
        sqlValues = sqlValues.split("(").join("");
        sqlValues = sqlValues.split(")").join("");
        sqlValues = sqlValues.split("↵").join("");
        sqlValues = sqlValues.split('"').join("");
        sqlValues = sqlValues.split("’").join("");
        sqlValues = sqlValues.split("'").join("");
        sqlValues = sqlValues.split(";").join("");
        console.log(sqlValues)
        let newData = sqlValues.split(" ").join("");
        let split = newData.split(",");
        console.log(split.length)


        //save order of inputs that exists
        let orderOfData = {}
        let i = 0;


        if (splitByWord === "person") {
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
        } else if (splitByWord === "competence_profile") {
            order.forEach((val) => {
                if (val === "_id" && (split[i] !== "NULL")) {//competence_profile_id
                    orderOfData.compProfID = i;
                } else if (val === "person_id" && (split[i] !== "NULL")) {
                    orderOfData.userID = i;
                } else if (val === "competence_id" && (split[i] !== "NULL")) {
                    orderOfData.competenceID = i;
                } else if (val === "years_of_experience" && (split[i] !== "NULL")) {
                    orderOfData.compYear = i;
                }
                i++;
            })

        } else {//availability
            order.forEach((val) => {
                if (val === "_id" && (split[i] !== "NULL")) {//availability_id
                    orderOfData.availableID = i;
                } else if (val === "person_id" && (split[i] !== "NULL")) {
                    orderOfData.userID = i;
                } else if (val === "from_date" && (split[i] !== "NULL")) {
                    orderOfData.fromDate = i;
                } else if (val === "to_date" && (split[i] !== "NULL")) {
                    orderOfData.toDate = i;
                }
                i++;
            })
        }


        console.log(orderOfData)


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


            console.log(orderOfData)
            console.log(orderOfData.email);
            console.log(split[orderOfData.firstname]);
            if (orderOfData.username >= 0) {
                userInfo.username = split[orderOfData.username]
            }
            if (orderOfData.email >= 0) {
                userInfo.email = split[orderOfData.email]
                //TODO copy
                let stat = false;
                allEmails.forEach((val) => {
                    if (val.userID === split[orderOfData.userID]) {
                        stat = true;
                    }
                })
                if (stat === false) {
                    allEmails.push({userID: split[orderOfData.userID], email: split[orderOfData.email]})
                } else {
                    stat = false;
                }
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

                let errorMessage = "The following attributes are missing to be able to migrate this user to the new system:";
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
                completedUsers.push(userInfo)


                const instance = apiCall.apiAxios();

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
                        let done = false;
                        completedApplications.forEach((application) => {
                            if (application.userID === split[orderOfData.userID] && done === false) {//found information
                                console.log(application)
                                console.log(userInfo)

                                //make API call to applications
                                const instance = apiCall.apiAxios();
                                instance.post('posts', {
                                    startPeriod: application.fromDate,
                                    endPeriod: application.toDate,
                                    dateOfBirth: userInfo.dateOfBirth,
                                    status: "unhandled",
                                    firstName: userInfo.firstName,
                                    lastName: userInfo.lastName,
                                    competence: application.competenceID,
                                    email: userInfo.email,
                                }).then(() => {
                                    console.log("application migration success!")
                                    alert("application migration success!")
                                    errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                                        return value.userID !== split[orderOfData.userID];
                                    })
                                    applicationsSentToDB.push({id: split[orderOfData.userID]})
                                }).catch((err) => {
                                    console.log(err)
                                })
                                //using {application} and {userInfo}
                                done = true;
                            }

                        })
                        done = false;

                    }, (err) => {
                        console.log(err);
                        alert("something went wrong");
                    });


            }


        } else if (SQLSTATE === "MIGRATE_APPLICATION") {
            let applicationInfo = {};
            incompleteApplications.forEach((application) => {
                if (application.userID === split[orderOfData.userID]) {//found information
                    console.log(application)
                    applicationInfo = application

                }

            })
            let competenceName = "";


            if (orderOfData.compProfID >= 0) {
                applicationInfo.compProfID = split[orderOfData.compProfID]
            }
            if (orderOfData.userID >= 0) {
                applicationInfo.userID = split[orderOfData.userID]
            }
            if (orderOfData.competenceID >= 0) {


                console.log(split[orderOfData.competenceID])
                if (parseInt(split[orderOfData.competenceID]) === 1) {
                    competenceName = "A-skills";
                    applicationInfo.compName = competenceName;
                } else {
                    competenceName = "B-skills";
                    applicationInfo.compName = competenceName;
                }



                if (compReason !== "DONE_AND_SENT") {  //TODO copy
                    if (applicationInfo.competenceID === undefined) {
                        console.log(applicationInfo)
                        applicationInfo.competenceID = [];
                        applicationInfo.competenceID.push({
                            "name": competenceName,
                            "year": parseInt(split[orderOfData.compYear])
                        })

                    } else {
                        console.log("new comp: " + competenceName)
                        console.log("old comp: " + applicationInfo.competenceID)
                        applicationInfo.competenceID.push({
                            "name": competenceName,
                            "year": parseInt(split[orderOfData.compYear])
                        })
                        console.log(applicationInfo)
                    }
                }
                applicationsSentToDB.forEach((app) => {
                    if (app.id === split[orderOfData.userID]) {

                        //skip every other step
                        compReason = "DONE_AND_SENT";
                        //get email from allemail //TODO update DB
                        allEmails.forEach((val) => {
                            if (val.userID === split[orderOfData.userID]) {
                                //send to DB update post
                                console.log(val)
                                const instance = apiCall.apiAxios();
                                instance.post('posts/updateskill', {
                                    "competence": {
                                        "name": competenceName,
                                        "year": parseInt(split[orderOfData.compYear])
                                    },
                                    "email": val.email,
                                }).then(() => {
                                    console.log("updated application migration success!")
                                    alert("updated application migration success!")
                                }).catch((err) => {
                                    console.log(err)
                                    alert("something went wrong in update")
                                })
                            }
                        })

                    }
                })





            }
            if (orderOfData.compYear >= 0) {
                applicationInfo.compYear = split[orderOfData.compYear]
            }
            if (orderOfData.availableID >= 0) {
                applicationInfo.availableID = split[orderOfData.availableID]
            }
            if (orderOfData.fromDate >= 0) {
                applicationInfo.fromDate = split[orderOfData.fromDate]
            }
            if (orderOfData.toDate >= 0) {
                applicationInfo.toDate = split[orderOfData.toDate]
            }


            console.log(Object.keys(applicationInfo).length);

            if (compReason !== "DONE_AND_SENT") {
                if (Object.keys(applicationInfo).length < 7) {
                    incompleteApplications.push(applicationInfo)

                    let errorMessage = "The following attributes are missing to be able to migrate this application to the new system:";
                    if (!applicationInfo.compYear) {
                        errorMessage = errorMessage + " years_of_experience,"
                    }
                    if (!applicationInfo.fromDate) {
                        errorMessage = errorMessage + " available from_date,"
                    }
                    if (!applicationInfo.toDate) {
                        errorMessage = errorMessage + " available to_date,"
                    }
                    if (!applicationInfo.competenceID) {
                        errorMessage = errorMessage + " competenceID,"
                    }

                    errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                        return value.userID !== split[orderOfData.userID];
                    })
                    errorMsgInfoApplications.push({
                        "userID": split[orderOfData.userID],
                        "msg": errorMessage
                    })
                    console.log(applicationInfo)
                    console.log(incompleteApplications)
                } else {
                    console.log("DONE")

                    completedApplications.push(applicationInfo)

                    let savedUser = {};
                    completedUsers.forEach((user) => {
                        if (user.userID === split[orderOfData.userID]) {//found information
                            console.log(user)
                            savedUser = user
                        }

                    })
                    errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                        return value.userID !== split[orderOfData.userID];
                    })
                    if (Object.keys(savedUser).length === 0) {
                        console.log("APPLICATION DONE WAIT FOR USER")

                        errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                            return value.userID !== split[orderOfData.userID];
                        })
                        errorMsgInfoApplications.push({
                            userID: applicationInfo.userID,
                            "msg": "This application is ready to migrate to the new DB as soon as user with same userID/person_id has been migrated"
                        })

                    } else {

                        let skipWriteAgain = false;
                        console.log(applicationsSentToDB)
                        console.log(split[orderOfData.userID])
                        applicationsSentToDB.forEach((val) => {
                            if (parseInt(val.id) === parseInt(split[orderOfData.userID])) {
                                console.log(val)
                                skipWriteAgain = true
                            }
                        })
                        if (skipWriteAgain === false) {
                            console.log("CREATE APPLICATION AND SEND TO DB")
                            //call api

                            const instance = apiCall.apiAxios();
                            instance.post('posts', {
                                startPeriod: applicationInfo.fromDate,
                                endPeriod: applicationInfo.toDate,
                                dateOfBirth: savedUser.dateOfBirth,
                                status: "unhandled",
                                firstName: savedUser.firstName,
                                lastName: savedUser.lastName,
                                competence: applicationInfo.competenceID,
                                email: savedUser.email,
                            }).then(() => {
                                applicationsSentToDB.push({"id":split[orderOfData.userID]})
                                console.log("application migration success!")
                                alert("application migration success!")
                            }).catch((err) => {
                                console.log(err)
                                alert("something went wrong")
                            })
                        }
                        skipWriteAgain = false;
                    }


                    console.log(applicationInfo)

                }

            }
            compReason = "";
        }
    }


    return (
        <div className="wrapper">

            <input type="file" onChange={(event) => {
                handleFiles(event.target.files)
            }}/>
            <Formik
                initialValues={{VALUES: ""}}
                onSubmit={(data, {setSubmitting, resetForm}) => {

                    setSubmitting(true);
                    resetForm();

                    if (data.VALUES.includes("person") || data.VALUES.includes("competence_profile") || data.VALUES.includes("availability")) {
                        migrationHandler(data.VALUES);
                    }


                    if (false) {


                        let splitByWord = "";
                        let SQLSTATE = "";
                        console.log(data.VALUES)
                        if (data.VALUES.includes("INSERT INTO person") || data.VALUES.includes('INSERT INTO "person"')) {
                            SQLSTATE = "MIGRATE_USER"
                            splitByWord = "person";
                        } else if (data.VALUES.includes("INSERT INTO competence_profile") || data.VALUES.includes('INSERT INTO "competence_profile"')) {
                            SQLSTATE = "MIGRATE_APPLICATION"
                            splitByWord = "competence_profile";
                        } else {
                            SQLSTATE = "MIGRATE_APPLICATION"
                            splitByWord = "availability";
                        }
                        let sqlValues = data.VALUES.split("VALUES");
                        console.log(sqlValues)

                        //get the order of the inputs
                        let order = sqlValues[0].split("\\").join("");
                        order = order.split(splitByWord).join("");
                        order = order.split("INSERT INTO").join("");
                        order = order.split("(").join("");
                        order = order.split(")").join("");
                        order = order.split('"').join("");
                        order = order.split("’").join("");
                        console.log(order.split("’").join(""))
                        order = order.split(" ").join("");
                        order = order.split(";").join("");
                        order = order.split(",");
                        console.log(order)


                        //get the inputs
                        sqlValues = sqlValues[1].split("\\").join("");
                        sqlValues = sqlValues.split("(").join("");
                        sqlValues = sqlValues.split(")").join("");
                        sqlValues = sqlValues.split('"').join("");
                        sqlValues = sqlValues.split("’").join("");
                        sqlValues = sqlValues.split("'").join("");
                        sqlValues = sqlValues.split(";").join("");
                        console.log(sqlValues)
                        let newData = sqlValues.split(" ").join("");
                        let split = newData.split(",");
                        console.log(split.length)


                        //save order of inputs that exists
                        let orderOfData = {}
                        let i = 0;

                        //TODO
                        if (splitByWord === "person") {
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
                        } else if (splitByWord === "competence_profile") {
                            order.forEach((val) => {
                                if (val === "_id" && (split[i] !== "NULL")) {//competence_profile_id
                                    orderOfData.compProfID = i;
                                } else if (val === "person_id" && (split[i] !== "NULL")) {
                                    orderOfData.userID = i;
                                } else if (val === "competence_id" && (split[i] !== "NULL")) {
                                    orderOfData.competenceID = i;
                                } else if (val === "years_of_experience" && (split[i] !== "NULL")) {
                                    orderOfData.compYear = i;
                                }
                                i++;
                            })

                        } else {//availability
                            order.forEach((val) => {
                                if (val === "_id" && (split[i] !== "NULL")) {//availability_id
                                    orderOfData.availableID = i;
                                } else if (val === "person_id" && (split[i] !== "NULL")) {
                                    orderOfData.userID = i;
                                } else if (val === "from_date" && (split[i] !== "NULL")) {
                                    orderOfData.fromDate = i;
                                } else if (val === "to_date" && (split[i] !== "NULL")) {
                                    orderOfData.toDate = i;
                                }
                                i++;
                            })
                        }


                        console.log(orderOfData)


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
                            /*TODO use for applications
                            incompleteUsers = incompleteUsers.filter((value) => {
                                return value.userID !== split[orderOfData.userID];
                            })

                             */

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

                                let errorMessage = "The following attributes are missing to be able to migrate this user to the new system:";
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
                                completedUsers.push(userInfo)


                                const instance = apiCall.apiAxios();

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
                                        completedApplications.forEach((application) => {
                                            if (application.userID === split[orderOfData.userID]) {//found information
                                                console.log(application)

                                                //make API call to applications//TODO
                                                const instance = apiCall.apiAxios();
                                                instance.post('posts', {
                                                    startPeriod: application.fromDate,
                                                    endPeriod: application.toDate,
                                                    dateOfBirth: userInfo.dateOfBirth,
                                                    status: "unhandled",
                                                    firstName: userInfo.firstName,
                                                    lastName: userInfo.lastName,
                                                    competence: [{
                                                        name: application.compName,
                                                        year: parseInt(application.compYear)
                                                    }],
                                                    email: userInfo.email,
                                                }).then(() => {
                                                    console.log("application migration success!")
                                                    alert("application migration success!")
                                                    errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                                                        return value.userID !== split[orderOfData.userID];
                                                    })
                                                }).catch((err) => {
                                                    console.log(err)
                                                    alert("something went wrong")
                                                })
                                                //using {application} and {userInfo}
                                            }

                                        })

                                    }, (err) => {
                                        console.log(err);
                                        alert("something went wrong");
                                    });


                            }


                        } else if (SQLSTATE === "MIGRATE_APPLICATION") {
                            let applicationInfo = {};
                            incompleteApplications.forEach((application) => {
                                if (application.userID === split[orderOfData.userID]) {//found information
                                    console.log(application)
                                    applicationInfo = application


                                }

                            })
                            let competenceName = "";


                            if (orderOfData.compProfID >= 0) {
                                applicationInfo.compProfID = split[orderOfData.compProfID]
                            }
                            if (orderOfData.userID >= 0) {
                                applicationInfo.userID = split[orderOfData.userID]
                            }
                            if (orderOfData.competenceID >= 0) {
                                applicationInfo.competenceID = split[orderOfData.competenceID]
                                if (split[orderOfData.competenceID] === 1) {
                                    competenceName = "A-skills";
                                    applicationInfo.compName = competenceName;
                                } else {
                                    competenceName = "B-skills";
                                    applicationInfo.compName = competenceName;
                                }
                            }
                            if (orderOfData.compYear >= 0) {
                                applicationInfo.compYear = split[orderOfData.compYear]
                            }
                            if (orderOfData.availableID >= 0) {
                                applicationInfo.availableID = split[orderOfData.availableID]
                            }
                            if (orderOfData.fromDate >= 0) {
                                applicationInfo.fromDate = split[orderOfData.fromDate]
                            }
                            if (orderOfData.toDate >= 0) {
                                applicationInfo.toDate = split[orderOfData.toDate]
                            }


                            console.log(Object.keys(applicationInfo).length);

                            if (Object.keys(applicationInfo).length < 7) {
                                incompleteApplications.push(applicationInfo)

                                let errorMessage = "The following attributes are missing to be able to migrate this application to the new system:";
                                if (!applicationInfo.compYear) {
                                    errorMessage = errorMessage + " years_of_experience,"
                                }
                                if (!applicationInfo.fromDate) {
                                    errorMessage = errorMessage + " available from_date,"
                                }
                                if (!applicationInfo.toDate) {
                                    errorMessage = errorMessage + " available to_date,"
                                }
                                if (!applicationInfo.competenceID) {
                                    errorMessage = errorMessage + " competenceID,"
                                }

                                errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                                    return value.userID !== split[orderOfData.userID];
                                })
                                errorMsgInfoApplications.push({
                                    "userID": split[orderOfData.userID],
                                    "msg": errorMessage
                                })
                                console.log(applicationInfo)
                                console.log(incompleteApplications)
                            } else {
                                console.log("DONE")

                                completedApplications.push(applicationInfo)

                                let savedUser = {};
                                completedUsers.forEach((user) => {
                                    if (user.userID === split[orderOfData.userID]) {//found information
                                        console.log(user)
                                        savedUser = user
                                    }

                                })
                                errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                                    return value.userID !== split[orderOfData.userID];
                                })
                                if (Object.keys(savedUser).length === 0) {
                                    console.log("APPLICATION DONE WAIT FOR USER")
                                    //call api
                                    //1 get email using applicationInfo.userID
                                    //2 check if user exist and get userinfo from DB
                                    //3 send application to DB
                                    //4 else do nothing
                                    errorMsgInfoApplications = errorMsgInfoApplications.filter((value) => {
                                        return value.userID !== split[orderOfData.userID];
                                    })
                                    errorMsgInfoApplications.push({
                                        userID: applicationInfo.userID,
                                        "msg": "This application is ready to migrate to the new DB as soon as user with same userID/person_id has been migrated"
                                    })

                                } else {
                                    console.log("CREATE APPLICATION AND SEND TO DB")
                                    //call api

                                    const instance = apiCall.apiAxios();
                                    instance.post('posts', {
                                        startPeriod: applicationInfo.fromDate,
                                        endPeriod: applicationInfo.toDate,
                                        dateOfBirth: savedUser.dateOfBirth,
                                        status: "unhandled",
                                        firstName: savedUser.firstName,
                                        lastName: savedUser.lastName,
                                        competence: [{
                                            name: competenceName,
                                            year: parseInt(applicationInfo.compYear)
                                        }],
                                        email: savedUser.email,
                                    }).then(() => {
                                        console.log("application migration success!")
                                        alert("application migration success!")
                                        applicationsSentToDB.push({"id": applicationInfo.userID})
                                    }).catch((err) => {
                                        console.log(err)
                                        alert("something went wrong")
                                    })
                                }


                                console.log(applicationInfo)

                                /*
                                                            const instance = apiCall.apiAxios();
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

                                 */
                            }

                        }


                        //make async calls here to auth
                        console.log("submit:", data);

                    }
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
                                <Button disabled={isSubmitting} type="submit">Get result</Button>
                            </div>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>Migration issues "users": {JSON.stringify(errorMsgInfo, null, 2)}</pre>
                            <pre>Migration issues "applications": {JSON.stringify(errorMsgInfoApplications, null, 2)}</pre>

                        </Form>
                    </div>
                )}


            </Formik>


        </div>
    )
}

export default MigrateFromOldDB;