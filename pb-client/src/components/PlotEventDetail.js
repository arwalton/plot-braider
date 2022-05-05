import { useState } from 'react';

function PlotEventDetail(props){
  
  const [isReadOnly, setIsReadOnly] = useState(true);

  return(
    <div>
      <h3>This is a PlotEventDetail</h3>
      <label htmlFor="plot-event-text">{ props.title }</label>
      <textarea id="plot-event-text"
                name="plot-event-text"
                cols="200"
                rows="20"
                readOnly={isReadOnly}
                placeholder="Describe this plot event in more detail">
      </textarea>
      <button onClick={()=>{
          setIsReadOnly(!isReadOnly);
          console.log(isReadOnly)}}>
        {isReadOnly ? "Unlock" : "Lock"}
      </button>
    </div>
  )
}

export default PlotEventDetail;