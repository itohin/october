<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/home.htm */
class __TwigTemplate_4039a6e19833cd1307d36fb56bb446cb39cd06f7d0b65a19ebd077d2c58048cd extends Twig_Template
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
        echo "<div class=\"home-lt__main\">
        <div class=\"home-lt__abs js-ps-scroll\">
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <!-- slick-->


          <div class=\"home-slick-title\">
            <div>
              <h3 class=\"home-slick-title__h3\">управление ресурсами промышленного предприятия</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление финансами</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление запасами</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление имуществом</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление ПЕРСОНАЛОМ</h3>
            </div>
          </div>
          <div class=\"home-slick-image\">
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 29
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 32
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld2.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 35
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld3.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 38
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld4.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 41
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld5.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
          </div>
          <!-- support--><a href=\"\" class=\"home-support-btn btn-default _razzmatazz\"><span>Сопровождение</span><img src=\"";
        // line 44
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow_white.svg");
        echo "\"></a>
          <div class=\"home-support-image\">
            <div class=\"parallax-wrapper-small\"><img src=\"";
        // line 46
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/depositphotos.jpg");
        echo "\" alt=\"\"></div>
          </div>
        </div>

        
        <!-- news-->
        <div data-news-id=\"newsall\" class=\"home-lt__news-content\">
          <div class=\"news-all\">
            <div class=\"news-all-h2\">НОВОСТИ</div>
            <ul class=\"news-all-ul\">

\t\t\t";
        // line 57
        $context["lastYear"] = 1;
        // line 58
        echo "
\t\t\t";
        // line 59
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["years"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["year"]) {
            // line 60
            echo "
\t\t\t\t<li class=\"news-all-li\">
                <div class=\"news-all-milstone _start\"><span class=\"news-all-milstone__year\">";
            // line 62
            echo twig_escape_filter($this->env, $this->getAttribute($context["year"], "year", array()), "html", null, true);
            echo "</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>

              ";
            // line 65
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["news"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["new"]) {
                // line 66
                echo "
              ";
                // line 67
                if (($this->getAttribute($context["new"], "year", array()) == $this->getAttribute($context["year"], "year", array()))) {
                    // line 68
                    echo "
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"/news/";
                    // line 70
                    echo twig_escape_filter($this->env, $this->getAttribute($context["new"], "slug", array()), "html", null, true);
                    echo "\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">";
                    // line 72
                    echo twig_escape_filter($this->env, $this->getAttribute($context["new"], "day", array()), "html", null, true);
                    echo ".";
                    echo twig_escape_filter($this->env, $this->getAttribute($context["new"], "month", array()), "html", null, true);
                    echo "</div>
                      <h3 class=\"news-all-article__h3\">";
                    // line 73
                    echo twig_escape_filter($this->env, $this->getAttribute($context["new"], "title", array()), "html", null, true);
                    echo "</h3>
                      <p class=\"news-all-article__p\">";
                    // line 74
                    echo twig_escape_filter($this->env, strip_tags(call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["new"], "content", array()), 150))), "html", null, true);
                    echo "</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"";
                    // line 75
                    echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
                    echo "\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"";
                    // line 77
                    echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["new"], "attachments", array()), "path", array()), "html", null, true);
                    echo "\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>

              ";
                }
                // line 81
                echo "
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['new'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 83
            echo "
\t\t\t";
            // line 84
            $context["lastYear"] = ($this->getAttribute($context["year"], "year", array()) - 1);
            // line 85
            echo "
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['year'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 87
        echo "
\t\t\t<li class=\"news-all-li\">
                <div class=\"news-all-milstone _end\"><span class=\"news-all-milstone__year\">";
        // line 89
        echo twig_escape_filter($this->env, ($context["lastYear"] ?? null), "html", null, true);
        echo "</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>

            </ul>
          </div>
        </div>
        <!-- /news-->
      </div>


\t<div class=\"home-lt__news-all js-ps-scroll\">
        <h2 class=\"home-news-h2\">НОВОСТИ</h2>

    ";
        // line 102
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 103
            echo "        <article class=\"home-news-article\">
            
                    <a href=\"/news/";
            // line 105
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"home-news-article__a\">
                

                <h2 class=\"home-news-article__h2\">";
            // line 108
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "</h2>

                <p class=\"home-news-article__p\">";
            // line 110
            echo twig_escape_filter($this->env, strip_tags(call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["record"], "content", array()), 150))), "html", null, true);
            echo "</p>

                <p class=\"home-news-article__date\">";
            // line 112
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</p>

                
                    </a>
           
        </article>
    ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 119
            echo "        <article class=\"no-data\">";
            echo twig_escape_filter($this->env, ($context["noRecordsMessage"] ?? null), "html", null, true);
            echo "</article>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 121
        echo "



