import React from "react"
import Taskbar from "@/components/taskbar"

const layout = (props) => {
    return(
        <div className="flex mx-auto w-full" style={{ backgroundImage: "url('/gallery/bmw1.png')" }}>
                {props.children}
        </div>
    )
}

export default layout