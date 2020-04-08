import React, {useState} from 'react'
import { Row, Col } from "../row"
import { Socials } from "../socials";

export function Footer({rubrics}) {
    const [isCopy, setCopy] = useState(false);

    
    return (
        <div className="footer">
            <Row>
                <Col cols="7">
                    <div className="footer__subtitle">© 2007-2020. Техносфера. Россия.</div>
                    <div className="footer__info">
                        Независимый электронный информационно-технический медиаресурс о российской науке технике и технологиях.<br/>
                        Редакция: info@tehnoomsk.ru. Отдел рекламы: info@tehnoomsk.ru. Телефон: +79776481624 <br/>
                        Архив электронных версий печатных выпусков журнала за 2007-2012гг. доступен в разделе АРХИВ в формате PDF. Автор проекта: Евгений Белкин. Омск. 2010г <br/>
                        При использовании материалов обязательна ссылка на портал tehnoomsk.ru (<CopyButton />)<br/> 
                        Поддержите наш сайт репостами в социальных сетях. Российская техника и технологии нуждаются в вашей поддержке! Мы рады новым друзьям и авторам.<br/>
                        Хомтинг в России - РУСХОСТ
                    </div>
                    <div className="footer__socials">
                        <div className="label">
                            Втупайте в наши группы в соцсетях
                        </div>
                        <Socials />
                    </div>
                </Col>
                <Col>
                    <div className="footer__subtitle">Рубрики:</div>
                    <div className="footer__rubrics">
                        {rubrics.map(({id, name}) => <div key={id} className="footer__rubric">{name}</div>)}
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

function CopyButton() {
    const [isCopy, setCopy] = useState(false);

    function action() {
        copyDomen()
        setCopy(true)
    }

    return (
        <span onClick={action} className={isCopy? "copy" : "nocopy"}>
            { isCopy? "Скопиравано" : "Копировать в буфер обмена"}
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

function copyDomen() {
    let tmp   = document.createElement('INPUT'), // Создаём новый текстовой input
      focus = document.activeElement; // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

    tmp.value = "https://tehnoomsk.ru"; // Временному input вставляем текст для копирования

    document.body.appendChild(tmp); // Вставляем input в DOM
    tmp.select(); // Выделяем весь текст в input
    document.execCommand('copy'); // Магия! Копирует в буфер выделенный текст (см. команду выше)
    document.body.removeChild(tmp); // Удаляем временный input
    focus.focus(); // Возвращаем фокус туда, где был
}