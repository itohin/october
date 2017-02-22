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
    <!-- <link rel=\"stylesheet\" href=\"";
        // line 17
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/css/styles.css");
        echo "\"> -->
    <link rel=\"stylesheet\" href=\"";
        // line 18
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/css/styles2.css");
        echo "\">
    <!-- /Styles-->
    <!-- JS Head-->
    <script defer src=\"";
        // line 21
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/common.js");
        echo "\"></script>
    <script defer src=\"";
        // line 22
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/js/home.js");
        echo "\"></script>

    ";
        // line 24
        echo $this->env->getExtension('CMS')->assetsFunction('js');
        echo $this->env->getExtension('CMS')->displayBlock('scripts');
        // line 25
        echo "
    <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-92301856-1', 'auto');
    ga('send', 'pageview');

        </script>
        <!-- //GA-->
        <!-- Google Tag Manager-->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NK8NGG5');
        </script>
    <!-- End Google Tag Manager-->
    <!-- /JS Head-->
  </head>
  <body>
    <!-- JS Top-->

    <!-- Google Tag Manager (noscript)-->
    <noscript>
      <iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-NK8NGG5\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript)-->
    <!-- /JS Top-->


      ";
        // line 57
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/header"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 58
        echo "      
      ";
        // line 59
        echo $this->env->getExtension('CMS')->pageFunction();
        // line 60
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
        return array (  114 => 60,  112 => 59,  109 => 58,  105 => 57,  71 => 25,  68 => 24,  63 => 22,  59 => 21,  53 => 18,  49 => 17,  41 => 12,  37 => 11,  31 => 8,  27 => 7,  19 => 1,);
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
    <!-- <link rel=\"stylesheet\" href=\"{{ 'assets/css/styles.css'|theme }}\"> -->
    <link rel=\"stylesheet\" href=\"{{ 'assets/css/styles2.css'|theme }}\">
    <!-- /Styles-->
    <!-- JS Head-->
    <script defer src=\"{{ 'assets/js/common.js'|theme }}\"></script>
    <script defer src=\"{{ 'assets/js/home.js'|theme }}\"></script>

    {% scripts %}

    <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-92301856-1', 'auto');
    ga('send', 'pageview');

        </script>
        <!-- //GA-->
        <!-- Google Tag Manager-->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NK8NGG5');
        </script>
    <!-- End Google Tag Manager-->
    <!-- /JS Head-->
  </head>
  <body>
    <!-- JS Top-->

    <!-- Google Tag Manager (noscript)-->
    <noscript>
      <iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-NK8NGG5\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript)-->
    <!-- /JS Top-->


      {% partial 'site/header' %}
      
      {% page %}
      
  </body>
</html>", "/Users/itoxa/Sites/cms/themes/timlis/layouts/master.htm", "");
    }
}
