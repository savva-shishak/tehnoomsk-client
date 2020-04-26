import React, {useState, useRef, useEffect} from 'react'
import NextLink from 'next/link'
import { Link as AppLink } from "../Link"
import { Row, Col } from "../row"
import { Socials } from "../socials";
import { Copy } from "../copyBuffer"
import { Counters } from './metrics';
import { getRubrics } from "../../api"  

export const Footer = ({}) =>  {
    const [rubrics, setRubrics] = useState(null)

    async function loadRubrics() {
        setRubrics(await getRubrics())
    }

    if (rubrics == null) {
        loadRubrics()
    }
    
    return (
    <div className="footer">
        <Row>
            <Col cols="12" lg="7">
                <div className="footer__subtitle">© 2007-2020. Техносфера. Россия.</div>
                <div className="footer__info">
                    Независимый электронный информационно-технический медиаресурс о российской науке технике и технологиях.<br/>
                    Редакция: <Copy>info@tehnoomsk.ru</Copy>. <br/> Отдел рекламы: <Copy>info@tehnoomsk.ru</Copy>. Телефон: +79776481624 <br/>
                    Архив электронных версий печатных выпусков журнала за 2007-2012гг. доступен в разделе АРХИВ в формате PDF. Автор проекта: Евгений Белкин. Омск. 2010г <br/>
                    При использовании материалов обязательна ссылка на портал <Copy str="https://tehnoomsk.ru" >tehnoomsk.ru</Copy> <br/> 
                    Поддержите наш сайт репостами в социальных сетях. Российская техника и технологии нуждаются в вашей поддержке! Мы рады новым друзьям и авторам.<br/>
                    Хостинг в России - РУСХОСТ
                </div>
                <div className="footer__socials">
                    <div className="label">
                        Вступайте в наши группы в соцсетях
                    </div>
                    <Socials />
                </div>
            </Col>
            <Col cols="12" lg="5">
                <div className="footer__subtitle">Рубрики:</div>
                <div className="footer__rubrics">
                    <NextLink href="/">
                        <div className="footer__rubric">Все</div>
                    </NextLink>
                    {(rubrics || []).map(({id, name}) => {
                        return ( 
                            <AppLink rubric={name}>
                                <div key={id} title={name} className="footer__rubric">{limitSymbols(name, 13)}</div>
                            </AppLink>
                        )
                    } )}
                </div>
                <div className="footer__counters">
                    <Counters />
                </div>
            </Col>
        </Row>
    </div>
)
}

function limitSymbols(text, limit) {
    if (text.length <= limit) {
        return text
    }

    return text.slice(0, limit - 3) + "..."
}