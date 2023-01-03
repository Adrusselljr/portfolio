import React from 'react'

function Header() {
    return (
        <div style={{ marginLeft: "65px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px", width: "850px" }}>

            <div>
                <h1 style={{ fontSize: "50px", color: "#05fdd8" }}>Aaron Russell Jr</h1>
            </div>

            <div>
                <p style={{ fontSize: "30px", color: "#8d8d8d", marginTop: "45px" }}>Web Developer</p>
            </div>

        </div>
    )
}

export default Header