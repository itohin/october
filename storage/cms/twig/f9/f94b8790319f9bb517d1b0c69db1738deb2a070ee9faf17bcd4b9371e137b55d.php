<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/project.htm */
class __TwigTemplate_da4e903da265c198a29d804076cee35348f5e3b159eb1b66a561c8de7248b444 extends Twig_Template
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
        $context["record"] = $this->getAttribute(($context["builderDetails"] ?? null), "record", array());
        // line 2
        $context["displayColumn"] = $this->getAttribute(($context["builderDetails"] ?? null), "displayColumn", array());
        // line 3
        $context["notFoundMessage"] = $this->getAttribute(($context["builderDetails"] ?? null), "notFoundMessage", array());
        // line 4
        echo "



";
        // line 8
        if (($context["record"] ?? null)) {
            // line 9
            echo "    <div class=\"cart-content lt__main _offset1 _scroll js-ps-scroll\">
        <div class=\"cart-content__bg\"></div>
        <div class=\"cart-block\"><a href=\"";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "pdf", array()), "path", array()), "html", null, true);
            echo "\" target=\"_blank\" class=\"cart-block__pdf\">смотреть .PDF</a>
          <h2 class=\"cart-title\"><span>";
            // line 12
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "title", array()), "html", null, true);
            echo "</span></h2>
          <div class=\"cart-block__features\">
            <div class=\"cart-block__text cart-block__date\">";
            // line 14
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</div>
            <div class=\"cart-block__row cart-block__author\">
              <div class=\"cart-block__text cart-block__author-title\">автор:</div>
              <div class=\"cart-block__text cart-block__author-text\">";
            // line 17
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "author", array()), "html", null, true);
            echo "</div>
            </div>
            <div class=\"cart-block__row cart-block__analysts\">
              <div class=\"cart-block__text cart-block__analysts-title\">аналитики:</div>
              <div class=\"cart-block__text cart-block__analysts-text\">";
            // line 21
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "anallytics", array()), "html", null, true);
            echo "</div>
            </div>
            <div class=\"cart-block__row cart-block__links\">
              <div class=\"cart-block__text cart-block__links-title\">ссылки на первоисточник:</div>
\t\t\t";
            // line 25
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["record"] ?? null), "arrLinks", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["link"]) {
                // line 26
                echo "              <a href=\"";
                echo twig_escape_filter($this->env, $context["link"], "html", null, true);
                echo "\" target=\"_blank\" class=\"cart-block__text cart-block__links-link\">";
                echo twig_escape_filter($this->env, $context["link"], "html", null, true);
                echo "</a>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['link'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 27
            echo "  


            </div>
          </div><a href=\"/interest/category/";
            // line 31
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "category", array()), "slug", array()), "html", null, true);
            echo "\" class=\"cart-block__btn cart-it-btn btn-default _razzmatazz\"><span>ИТресное</span></a>
        </div>

        ";
            // line 34
            echo $this->getAttribute(($context["record"] ?? null), "content", array());
            echo "
        <!-- <p class=\"cart-content__text cart-content__text-top\">Компания «Тимлис», крупнейший российский системный интегратор, стала платиновым спонсором Dell EMC Forum 2016, который состоится в среду - 9 ноября 2016 года в ЦВК «Экспоцентр» (Москва, Краснопресненская наб., 14, павильон 3). Dell EMC Forum 2016 — крупнейшее мероприятие для партнеров и заказчиков новой компании Dell EMC, которое объединило ежегодные Форумы решений Dell и EMC Форумы. Мероприятие посвящено основным тенденциям, трансформирующим рынки и бизнес, и будет интересно как представителям бизнес-подразделений организаций, так и профессионалам в области высоких технологий.</p>
        <div class=\"cart-content__business\">
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">1 уровень компании</div>
            <div class=\"cart-content__business-text\">Шаблон общих бизнес-процессов</div>
          </div>
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">2 уровень группы предприятий</div>
            <div class=\"cart-content__business-text\">Шаблон бизнес-процессов, общих для предприятий одного вида деятельности</div>
          </div>
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">3 уровень предприятия</div>
            <div class=\"cart-content__business-text\">Реализация безнес-процессов для конкретного предприятия</div>
          </div>
          <div class=\"cart-content__business-image\"><img src=\"";
            // line 49
            echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/cart/n-business.png");
            echo "\"></div>
        </div>
        <p class=\"cart-content__text\">Компания «Тимлис», крупнейший российский системный интегратор, стала платиновым спонсором Dell EMC Forum 2016, который состоится в среду - 9 ноября 2016 года в ЦВК «Экспоцентр» (Москва, Краснопресненская наб., 14, павильон 3). Dell EMC Forum 2016 — крупнейшее мероприятие для партнеров и заказчиков новой компании Dell EMC, которое объединило ежегодные Форумы решений Dell и EMC Форумы. Мероприятие посвящено основным тенденциям, трансформирующим рынки и бизнес, и будет интересно как представителям бизнес-подразделений организаций, так и профессионалам в области высоких технологий.</p>
        <p class=\"cart-content__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->

        <div class=\"cart-content__arrows\">
