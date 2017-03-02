<?php

/* /Users/itoxa/Sites/cms/themes/timlis/partials/calcres.htm */
class __TwigTemplate_f746ec240bf5eea1ad1014681c390bbe2c869f4154fd5b0494ca5926f87ab39d extends Twig_Template
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
        if (($context["answer"] ?? null)) {
            // line 2
            echo "    <span class=\"lead\">
        Res = <span class=\"label label-success\">";
            // line 3
            echo twig_escape_filter($this->env, ($context["answer"] ?? null), "html", null, true);
            echo "</span>
    </span>
";
        } else {
            // line 6
            echo "    <span class=\"text-muted\">
        click the \"=\" button
    </span>
";
        }
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/partials/calcres.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 6,  24 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if answer %}
    <span class=\"lead\">
        Res = <span class=\"label label-success\">{{ answer }}</span>
    </span>
{% else %}
    <span class=\"text-muted\">
        click the \"=\" button
    </span>
{% endif %}", "/Users/itoxa/Sites/cms/themes/timlis/partials/calcres.htm", "");
    }
}
