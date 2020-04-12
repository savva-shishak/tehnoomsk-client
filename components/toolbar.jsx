import Link from "next/link"

export function Toolbar({onSelect, value}) {
    return (
        <div className="toolbar">
            <div className="toolbar__tab">Баннеры</div>
            <div className="toolbar__tab">Статьи</div>
        </div>
    )
}