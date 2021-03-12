import React from "react";
import { useHistory } from 'react-router-dom';

/**
 * This component renders one row in the admin applications list. Each row shows all relevant information about said application
 * @param apiCall a model document containing axios api calls to the express app
 * @param item all info about one application ie one row in the list
 * @returns {JSX.Element} renders one row in the admin applications list
 * @constructor
 */
const ApplicationElement = ({apiCall, item}) => {
    const history = useHistory();
    const updateStatus = (event) => {
        const instance = apiCall.apiAxios();
        instance.post('posts/application', {status: event.target.value, email: item.email})
            .then((response) => {
                console.log(response)

            }, (err) => {
                //Validation error
                if(err.response.status == 400) console.log("Email is incorrect");
                //All other errors
                else{
                    history.replace(history.location.pathname, { 
                        errorStatusCode: err.response.status
                    });
                }
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