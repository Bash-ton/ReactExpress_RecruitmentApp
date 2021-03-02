import React from "react";
import {signIn} from "../Model/Redux/Actions/testLogInLocalStorage";
//TODO call API to change status

/**
 * This component renders one row in the admin applications list. Each row shows all relevant information about said application
 * @param item all info about one application ie one row in the list
 * @returns {JSX.Element} renders one row in the admin applications list
 */
const ApplicationElement = ({apiCall, item}) => {

    const updateStatus = (event) => {
        console.log(event.target.value)//the new status

        console.log(item)//this item/application information


        const instance = apiCall.apiAxios();
        instance.post('posts/application', {status: event.target.value, email: item.email})
            .then((response) => {
                console.log(response)

            }, (error) => {
                console.log(error);
            });
    }


    return (
        <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.competence?.map(comp =>{
                return(
                    <div>{comp.name} {comp.year} year(s)</div>
                )
            })}</td>
            <td>{item.startPeriod}</td>
            <td>{item.endPeriod}</td>
            <td>{item.dateOfBirth?.map(comp =>{
                return(
                    <div>{comp.year}-{comp.month}-{comp.day} </div>
                )
            })}</td>
            <td>{item.date}</td>
            <td><select name="status" onChange={(event)=>{ updateStatus(event) }}>

                {(item.status === "unhandled")?
                    <option selected="selected" value="unhandled">unhandled</option>
                :<option value="unhandled">unhandled</option>}

                {(item.status === "rejected")?
                    <option selected="selected" value="rejected">rejected</option>
                    :<option value="rejected">rejected</option>}

                {(item.status === "accepted")?
                    <option selected="selected" value="accepted">accepted</option>
                    :<option value="accepted">accepted</option>}
            </select></td>
        </tr>
    )

}

export default ApplicationElement;