import React from "react";

const Work = (props) => {

    const { workstore } = props;

    if (typeof workstore === 'object') {
        

    return (
        <div className="resumesection">
            <div id="cvwork">
            <div id='worktitle'>Work</div>
                {workstore.map((work => {
                    return (
                        <div id={work.id} className="workblock">
                            <div className ="workfirst">
                                <div className="cvcompany">{work.company}</div>
                                <div className="cvrole">{work.role}</div>
                                <div className="cvworkstart">{work.workstart}</div>
                                <div className="cvworkend">{work.workend}</div>
                            </div>
                            <div className="cvworklocation">{work.worklocation}</div>
                            <div className="cvworkdescription">{work.workdescription}</div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )

}
}




export default Work;