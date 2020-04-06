import React from "react";
import { Socials } from "../socials";

export function Header() {
    return (
        <div className="header">
            <div className="header__socials">
                <Socials />
            </div>
            <div className="header__img">
                <img src="/header/main.png"/>
            </div>
            
        </div>
    )
}