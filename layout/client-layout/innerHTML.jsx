export function Inner({html}) {
    return (
        <div dangerouslySetInnerHTML={{__html: html}}></div>
    )
}