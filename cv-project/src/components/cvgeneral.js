
import React from "react"

const General = (props) => {

    const { generalstore } = props;

    if (typeof generalstore === 'object') {
    const gendata = generalstore[0];
    

return (
  <div className='resumesection'>
        <div id='cvgeneral'>
          <div id='cvnameline'>
            <div id='cvfirst'>{gendata.first}</div>
            <div id='cvlast'>{gendata.last}</div>
          </div>
          <div id='cvcontactline'>
            <div id='cvaddress'>{gendata.address}</div>
            <div id='cvphone'>{gendata.phone}</div>
            <div id='cvemail'>{gendata.email}</div>
          </div>
          <div id='cvrole'>{gendata.role}</div>
          <div id='cvdescription'>{gendata.description}</div> 
        </div>
  </div>

)

}

}

export default General;