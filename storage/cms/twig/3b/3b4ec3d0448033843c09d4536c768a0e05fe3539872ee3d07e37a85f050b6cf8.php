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
        $context["displayColumn"] = $this->getAttribute(($context["builderDetails"] ?? null), "displayColumn", array());
        // line 3
        $context["notFoundMessage"] = $this->getAttribute(($context["builderDetails"] ?? null), "notFoundMessage", array());
        // line 4
        echo "

";
        // line 6
        echo $this->env->getExtension('CMS')->startBlock('scripts'        );
        // line 7
        echo "    <script defer src=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/interest.js");
        echo "\"></script>
";
        // line 6
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 9
        echo "

      <div class=\"lt__main _scroll js-ps-scroll\">
        <div class=\"ist\">
          <div class=\"ist-head\">
            <div class=\"ist-head__container\">
              <h1 class=\"ist-head__h1\">ИТресное</h1>
              <form action=\"\" class=\"ist-filter\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->getAttribute(($context["category"] ?? null), "slug", array()), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute(($context["category"] ?? null), "title", array())), "html", null, true);
        echo "</option>
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ПЕРВЫЙ ФИЛЬТР --</option>
                  ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 24
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "slug", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "\t  
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ВТОРОЙ ФИЛЬТР --</option>
                  ";
        // line 29
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 30
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "slug", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "\t  
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ТРЕТИЙ ФИЛЬТР --</option>
                  ";
        // line 35
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["tags"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["tag"]) {
            // line 36
            echo "                    <option value=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["tag"], "slug", array()), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_upper_filter($this->env, $this->getAttribute($context["tag"], "title", array())), "html", null, true);
            echo "</option>
                  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tag'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "\t  
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
        // line 50
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["category"] ?? null), "interest", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 51
            echo "
            <div class=\"ist-article\">

            ";
            // line 55
            echo "

              \t\t<div class=\"ist-article__colL\"><a href=\"/interest/";
            // line 57
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "attachments", array()), "path", array()), "html", null, true);
            echo "\" alt=\"img\" class=\"ist-article__img\"></a></div>


              <div class=\"ist-article__colR\"><a href=\"/interest/";
            // line 60
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\">
                  <h2 class=\"ist-article__h2\">";
            // line 61
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "</h2></a>
                <p class=\"ist-article__p\">";
            // line 62
            echo twig_escape_filter($this->env, strip_tags(call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["record"], "content", array()), 150))), "html", null, true);
            echo "</p>
                <div class=\"ist-article__date\">";
            // line 63
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
        // line 67
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
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_category.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  179 => 67,  164 => 63,  160 => 62,  156 => 61,  152 => 60,  144 => 57,  140 => 55,  135 => 51,  131 => 50,  116 => 37,  105 => 36,  101 => 35,  95 => 31,  84 => 30,  80 => 29,  74 => 25,  63 => 24,  59 => 23,  50 => 19,  38 => 9,  36 => 6,  31 => 7,  29 => 6,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
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
              <form action=\"\" class=\"ist-filter\">
                <div class=\"ist-filter__body\">
                  <select name=\"\" disabled>
                    <option value=\"{{ category.slug }}\">{{ category.title|upper }}</option>
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ПЕРВЫЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.slug}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ВТОРОЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.slug}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                  <select name=\"\">
                  <option value=\"\">-- ТРЕТИЙ ФИЛЬТР --</option>
                  {% for tag in tags %}
                    <option value=\"{{tag.slug}}\">{{tag.title|upper}}</option>
                  {% endfor %}\t  
                  </select>
                </div>
                <button type=\"submit\" class=\"ist-filter__submit\">
                  <div class=\"ist-filter__submit-tip\">Отфильтровать</div>
                </button>
              </form>
            </div>
          </div>


          <div class=\"ist-articles\">

\t\t {% for record in category.interest %}

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
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_category.htm", "");
    }
}
