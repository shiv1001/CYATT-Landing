import React from 'react'

const featuredProducts = [
    "../images/hero_1.jpg",
    "../images/hero_2.jpg",
    "../images/hero_3.jpg",
];

function Slider () {
    return <div className="w-full select-none flex items-center justify-center flex-col py-5">
        <img src={featuredProducts[0]} alt="" />
        <p>Hello</p>
    </div>
}

export default Slider