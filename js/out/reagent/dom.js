// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__24871 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24872 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24872);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__24873 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24874 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24874);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24873);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24871);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__24876 = arguments.length;
switch (G__24876) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__24878_24882 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__24879_24883 = null;
var count__24880_24884 = (0);
var i__24881_24885 = (0);
while(true){
if((i__24881_24885 < count__24880_24884)){
var v_24886 = cljs.core._nth.call(null,chunk__24879_24883,i__24881_24885);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24886);


var G__24887 = seq__24878_24882;
var G__24888 = chunk__24879_24883;
var G__24889 = count__24880_24884;
var G__24890 = (i__24881_24885 + (1));
seq__24878_24882 = G__24887;
chunk__24879_24883 = G__24888;
count__24880_24884 = G__24889;
i__24881_24885 = G__24890;
continue;
} else {
var temp__5735__auto___24891 = cljs.core.seq.call(null,seq__24878_24882);
if(temp__5735__auto___24891){
var seq__24878_24892__$1 = temp__5735__auto___24891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24878_24892__$1)){
var c__4556__auto___24893 = cljs.core.chunk_first.call(null,seq__24878_24892__$1);
var G__24894 = cljs.core.chunk_rest.call(null,seq__24878_24892__$1);
var G__24895 = c__4556__auto___24893;
var G__24896 = cljs.core.count.call(null,c__4556__auto___24893);
var G__24897 = (0);
seq__24878_24882 = G__24894;
chunk__24879_24883 = G__24895;
count__24880_24884 = G__24896;
i__24881_24885 = G__24897;
continue;
} else {
var v_24898 = cljs.core.first.call(null,seq__24878_24892__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24898);


var G__24899 = cljs.core.next.call(null,seq__24878_24892__$1);
var G__24900 = null;
var G__24901 = (0);
var G__24902 = (0);
seq__24878_24882 = G__24899;
chunk__24879_24883 = G__24900;
count__24880_24884 = G__24901;
i__24881_24885 = G__24902;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
