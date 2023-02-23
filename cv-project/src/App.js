import React, { Component } from 'react';
import General from "./components/cvgeneral";
import EducationForms from "./components/educationform";
import WorkForms from "./components/workform";
import uniqid from "uniqid";
import Education from "./components/cveducation";
import Work from "./components/cvwork";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.editClick = this.editClick.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.handleGenChange = this.handleGenChange.bind(this);
    this.handleEduFieldChange = this.handleEduFieldChange.bind(this);
    this.handleWorkFieldChange = this.handleWorkFieldChange.bind(this);
    this.onSubmitGen = this.onSubmitGen.bind(this);
    this.onSubmitEdu = this.onSubmitEdu.bind(this);
    this.onSubmitWork = this.onSubmitWork.bind(this);

    this.state = {
      generalshow: false,
      edushow: false,
      workshow: false,
      general: {
      generalin: {
        first: '',
        last: '',
        address: '',
        phone: '',
        email: '',
        role: '',
        description: '',
      },
      generalstore: '',
    },
      education: {
        educationin: '',
        educationstore: '',
      },
      work: {
        workin: '',
        workstore: ''
      }
    }
  }

  editClick(e) {
    let buttontype = e.target.id;
    if (buttontype === "editgeneral") {
      let genstat = !this.state.generalshow
      console.log(genstat);
      this.setState({
        generalshow: genstat
      })
    }
    if (buttontype === "editeduc") {
      let edustat = !this.state.edushow
      console.log(edustat);
      this.setState({
        edushow: edustat
      })
    }
    if (buttontype === "editwork") {
      let workstat = !this.state.workshow
      console.log(workstat);
      this.setState({
        workshow: workstat
      })
    }
  }

  handleGenChange(e) {
    let newState = {...this.state.generalin};
    newState[e.target.id] = e.target.value;
    this.setState({
      general: {
        generalin: newState
      }
    });
  }

  addEducation(e) {
    let eduinputs = this.state.education.educationin;

    if (typeof eduinputs !== "object") {
      let eduin = [{
        id: uniqid(),
        school: '',
        degree: '',
        edustart: '',
        eduend: '',
        edulocation: '',
        edudescription: '',
      }]
      this.setState({
        education: {
          educationin: eduin
        }
      })
    }

    if (typeof eduinputs == "object") {
      let eduincopy = [...this.state.education.educationin];
      let neweduin = {
        id: uniqid(),
        school: '',
        degree: '',
        edustart: '',
        eduend: '',
        edulocation: '',
        edudescription: '',
      };
      eduincopy.push(neweduin);

      this.setState({
        education: {
          educationin: eduincopy
        }
      })
    }
  }
  
  handleEduFieldChange(edufieldclasses, value) {
    let educlasscopy = Array.from(edufieldclasses)
    let eduincopy = [...this.state.education.educationin]
    for (const eduentry of eduincopy) {
      if (educlasscopy.includes(eduentry.id)) {
        let edufield = educlasscopy.filter(item => item !== eduentry.id);
        let edutype = edufield[0];
        eduentry[edutype] = value;
      }
    }   
        this.setState({
          education: {
            educationin: eduincopy
          } 
        })
      }

      onSubmitEdu(e) {
        let educationstorecopy;
        if (typeof this.state.education.educationstore !== "object") {
          educationstorecopy = [];
        }
        if (typeof this.state.education.educationstore === "object") {
          educationstorecopy = [...this.state.education.educationstore]
        }
        if (typeof this.state.education.educationin === "object") {
          let eduinputs = [...this.state.education.educationin];
          for (const input of eduinputs) {
            educationstorecopy.push(input);
          }
          }
        this.setState({
          education: {
            educationstore: educationstorecopy
          }

        })

        let edustat = !this.state.edushow
      this.setState({
        edushow: edustat
      })

        }
        
        

  addWork(e) {
    let workinputs = this.state.work.workin;

    if (typeof workinputs !== "object") {
      let workinnew = [{
        id: uniqid(),
        company: '',
        role: '',
        workstart: '',
        workend: '',
        worklocation: '',
        workdescription: '',
      }]
      this.setState({
        work: {
          workin: workinnew
        }
      })
    }

    if (typeof workinputs == "object") {
      let workincopy = [...this.state.work.workin];
      let newworkin = {
        id: uniqid(),
        company: '',
        role: '',
        workstart: '',
        workend: '',
        worklocation: '',
        workdescription: '',
      };
      workincopy.push(newworkin);

      this.setState({
        work: {
          workin: workincopy
        }
      })
    }

  }

  handleWorkFieldChange(workfieldclasses, value) {
    let workclasscopy = Array.from(workfieldclasses)
    let workincopy = [...this.state.work.workin]
    for (const workentry of workincopy) {
      if (workclasscopy.includes(workentry.id)) {
        let workfield = workclasscopy.filter(item => item !== workentry.id);
        let worktype = workfield[0];
        workentry[worktype] = value;
      }
    }   
        this.setState({
          work: {
            workin: workincopy
          } 
        })
      }

      onSubmitWork(e) {
        let workstorecopy;
        if (typeof this.state.work.workstore !== "object") {
          workstorecopy = [];
        }
        if (typeof this.state.work.workstore === "object") {
          workstorecopy = [...this.state.work.workstore]
        }
        if (typeof this.state.work.workin === "object") {
          let workinputs = [...this.state.work.workin];
          for (const input of workinputs) {
            workstorecopy.push(input);
          }
          }
        this.setState({
          work: {
            workstore: workstorecopy
          }

        })

        let workstat = !this.state.workshow
      this.setState({
        workshow: workstat
      })

        }

  onSubmitGen(e) {
    e.preventDefault();
    const generalstorecopy = [];
    generalstorecopy.push(this.state.generalin);
    this.setState({
      storedforms: {
      generalstore: generalstorecopy
      }
    })
  }


  render() {
    const { general, education, work } = this.state;
    let eduforms;
    if (typeof education.educationin === "object") {
    eduforms = education.educationin.map(eduform => (
      <EducationForms
        onChange={this.handleEduFieldChange}
        value={education.educationin[eduform]}
      />
    ))
    };

    let workforms;
    if (typeof work.workin === "object") {
    workforms = work.workin.map(workform => (
      <WorkForms
        onChange={this.handleWorkFieldChange}
        value={work.workin[workform]}
      />
    ))
    };

    return (
    <div className='cvapp'>
      <div className='formscontainer'>
        <form id="genform" onSubmit={this.onSubmitGen} className={this.state.generalshow ? 'active' : 'hidden'}>
          <div id="gentitle">General Information</div>
          <label htmlFor='first'>First Name</label>
          <input type="text" id="first" value={general.generalin.first} onChange={this.handleGenChange}></input>
          <label htmlFor='last'>Last Name</label>
          <input type="text" id="last" value={general.generalin.last} onChange={this.handleGenChange}></input>
          <label htmlFor='address'>Address</label>
          <input type="text" id="address" value={general.generalin.address} onChange={this.handleGenChange}></input>
          <label htmlFor='phone'>Phone</label>
          <input type="text" id="phone" value={general.generalin.phone} onChange={this.handleGenChange}></input>
          <label htmlFor='email'>Email</label>
          <input type="text" id="email" value={general.generalin.email} onChange={this.handleGenChange}></input>
          <label htmlFor='role'>Role</label>
          <input type="text" id="role" value={general.generalin.role} onChange={this.handleGenChange}></input>
          <label htmlFor='description'>Profile Description</label>
          <input type="textarea" id="description" value={general.generalin.description} onChange={this.handleGenChange}></input>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <div id="eduformcontainer" className={this.state.edushow ? 'active' : 'hidden'}>
          {eduforms}
          <button id="eduadd" onClick={this.addEducation}>Add Education</button>
          <button id="edusubmit" type="button" onClick={this.onSubmitEdu}>Submit</button>
        </div>
        <div id="workformcontainer" className={this.state.workshow ? 'active' : 'hidden'}>
          {workforms}
          <button id="workadd" onClick={this.addWork}>Add Work</button>
          <button id="worksubmit" type="button" onClick={this.onSubmitWork}>Submit</button>
        </div>
      </div>
      <div className='editcontainer'>
        <button onClick={this.editClick} className='editbtn' id="editgeneral">Edit Info</button>
        <button onClick={this.editClick} className='editbtn' id="editeduc">Edit Education</button>
        <button onClick={this.editClick} className='editbtn' id="editwork">Edit Work</button>
      </div>
      <div id='resume'>
      <General generalstore={general.generalstore} />
      <Education educationstore={education.educationstore} />
      <Work workstore={work.workstore} />
      </div>
    </div>
    )
  }

}

export default App;