import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function Expertise({model, apiCall}) {
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);

    useEffect(()=>{
        if( (role !== "client") || (isLoggedIn === false) )
            window.location = "/"
    }, [isLoggedIn, role])
    useEffect(()=>{
        if( (role !== "client") || (isLoggedIn === false) )
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

    //remove selected state when chosen?
    const removeSelectedExpertise = e => {
        const exp = allExpertise.filter(name => name !== e);
        setExpertice(exp);
    }
    const instance = apiCall.apiAxios();
    //TODO add user fname, lname, date of birth and start/end period to API call
    return (
        <div>
            {((role === "client") && (isLoggedIn === true)) ?
                <div>
                <ExpertiseView myExpertise={myExpertise} removeExpertise={n => {
                    model.removeExpertise(n);
                    setExpertice([...allExpertise, n])
                }}/>
                <AddExpertiseForm expertise={allExpertise} addExpertise={(t, y) => model.addExpertise(t, y)}//TODO add fields: {fname: info.fname, lname: info.lname, dateOfBirth: info.dateOfBirth}
                                  done={(info) => instance.post('posts',{
                                      startPeriod: info.start,
                                      endPeriod: info.end,
                                      dateOfBirth: info.dateOfBirth,
                                      status: "unhandled",
                                      firstName: info.fname,
                                      lastName: info.lname,
                                      competence: myExpertise
                                  })}
                                  removeOption={(name) => removeSelectedExpertise(name)}
                /></div>
            :""}
        </div>
    )
}

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



const AddExpertiseForm = ({expertise, addExpertise, done, removeOption}) => {

    const userInfo = useSelector(state => state.UserReducer.userInfo)
   console.log(userInfo)
    const handleSubmit = () => {
        let ans = window.confirm("Are you sure you want to submit your application?");
        if(ans === true){
           //console.log(userInfo[0].dateOfBirth);
           //debugger;
            done({start: start, end: end, fname: userInfo[0].fname, lname: userInfo[0].lname, status: "unhandled", dateOfBirth:userInfo[0].dateOfBirth});
        }
    }

    const [year, setYear] = useState(0);
    const [type, setType] = useState('');
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    return (
        <div>
            <input type="number" min="0" placeholder="years of experience" onChange={(event) => setYear(event.target.value)} />
            <select onChange={(event) => setType(event.target.value)}>
                <option>choose your expertise</option>
                {expertise.map((k) => <option key={k}>{k}</option>)}
            </select>
            <button onClick={() => {addExpertise(type, year); removeOption(type)}}>add skill to application</button>

            <div>
                <br/>
                <input type="text" min="0" placeholder="available start period" onChange={(event)=>{ setStart(event.target.value) }} />
                <input type="text" min="0" placeholder="available end period" onChange={(event)=>{ setEnd(event.target.value) }}/>
                <button onClick={() => {handleSubmit();}}>confirm and send application</button>
            </div>


        </div>
    );
};

export {Expertise}; 