\t\t";
            // line 55
            if ($this->getAttribute(($context["record"] ?? null), "prevSlug", array())) {
                echo "\t
        <a href=\"/projects/";
                // line 56
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "prevSlug", array()), "html", null, true);
                echo "\" class=\"cart-content__arrow cart-content__arrow-top\"><i class=\"cart-content__arrow-item cart-content__arrow-item-top\"></i><span class=\"cart-content__arrow-text\">предыдущая карточка</span></a>
\t\t";
            }
            // line 58
            echo "\t\t";
            if ($this->getAttribute(($context["record"] ?? null), "nextSlug", array())) {
                // line 59
                echo "        <a href=\"/projects/";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "nextSlug", array()), "html", null, true);
                echo "\" class=\"cart-content__arrow cart-content__arrow-bottom\"><i class=\"cart-content__arrow-item cart-content__arrow-item-bottom\"></i><span class=\"cart-content__arrow-text\">следующая карточка</span></a>
\t\t";
            }
            // line 61
            echo "        </div>
      </div> 
    </div>

    ";
        } else {
            // line 66
            echo "\t    ";
            echo twig_escape_filter($this->env, ($context["notFoundMessage"] ?? null), "html", null, true);
            echo "
\t";
        }
        // line 68
        echo "    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/project.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  151 => 68,  145 => 66,  138 => 61,  132 => 59,  129 => 58,  124 => 56,  120 => 55,  111 => 49,  93 => 34,  87 => 31,  81 => 27,  70 => 26,  66 => 25,  59 => 21,  52 => 17,  46 => 14,  41 => 12,  37 => 11,  33 => 9,  31 => 8,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set record = builderDetails.record %}
{% set displayColumn = builderDetails.displayColumn %}
{% set notFoundMessage = builderDetails.notFoundMessage %}




{% if record %}
    <div class=\"cart-content lt__main _offset1 _scroll js-ps-scroll\">
        <div class=\"cart-content__bg\"></div>
        <div class=\"cart-block\"><a href=\"{{ record.pdf.path }}\" target=\"_blank\" class=\"cart-block__pdf\">смотреть .PDF</a>
          <h2 class=\"cart-title\"><span>{{ record.title }}</span></h2>
          <div class=\"cart-block__features\">
            <div class=\"cart-block__text cart-block__date\">{{ record.created_at.format('d.m.Y') }}</div>
            <div class=\"cart-block__row cart-block__author\">
              <div class=\"cart-block__text cart-block__author-title\">автор:</div>
              <div class=\"cart-block__text cart-block__author-text\">{{ record.author }}</div>
            </div>
            <div class=\"cart-block__row cart-block__analysts\">
              <div class=\"cart-block__text cart-block__analysts-title\">аналитики:</div>
              <div class=\"cart-block__text cart-block__analysts-text\">{{ record.anallytics }}</div>
            </div>
            <div class=\"cart-block__row cart-block__links\">
              <div class=\"cart-block__text cart-block__links-title\">ссылки на первоисточник:</div>
