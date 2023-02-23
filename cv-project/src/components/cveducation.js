import React from "react";

const Education = (props) => {

    const { educationstore } = props;

    if (typeof educationstore === 'object') {
        

    return (
        <div className="resumesection">
            <div id="cveducation">
            <div id='edtitle'>Education</div>
                {educationstore.map((edu => {
                    return (
                        <div id={edu.id} className="edublock">
                            <div className ="edufirst">
                                <div className="cvschool">{edu.school}</div>
                                <div className="cvdegree">{edu.degree}</div>
                                <div className="cvedustart">{edu.edustart}</div>
                                <div className="cveduend">{edu.eduend}</div>
                            </div>
                            <div className="cvedulocation">{edu.edulocation}</div>
                            <div className="cvedudescription">{edu.edudescription}</div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )

}
}




export default Education;