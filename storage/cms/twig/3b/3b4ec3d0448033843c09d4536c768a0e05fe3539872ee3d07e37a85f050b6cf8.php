<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/interest_category.htm */
class __TwigTemplate_206f48e9173d04cab70209ce30907bd0df279b5627251cb50f773d19f71dcd09 extends Twig_Template
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
        $context["category"] = $this->getAttribute(($context["builderDetails"] ?? null), "record", array());
        // line 2
        $context["records"] = $this->getAttribute(($context["category"] ?? null), "interest", array());
        // line 3
        $context["displayColumn"] = $this->getAttribute(($context["builderDetails"] ?? null), "displayColumn", array());
        // line 4
        $context["notFoundMessage"] = $this->getAttribute(($context["builderDetails"] ?? null), "notFoundMessage", array());
        // line 5
        echo "

";
        // line 7
        echo $this->env->getExtension('CMS')->startBlock('scripts'        );
        // line 8
        echo "    <script defer src=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/interest.js");
        echo "\"></script>
";
        // line 7
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 10
        echo "

      <div class=\"lt__main _scroll js-ps-scroll\">
        <div class=\"ist\">
          <div class=\"ist-head\">
            <div class=\"ist-head__container\">
              <h1 class=\"ist-head__h1\">ИТресное</h1>
              <form class=\"ist-filter\" data-request=\"onTest\" data-request-update=\"intresult:'#result'\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"";
        // line 20
        echo twig_escape_filter($this->env, $this->getAttribute(($context["category"] ?? null), "slug", array()), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute(($context["category"] ?? null), "title", array())), "html", null, true);
        echo "</option>
                  </select>
                  <select name=\"first\">
                  <option value=\"\">-- ПЕРВЫЙ ФИЛЬТР --</option>
                  ";
        // line 24
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 25
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "id", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "\t  
                  </select>
                  <select name=\"second\">
                  <option value=\"\">-- ВТОРОЙ ФИЛЬТР --</option>
                  ";
        // line 30
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 31
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "id", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 32
        echo "\t  
                  </select>
                  <select name=\"third\">
                  <option value=\"\">-- ТРЕТИЙ ФИЛЬТР --</option>
                  ";
        // line 36
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 37
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "id", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 38
        echo "\t  
                  </select>
                </div>
                <button type=\"submit\" class=\"ist-filter__submit\">
                  <div class=\"ist-filter__submit-tip\">Отфильтровать</div>
                </button>
              </form>
            </div>
          </div>


          <div id=\"result\" class=\"ist-articles\">

\t\t      ";
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

                <div class=\"ist-article__colL\"><a href=\"/interest/";
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

    <script
  src=\"https://code.jquery.com/jquery-3.1.1.min.js\"
  integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"
  crossorigin=\"anonymous\"></script>

    ";
        // line 81
        echo '<script src="'. Request::getBasePath()
                .'/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
        // line 82
        echo "
    <!-- /JS Bottom-->
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_category.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  199 => 82,  196 => 81,  181 => 68,  166 => 64,  162 => 63,  158 => 62,  154 => 61,  146 => 58,  142 => 56,  137 => 52,  133 => 51,  118 => 38,  107 => 37,  103 => 36,  97 => 32,  86 => 31,  82 => 30,  76 => 26,  65 => 25,  61 => 24,  52 => 20,  40 => 10,  38 => 7,  33 => 8,  31 => 7,  27 => 5,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set category = builderDetails.record %}
{% set records = category.interest %}
{% set displayColumn = builderDetails.displayColumn %}
{% set notFoundMessage = builderDetails.notFoundMessage %}


{% put scripts %}
    <script defer src=\"{{ 'assets/js/interest.js'|theme }}\"></script>
{% endput %}


      <div class=\"lt__main _scroll js-ps-scroll\">
        <div class=\"ist\">
          <div class=\"ist-head\">
            <div class=\"ist-head__container\">
              <h1 class=\"ist-head__h1\">ИТресное</h1>
              <form class=\"ist-filter\" data-request=\"onTest\" data-request-update=\"intresult:'#result'\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"{{ category.slug }}\">{{ category.title|upper }}</option>
                  </select>
                  <select name=\"first\">
                  <option value=\"\">-- ПЕРВЫЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.id}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                  <select name=\"second\">
                  <option value=\"\">-- ВТОРОЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.id}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                  <select name=\"third\">
                  <option value=\"\">-- ТРЕТИЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.id}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                </div>
                <button type=\"submit\" class=\"ist-filter__submit\">
                  <div class=\"ist-filter__submit-tip\">Отфильтровать</div>
                </button>
              </form>
            </div>
          </div>


          <div id=\"result\" class=\"ist-articles\">

\t\t      {% for record in records %}

          <div class=\"ist-article\">

          {# Use spaceless tag to remove spaces inside the A tag. #}


                <div class=\"ist-article__colL\"><a href=\"/interest/{{ record.slug }}\" class=\"ist-article__link\"><img src=\"{{ record.attachments.path }}\" alt=\"img\" class=\"ist-article__img\"></a></div>


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

    <script
  src=\"https://code.jquery.com/jquery-3.1.1.min.js\"
  integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"
  crossorigin=\"anonymous\"></script>

    {% framework %}

    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_category.htm", "");
    }
}
