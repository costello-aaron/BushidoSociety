import React from "react"

const layout = (props) => {
    return(
        <div className="flex mx-auto w-full " style={{ backgroundImage: "url('/gallery/bike2.png')" }}>
                {props.children}
        </div>
    )
}

export default layout