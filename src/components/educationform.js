import React from "react";
import { Component } from "react";

class EducationForms extends Component { 
    constructor(props) {
        super(props);
        this.handleEduChange = this.handleEduChange.bind(this);
    }

    handleEduChange(e) {
        const text = e.target.value;
        const educlasses = e.target.classList;
        this.props.onChange(educlasses, text);
    }

    render() {

    if (this.props.value) {
      return(
    <div className="eduform">
        <div className="schoolcont">
            <label>School Name
                <input className={`${this.props.value.id} school`} type="text" onChange={this.handleEduChange} value={this.props.value.school}></input>
            </label>
        </div>
        <div className="degreecont">
            <label>Degree
                <input className={`${this.props.value.id} degree`} type="text" onChange={this.handleEduChange} value={this.props.value.degree}></input>
            </label>
        </div>
        <div className="edustartcont">
            <label>Date Started
                <input className={`${this.props.value.id} edustart`} type="text" onChange={this.handleEduChange} value={this.props.value.edustart}></input>
            </label>
        </div>
        <div className="eduendcont">
            <label>Date Ended
                <input className={`${this.props.value.id} eduend`} type="text" onChange={this.handleEduChange} value={this.props.value.eduend}></input>
            </label>
        </div>
        <div className="edulocationcont">
            <label>Location
                <input className={`${this.props.value.id} edulocation`} type="text" onChange={this.handleEduChange} value={this.props.value.edulocation}></input>
            </label>
        </div>
        <div className="edudescriptioncont">
            <label>Description
                <input className={`${this.props.value.id} edudescription`} type="text" onChange={this.handleEduChange} value={this.props.value.edudescription}></input>
            </label>
        </div>
    </div>)
            }}  
    }

    

export default EducationForms;