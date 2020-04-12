const content = `
<div id="node-3916" class="node node-story node-promoted clearfix" about="/node/3916" typeof="sioc:Item foaf:Document" style="height: auto !important;">
<div class="node-created"> 08.04.2020</div>
<h1>В России выпустили новый Linux-дистрибутив, работающий на процессорах Эльбрус, Байкал и МЦСТ-R</h1> 
<span property="dc:title" content="В России выпустили новый Linux-дистрибутив, работающий на процессорах Эльбрус, Байкал и МЦСТ-R" class="rdf-meta element-hidden"></span>
<span property="sioc:num_replies" content="0" datatype="xsd:integer" class="rdf-meta element-hidden"></span><div class="content" style="height: auto !important;">
<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded">
<p><img src="https://tehnoomsk.ru/sites/default/files/simplydesktop_0.png" width="725" height="408" alt="simplydesktop_0.png"><br>Отечественная компания «Базальт СПО» выпустила новый релиз своей операционной системы Simply Linux («Симпли линукс»). 9-я версия поддерживает не только массовые процессоры, но и российские – архитектуры Эльбрус, MIPS и ARM (Байкал) и RISC (МЦСТ-R).</p><p>В списке «железа», на котором можно запускать 9-ю версию «Симпли линукс», есть все основные российские процессоры (в том числе даже 8-ядерный перспективный «Байкал-М») и не только. Так операционка работает даже на зарубежных Raspberry Pi 4. Конечно, в списке есть и все распространенные x86-процессоры (32- и 64-разрядные).<br>Что входит в состав дистрибутива? Известно, что в него включено более 30 полностью русифицированных программ, ориентированных на решение большинства потребностей пользователя. К комплекту приложен широкий спектр драйверов устройств, что значительно упрощает работу с дополнительным оборудованием.<br>Встроен веб-браузер Chromium 80 c открытым исходным кодом, почтовый клиент Mozilla Thunderbird 68.6.0 и мессенджер Pidgin 2.13.0. В сборке Simply Linux 9 для процессоров ARMv8 вместо Chromium поставляется Firefox ESR 68.6.0.<br>Для редактирования текстовых документов и таблиц использован офисный пакет Libreoffice 6.3.5.2, для работы с растровой и векторной графикой - GIMP (2.10.12) и Inkscape 0.92.4 соответственно. Кроме того, пользователи Simply Linux могут запускать некоторые Windows-приложения с помощью свободной реализации Win32 API – WINE 5.0 (только на x86-совместимых процессорах).<br>Добавим, что ОС Simply Linux 9 создана на основе репозитория девятой платформы проекта «Сизиф» (Sisyphus), который в августе 2019 года выпустила и поддерживает компания «Базальт СПО». Если в дистрибутиве ОС не оказалось нужной пользователю прикладной программы, ее можно установить из этого российского репозитория.</p>
`

export const post = {
    title: 'Какой-то пост',
    content,
    tags: 'Тэг1;тэг2;тэг3;тэг4',
    rubric: 'Рубрика'
}
