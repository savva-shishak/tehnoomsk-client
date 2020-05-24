import { Inner } from "./innerHTML";

export function Counters() {
    return <div className="metrics">
      <div className="metrics__container">
        <div className="metric__item mteric__liveinternet">  <Inner html={liveinternet} /> </div>
        <div className="metric__item mteric__mail">          <Inner html={mail} /> </div>
        <div className="metric__item mteric__mailLogo">      <Inner html={mailLogo} /> </div>
        <div className="metric__item mteric__yandexInformer"><Inner html={yandexInformer} /> </div>
        <div className="metric__item mteric__yandexCounter"> <Inner html={yandexCounter} /> </div>
        <div className="metric__item mteric__openStat">      <Inner html={openStat} /> </div>
        <div className="metric__item mteric__top100">        <Inner html={top100} /> </div>
      </div>
    </div>
}

export const google = `
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle"
      style="display:inline-block;width:250px;height:300px"
      data-ad-client="ca-pub-5861414964700744"
      data-ad-slot="4121636715"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
`

const liveinternet = `
<!--LiveInternet counter-->
          <script type="text/javascript"><!--
 document.write("<a href='//www.liveinternet.ru/click' " +
                    "target=_blank><img src='//counter.yadro.ru/hit?t20.7;r" +
                    escape(document.referrer) + ((typeof (screen) == "undefined") ? "" : ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
                    ";" + Math.random() +
                    "' alt='' title='LiveInternet: показано число просмотров за 24" +
                    " часа, посетителей за 24 часа и за сегодня' " +
                    "border='0' width='88' height='31'><\/a>")
//--></script>
<!--/LiveInternet-->
`

const yandexCounter = `
<!-- Yandex.Metrika counter -->
          <script type="text/javascript">
            (function (d, w, c) {
              (w[c] = w[c] || []).push(function () {
                try {
                  w.yaCounter23905831 = new Ya.Metrika({id: 23905831,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true});
                } catch (e) {
                }
              });

              var n = d.getElementsByTagName("script")[0],
                      s = d.createElement("script"),
                      f = function () {
                        n.parentNode.insertBefore(s, n);
                      };
              s.type = "text/javascript";
              s.async = true;
              s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

              if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
              } else {
                f();
              }
            })(document, window, "yandex_metrika_callbacks");
          </script>
          <noscript><div><img src="//mc.yandex.ru/watch/23905831" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <!-- /Yandex.Metrika counter -->
        `

const mailLogo = `
<!-- Rating@Mail.ru logo -->
          <a href="http://top.mail.ru/jump?from=2200045">
            <img src="//top-fwz1.mail.ru/counter?id=2200045;t=571;l=1" 
                 style="border:0;" height="40" width="88" alt="Рейтинг@Mail.ru" />
</a>
<!-- //Rating@Mail.ru logo -->
`

const mail = `
<!-- Rating@Mail.ru counter -->
<script type="text/javascript">
  var _tmr = _tmr || [];
  _tmr.push({id: "2200045", type: "pageView", start: (new Date()).getTime()});
  (function (d, w, id) {
    if (d.getElementById(id))
      return;
    var ts = d.createElement("script");
    ts.type = "text/javascript";
    ts.async = true;
    ts.id = id;
    ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
    var f = function () {
      var s = d.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ts, s);
    };
    if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
    } else {
      f();
    }
  })(document, window, "topmailru-code");
</script>
<noscript>
  <div style="position:absolute;left:-10000px;">
    <img src="//top-fwz1.mail.ru/counter?id=2200045;js=na" style="border:0;" height="1" width="1" alt="Рейтинг@Mail.ru" />
  </div>
</noscript>
<!-- //Rating@Mail.ru counter -->
          `

const yandexInformer = `
<!-- Yandex.Metrika informer -->
  <a href="http://metrika.yandex.ru/stat/?id=23905831&amp;from=informer"
      target="_blank" rel="nofollow">
      <img src="//bs.yandex.ru/informer/23905831/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
      style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try {
                    Ya.Metrika.informer({i: this, id: 23905831, lang: 'ru'});
                    return false
                  } catch (e) {
                }"/>
  </a>
<!-- /Yandex.Metrika informer -->
`

const openStat = `
<!--Openstat--><span id="openstat2097937"></span><script type="text/javascript">					var openstat = {counter: 2097937, image: 5050, next: openstat, track_links: "all"};
  document.write(unescape("%3Cscript%20src=%22http" + (("https:" == document.location.protocol) ? "s" : "") + "://openstat.net/cnt.js%22%20defer=%22defer%22%3E%3C/script%3E"));</script>		
<!--/Openstat-->
`

const top100 = `

<!-- begin of Top100 code -->
<script id="top100Counter" type="text/javascript" src="http://counter.rambler.ru/top100.jcn?3121001"></script>
<noscript>
  <a href="http://top100.rambler.ru/navi/3121001/">
    <img src="http://counter.rambler.ru/top100.cnt?3121001" alt="Rambler's Top100" border="0" />
  </a>
</noscript>
  <!-- end of Top100 code -->
`

export function GoogleAdSense() {
  return <div dangerouslySetInnerHTML={{__html: google}} className="adsense"></div>
}