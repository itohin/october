<?php

/* /Users/itoxa/Sites/cms/themes/timlis/pages/interest_single.htm */
class __TwigTemplate_08dbc10a015d0f4887f8971f6ef311f8f494bf63f5ab6d7c86d904015543be3d extends Twig_Template
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
        if (($context["record"] ?? null)) {
            echo "  


  
<div class=\"lt__main _offset0 _scroll js-ps-scroll\">
    <div class=\"news-article\">
      <div class=\"news-article__colL\"><img src=\"";
            // line 7
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "attachments", array()), "path", array()), "html", null, true);
            echo "\" class=\"news-article__prview\">
        <div class=\"news-article__wswg\">";
            // line 8
            echo $this->getAttribute(($context["record"] ?? null), "content", array());
            echo "</div>
      </div>
      <div class=\"news-article__colR\">
        <h1 class=\"news-article__h1\">";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "title", array()), "html", null, true);
            echo "</h1>
        <div class=\"news-article-tags\">
          <div class=\"news-article-tags__colL\">
            <div class=\"news-article-tag\"><span class=\"news-article-tag__prop\">";
            // line 14
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "created_at", array()), "format", array(0 => "d.m.Y"), "method"), "html", null, true);
            echo "</span></div>
          </div>
          <div class=\"news-article-tags__colR\">
            <ul class=\"news-article-tags__ul\">
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">автор:</span><span class=\"news-article-tag__val\">";
            // line 18
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "author", array()), "html", null, true);
            echo "</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">аналитики:</span><span class=\"news-article-tag__val\">";
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "anallytics", array()), "html", null, true);
            echo "</span></li>
              <li class=\"news-article-tag\"><span class=\"news-article-tag__prop\">ссылки на первоисточник:</span><span class=\"news-article-tag__val\">";
            // line 20
            echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "links", array()), "html", null, true);
            echo "</span></li>
            </ul>
          </div>
        </div>
        <div class=\"news-article-nav\">
          <div class=\"news-article-nav__rowA\">
          ";
            // line 26
            if ($this->getAttribute(($context["record"] ?? null), "nextSlug", array())) {
                // line 27
                echo "          \t<a data-hover=\"Следующая новость\" href=\"/interest/";
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "nextSlug", array()), "html", null, true);
                echo "\"  class=\"news-article-next\"></a>
          ";
            }
            // line 29
            echo "
          ";
            // line 30
            if ($this->getAttribute(($context["record"] ?? null), "prevSlug", array())) {
                echo "\t
          \t<a data-hover=\"Предыдущая новость\" href=\"/interest/";
                // line 31
                echo twig_escape_filter($this->env, $this->getAttribute(($context["record"] ?? null), "prevSlug", array()), "html", null, true);
                echo "\" class=\"news-article-prev\"></a>
          ";
            }
            // line 32
            echo "\t
          </div>
          <div class=\"news-article-nav__rowB\"><a href=\"/interest/category/";
            // line 34
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["record"] ?? null), "category", array()), "slug", array()), "html", null, true);
            echo "\" class=\"news-article-backlink\"><img src=\"";
            echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/home/t_arrow.svg");
            echo "\"><span>Назад к фильтру</span></a></div>
        </div>
      </div>
    </div>
  </div>
</div>

";
        } else {
            // line 42
            echo "    ";
            echo twig_escape_filter($this->env, ($context["notFoundMessage"] ?? null), "html", null, true);
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_single.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 42,  92 => 34,  88 => 32,  83 => 31,  79 => 30,  76 => 29,  70 => 27,  68 => 26,  59 => 20,  55 => 19,  51 => 18,  44 => 14,  38 => 11,  32 => 8,  28 => 7,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if record %}  


  
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
          \t<a data-hover=\"Следующая новость\" href=\"/interest/{{ record.nextSlug }}\"  class=\"news-article-next\"></a>
          {% endif %}

          {% if record.prevSlug %}\t
          \t<a data-hover=\"Предыдущая новость\" href=\"/interest/{{ record.prevSlug }}\" class=\"news-article-prev\"></a>
          {% endif %}\t
          </div>
          <div class=\"news-article-nav__rowB\"><a href=\"/interest/category/{{ record.category.slug }}\" class=\"news-article-backlink\"><img src=\"{{ 'assets/img/home/t_arrow.svg'|theme }}\"><span>Назад к фильтру</span></a></div>
        </div>
      </div>
    </div>
  </div>
</div>

{% else %}
    {{ notFoundMessage }}
{% endif %}", "/Users/itoxa/Sites/cms/themes/timlis/pages/interest_single.htm", "");
    }
}
