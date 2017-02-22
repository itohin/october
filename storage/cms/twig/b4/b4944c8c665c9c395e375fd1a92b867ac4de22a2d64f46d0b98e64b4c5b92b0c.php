<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/interest.htm */
class __TwigTemplate_b2936f4483f9ce5613737adcb1fb8bd2a6444a3aafa8d593f62aeb95ab1b2160 extends Twig_Template
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
";
        // line 8
        echo $this->env->getExtension('CMS')->startBlock('scripts'        );
        // line 9
        echo "    <script defer src=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/interest.js");
        echo "\"></script>
";
        // line 8
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 11
        echo "

      <div class=\"lt__main _scroll js-ps-scroll\">
        <div class=\"ist\">
          <div class=\"ist-head\">
            <div class=\"ist-head__container\">
              <h1 class=\"ist-head__h1\">ИТресное</h1>
              <form action=\"\" class=\"ist-filter\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"\">ДОБЫЧА НЕФТИ</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">УПРАВЛЕНИЕ</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">SAP</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">АЛРОСА</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                </div>
                <button type=\"submit\" class=\"ist-filter__submit\">
                  <div class=\"ist-filter__submit-tip\">Отфильтровать</div>
                </button>
              </form>
            </div>
          </div>


          <div class=\"ist-articles\">

\t\t ";
        // line 51
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 52
            echo "
            <div class=\"ist-article\">

            ";
            // line 56
            echo "

              \t\t<div class=\"ist-article__colL\"><a href=\"/interest/";
            // line 58
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "attachments", array()), "path", array()), "html", null, true);
            echo "\" alt=\"img\" class=\"ist-article__img\"></a></div>


              <div class=\"ist-article__colR\"><a href=\"/interest/";
            // line 61
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\">
                  <h2 class=\"ist-article__h2\">";
            // line 62
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "</h2></a>
                <p class=\"ist-article__p\">";
            // line 63
            echo twig_escape_filter($this->env, strip_tags(call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["record"], "content", array()), 150))), "html", null, true);
            echo "</p>
                <div class=\"ist-article__date\">";
            // line 64
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</div><a href=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "link", array()), "html", null, true);
            echo "\" title=\"\" class=\"ist-article__refer\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "links", array()), "html", null, true);
            echo "</a>
              </div>
            </div>

         ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['record'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 68
        echo "   
            
          </div>
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
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/interest.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  133 => 68,  118 => 64,  114 => 63,  110 => 62,  106 => 61,  98 => 58,  94 => 56,  89 => 52,  85 => 51,  43 => 11,  41 => 8,  36 => 9,  34 => 8,  31 => 7,  29 => 6,  27 => 5,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
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

{% put scripts %}
    <script defer src=\"{{ 'assets/js/interest.js'|theme }}\"></script>
{% endput %}


      <div class=\"lt__main _scroll js-ps-scroll\">
        <div class=\"ist\">
          <div class=\"ist-head\">
            <div class=\"ist-head__container\">
              <h1 class=\"ist-head__h1\">ИТресное</h1>
              <form action=\"\" class=\"ist-filter\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"\">ДОБЫЧА НЕФТИ</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">УПРАВЛЕНИЕ</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">SAP</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                  <select name=\"\">
                    <option value=\"\">АЛРОСА</option>
                    <option value=\"val0\">val0</option>
                    <option value=\"val1\">val1</option>
                  </select>
                </div>
                <button type=\"submit\" class=\"ist-filter__submit\">
                  <div class=\"ist-filter__submit-tip\">Отфильтровать</div>
                </button>
              </form>
            </div>
          </div>


          <div class=\"ist-articles\">

\t\t {% for record in records %}

            <div class=\"ist-article\">

            {# Use spaceless tag to remove spaces inside the A tag. #}


              \t\t<div class=\"ist-article__colL\"><a href=\"/interest/{{ record.slug }}\" class=\"ist-article__link\"><img src=\"{{ record.attachments.path }}\" alt=\"img\" class=\"ist-article__img\"></a></div>


              <div class=\"ist-article__colR\"><a href=\"/interest/{{ record.slug }}\" class=\"ist-article__link\">
                  <h2 class=\"ist-article__h2\">{{ record.title }}</h2></a>
                <p class=\"ist-article__p\">{{ html_limit(record.content , 150) | striptags }}</p>
                <div class=\"ist-article__date\">{{ record.created_at.format('d.m.Y') }}</div><a href=\"{{ record.link }}\" title=\"\" class=\"ist-article__refer\">{{ record.links }}</a>
              </div>
            </div>

         {% endfor %}   
            
          </div>
        </div>
      </div>
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/interest.htm", "");
    }
}
