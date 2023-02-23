import React from "react";
import { Component } from "react";

class WorkForms extends Component {
    constructor(props) {
        super(props);
        this.handleWorkChange = this.handleWorkChange.bind(this);
    }

    handleWorkChange(e) {
        const text = e.target.value;
        const workclasses = e.target.classList;
        this.props.onChange(workclasses, text);
    }

    render() {

        if (this.props.value) {
            return(
                <div id={this.props.value.id} className="workform">
        <div className="companycont">
            <label>Company
                <input className={`${this.props.value.id} company`} type="text" onChange={this.handleWorkChange} value={this.props.value.company}></input>
            </label>
        </div>
        <div className="rolecont">
            <label>Role
                <input className={`${this.props.value.id} role`} type="text" onChange={this.handleWorkChange} value={this.props.value.role}></input>
            </label>
        </div>
        <div className="workstartcont">
            <label>Date Started
                <input class={`${this.props.value.id} workstart`} type="text" onChange={this.handleWorkChange} value={this.props.value.workstart}></input>
            </label>
        </div>
        <div className="workendcont">
            <label>Date Ended
                <input class={`${this.props.value.id} workend`} type="text" onChange={this.handleWorkChange} value={this.props.value.workend}></input>
            </label>
        </div>
        <div className="worklocationcont">
            <label>Location
                <input class={`${this.props.value.id} worklocation`} type="text" onChange={this.handleWorkChange} value={this.props.value.worklocation}></input>
            </label>
        </div>
        <div className="workdescriptioncont">
            <label>Description
                <input class={`${this.props.value.id} workdescription`} type="text" onChange={this.handleWorkChange} value={this.props.value.workdescription}></input>
            </label>
        </div>
    </div>
            )
        }
    }
}

export default WorkForms;