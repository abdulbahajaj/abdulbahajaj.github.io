// Compiled by ClojureScript 1.10.764 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('website.navbar');
goog.require('website.aboutme');
goog.require('reagent.core');
goog.require('reagent.dom');
website.core.button = (function website$core$button(text,link,alignment){
return null;
});
website.core.main_wrapper = (function website$core$main_wrapper(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-wrapper","div.main-wrapper",226579175),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.navbar.create,new cljs.core.Keyword(null,"name","name",1843675177),"Abdul Bahajaj",new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847),"https://www.linkedin.com/in/abdul-bahajaj-016a9337",new cljs.core.Keyword(null,"github","github",567794498),"https://github.com/abdulbahajaj"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.aboutme.create], null)], null);
});
website.core.mount_root = (function website$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.core.main_wrapper], null),document.getElementById("app"));
});
website.core.init_BANG_ = (function website$core$init_BANG_(){
return website.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
