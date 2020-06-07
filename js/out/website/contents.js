// Compiled by ClojureScript 1.10.764 {}
goog.provide('website.contents');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
website.contents.heading = (function website$contents$heading(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.heading","div.heading",-1527964144),text], null);
});
website.contents.text_body = (function website$contents$text_body(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-body","div.text-body",-1842180487),text], null);
});
website.contents.create = (function website$contents$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25012 = arguments.length;
var i__4737__auto___25013 = (0);
while(true){
if((i__4737__auto___25013 < len__4736__auto___25012)){
args__4742__auto__.push((arguments[i__4737__auto___25013]));

var G__25014 = (i__4737__auto___25013 + (1));
i__4737__auto___25013 = G__25014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return website.contents.create.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(website.contents.create.cljs$core$IFn$_invoke$arity$variadic = (function (conts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contents","div.contents",-1428662400),conts], null);
}));

(website.contents.create.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(website.contents.create.cljs$lang$applyTo = (function (seq25011){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25011));
}));


//# sourceMappingURL=contents.js.map
