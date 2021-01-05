import React,{ useEffect, useState} from 'react'

function Variant(props) {
    
    // const [isChecked, setisChecked] = useState({ variant : "RGB-black" })
    
    // const radioHandle = (event) => {
    //     setisChecked (
    //         {
    //             variant : event.target.value
    //         }
    //     )
    // }
    const checkTrue = "bg-blue-200 text-blue-600"
    const checkFalse = "text-gray-400 "
    return (
			<label 
				// htmlFor="type1"
				className={`cursor-pointer mx-1 py-1 px-2 text-sm rounded-lg ${props.name === props.ischecked.variant ? checkTrue : checkFalse }`}>
				<input
					// id="type1"
					className="hidden"
					value={props.name}
                    type="radio"
                    // defaultChecked
                    checked = {props.name === props.ischecked.variant ? true : false}
                    onChange = {props.handler}
                    // checked={props.id === 0 ? true : false}  
                />
				{props.name}
			</label>
	);
}

export default Variant
