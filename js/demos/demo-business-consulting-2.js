(function($){'use strict';$("[data-parent='#accordionServices']").on("click",function(){var trigger=$(this);$("#accordionServices .collapse.show").each(function(){if(trigger.attr("href")!=("#"+$(this).attr("id"))){$(this).removeClass("show");}});});}).apply(this,[jQuery]);