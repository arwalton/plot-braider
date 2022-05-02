import PlotHeader from "./PlotHeader";

function Plot(props){
    return (
        <div>
            <h3>This is a Plot component.</h3>
            <p>It will contain a single PlotHeader.</p>
            <p>It will have multiple PlotEvents</p>
            <PlotHeader />
        </div>
    )
}

export default Plot;