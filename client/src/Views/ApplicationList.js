import React from "react"
import ApplicationElement from "./ApplicationElement";
import "./css/ApplicationList.css"

const ApplicationList = ({applications}) => {

    console.log(applications)
    return(
        <table className="content-table">
            <thead>
            <tr>
                <th>fname</th>
                <th>lname</th>
                <th>skills</th>
                <th>startP</th>
                <th>endP</th>
                <th>date of birth</th>
                <th>application made at</th>
                <th>application status</th>
            </tr>
            </thead>
            <tbody>
            {applications?.map(item =>{
                return(
                    <ApplicationElement item={item}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default ApplicationList;