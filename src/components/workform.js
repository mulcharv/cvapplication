import React from "react";

function WorkForms (props) {

    function handleWorkChange(e) {
        const text = e.target.value;
        const workclasses = e.target.classList;
        props.onChange(workclasses, text);
    }

        if (props.value) {
            return(
        <div className="workform">
        <div className="companycont">
            <label>Company
                <input className={`${props.value.id} company`} type="text" onChange={handleWorkChange} value={props.value.company}></input>
            </label>
        </div>
        <div className="rolecont">
            <label>Role
                <input className={`${props.value.id} role`} type="text" onChange={handleWorkChange} value={props.value.role}></input>
            </label>
        </div>
        <div className="workstartcont">
            <label>Date Started
                <input className={`${props.value.id} workstart`} type="text" onChange={handleWorkChange} value={props.value.workstart}></input>
            </label>
        </div>
        <div className="workendcont">
            <label>Date Ended
                <input className={`${props.value.id} workend`} type="text" onChange={handleWorkChange} value={props.value.workend}></input>
            </label>
        </div>
        <div className="worklocationcont">
            <label>Location
                <input className={`${props.value.id} worklocation`} type="text" onChange={handleWorkChange} value={props.value.worklocation}></input>
            </label>
        </div>
        <div className="workdescriptioncont">
            <label>Description
                <input className={`${props.value.id} workdescription`} type="text" onChange={handleWorkChange} value={props.value.workdescription}></input>
            </label>
        </div>
    </div>
            )
        }
    }

export default WorkForms;