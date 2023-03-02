import React from "react";
import uniqid from "uniqid";


const Education = (props) => {

    const { educationstore } = props;

    if (typeof educationstore === 'object') {
        

    return (
        <div className="resumesection">
            <div id="cveducation">
            <div id='edtitle'>Education</div>
            <ul className="edulist">
                {educationstore.map((edu => {
                    return (
                    <li key={uniqid()}>
                        <div  className="edublock">
                            <div className ="edufirst">
                                <div className="cvschool">{edu.school}</div>
                                <div className="cvdegree">{edu.degree}</div>
                                <div className="cvedudates">
                                <div className="cvedustart">{edu.edustart}</div>
                                <div className="edudash">-</div>
                                <div className="cveduend">{edu.eduend}</div>
                                </div>
                            </div>
                            <div className="cvedulocation">{edu.edulocation}</div>
                            <div className="cvedudescription">{edu.edudescription}</div>
                        </div>
                    </li>
                    )
                }))}
            </ul>
            </div>
        </div>
    )

}
}




export default Education;