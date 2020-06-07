// Compiled by ClojureScript 1.10.764 {}
goog.provide('website.navbar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
website.navbar.button = (function website$navbar$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24999 = arguments.length;
var i__4737__auto___25000 = (0);
while(true){
if((i__4737__auto___25000 < len__4736__auto___24999)){
args__4742__auto__.push((arguments[i__4737__auto___25000]));

var G__25001 = (i__4737__auto___25000 + (1));
i__4737__auto___25000 = G__25001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.navbar.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.navbar.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__24996){
var map__24997 = p__24996;
var map__24997__$1 = (((((!((map__24997 == null))))?(((((map__24997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24997):map__24997);
var link = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var icon = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var active = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"active","active",1895962068),false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(active)?"true":"false")], null),icon,text], null);
}));

(website.navbar.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.navbar.button.cljs$lang$applyTo = (function (seq24995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24995));
}));

website.navbar.create = (function website$navbar$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25006 = arguments.length;
var i__4737__auto___25007 = (0);
while(true){
if((i__4737__auto___25007 < len__4736__auto___25006)){
args__4742__auto__.push((arguments[i__4737__auto___25007]));

var G__25008 = (i__4737__auto___25007 + (1));
i__4737__auto___25007 = G__25008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.navbar.create.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.navbar.create.cljs$core$IFn$_invoke$arity$variadic = (function (p__25003){
var map__25004 = p__25003;
var map__25004__$1 = (((((!((map__25004 == null))))?(((((map__25004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25004):map__25004);
var name = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var linkedin = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847));
var github = cljs.core.get.call(null,map__25004__$1,new cljs.core.Keyword(null,"github","github",567794498));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar","div.navbar",-1681996461),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.navbar.button,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"link","link",-1769163468),"#",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.fas.fa-poll-h","i.icon.fas.fa-poll-h",904713388)], null),new cljs.core.Keyword(null,"text","text",-1790561697),"About me"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.navbar.button,new cljs.core.Keyword(null,"link","link",-1769163468),github,new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.fab.fa-github","i.icon.fab.fa-github",659303517)], null),new cljs.core.Keyword(null,"text","text",-1790561697),"Github"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.navbar.button,new cljs.core.Keyword(null,"link","link",-1769163468),linkedin,new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.fab.fa-linkedin","i.icon.fab.fa-linkedin",-1575196805)], null),new cljs.core.Keyword(null,"text","text",-1790561697),"Linkedin"], null)], null);
}));

(website.navbar.create.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.navbar.create.cljs$lang$applyTo = (function (seq25002){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25002));
}));


//# sourceMappingURL=navbar.js.map
