import React from 'react'

function RenderFlagData (props) {
	const flags = props.flags;

    return (
        <div>
			{flags.queen_present === 0 ? (
				<p style={{"color":"red"}}>There is a not queen present!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
			{flags.multiple_queen === 1 ? (
				<p style={{"color":"red"}}>There are multiple queens present!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
			{flags.possible_mites === 1 ? (
				<p style={{"color":"red"}}>There is a possible mite infestation!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
			{flags.three_day_in_range === 2 ? (
				<p style={{"color":"red"}}>There is a high population of 3-day-old bees!</p>
			) : flags.three_day_in_range === 1 ? (
				<p style={{"color":"red"}}>There is a low population of 3-day-old bees!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
			{flags.six_day_in_range === 2 ? (
				<p style={{"color":"red"}}>There is a high population of 6-day-old bees!</p>
			) : flags.six_day_in_range === 1 ? (
				<p style={{"color":"red"}}>There is a low population of 6-day-old bees!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
			{flags.nine_day_in_range === 2 ? (
				<p style={{"color":"red"}}>There is a high population of 9-day-old bees!</p>
			) : flags.nine_day_in_range === 1 ? (
				<p style={{"color":"red"}}>There is a low population of 9-day-old bees!</p>
			) : (
				<p style={{"color":"white", "fontSize":1}}/>
			)}
        </div>
    )
}
export default RenderFlagData;
