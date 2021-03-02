import React from "react"
import ApplicationElement from "./ApplicationElement";
import "./css/ApplicationList.css"

/**
 * The admin application list header.
 * @param applications an object containing all applications that the page should render in a list
 * @returns {JSX.Element} renders a list header and calls the <ApplicationElement/> component to render all rows
 */
const ApplicationList = ({apiCall, applications} ) => {

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
                    <ApplicationElement apiCall={apiCall} item={item}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default ApplicationList;