\t\t\t{% for link in record.arrLinks %}
              <a href=\"{{ link }}\" target=\"_blank\" class=\"cart-block__text cart-block__links-link\">{{ link }}</a>
            {% endfor %}  


            </div>
          </div><a href=\"/interest/category/{{ record.category.slug }}\" class=\"cart-block__btn cart-it-btn btn-default _razzmatazz\"><span>ИТресное</span></a>
        </div>

        {{ record.content | raw }}
        <!-- <p class=\"cart-content__text cart-content__text-top\">Компания «Тимлис», крупнейший российский системный интегратор, стала платиновым спонсором Dell EMC Forum 2016, который состоится в среду - 9 ноября 2016 года в ЦВК «Экспоцентр» (Москва, Краснопресненская наб., 14, павильон 3). Dell EMC Forum 2016 — крупнейшее мероприятие для партнеров и заказчиков новой компании Dell EMC, которое объединило ежегодные Форумы решений Dell и EMC Форумы. Мероприятие посвящено основным тенденциям, трансформирующим рынки и бизнес, и будет интересно как представителям бизнес-подразделений организаций, так и профессионалам в области высоких технологий.</p>
        <div class=\"cart-content__business\">
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">1 уровень компании</div>
            <div class=\"cart-content__business-text\">Шаблон общих бизнес-процессов</div>
          </div>
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">2 уровень группы предприятий</div>
            <div class=\"cart-content__business-text\">Шаблон бизнес-процессов, общих для предприятий одного вида деятельности</div>
          </div>
          <div class=\"cart-content__business-item\">
            <div class=\"cart-content__business-title\">3 уровень предприятия</div>
            <div class=\"cart-content__business-text\">Реализация безнес-процессов для конкретного предприятия</div>
          </div>
          <div class=\"cart-content__business-image\"><img src=\"{{ 'assets/img/cart/n-business.png'|theme }}\"></div>
        </div>
        <p class=\"cart-content__text\">Компания «Тимлис», крупнейший российский системный интегратор, стала платиновым спонсором Dell EMC Forum 2016, который состоится в среду - 9 ноября 2016 года в ЦВК «Экспоцентр» (Москва, Краснопресненская наб., 14, павильон 3). Dell EMC Forum 2016 — крупнейшее мероприятие для партнеров и заказчиков новой компании Dell EMC, которое объединило ежегодные Форумы решений Dell и EMC Форумы. Мероприятие посвящено основным тенденциям, трансформирующим рынки и бизнес, и будет интересно как представителям бизнес-подразделений организаций, так и профессионалам в области высоких технологий.</p>
        <p class=\"cart-content__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->

        <div class=\"cart-content__arrows\">
\t\t{% if record.prevSlug %}\t
        <a href=\"/projects/{{ record.prevSlug }}\" class=\"cart-content__arrow cart-content__arrow-top\"><i class=\"cart-content__arrow-item cart-content__arrow-item-top\"></i><span class=\"cart-content__arrow-text\">предыдущая карточка</span></a>
\t\t{% endif %}
\t\t{% if record.nextSlug %}
        <a href=\"/projects/{{ record.nextSlug }}\" class=\"cart-content__arrow cart-content__arrow-bottom\"><i class=\"cart-content__arrow-item cart-content__arrow-item-bottom\"></i><span class=\"cart-content__arrow-text\">следующая карточка</span></a>
\t\t{% endif %}
        </div>
      </div> 
    </div>

    {% else %}
\t    {{ notFoundMessage }}
\t{% endif %}
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/project.htm", "");
    }
}
