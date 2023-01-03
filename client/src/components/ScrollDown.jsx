import React from 'react'

// Variables
const end = ">"

function ScrollDown() {
    return (
        <div style={{ marginLeft: "46%", marginTop: "-20%", display: "flex", flexDirection: "column", justifyContent: "space-between", transform: "rotate(90deg)", height: "1403px", width: "120px", color: "#05fdd8" }}>

            <div className='scroll-down'>
                <p>Scroll Down</p>
                <p style={{ fontSize: "25px" }}>{ end }</p>
            </div>

            <div className='scroll-down'>
                <p>Scroll Down</p>
                <p style={{ fontSize: "25px" }}>{ end }</p>
            </div>

        </div>
    )
}

export default ScrollDown