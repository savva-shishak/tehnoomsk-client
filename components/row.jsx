import React from 'react'

export function Row({children, reverse}) {
    if (!reverse) {
        return <div className="row">{children}</div>
    }

    let classes = 'row';

    const suffixes = reverse.split(' ');

    if (suffixes.includes("sm")) {
        classes += ' row_reverse-sm'
    }

    if (suffixes.includes("md")) {
        classes += ' row_reverse-md'
    }

    if (suffixes.includes("lg")) {
        classes += ' row_reverse-lg'
    }

    if (suffixes.includes("xl")) {
        classes += ' row_reverse-xl'
    }

    return (
        <div  className={classes}>{children}</div>
    )
}

export function Col({cols, sm, md, lg, xl, children}) {

    let classes;

    if (sm || md || lg || xl) {
        classes =
            getClassBySize(sm, "sm") + 
            getClassBySize(md, "md") + 
            getClassBySize(lg, "lg") + 
            getClassBySize(xl, "xl");

        if (cols) {
            classes += " col-" + cols;
        }
    } else {
        classes = (cols? 'col-' + cols : "col")
    }

    return (
        <div className={classes}>
            <div className="col__gutter">
                <div className="col__wrraper">
                    {children}
                </div>
            </div>
        </div>
    )
}

function getClassBySize(cols, suffix) {
    if (!cols) return "";

    if (cols == "auto") {
        return " col-" + suffix;
    }

    return ` col-${suffix}-${cols}`;
}