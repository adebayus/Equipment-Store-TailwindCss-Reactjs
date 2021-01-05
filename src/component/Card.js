import React, { useState } from 'react'
import Variant from './Variant'

function Card() {
    const [product, setProduct] = useState({
        listProduct : [
            {
                nameProduct : "Steel Series Arctis",
                type : "Gaming Headphone",
                stock : 10,
                variant : [ "RGB-black", "RGB-White", "Non-White", "Non-Black" ]
            }
        ]
    })

    const [isChecked, setisChecked] = useState({ variant : "RGB-black" })
    
    const radioHandle = (event) => {
        setisChecked (
            {
                variant : event.target.value
            }
        )
    }

    var indexProduct = product.listProduct.findIndex( item => item.nameProduct ===  "Steel Series Arctis" )
    var found = product.listProduct[indexProduct]
    console.log(indexProduct)
    return (
        <div className="shadow-md max-w-xxs w-full bg-white rounded-b-lg rounded-t-lg my-10 mx-auto " >
            <div className="flex-none w-full rounded-t-lg">
                <img className="inset-0 rounded-t-lg object-contain h-44 w-full object-center" src="https://media.steelseriescdn.com/thumbs/filer_public/0b/9d/0b9dda7e-dae6-4032-a22f-3634a13e20bf/a7p_white_buyimg_02.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png" ></img>
            </div>
            <div className="p-4">
                <h1 className="text-xl font-semibold">{product.listProduct[indexProduct].nameProduct}</h1>
    <p className="text-sm font-medium text-gray-500"> Stock { product.listProduct[indexProduct].stock > 5 ? "> 5" : "< 5"} </p>
                <div className="-mx-1 flex flex-wrap mt-2 mb-1">
                    {
                        found.variant.map(
                            (item,index) => {
                                
                                return(
                                    <Variant name={item} id={index} key={index} handler= {radioHandle} ischecked={isChecked}/>
                                )
                            }
                        )
                    }
                </div>
                <div>
                    <button className="shadow-md mb-2 text-md tracking-wider font-medium rounded-md bg-blue-500 w-full text-white p-1 hover:bg-blue-700 " >Buy</button>
                    <button className="shadow-md text-md tracking-wider font-medium rounded-md bg-gray-500 w-full text-white p-1 hover:bg-gray-700" >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
