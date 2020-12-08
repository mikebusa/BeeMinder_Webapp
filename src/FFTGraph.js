import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function FFTGraph (props) {
	const ypoints = props.fftData;
	const numPoints = props.numPoints;
	
	const generateDataPoints = () => {
		var xVal = 20, yVal;
		var dps = [];
		for(var i = 0; i < numPoints; i++) {
			yVal = ypoints ? ypoints[i] : 0;
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
	}
	
	
	const options = {
		theme: "light2", // "light1", "dark1", "dark2"
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "FFT of Latest Report"
		},
		axisX:{
			title:"Frequency (Hz)",
		},
		axisY:{
			title:"Amplitude",
		},
		data: [{
			type: "area",
			dataPoints: generateDataPoints()
		}]
	}
		
	console.log(ypoints)
	console.log(numPoints)
	return (
	<div>
		<CanvasJSChart options = {options} 
			/* onRef={ref => this.chart = ref} */
		/>
		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	</div>
	);
}

export default FFTGraph;                      