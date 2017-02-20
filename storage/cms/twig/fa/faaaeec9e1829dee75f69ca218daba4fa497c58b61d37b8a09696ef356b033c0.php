<?php

/* /Users/itoxa/Sites/cms/themes/timlis/layouts/master.htm */
class __TwigTemplate_228469463388c47840a3ce5787ec6c78ceaa91bcf1b64da311218b5043ab1b8c extends Twig_Template
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
        echo "<!DOCTYPE html>
<html lang=\"RU\">
  <head>
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">
    <meta name=\"description\" content=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "description", array()), "html", null, true);
        echo "\">
    <title>Timlis - ";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "title", array()), "html", null, true);
        echo "</title>
    <!-- OG-->
    <meta property=\"og:type\" content=\"website\"/>
    <meta property=\"og:title\" content=\"Timlis - ";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "title", array()), "html", null, true);
        echo "\"/>
    <meta property=\"og:description\" content=\"";
        // line 12
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "description", array()), "html", null, true);
        echo "\"/>
    <!-- /OG-->
    <!-- Favicon-->
    <!-- /Favicon-->
    <!-- Styles-->
    <link rel=\"stylesheet\" href=\"";
        // line 17
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/css/styles.css");
        echo "\">
    <!-- /Styles-->
    <!-- JS Head-->
    <script defer src=\"";
        // line 20
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/common.js");
        echo "\"></script>
    <script defer src=\"";
        // line 21
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/home.js");
        echo "\"></script>
    <!-- /JS Head-->
  </head>
  <body>
    <!-- JS Top-->
    <!-- /JS Top-->
      ";
        // line 27
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/header"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 28
        echo "      
      ";
        // line 29
        echo $this->env->getExtension('CMS')->pageFunction();
        // line 30
        echo "      
  </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/layouts/master.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 30,  75 => 29,  72 => 28,  68 => 27,  59 => 21,  55 => 20,  49 => 17,  41 => 12,  37 => 11,  31 => 8,  27 => 7,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html lang=\"RU\">
  <head>
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">
    <meta name=\"description\" content=\"{{ this.page.description }}\">
    <title>Timlis - {{ this.page.title }}</title>
    <!-- OG-->
    <meta property=\"og:type\" content=\"website\"/>
    <meta property=\"og:title\" content=\"Timlis - {{ this.page.title }}\"/>
    <meta property=\"og:description\" content=\"{{ this.page.description }}\"/>
    <!-- /OG-->
    <!-- Favicon-->
    <!-- /Favicon-->
    <!-- Styles-->
    <link rel=\"stylesheet\" href=\"{{ 'assets/css/styles.css'|theme }}\">
    <!-- /Styles-->
    <!-- JS Head-->
    <script defer src=\"{{ 'assets/js/common.js'|theme }}\"></script>
    <script defer src=\"{{ 'assets/js/home.js'|theme }}\"></script>
    <!-- /JS Head-->
  </head>
  <body>
    <!-- JS Top-->
    <!-- /JS Top-->
      {% partial 'site/header' %}
      
      {% page %}
      
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/layouts/master.htm", "");
    }
}
