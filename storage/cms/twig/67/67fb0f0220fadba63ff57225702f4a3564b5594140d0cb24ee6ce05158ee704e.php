<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/contacts.htm */
class __TwigTemplate_eedddbc78b0300dbc22897c3469c91dda608001b277ec2dcf4e0cbbbb44dce94 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo $this->env->getExtension('CMS')->startBlock('scripts'        );
        // line 2
        echo "    <script defer src=\"js/contacts.js\"></script>
    <script src=\"https://api-maps.yandex.ru/2.1/?lang=ru_RU\" type=\"text/javascript\"></script>
";
        // line 1
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 5
        echo "
      <div class=\"lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"cnts\">
          <h1 class=\"cnts__h1\">КОНТАКТЫ</h1>
          <div class=\"cnts__container\">
            <div class=\"cnts__colL\">
              <dl class=\"cnts__dl\">
                <dt class=\"cnts__dt\">Адрес</dt>
                <dd class=\"cnts__dd\">";
        // line 13
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "address", array()), "html", null, true);
        echo "</dd>
                <dt class=\"cnts__dt\">Телефон</dt>
                <dd class=\"cnts__dd\">";
        // line 15
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "phone", array()), "html", null, true);
        echo "</dd>
                <dt class=\"cnts__dt\">Почта</dt>
                <dd class=\"cnts__dd\"><a href=\"mailto:";
        // line 17
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "mail", array()), "html", null, true);
        echo "\" class=\"cnts__dd-mail\">";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "mail", array()), "html", null, true);
        echo "</a></dd>
              </dl>
              <div class=\"cnts__load\"><a target=\"_blank\" href=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "pdf", array()), "path", array()), "html", null, true);
        echo "\" class=\"cnts__load-a\">скачать реквизиты ООО «ТИМЛИС»</a></div>
            </div>
            <div id=\"map\" class=\"cnts__colR\"></div>
          </div>
        </div>
      </div>
      <footer class=\"cnts-footer\">
        <div class=\"cnts-footer__colL\">© 2016 ТИМЛИС-Технолоджи. Все права защищены.</div>
        <div class=\"cnts-footer__colR\">Брендинг и дизайн <a href=\"\">FROMstudio</a>. Разработано <a href=\"\">Rocket Station</a>.</div>
      </footer>
    </div>
    <!-- JS Bottom-->
\t<script type=\"text/javascript\">

\tvar latitude = ";
        // line 33
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "latitude", array()), "html", null, true);
        echo "

\tvar longitude = ";
        // line 35
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "longitude", array()), "html", null, true);
        echo "


\t  ymaps.ready(init);
\t    var myMap,
\t        myPlacemark;

\t    function init(){     
\t        myMap = new ymaps.Map(\"map\", {
\t            center: [latitude, longitude],
\t            zoom: 14
\t        });


\t        myMap.geoObjects
\t        .add(new ymaps.Placemark([latitude, longitude], {
\t            balloonContent: 'Timlis'
\t        }, {
\t            preset: 'islands#governmentCircleIcon',
\t            iconColor: '#3b5998'
\t        }));
\t\t    }
\t</script>

    <!-- /JS Bottom-->
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/contacts.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  76 => 35,  71 => 33,  54 => 19,  47 => 17,  42 => 15,  37 => 13,  27 => 5,  25 => 1,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% put scripts %}
    <script defer src=\"js/contacts.js\"></script>
    <script src=\"https://api-maps.yandex.ru/2.1/?lang=ru_RU\" type=\"text/javascript\"></script>
{% endput %}

      <div class=\"lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"cnts\">
          <h1 class=\"cnts__h1\">КОНТАКТЫ</h1>
          <div class=\"cnts__container\">
            <div class=\"cnts__colL\">
              <dl class=\"cnts__dl\">
                <dt class=\"cnts__dt\">Адрес</dt>
                <dd class=\"cnts__dd\">{{ record.address }}</dd>
                <dt class=\"cnts__dt\">Телефон</dt>
                <dd class=\"cnts__dd\">{{ record.phone }}</dd>
                <dt class=\"cnts__dt\">Почта</dt>
                <dd class=\"cnts__dd\"><a href=\"mailto:{{ record.mail }}\" class=\"cnts__dd-mail\">{{ record.mail }}</a></dd>
              </dl>
              <div class=\"cnts__load\"><a target=\"_blank\" href=\"{{ record.pdf.path }}\" class=\"cnts__load-a\">скачать реквизиты ООО «ТИМЛИС»</a></div>
            </div>
            <div id=\"map\" class=\"cnts__colR\"></div>
          </div>
        </div>
      </div>
      <footer class=\"cnts-footer\">
        <div class=\"cnts-footer__colL\">© 2016 ТИМЛИС-Технолоджи. Все права защищены.</div>
        <div class=\"cnts-footer__colR\">Брендинг и дизайн <a href=\"\">FROMstudio</a>. Разработано <a href=\"\">Rocket Station</a>.</div>
      </footer>
    </div>
    <!-- JS Bottom-->
\t<script type=\"text/javascript\">

\tvar latitude = {{ record.latitude }}

\tvar longitude = {{ record.longitude }}


\t  ymaps.ready(init);
\t    var myMap,
\t        myPlacemark;

\t    function init(){     
\t        myMap = new ymaps.Map(\"map\", {
\t            center: [latitude, longitude],
\t            zoom: 14
\t        });


\t        myMap.geoObjects
\t        .add(new ymaps.Placemark([latitude, longitude], {
\t            balloonContent: 'Timlis'
\t        }, {
\t            preset: 'islands#governmentCircleIcon',
\t            iconColor: '#3b5998'
\t        }));
\t\t    }
\t</script>

    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/contacts.htm", "");
    }
}
