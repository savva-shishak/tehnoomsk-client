import { useRef, useEffect } from "react"

export function Inner({html}) {
    // const block = useRef(null)

    // useEffect(() => {
    //     block.current.innerHTML = html
    // })
    
    return (
        <div dangerouslySetInnerHTML={{__html: html}}></div>
    )
}