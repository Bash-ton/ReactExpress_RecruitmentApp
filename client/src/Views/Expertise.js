import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "./css/Header.css";
import { useHistory } from 'react-router-dom';

/**
 * Renders all views related to the client page.
 * @param model a model document used to get available skills and handle all skills in current application in progress before submitting
 * @param apiCall a model document handling all axios calls to the express API
 * @returns {JSX.Element} renders all views on the client page
 */
function Expertise({model, apiCall}) {
    //constants from redux store
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);
    const email = useSelector(state => state.UserReducer.userInfo[0].email);
    const [hasApplication, setHasApplication] = useState(false);
    const history = useHistory();

    //event handler checking if user already has made an application
    const instance2 = apiCall.apiAxios();
 
    instance2.get("posts/postEmail="+email).then(r => (
        console.log(r.status),
            console.log(r),
            setHasApplication(true)
    )).catch(err => {
        setHasApplication(false)
        //Validation error
        if(err.response.status == 400) console.log(err)
        //All other errors
        else{
            history.replace(history.location.pathname, { 
                errorStatusCode: err.response.status
            });
        }
    })


    //lifecycle methods
    useEffect(() => {
        if ((role !== "client") || (isLoggedIn === false))
            window.location = "/"
    }, [isLoggedIn, role])
    useEffect(() => {
        if ((role !== "client") || (isLoggedIn === false))
            window.location = "/"
    }, [])

    const [allExpertise, setExpertice] = useState(model.getAllExpertise());
    useEffect(() => setExpertice(model.getAllExpertise()), []);

    const [myExpertise, setMyExpertise] = useState(model.getExpertise());
    useEffect(function () {
        return model.addObserver(function () {
            setMyExpertise(model.getExpertise());
        })
    }, [model]);

    //Ta bort: Modellen bestämmer om den vill läsa från localstorage eller inte.......
    useEffect(() => localStorage.setItem('formData', myExpertise));

    // eventhandlers
    //remove selected state when chosen?
    const removeSelectedExpertise = e => {
        const exp = allExpertise.filter(name => name !== e);
        setExpertice(exp);
    }
    const instance = apiCall.apiAxios();

    return (
        <div className="outer-wrapper">
            {((role === "client") && (isLoggedIn === true)) ?
                <div>
                    {!hasApplication ?
                        <div>
                            <ExpertiseView myExpertise={myExpertise} removeExpertise={n => {
                                model.removeExpertise(n);
                                setExpertice([...allExpertise, n])
                            }}/>
                            <AddExpertiseForm expertise={allExpertise}
                                              addExpertise={(t, y) => model.addExpertise(t, y)}
                                              done={(info) => instance.post('posts', {
                                                  startPeriod: info.start,
                                                  endPeriod: info.end,
                                                  dateOfBirth: [{
                                                      year: info.dateOfBirth.year,
                                                      month: info.dateOfBirth.month,
                                                      day: info.dateOfBirth.day
                                                  }],
                                                  status: "unhandled",
                                                  firstName: info.fname,
                                                  lastName: info.lname,
                                                  competence: myExpertise,
                                                  email: info.email,
                                              }).catch(err => {
                                                  //Validation error
                                                if(err.response.status == 400) console.log(err)
                                                //All other errors
                                                else{
                                                    history.replace(history.location.pathname, { 
                                                        errorStatusCode: err.response.status
                                                    });
                                                }
                                              })}
                                              removeOption={(name) => removeSelectedExpertise(name)}
                            /></div>
                        : <div>You have already made an application. Please wait for us to give you a response</div>}
                </div> : ""}
        </div>
    )
}

/**
 * This component renders the current skills in progress before submitting it
 * @param myExpertise object that contains all skills currently in the application
 * @param removeExpertise method used to remove skills from application
 * @returns {JSX.Element} renders a list of current skills in application
 */
const ExpertiseView = ({myExpertise, removeExpertise}) => (
    <div>
        {myExpertise.map(e =>
            <tbody>
            <tr key={e.name + e.year}>
                <td>{e.name}</td>
                <td>{e.year}</td>
            </tr>
            <button onClick={() => removeExpertise(e.name)}>remove</button>
            </tbody>
        )}
    </div>
);


/**
 * A form that lets user input all relevant information used to create an application
 * @param expertise all currently available skills to choose from in the application
 * @param addExpertise method used to add a skill to the application
 * @param done method used so submit the application
 * @param removeOption method that removes one available skill from the {expertise} object when that skill already has been added to the form
 * @returns {JSX.Element} render the form to input skills to the application
 */
 const AddExpertiseForm = ({expertise, addExpertise, done, removeOption}) => {

    const userInfo = useSelector(state => state.UserReducer.userInfo)
    console.log(userInfo)
    const handleSubmit = () => {
        let ans = window.confirm("Are you sure you want to submit your application?");
        if (ans === true) {
            //console.log(userInfo[0].dateOfBirth);
            //debugger;
            done({
                start: start,
                end: end,
                fname: userInfo[0].fname,
                lname: userInfo[0].lname,
                status: "unhandled",
                dateOfBirth: userInfo[0].dateOfBirth,
                email: userInfo[0].email
            });
        }
    }

    const [year, setYear] = useState(0);
    const [type, setType] = useState('');
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    return (
        <div>
            <input type="number" min="0" placeholder="years of experience"
                   onChange={(event) => setYear(event.target.value)}/>
            <select onChange={(event) => setType(event.target.value)}>
                <option>choose your expertise</option>
                {expertise.map((k) => <option key={k}>{k}</option>)}
            </select>
            <button disabled={type === ''} onClick={() => {
                addExpertise(type, year);
                removeOption(type);
                setType('');
            }}>add skill to application
            </button>

            <div>
                <br/>
                <input type="text" min="0" placeholder="available start period" onChange={(event) => {
                    setStart(event.target.value)
                }}/>
                <input type="text" min="0" placeholder="available end period" onChange={(event) => {
                    setEnd(event.target.value)
                }}/>
                <button onClick={() => {
                    handleSubmit();
                }}>confirm and send application
                </button>
            </div>


        </div>
    );
};

export {Expertise}; 
