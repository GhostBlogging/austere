jQuery(function(a){function b(){a(".menu-list-item a").each(function(){var b=a(this);b.removeClass("current"),b.attr("href")==window.location.href&&b.addClass("current")})}function c(){j.removeClass("menu-active"),l>a(window).width()-160?j.addClass("menu-hidden"):(j.removeClass("menu-hidden"),j.removeClass("menu-active"),a("#menu-button").removeClass("active"))}function d(){a("pre code").each(function(b,c){hljs.highlightBlock(c);var d=a(this),e=d.html().split(/\n/).length,f=[];for(b=1;b<e;b++)f+='<span class="line">'+b+"</span>";d.parent().addClass("codeblock").append('<div class="lines">'+f+"</div>")})}function e(){a("#wrapper").fitVids()}function f(){if("undefined"!=typeof disqus&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});a.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}else a(".post-comments").css({display:"none"})}function g(){if("/"!==location.pathname){var a=k.find("article"),b=a.find(".post-reading-time");a.readingTime({readingTimeTarget:b.find(".estimated-reading-time"),wordCountTarget:b.find(".word-count"),error:function(){b.find(".post-reading-time").remove()}})}}function h(){i(),d(),e(),f(),b(),g(),c()}function i(){a('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var b=a(this);b.hasClass("rss")||b.hasClass("subscribe")||(b.addClass("js-ajax-link"),b.attr("href").indexOf("page")>-1&&b.addClass("js-archive-index"),b.attr("href")==window.location.origin&&b.addClass("js-show-index"),b.attr("href").indexOf("tag")>-1&&b.addClass("js-tag-index"),b.attr("href").indexOf("author")>-1&&b.addClass("js-author-index"))})}var j=a("html"),k=a("body");b();var l=a("#menu").width();c(),a(window).on({resize:function(){c()},orientationchange:function(){c()}}),k.on("click","#menu-button",function(){a(this).toggleClass("active"),j.toggleClass("menu-active")}),d(),e(),f(),g(),i();var m=window.History,n=!1,o=a("#ajax-container");return!!m.enabled&&(m.Adapter.bind(window,"statechange",function(){j.addClass("loading");var b=m.getState();a.get(b.url,function(b){var c=a(b),d=a("#ajax-container",c).contents(),e=b.match(/<title>(.*?)<\/title>/)[1];o.fadeOut(500,function(){j.hasClass("push-next")&&(j.removeClass("push-next"),j.addClass("pushed-next")),j.hasClass("push-prev")&&(j.removeClass("push-prev"),j.addClass("pushed-prev")),document.title=a("<textarea/>").html(e).text(),o.html(d),k.removeClass(),k.addClass(a("#body-class").attr("class")),NProgress.done(),o.fadeIn(500),a(document).scrollTop(0),setTimeout(function(){j.removeClass("loading")},50),h(),n=!1})})}),k.on("click",".js-ajax-link",function(b){b.preventDefault();var c=a(this);if(c.hasClass("post-nav-item")||c.hasClass("pagination-item")?((c.hasClass("post-nav-next")||c.hasClass("pagination-next"))&&(j.removeClass("pushed-prev"),j.addClass("push-next")),(c.hasClass("post-nav-prev")||c.hasClass("pagination-prev"))&&(j.removeClass("pushed-next"),j.addClass("push-prev"))):(j.removeClass("pushed-next"),j.removeClass("pushed-prev")),n===!1){var d=m.getState(),e=a(this).prop("href"),f=a(this).attr("title")||null;e.replace(/\/$/,"")!==d.url.replace(/\/$/,"")&&(n=!0,j.addClass("loading"),NProgress.start(),m.pushState({},f,e))}}),void k.on("click","#post-index .post .js-ajax-link",function(){var b=a(this).parents(".post");b.addClass("initial"),setTimeout(function(){b.addClass("active")},1)}))});