import React from "react";
import uniqid from "uniqid";

const Work = (props) => {

    const { workstore } = props;

    if (typeof workstore === 'object') {
        

    return (
        <div className="resumesection">
            <div id="cvwork">
            <div id='worktitle'>Work</div>
            <ul className="worklist">
                {workstore.map((work => {
                    return (
                    <li key={uniqid()}>
                        <div className="workblock">
                            <div className ="workfirst">
                                <div className="cvcompany">{work.company}</div>
                                <div className="cvrole">{work.role}</div>
                                <div className="cvworkdates">
                                <div className="cvworkstart">{work.workstart}</div>
                                <div className="workdash">-</div>
                                <div className="cvworkend">{work.workend}</div>
                                </div>
                            </div>
                            <div className="cvworklocation">{work.worklocation}</div>
                            <div className="cvworkdescription">{work.workdescription}</div>
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




export default Work;