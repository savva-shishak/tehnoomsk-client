import React, {useState, useRef, useEffect} from 'react'
import { Row, Col } from "../row"
import { Socials } from "../socials";
import { Copy } from "../copyBuffer"
import { Metrics, Counters } from './metrics';

export function Footer({rubrics}) {
    

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
                <Col>
                    <div className="footer__subtitle">Рубрики:</div>
                    <div className="footer__rubrics">
                        {rubrics.map(({id, name}) => <div key={id} className="footer__rubric">{name}</div>)}
                    </div>
                    <div className="footer__counters">
                        <Counters />
                        <link rel="amphtml" href="/metrics.amp.html" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
