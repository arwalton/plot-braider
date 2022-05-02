import PlotHeader from "./PlotHeader";
import PlotEvent from "./PlotEvent";

function Plot(props){
    return (
        <div>
            <h3>This is a Plot component.</h3>
            <p>It will contain a single PlotHeader.</p>
            <p>It will have multiple PlotEvents</p>
            <PlotHeader />
            <PlotEvent />
            <PlotEvent />
            <PlotEvent />
        </div>
    )
}

export default Plot;