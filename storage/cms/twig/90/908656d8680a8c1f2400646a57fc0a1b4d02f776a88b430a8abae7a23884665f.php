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
        $context["records"] = $this->getAttribute(($context["builderList"] ?? null), "records", array());
        // line 2
        $context["displayColumn"] = $this->getAttribute(($context["builderList"] ?? null), "displayColumn", array());
        // line 3
        $context["noRecordsMessage"] = $this->getAttribute(($context["builderList"] ?? null), "noRecordsMessage", array());
        // line 4
        $context["detailsPage"] = $this->getAttribute(($context["builderList"] ?? null), "detailsPage", array());
        // line 5
        $context["detailsKeyColumn"] = $this->getAttribute(($context["builderList"] ?? null), "detailsKeyColumn", array());
        // line 6
        $context["detailsUrlParameter"] = $this->getAttribute(($context["builderList"] ?? null), "detailsUrlParameter", array());
        // line 7
        echo "
<div class=\"home-lt__main\">
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
        // line 36
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 39
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld2.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 42
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld3.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 45
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld4.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
            <div>
              <div class=\"parallax-wrapper\"><img src=\"";
        // line 48
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/sld5.jpg");
        echo "\" alt=\"\" class=\"home-slick-image__img\"></div>
            </div>
          </div>
          <!-- support--><a href=\"\" class=\"home-support-btn btn-default _razzmatazz\"><span>Сопровождение</span><img src=\"";
        // line 51
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow_white.svg");
        echo "\"></a>
          <div class=\"home-support-image\">
            <div class=\"parallax-wrapper-small\"><img src=\"";
        // line 53
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/depositphotos.jpg");
        echo "\" alt=\"\"></div>
          </div>
        </div>
        <!-- news-->
        <div data-news-id=\"newsall\" class=\"home-lt__news-content\">
          <div class=\"news-all\">
            <div class=\"news-all-h2\">НОВОСТИ</div>
            <ul class=\"news-all-ul\">
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _start\"><span class=\"news-all-milstone__year\">2016</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">21.12</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"";
        // line 70
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
        echo "\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"";
        // line 72
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/news-all/photo-1.jpg");
        echo "\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">07.10</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"";
        // line 80
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
        echo "\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"";
        // line 82
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/news-all/photo-2.jpg");
        echo "\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _middle\"><span class=\"news-all-milstone__year\">2015</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">07.10</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"";
        // line 93
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
        echo "\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"";
        // line 95
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/news-all/photo-3.jpg");
        echo "\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _end\"><span class=\"news-all-milstone__year\">2014</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>
            </ul>
          </div>
        </div>
        <!-- /news-->
      </div>


\t<div class=\"home-lt__news-all js-ps-scroll\">
        <h2 class=\"home-news-h2\">НОВОСТИ</h2>
    ";
        // line 109
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 110
            echo "        <article class=\"home-news-article\">
            ";
            // line 112
            echo "            ";
            ob_start();
            // line 113
            echo "                ";
            if (($context["detailsPage"] ?? null)) {
                // line 114
                echo "                    <a href=\"";
                echo $this->env->getExtension('Cms\Twig\Extension')->pageFilter(($context["detailsPage"] ?? null), array(($context["detailsUrlParameter"] ?? null) => $this->getAttribute($context["record"], ($context["detailsKeyColumn"] ?? null))));
                echo "\" class=\"home-news-article__a\">
                ";
            }
            // line 116
            echo "
                <h2 class=\"home-news-article__h2\">";
            // line 117
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "</h2>

                <p class=\"home-news-article__p\">";
            // line 119
            echo call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["record"], "content", array()), 150));
            echo " ...</p>

                <p class=\"home-news-article__date\">";
            // line 121
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</p>

                ";
            // line 123
            if (($context["detailsPage"] ?? null)) {
                // line 124
                echo "                    </a>
                ";
            }
            // line 126
            echo "            ";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
            // line 127
            echo "        </article>
    ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 129
            echo "        <article class=\"no-data\">";
            echo twig_escape_filter($this->env, ($context["noRecordsMessage"] ?? null), "html", null, true);
            echo "</article>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 131
        echo "

";
        // line 133
        if (($this->getAttribute(($context["records"] ?? null), "lastPage", array()) > 1)) {
            // line 134
            echo "
\t<a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"";
            // line 135
            echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
            echo "\"></a>
    
";
        }
        // line 138
        echo "
