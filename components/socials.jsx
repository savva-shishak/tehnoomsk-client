import React from 'react'
import { faFacebook, faOdnoklassniki, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Socials() {
    return (
        <div className="socials">
            <a href="https://www.facebook.com/tehnoomsk" target="_blank" className="socials__link socials__link_facebook">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://ok.ru/group/52043734515854" target="_blank" className="socials__link socials__link_ok">
                <FontAwesomeIcon icon={faOdnoklassniki} />
            </a>
            <a href="https://vk.com/tehnoomsk" target="_blank" className="socials__link socials__link_vk">
                <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="https://www.instagram.com/tehnoomsk/" target="_blank" className="socials__link socials__link_instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="tehnoomsk@gmail.com" target="_blank" className="socials__link socials__link_mail">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    )
}