<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/team.htm */
class __TwigTemplate_ad4b97dbf6341d1890298bbe5781b0750cb38aabefcac9ba9646333dc711def1 extends Twig_Template
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
        echo "    <script defer src=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/team.js");
        echo "\"></script>
";
        // line 1
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 4
        echo "
<div class=\"team-content lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"team-col\"></div>
        <div class=\"team-feature\">
          <h2 class=\"team-title team-title__team\">Команда</h2>
          <div class=\"team-items\">
          ";
        // line 10
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 11
            echo "            <div class=\"team-item\">
              <div class=\"team-item__block\">
                <div class=\"team-item__title\">";
            // line 13
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "name", array()), "html", null, true);
            echo "</div>

                <div class=\"team-item__text\">";
            // line 15
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "role", array()), "html", null, true);
            echo "</div>
              </div>
            </div>
           ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "  
          </div>
          <h2 class=\"team-title team-title__vacancy\">Вакансии</h2>
          <section class=\"team-vacancies\">
          ";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["vacancys"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["vacancy"]) {
            // line 23
            echo "            <div class=\"team-vacancy\">
              <div class=\"team-vacancy__name\">
                <h3 class=\"team-vacancy__title\">";
            // line 25
            echo twig_escape_filter($this->env, $this->getAttribute($context["vacancy"], "title", array()), "html", null, true);
            echo "</h3>
                <p class=\"team-vacancy__text\">зарплата от 90 000 руб.</p>
                <p class=\"team-vacancy__text\">требуемый опыт работы: 3—6 лет</p>
              </div>
              <div class=\"team-vacancy__desc\">
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Обязанности:</div>
                  <li class=\"team-vacancy__desc-item\">поиск и работа с поставщиками комплектующих для производства нашей продукции (Европа, Китай, СНГ)</li>
                  <li class=\"team-vacancy__desc-item\">работа по размещению заказов, переговоры по стоимости</li>
                  <li class=\"team-vacancy__desc-item\">создание и проверка технической документации</li>
                  <li class=\"team-vacancy__desc-item\">работа с собственным конструкторским отделом (контроль чертежей)</li>
                  <li class=\"team-vacancy__desc-item\">создание технологических инструкций для сборочного цеха (последовательность всех этапов для производства изделия)</li>
                  <li class=\"team-vacancy__desc-item\">взаимодействие с техотделом и производством</li>
                  <li class=\"team-vacancy__desc-item\">пред- и послепродажная техническая поддержка заказчиков</li>
                  <li class=\"team-vacancy__desc-item\">участие в организации и проведении семинаров, тренингов заказчиков компании</li>
                  <li class=\"team-vacancy__desc-item\">участие в обеспечении продукции всеми необходимыми нормативными документами и технической документацией</li>
                  <li class=\"team-vacancy__desc-item\">консультации (телефонная поддержка) клиентов по вопросам правильной эксплуатации оборудования и устранения неисправностей</li>
                  <li class=\"team-vacancy__desc-item\">ведение отчетности по установленному и отремонтированному оборудованию</li>
                  <li class=\"team-vacancy__desc-item\">диагностика электрооборудования, гарантийных случаев</li>
                </ul>
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Требования:</div>
                  <li class=\"team-vacancy__desc-item\">хорошие знания английского языка</li>
                  <li class=\"team-vacancy__desc-item\">высшее техническое образование</li>
                  <li class=\"team-vacancy__desc-item\">знания по электротехнике и электронике‚ знание механики, современной электрики и систем управления, хорошая техническая подготовка</li>
                  <li class=\"team-vacancy__desc-item\">умение читать сборочные чертежи, электрические схемы</li>
                  <li class=\"team-vacancy__desc-item\">опытный пользователь ПК</li>
                </ul>
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Мы предлагаем:</div>
                  <li class=\"team-vacancy__desc-item\">сложную, интересную работу на реальный результат</li>
                  <li class=\"team-vacancy__desc-item\">достойную оплату труда – система оплаты прозрачная</li>
                  <li class=\"team-vacancy__desc-item\">профессиональное обучение и повышение квалификации за счет компании</li>
                  <li class=\"team-vacancy__desc-item\">современный комфортный офис, оборудованное рабочее место</li>
                  <li class=\"team-vacancy__desc-item\">работу в молодой дружной команде отличных специалистов, всегда готовых помочь</li>
                  <li class=\"team-vacancy__desc-item\">оформление по ТК РФ</li>
                  <li class=\"team-vacancy__desc-item\">график работы с 9.00 до 17.00</li>
                  <li class=\"team-vacancy__desc-item\">адекватное руководство</li>
                </ul><a href=\"\" class=\"team-vacancy__resume-btn btn-default _razzmatazz _size195x35\">Отправить резюме</a>
              </div>
            </div>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['vacancy'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 66
        echo "    
          </section>
        </div>
      </div>
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/team.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 66,  73 => 25,  69 => 23,  65 => 22,  59 => 18,  49 => 15,  44 => 13,  40 => 11,  36 => 10,  28 => 4,  26 => 1,  21 => 2,  19 => 1,);
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
    <script defer src=\"{{ 'assets/js/team.js'|theme }}\"></script>
{% endput %}

