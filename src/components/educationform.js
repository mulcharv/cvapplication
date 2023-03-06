import React from "react";

function EducationForms (props) { 


    function handleEduChange(e) {
        const text = e.target.value;
        const educlasses = e.target.classList;
         props.onChange(educlasses, text);
    }


    if (this.props.value) {
      return(
    <div className="eduform">
        <div className="schoolcont">
            <label>School Name
                <input className={`${props.value.id} school`} type="text" onChange={handleEduChange} value={props.value.school}></input>
            </label>
        </div>
        <div className="degreecont">
            <label>Degree
                <input className={`${props.value.id} degree`} type="text" onChange={handleEduChange} value={props.value.degree}></input>
            </label>
        </div>
        <div className="edustartcont">
            <label>Date Started
                <input className={`${props.value.id} edustart`} type="text" onChange={handleEduChange} value={props.value.edustart}></input>
            </label>
        </div>
        <div className="eduendcont">
            <label>Date Ended
                <input className={`${props.value.id} eduend`} type="text" onChange={handleEduChange} value={props.value.eduend}></input>
            </label>
        </div>
        <div className="edulocationcont">
            <label>Location
                <input className={`${props.value.id} edulocation`} type="text" onChange={handleEduChange} value={props.value.edulocation}></input>
            </label>
        </div>
        <div className="edudescriptioncont">
            <label>Description
                <input className={`${props.value.id} edudescription`} type="text" onChange={handleEduChange} value={props.value.edudescription}></input>
            </label>
        </div>
    </div>)
            } 
    }

    

export default EducationForms;