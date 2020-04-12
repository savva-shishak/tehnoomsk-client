import { useState } from "react"
export function Copy({children, str}) {
    const [isCopy, setCopy] = useState(false);

    function action() {
        copyStr(str || children)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }

    return (
        <span>
            {children} (<span onClick={action} className={isCopy? "copy" : "nocopy"}>{ isCopy? "Скопировано" : "Копировать в буфер обмена"}</span>)
            <style>{`
                .nocopy {
                    color: blue;
                    cursor: pointer;
                    text-decoration: underline;
                }

                .nocopy:hover {
                    color: #06008a;
                }

                .copy {
                    color: green;
                }
            `}</style>
        </span>
    )
}

function copyStr(str) {
    let tmp = document.createElement('INPUT'),
    focus = document.activeElement;
    
    tmp.value = str

    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    focus.focus();
}