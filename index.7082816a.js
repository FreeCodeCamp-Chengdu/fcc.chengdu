var t,e,i;t=jQuery,window,document,(i=function(t,e){this.target=t,this.carouselInterval,this.checkImgLoad,this.imgLoad=!1,this._init(e),this._event()}).options={carousel:!0,carouselTime:1e4},i.prototype={_init:function(e){var n=this;n.options=t.extend(!0,{},i.options,e),n.target.find(".events-body").each(function(){var e=t(this).find(".row").length;if(e>1){for(var i="<ol>",n=0;n<e;n++)i+="<li data-target='"+n+"'></li>";i+="</ol>",t(this).siblings(".events-footer").html(i).find("li").first().addClass("active")}}),n.target.find(".events-body").each(function(){t(this).find(".row").first().show().siblings().hide()}),n.target.find("img").on("load",function(){n.target.find(".events-body").each(function(){var e=0;t(this).find(".row").each(function(){t(this).height()>e&&(e=t(this).height())}),t(this).find(".row").height(e)})})},_event:function(){var e=this;e.target.find(".events-header").click(function(){t(this).siblings(".events-body").slideToggle().end().siblings(".events-footer").toggle()}),e.target.find(".events-footer li").click(function(){e._carousel(t(this))}),e.options.carousel&&(e.carouselInterval=setInterval(function(){e._carousel()},e.options.carouselTime),e.target.find(".events").hover(function(){clearInterval(e.carouselInterval),e.carouselInterval=null},function(){void 0==e.carouselInterval&&(e.carouselInterval=setInterval(function(){e._carousel()},e.options.carouselTime))}))},_carousel:function(i){var n=this;if(e==i)n.target.find(".events-footer .active").each(function(){var e;e=t(this).is(":last-child")?t(this).siblings().first():t(this).next(),n._carousel(e)});else{var s=i.data().target;i.addClass("active").siblings().removeClass("active"),i.closest(".events-footer").siblings(".events-body").find(".row").eq(s).show().siblings().hide()}}},t.fn.vivaTimeline=function(e,n){return this.each(function(){new i(t(this),e)}),this};
//# sourceMappingURL=index.7082816a.js.map