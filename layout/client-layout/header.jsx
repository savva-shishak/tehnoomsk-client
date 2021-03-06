import React from "react";
import Link from "next/link";
import { Socials } from "../../components/socials";

export function Header() {
    return (
        <div className="header">
            <div className="header__socials">
                <Socials />
            </div>
            <Link href="/" as="/">
                <a className="header__img">
                    <img src="/header/main.png"/>
                </a>
            </Link>
        </div>
    )
}