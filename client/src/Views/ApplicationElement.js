import React from "react";
//TODO GET( lname and fname and status ) aswell
const ApplicationElement = ({item}) => {

    //TODO CHANGE {testing} to directly look inside item from api
    const testing = "unhandled";

    //call api and update status
    const updateStatus = (event) => {
        console.log(event.target.value)
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