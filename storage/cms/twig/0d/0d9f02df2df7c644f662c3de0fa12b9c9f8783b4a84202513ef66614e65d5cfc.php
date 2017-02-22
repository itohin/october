<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/mission.htm */
class __TwigTemplate_fb2fc8591f9e1ddd14088ee49756b618dfef1dc03dba3befd83e57ece522b745 extends Twig_Template
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
        echo "    <script defer src=\"js/mission.js\"></script>
";
        // line 1
        echo $this->env->getExtension('CMS')->endBlock(true        );
        // line 4
        echo "

 <div class=\"mission-content lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"mission-feature\">
          <h2 class=\"mission-title\">";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "title", array()), "html", null, true);
        echo "</h2>
          <div class=\"mission-block\">
           ";
        // line 10
        echo $this->getAttribute(($context["record"] ?? null), "content", array());
        echo "
          </div>
        </div>
        <div class=\"mission-col\"></div>
      </div>
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/mission.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  37 => 10,  32 => 8,  26 => 4,  24 => 1,  21 => 2,  19 => 1,);
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
    <script defer src=\"js/mission.js\"></script>
{% endput %}


 <div class=\"mission-content lt__main _offset0 _scroll js-ps-scroll\">
        <div class=\"mission-feature\">
          <h2 class=\"mission-title\">{{ record.title }}</h2>
          <div class=\"mission-block\">
           {{ record.content | raw }}
          </div>
        </div>
        <div class=\"mission-col\"></div>
      </div>
    </div>
    <!-- JS Bottom-->
    <!-- /JS Bottom-->
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/pages/mission.htm", "");
    }
}
