function PlotEventDetail(props){
  let isReadOnly = true;
  return(
    <div>
      <h3>This is a PlotEventDetail</h3>
      <form>
        <label htmlFor="plot-event-text">{ props.title }</label>
        <textarea id="plot-event-text"
                  name="plot-event-text"
                  cols="200"
                  rows="20"
                  readOnly={isReadOnly}
                  placeholder="Describe this plot event in more detail">
        </textarea>
      </form>
    </div>
  )
}

export default PlotEventDetail;