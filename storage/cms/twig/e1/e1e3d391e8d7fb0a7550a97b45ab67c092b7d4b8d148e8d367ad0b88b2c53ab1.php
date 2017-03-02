<?php

/* /Users/itoxa/Sites/cms/themes/timlis/partials/intresult.htm */
class __TwigTemplate_0e3931f503c695e0fe47a1973522838d092264fed9075edda720afc258bd36b7 extends Twig_Template
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
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["records"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["record"]) {
            // line 2
            echo "
  <div class=\"ist-article\">

  ";
            // line 6
            echo "

    \t\t<div class=\"ist-article__colL\"><a href=\"/interest/";
            // line 8
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($context["record"], "attachments", array()), "path", array()), "html", null, true);
            echo "\" alt=\"img\" class=\"ist-article__img\"></a></div>


    <div class=\"ist-article__colR\"><a href=\"/interest/";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "slug", array()), "html", null, true);
            echo "\" class=\"ist-article__link\">
        <h2 class=\"ist-article__h2\">";
            // line 12
            echo twig_escape_filter($this->env, $this->getAttribute($context["record"], "title", array()), "html", null, true);
            echo "</h2></a>
      <p class=\"ist-article__p\">";
            // line 13
            echo twig_escape_filter($this->env, strip_tags(call_user_func_array($this->env->getFunction('html_limit')->getCallable(), array("limit", $this->getAttribute($context["record"], "content", array()), 150))), "html", null, true);
            echo "</p>
      <div class=\"ist-article__date\">";
            // line 14
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
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/partials/intresult.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 14,  48 => 13,  44 => 12,  40 => 11,  32 => 8,  28 => 6,  23 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% for record in records %}

  <div class=\"ist-article\">

  {# Use spaceless tag to remove spaces inside the A tag. #}


    \t\t<div class=\"ist-article__colL\"><a href=\"/interest/{{ record.slug }}\" class=\"ist-article__link\"><img src=\"{{ record.attachments.path }}\" alt=\"img\" class=\"ist-article__img\"></a></div>


    <div class=\"ist-article__colR\"><a href=\"/interest/{{ record.slug }}\" class=\"ist-article__link\">
        <h2 class=\"ist-article__h2\">{{ record.title }}</h2></a>
      <p class=\"ist-article__p\">{{ html_limit(record.content , 150) | striptags }}</p>
      <div class=\"ist-article__date\">{{ record.created_at.format('d.m.Y') }}</div><a href=\"{{ record.link }}\" title=\"\" class=\"ist-article__refer\">{{ record.links }}</a>
    </div>
  </div>

{% endfor %}", "/Users/itoxa/Sites/cms/themes/timlis/partials/intresult.htm", "");
    }
}
