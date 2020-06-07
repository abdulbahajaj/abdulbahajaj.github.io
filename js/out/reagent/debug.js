// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__24597__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24598__i = 0, G__24598__a = new Array(arguments.length -  0);
while (G__24598__i < G__24598__a.length) {G__24598__a[G__24598__i] = arguments[G__24598__i + 0]; ++G__24598__i;}
  args = new cljs.core.IndexedSeq(G__24598__a,0,null);
} 
return G__24597__delegate.call(this,args);};
G__24597.cljs$lang$maxFixedArity = 0;
G__24597.cljs$lang$applyTo = (function (arglist__24599){
var args = cljs.core.seq(arglist__24599);
return G__24597__delegate(args);
});
G__24597.cljs$core$IFn$_invoke$arity$variadic = G__24597__delegate;
return G__24597;
})()
);

(o.error = (function() { 
var G__24600__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24601__i = 0, G__24601__a = new Array(arguments.length -  0);
while (G__24601__i < G__24601__a.length) {G__24601__a[G__24601__i] = arguments[G__24601__i + 0]; ++G__24601__i;}
  args = new cljs.core.IndexedSeq(G__24601__a,0,null);
} 
return G__24600__delegate.call(this,args);};
G__24600.cljs$lang$maxFixedArity = 0;
G__24600.cljs$lang$applyTo = (function (arglist__24602){
var args = cljs.core.seq(arglist__24602);
return G__24600__delegate(args);
});
G__24600.cljs$core$IFn$_invoke$arity$variadic = G__24600__delegate;
return G__24600;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