<div class=\"team-content lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"team-col\"></div>
        <div class=\"team-feature\">
          <h2 class=\"team-title team-title__team\">Команда</h2>
          <div class=\"team-items\">
          {% for record in records %}
            <div class=\"team-item\">
              <div class=\"team-item__block\">
                <div class=\"team-item__title\">{{ record.name }}</div>

                <div class=\"team-item__text\">{{ record.role }}</div>
              </div>
            </div>
           {% endfor %}  
          </div>
          <h2 class=\"team-title team-title__vacancy\">Вакансии</h2>
          <section class=\"team-vacancies\">
          {% for vacancy in vacancys %}
            <div class=\"team-vacancy\">
              <div class=\"team-vacancy__name\">
                <h3 class=\"team-vacancy__title\">{{ vacancy.title }}</h3>
                <p class=\"team-vacancy__text\">зарплата от 90 000 руб.</p>
                <p class=\"team-vacancy__text\">требуемый опыт работы: 3—6 лет</p>
              </div>
              <div class=\"team-vacancy__desc\">
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Обязанности:</div>
                  <li class=\"team-vacancy__desc-item\">поиск и работа с поставщиками комплектующих для производства нашей продукции (Европа, Китай, СНГ)</li>
                  <li class=\"team-vacancy__desc-item\">работа по размещению заказов, переговоры по стоимости</li>
                  <li class=\"team-vacancy__desc-item\">создание и проверка технической документации</li>
                  <li class=\"team-vacancy__desc-item\">работа с собственным конструкторским отделом (контроль чертежей)</li>
                  <li class=\"team-vacancy__desc-item\">создание технологических инструкций для сборочного цеха (последовательность всех этапов для производства изделия)</li>
                  <li class=\"team-vacancy__desc-item\">взаимодействие с техотделом и производством</li>
                  <li class=\"team-vacancy__desc-item\">пред- и послепродажная техническая поддержка заказчиков</li>
                  <li class=\"team-vacancy__desc-item\">участие в организации и проведении семинаров, тренингов заказчиков компании</li>
                  <li class=\"team-vacancy__desc-item\">участие в обеспечении продукции всеми необходимыми нормативными документами и технической документацией</li>
                  <li class=\"team-vacancy__desc-item\">консультации (телефонная поддержка) клиентов по вопросам правильной эксплуатации оборудования и устранения неисправностей</li>
                  <li class=\"team-vacancy__desc-item\">ведение отчетности по установленному и отремонтированному оборудованию</li>
                  <li class=\"team-vacancy__desc-item\">диагностика электрооборудования, гарантийных случаев</li>
                </ul>
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Требования:</div>
                  <li class=\"team-vacancy__desc-item\">хорошие знания английского языка</li>
                  <li class=\"team-vacancy__desc-item\">высшее техническое образование</li>
                  <li class=\"team-vacancy__desc-item\">знания по электротехнике и электронике‚ знание механики, современной электрики и систем управления, хорошая техническая подготовка</li>
                  <li class=\"team-vacancy__desc-item\">умение читать сборочные чертежи, электрические схемы</li>
                  <li class=\"team-vacancy__desc-item\">опытный пользователь ПК</li>
                </ul>
                <ul class=\"team-vacancy__desc-list\">
                  <div class=\"team-vacancy__desc-title\">Мы предлагаем:</div>
                  <li class=\"team-vacancy__desc-item\">сложную, интересную работу на реальный результат</li>
                  <li class=\"team-vacancy__desc-item\">достойную оплату труда – система оплаты прозрачная</li>
                  <li class=\"team-vacancy__desc-item\">профессиональное обучение и повышение квалификации за счет компании</li>
                  <li class=\"team-vacancy__desc-item\">современный комфортный офис, оборудованное рабочее место</li>
                  <li class=\"team-vacancy__desc-item\">работу в молодой дружной команде отличных специалистов, всегда готовых помочь</li>
                  <li class=\"team-vacancy__desc-item\">оформление по ТК РФ</li>
                  <li class=\"team-vacancy__desc-item\">график работы с 9.00 до 17.00</li>
                  <li class=\"team-vacancy__desc-item\">адекватное руководство</li>
                </ul><a href=\"\" class=\"team-vacancy__resume-btn btn-default _razzmatazz _size195x35\">Отправить резюме</a>
              </div>
            </div>
          {% endfor %}    
          </section>
        </div>
      </div>
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/team.htm", "");
    }
}
