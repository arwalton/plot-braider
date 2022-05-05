import PlotGrid from "./PlotGrid.js";
import PlotEventDetail from "./PlotEventDetail.js";

function PlotPage(props) {
    return (
        <div>
            <h1>This is the PlotPage Component.</h1>
            <p>You're working on {props.story}</p>
            <p>It will be a top level component for certain pages</p>
            <p>It will have a PlotEventDetail</p>
            <PlotEventDetail title="Test Event Detail"/>
            <p>It will also have a PlotGrid component</p>
            <PlotGrid />
        </div>
    )
}

export default PlotPage;