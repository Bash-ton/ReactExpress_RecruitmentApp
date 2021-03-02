import React from "react";
//TODO CHANGE {testing} to directly look inside item from api

/**
 * This component renders one row in the admin applications list. Each row shows all relevant information about said application
 * @param item all info about one application ie one row in the list
 * @returns {JSX.Element} renders one row in the admin applications list
 */
const ApplicationElement = ({item}) => {

    //TODO change to reading status from expres and sending status to express
    const testing = "unhandled";
    const updateStatus = (event) => {
        console.log(event.target.value)
        console.log(event)
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

                {(testing === "unhandled")?
                    <option selected="selected" value="unhandled">unhandled</option>
                :<option value="unhandled">unhandled</option>}

                {(testing === "rejected")?
                    <option selected="selected" value="rejected">rejected</option>
                    :<option value="rejected">rejected</option>}

                {(testing === "accepted")?
                    <option selected="selected" value="accepted">accepted</option>
                    :<option value="accepted">accepted</option>}
            </select></td>
        </tr>
    )

}

export default ApplicationElement;