</div>



      <!-- <div class=\"home-lt__news-all js-ps-scroll\">
        <h2 class=\"home-news-h2\">НОВОСТИ</h2>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
            <a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"";
        // line 161
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
        echo "\"></a>
      </div> -->
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
        return array (  276 => 161,  251 => 138,  245 => 135,  242 => 134,  240 => 133,  236 => 131,  227 => 129,  221 => 127,  218 => 126,  214 => 124,  212 => 123,  207 => 121,  202 => 119,  197 => 117,  194 => 116,  188 => 114,  185 => 113,  182 => 112,  179 => 110,  174 => 109,  157 => 95,  152 => 93,  138 => 82,  133 => 80,  122 => 72,  117 => 70,  97 => 53,  92 => 51,  86 => 48,  80 => 45,  74 => 42,  68 => 39,  62 => 36,  31 => 7,  29 => 6,  27 => 5,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set records = builderList.records %}
{% set displayColumn = builderList.displayColumn %}
{% set noRecordsMessage = builderList.noRecordsMessage %}
{% set detailsPage = builderList.detailsPage %}
{% set detailsKeyColumn = builderList.detailsKeyColumn %}
{% set detailsUrlParameter = builderList.detailsUrlParameter %}

<div class=\"home-lt__main\">
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
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _start\"><span class=\"news-all-milstone__year\">2016</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">21.12</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"{{ 'assets/img/news-all/photo-1.jpg'|theme }}\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">07.10</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"{{ 'assets/img/news-all/photo-2.jpg'|theme }}\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _middle\"><span class=\"news-all-milstone__year\">2015</span><span class=\"news-all-milstone__pin\"></span></div>
              </li>
              <li class=\"news-all-li\">
                <article class=\"news-all-article\"><a href=\"\" class=\"news-all-article__a\">
                    <div class=\"news-all-article__colL\">
                      <div class=\"news-all-article__date\">07.10</div>
                      <h3 class=\"news-all-article__h3\">ТИМЛИС представил новую облачную платформу – T.Cloud</h3>
                      <p class=\"news-all-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы. Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного платформы</p>
                      <button class=\"home-news-btn _newsall\"><span>Подробнее</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></button>
                    </div>
                    <div class=\"news-all-article__colR\"><img src=\"{{ 'assets/img/news-all/photo-3.jpg'|theme }}\" alt=\"image\" class=\"news-all-article__img\"></div></a></article>
              </li>
              <li class=\"news-all-li\">
                <div class=\"news-all-milstone _end\"><span class=\"news-all-milstone__year\">2014</span><span class=\"news-all-milstone__pin\"></span></div>
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
            {# Use spaceless tag to remove spaces inside the A tag. #}
            {% spaceless %}
                {% if detailsPage %}
                    <a href=\"{{ detailsPage|page({ (detailsUrlParameter): attribute(record, detailsKeyColumn) }) }}\" class=\"home-news-article__a\">
                {% endif %}

                <h2 class=\"home-news-article__h2\">{{ record.title }}</h2>

                <p class=\"home-news-article__p\">{{ html_limit(record.content , 150) | raw }} ...</p>

                <p class=\"home-news-article__date\">{{ record.created_at.format('d.m.Y') }}</p>

                {% if detailsPage %}
                    </a>
                {% endif %}
            {% endspaceless %}
        </article>
    {% else %}
        <article class=\"no-data\">{{ noRecordsMessage }}</article>
    {% endfor %}


{% if records.lastPage > 1 %}

\t<a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></a>
    
{% endif %}

</div>



      <!-- <div class=\"home-lt__news-all js-ps-scroll\">
        <h2 class=\"home-news-h2\">НОВОСТИ</h2>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
        <article class=\"home-news-article\"><a href=\"\" class=\"home-news-article__a\">
            <h2 class=\"home-news-article__h2\">ТИМЛИС представил новую облачную платформу – T.Cloud</h2>
            <p class=\"home-news-article__p\">Компания «Техносерв» объявляет о запуске нового направления бизнеса — облачного  ...</p>
            <p class=\"home-news-article__date\">11.11.2016</p></a></article>
            <a href=\"\" data-news-target=\"newsall\" class=\"home-news-btn _home js-openNewsAll\"><span>Все новости</span><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"></a>
      </div> -->
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->", "/Users/itoxa/Sites/cms/themes/timlis/pages/home.htm", "");
    }
}