\t<a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"";
        // line 125
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
        echo "\"></a>
    


</div>


    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/home.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  252 => 125,  246 => 121,  237 => 119,  225 => 112,  220 => 110,  215 => 108,  209 => 105,  205 => 103,  200 => 102,  184 => 89,  180 => 87,  173 => 85,  171 => 84,  168 => 83,  161 => 81,  154 => 77,  149 => 75,  145 => 74,  141 => 73,  135 => 72,  130 => 70,  126 => 68,  124 => 67,  121 => 66,  117 => 65,  111 => 62,  107 => 60,  103 => 59,  100 => 58,  98 => 57,  84 => 46,  79 => 44,  73 => 41,  67 => 38,  61 => 35,  55 => 32,  49 => 29,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<div class=\"home-lt__main\">
        <div class=\"home-lt__abs js-ps-scroll\">
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <div class=\"home-lt__pseudocol\"></div>
          <!-- slick-->


          <div class=\"home-slick-title\">
            <div>
              <h3 class=\"home-slick-title__h3\">управление ресурсами промышленного предприятия</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление финансами</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление запасами</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление имуществом</h3>
            </div>
            <div>
              <h3 class=\"home-slick-title__h3\">управление ПЕРСОНАЛОМ</h3>
            </div>
          </div>
          <div class=\"home-slick-image\">
            <div>
              <div class=\"parallax-wrapper\"><img src=\"{{ 'assets/img/home/sld.jpg'|theme }}\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"{{ 'assets/img/home/sld2.jpg'|theme }}\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"{{ 'assets/img/home/sld3.jpg'|theme }}\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"{{ 'assets/img/home/sld4.jpg'|theme }}\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"{{ 'assets/img/home/sld5.jpg'|theme }}\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
          </div>
          <!-- support--><a href=\"\" class=\"home-support-btn btn-default _razzmatazz\"><span>Сопровождение</span><img src=\"{{ 'assets/img/home/t_arrow_white.svg'|theme }}\"></a>
          <div class=\"home-support-image\">
            <div class=\"parallax-wrapper-small\"><img src=\"{{ 'assets/img/home/depositphotos.jpg'|theme }}\" alt=\"\"></div>
          </div>
        </div>

        
        <!-- news-->
        <div data-news-id=\"newsall\" class=\"home-lt__news-content\">
          <div class=\"news-all\">
            <div class=\"news-all-h2\">НОВОСТИ</div>
            <ul class=\"news-all-ul\">

\t\t\t{% set lastYear = 1 %}

\t\t\t{% for year in years %}

\t\t\t\t<li class=\"news-all-li\">
                <div class=\"news-all-milstone _start\"><span class=\"news-all-milstone__year\">{{ year.year }}</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>

              {% for new in news %}

              {% if new.year == year.year %}

              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"/news/{{ new.slug }}\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">{{ new.day }}.{{ new.month }}</div>
                      <h3 class=\"news-all-article__h3\">{{ new.title }}</h3>
                      <p class=\"news-all-article__p\">{{ html_limit(new.content , 150) | striptags }}</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"{{ new.attachments.path }}\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>

              {% endif %}

\t\t\t{% endfor %}

\t\t\t{% set lastYear = year.year - 1 %}

\t\t\t{% endfor %}

\t\t\t<li class=\"news-all-li\">
                <div class=\"news-all-milstone _end\"><span class=\"news-all-milstone__year\">{{ lastYear }}</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>

            </ul>
          </div>
        </div>
        <!-- /news-->
      </div>


\t<div class=\"home-lt__news-all js-ps-scroll\">
        <h2 class=\"home-news-h2\">НОВОСТИ</h2>

    {% for record in records %}
        <article class=\"home-news-article\">
            
                    <a href=\"/news/{{ record.slug }}\" class=\"home-news-article__a\">
                

                <h2 class=\"home-news-article__h2\">{{ record.title }}</h2>

                <p class=\"home-news-article__p\">{{ html_limit(record.content , 150) | striptags }}</p>

                <p class=\"home-news-article__date\">{{ record.created_at.format('d.m.Y') }}</p>

                
                    </a>
           
        </article>
    {% else %}
        <article class=\"no-data\">{{ noRecordsMessage }}</article>
    {% endfor %}




\t<a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></a>
    


</div>


    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->", "/Users/itoxa/Sites/cms/themes/timlis/pages/home.htm", "");
    }
}
