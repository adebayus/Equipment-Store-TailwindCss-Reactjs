import React from 'react'
import Card from './Card'

function ProductPage() {
    return (
        <div className="sm:container mt-10 mx-auto p-4" >
            <div className="w-full mb-6 pb-3 border border-b-2 border-t-0 border-r-0 border-l-0">
                <h1 className=" text-3xl tracking-wide text-gray-700 font-extrabold" >List Product</h1>
            </div>
            <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  h-auto">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default ProductPage
