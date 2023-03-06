import React, { useState, useEffect } from 'react';
import General from "./components/cvgeneral";
import EducationForms from "./components/educationform";
import WorkForms from "./components/workform";
import uniqid from "uniqid";
import Education from "./components/cveducation";
import Work from "./components/cvwork";
import logo from './logo.svg';
import './App.css';

function App () {
  
  const [generalshow, setGeneralShow] = useState(false);
  const [edushow, setEduShow] = useState(false);
  const [workshow, setWorkShow] = useState(false);
  const [general, setGeneral] = useState({generalin: {first: '', last: '', address: '', phone: '', email: '', role: '', description: '',}, generalstore: ''});
  const [education, setEducation] = useState({
    educationin: [{
    id: uniqid(),
    school: '',
    degree: '',
    edustart: '',
    eduend: '',
    edulocation: '',
    edudescription: '',
    }],
    educationstore: ''});
  const [work, setWork] = useState({
    workin: [{
    id: uniqid(),
    company: '',
    role: '',
    workstart: '',
    workend: '',
    worklocation: '',
    workdescription: '',
  }],
  workstore: ''});

    function EditClick(e) {
      let buttontype = e.target.id;
      if (buttontype === "editgeneral") {
        let genstat = !generalshow;
        setGeneralShow(genstat)
      }
      if (buttontype === "editeduc") {
        let edustat = !edushow
        setEduShow(edustat)
      }
      if (buttontype === "editwork") {
        let workstat = !workshow
        setWorkShow(workstat)
      }
    }

  function HandleGenChange(e) {
    let newState = {...general.generalin};
    newState[e.target.id] = e.target.value;
    setGeneral({generalin: newState})
  }

  function AddEducation(e) {

    let eduinputs = education.educationin;  

    if (typeof eduinputs === "object") {
      let eduincopy = [...education.educationin];
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

      setEducation({educationin: eduincopy})
    }
  }
  
  function HandleEduFieldChange(edufieldclasses, value) {
    let educlasscopy = Array.from(edufieldclasses)
    let eduincopy = [...education.educationin]
    for (const eduentry of eduincopy) {
      if (educlasscopy.includes(eduentry.id)) {
        let edufield = educlasscopy.filter(item => item !== eduentry.id);
        let edutype = edufield[0];
        eduentry[edutype] = value;
      }
    }   
        setEducation({
            educationin: eduincopy
        })
      }

      function OnSubmitEdu(e) {  
          let eduinputscopy = [...education.educationin];
        setEducation({
            educationin: eduinputscopy,
            educationstore: eduinputscopy
        })

        let edustat = !edushow
        setEduShow(edustat)
      }
        
        

  function AddWork(e) {
    let workinputs = work.workin;

    if (typeof workinputs == "object") {
      let workincopy = [...work.workin];
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

      setWork({
          workin: workincopy
      })
    }
  }

  function HandleWorkFieldChange(workfieldclasses, value) {
    let workclasscopy = Array.from(workfieldclasses)
    let workincopy = [...work.workin]
    for (const workentry of workincopy) {
      if (workclasscopy.includes(workentry.id)) {
        let workfield = workclasscopy.filter(item => item !== workentry.id);
        let worktype = workfield[0];
        workentry[worktype] = value;
      }
    }   
        setWork({
            workin: workincopy
        })
      }

    function OnSubmitWork(e) {
      useEffect(() => {
        let workinputscopy = [...work.workin];
        setWork({
            workin: workinputscopy,
            workstore: workinputscopy
        })

        let workstat = !this.state.workshow
      setWorkShow(workstat)
    })
    }

  function OnSubmitGen(e) {
    e.preventDefault();
    const generalstorecopy = [];
    let genincopy = {...general.generalin}
    generalstorecopy.push(genincopy);
    setGeneral({
      generalin: genincopy,
      generalstore: generalstorecopy
    })

    let genstat = !generalshow
      setGeneralShow(genstat)
  }


    return (
    <div className='cvapp'>
      <div id='apptitle'>CV Application</div>
      <div className='formscontainer'>
        <form id="genform" onSubmit={OnSubmitGen} className={generalshow ? 'active' : 'hidden'}>
          <div id="gentitle">General Information</div>
          <div id='genformfirst'>
          <label htmlFor='first'>First Name</label>
          <input type="text" id="first" value={general.generalin.first} onChange={HandleGenChange}></input>
          <label htmlFor='last'>Last Name</label>
          <input type="text" id="last" value={general.generalin.last} onChange={HandleGenChange}></input>
          </div>
          <div id='genformsecond'>
          <label htmlFor='address'>Address</label>
          <input type="text" id="address" value={general.generalin.address} onChange={HandleGenChange}></input>
          <label htmlFor='phone'>Phone</label>
          <input type="text" id="phone" value={general.generalin.phone} onChange={HandleGenChange}></input>
          </div>
          <div id='genformthird'>
          <label htmlFor='email'>Email</label>
          <input type="text" id="email" value={general.generalin.email} onChange={HandleGenChange}></input>
          <label htmlFor='role'>Role</label>
          <input type="text" id="role" value={general.generalin.role} onChange={HandleGenChange}></input>
          </div>
          <div id='genformfourth'>
          <label htmlFor='description'>Profile Description</label>
          <input type="textarea" id="description" value={general.generalin.description} onChange={HandleGenChange}></input>
          </div>
          <button id="genformbtn" type="submit" value="Submit">Submit</button>
        </form>
        <div id="eduformcontainer" className={edushow ? 'active' : 'hidden'}>
          <div id='eduformheader'>Education Information</div>
          <ul>
            {education.educationin.map((eduin) =>  {
                return (
                <li key={eduin.id}>
                <EducationForms
                onChange={HandleEduFieldChange}
                value={eduin}
                />
                </li>
                )
            })}
          </ul>
          <button id="eduadd" onClick={AddEducation}>Add Education</button>
          <button id="edusubmit" type="button" onClick={OnSubmitEdu}>Submit</button>
        </div>
        <div id="workformcontainer" className={workshow ? 'active' : 'hidden'}>
          <div id='workformformheader'>Work Information</div>
          <ul>
            {work.workin.map((woin) => {
              return (
                <li key={woin.id}>
                  <WorkForms
                  onChange={HandleWorkFieldChange}
                  value={woin}
                  />
                </li>
              )
            })}
          </ul>
          <button id="workadd" onClick={AddWork}>Add Work</button>
          <button id="worksubmit" type="button" onClick={OnSubmitWork}>Submit</button>
        </div>
      </div>
      <div className='editcontainer'>
        <button onClick={EditClick} className='editbtn' id="editgeneral">Edit Info</button>
        <button onClick={EditClick} className='editbtn' id="editeduc">Edit Education</button>
        <button onClick={EditClick} className='editbtn' id="editwork">Edit Work</button>
      </div>
      <div id='resume'>
      <General generalstore={general.generalstore} />
      <Education educationstore={education.educationstore} />
      <Work workstore={work.workstore} />
      </div>
    </div>
    )
}

export default App;
