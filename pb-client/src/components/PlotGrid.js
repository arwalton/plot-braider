import Plot from "./Plot";

function PlotGrid(props){
    return(
        <div>
            <h2>This is a PlotGrid Component</h2>
            <p>It will contain Plot elements</p>
            <Plot />
            <Plot />
            <Plot />
        </div>
    )
}

export default PlotGrid;