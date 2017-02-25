<?php

/* /Users/itoxa/Sites/cms/themes/timlis/partials/site/header.htm */
class __TwigTemplate_bfc4bc2910ac47e1a4fed16457f750a7103f5233562a49fc82690cd8f2fc8e3c extends Twig_Template
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
        echo "<div class=\"home-lt menu-position0 js-menu\">
      <!-- menu-->
      <div class=\"menu-lvl0\"><a href=\"/\" class=\"menu-lvl0__logo\"><img src=\"";
        // line 3
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/logo.png");
        echo "\" alt=\"logo\"></a>
        <nav class=\"menu-lvl0__nav\">
          <a data-nav-id=\"about\" href=\"\" class=\"menu-lvl0__a _arrow [ js-lvl0 ]\">О компании</a>

          ";
        // line 7
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 8
            echo "            <a data-nav-id=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" href=\"\" class=\"menu-lvl0__a _arrow [ js-lvl0 ]\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "
            </a>
          ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 11
        echo "          <a href=\"\" class=\"menu-lvl0__a\">Сопровождение</a>
          <a href=\"/contacts\" class=\"menu-lvl0__a\">Контакты</a>

        </nav>
      </div>
      ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 17
            echo "      <div data-nav-ref=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"menu-lvl1\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl1__nav\">
            ";
            // line 20
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["record"], "category", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
                // line 21
                echo "              <a data-nav-id=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["category"], "slug", array()), "html", null, true);
                echo "\" href=\"\" class=\"menu-lvl1__a [ js-lvl1 ]\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["category"], "title", array()), "html", null, true);
                echo "</a>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 23
            echo "          </nav>
        </div>
      </div>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 27
        echo "      ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["categories"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 28
            echo "      <div data-nav-ref=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["category"], "slug", array()), "html", null, true);
            echo "\" class=\"menu-lvl2\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl2__nav\">
          ";
            // line 31
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["category"], "projects", array()));
            foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
                // line 32
                echo "            <a href=\"/projects/";
                echo twig_escape_filter($this->env, $this->getAttribute($context["project"], "slug", array()), "html", null, true);
                echo "\" class=\"menu-lvl2__a\">";
                echo twig_escape_filter($this->env, $this->getAttribute($context["project"], "title", array()), "html", null, true);
                echo "</a>
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 33
            echo "  
          </nav>
        </div>
      </div>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 38
        echo "      <div data-nav-ref=\"about\" class=\"menu-lvl1\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl2__nav\">
            <a href=\"/mission\" class=\"menu-lvl2__a\">Миссия</a>
            <a href=\"/team\" class=\"menu-lvl2__a\">Команда</a>
          </nav>
        </div>
      </div>
      
     
      <!-- /menu-->";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/partials/site/header.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 38,  115 => 33,  104 => 32,  100 => 31,  93 => 28,  88 => 27,  79 => 23,  68 => 21,  64 => 20,  57 => 17,  53 => 16,  46 => 11,  34 => 8,  30 => 7,  23 => 3,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<div class=\"home-lt menu-position0 js-menu\">
      <!-- menu-->
      <div class=\"menu-lvl0\"><a href=\"/\" class=\"menu-lvl0__logo\"><img src=\"{{ 'assets/img/logo.png'|theme }}\" alt=\"logo\"></a>
        <nav class=\"menu-lvl0__nav\">
          <a data-nav-id=\"about\" href=\"\" class=\"menu-lvl0__a _arrow [ js-lvl0 ]\">О компании</a>

          {% for record in records %}
            <a data-nav-id=\"{{ record.slug }}\" href=\"\" class=\"menu-lvl0__a _arrow [ js-lvl0 ]\">{{ record.title }}
            </a>
          {% endfor %}
          <a href=\"\" class=\"menu-lvl0__a\">Сопровождение</a>
          <a href=\"/contacts\" class=\"menu-lvl0__a\">Контакты</a>

        </nav>
      </div>
      {% for record in records %}
      <div data-nav-ref=\"{{ record.slug }}\" class=\"menu-lvl1\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl1__nav\">
            {% for category in record.category %}
              <a data-nav-id=\"{{ category.slug }}\" href=\"\" class=\"menu-lvl1__a [ js-lvl1 ]\">{{ category.title }}</a>
            {% endfor %}
          </nav>
        </div>
      </div>
      {% endfor %}
      {% for category in categories %}
      <div data-nav-ref=\"{{ category.slug }}\" class=\"menu-lvl2\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl2__nav\">
          {% for project in category.projects %}
            <a href=\"/projects/{{ project.slug }}\" class=\"menu-lvl2__a\">{{ project.title }}</a>
          {% endfor %}  
          </nav>
        </div>
      </div>
      {% endfor %}
      <div data-nav-ref=\"about\" class=\"menu-lvl1\">
        <div class=\"menu-lvl__abs js-ps-scroll\">
          <nav class=\"menu-lvl2__nav\">
            <a href=\"/mission\" class=\"menu-lvl2__a\">Миссия</a>
            <a href=\"/team\" class=\"menu-lvl2__a\">Команда</a>
          </nav>
        </div>
      </div>
      
     
      <!-- /menu-->", "/Users/itoxa/Sites/cms/themes/timlis/partials/site/header.htm", "");
    }
}
