<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/news_article.htm */
class __TwigTemplate_d9f59362c5fc6c29108f297aae06d8a0afab767fc6563da20a5f589413bf6a1e extends Twig_Template
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
        $context["record"] = $this->getAttribute(($context["builderDetails"] ?? null), "record", array());
        // line 2
        $context["displayColumn"] = $this->getAttribute(($context["builderDetails"] ?? null), "displayColumn", array());
        // line 3
        $context["notFoundMessage"] = $this->getAttribute(($context["builderDetails"] ?? null), "notFoundMessage", array());
        // line 4
        echo "

";
        // line 6
        if (($context["record"] ?? null)) {
            echo "  


  
<div class=\"lt__main _offset0 _scroll js-ps-scroll\">
    <div class=\"news-article\">
      <div class=\"news-article__colL\"><img src=\"";
            // line 12
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "attachments", array()), "path", array()), "html", null, true);
            echo "\" class=\"news-article__prview\">
        <div class=\"news-article__wswg\">";
            // line 13
            echo $this->getAttribute(($context["record"] ?? null), "content", array());
            echo "</div>
      </div>
      <div class=\"news-article__colR\">
        <h1 class=\"news-article__h1\">";
            // line 16
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "title", array()), "html", null, true);
            echo "</h1>
        <div class=\"news-article-tags\">
          <div class=\"news-article-tags__colL\">
            <div class=\"news-article-tag\"><span class=\"news-article-tag__prop\">";
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</span></div>
          </div>
          <div class=\"news-article-tags__colR\">
            <ul class=\"news-article-tags__ul\">
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">автор:</span><span class=\"news-article-tag__val\">";
            // line 23
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "author", array()), "html", null, true);
            echo "</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">аналитики:</span><span class=\"news-article-tag__val\">";
            // line 24
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "anallytics", array()), "html", null, true);
            echo "</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">ссылки на первоисточник:</span><span class=\"news-article-tag__val\">";
            // line 25
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "links", array()), "html", null, true);
            echo "</span></li>
            </ul>
          </div>
        </div>
        <div class=\"news-article-nav\">
          <div class=\"news-article-nav__rowA\">
          ";
            // line 31
            if ($this->getAttribute(($context["record"] ?? null), "nextSlug", array())) {
                // line 32
                echo "          \t<a data-hover=\"Следующая новость\" href=\"/news/";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "nextSlug", array()), "html", null, true);
                echo "\"  class=\"news-article-next\"></a>
          ";
            }
            // line 34
            echo "
          ";
            // line 35
            if ($this->getAttribute(($context["record"] ?? null), "prevSlug", array())) {
                echo "\t
          \t<a data-hover=\"Предыдущая новость\" href=\"/news/";
                // line 36
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "prevSlug", array()), "html", null, true);
                echo "\" class=\"news-article-prev\"></a>
          ";
            }
            // line 37
            echo "\t
          </div>
          <div class=\"news-article-nav__rowB\"><a href=\"\" class=\"news-article-backlink\"><img src=\"";
            // line 39
            echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
            echo "\"><span>Назад к фильтру</span></a></div>
        </div>
      </div>
    </div>
  </div>
</div>

";
        } else {
            // line 47
            echo "    ";
            echo twig_escape_filter($this->env, ($context["notFoundMessage"] ?? null), "html", null, true);
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/news_article.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  113 => 47,  102 => 39,  98 => 37,  93 => 36,  89 => 35,  86 => 34,  80 => 32,  78 => 31,  69 => 25,  65 => 24,  61 => 23,  54 => 19,  48 => 16,  42 => 13,  38 => 12,  29 => 6,  25 => 4,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set record = builderDetails.record %}
{% set displayColumn = builderDetails.displayColumn %}
{% set notFoundMessage = builderDetails.notFoundMessage %}


{% if record %}  


  
<div class=\"lt__main _offset0 _scroll js-ps-scroll\">
    <div class=\"news-article\">
      <div class=\"news-article__colL\"><img src=\"{{ record.attachments.path }}\" class=\"news-article__prview\">
        <div class=\"news-article__wswg\">{{ record.content | raw }}</div>
      </div>
      <div class=\"news-article__colR\">
        <h1 class=\"news-article__h1\">{{ record.title }}</h1>
        <div class=\"news-article-tags\">
          <div class=\"news-article-tags__colL\">
            <div class=\"news-article-tag\"><span class=\"news-article-tag__prop\">{{ record.created_at.format('d.m.Y') }}</span></div>
          </div>
          <div class=\"news-article-tags__colR\">
            <ul class=\"news-article-tags__ul\">
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">автор:</span><span class=\"news-article-tag__val\">{{ record.author }}</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">аналитики:</span><span class=\"news-article-tag__val\">{{ record.anallytics }}</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">ссылки на первоисточник:</span><span class=\"news-article-tag__val\">{{ record.links }}</span></li>
            </ul>
          </div>
        </div>
        <div class=\"news-article-nav\">
          <div class=\"news-article-nav__rowA\">
          {% if record.nextSlug %}
          \t<a data-hover=\"Следующая новость\" href=\"/news/{{ record.nextSlug }}\"  class=\"news-article-next\"></a>
          {% endif %}

          {% if record.prevSlug %}\t
          \t<a data-hover=\"Предыдущая новость\" href=\"/news/{{ record.prevSlug }}\" class=\"news-article-prev\"></a>
          {% endif %}\t
          </div>
          <div class=\"news-article-nav__rowB\"><a href=\"\" class=\"news-article-backlink\"><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"><span>Назад к фильтру</span></a></div>
        </div>
      </div>
    </div>
  </div>
</div>

{% else %}
    {{ notFoundMessage }}
{% endif %}", "/Users/itoxa/Sites/cms/themes/timlis/pages/news_article.htm", "");
    }
}
