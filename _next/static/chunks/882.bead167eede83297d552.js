(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{7882:function(n,e,t){"use strict";t.r(e),t.d(e,{AttributionControl:function(){return R},Circle:function(){return I},CircleMarker:function(){return S},FeatureGroup:function(){return M},GeoJSON:function(){return _},ImageOverlay:function(){return N},LayerGroup:function(){return T},LayersControl:function(){return G},MapConsumer:function(){return B},MapContainer:function(){return V},Marker:function(){return Z},Pane:function(){return W},Polygon:function(){return $},Polyline:function(){return q},Popup:function(){return D},Rectangle:function(){return Y},SVGOverlay:function(){return nn},ScaleControl:function(){return K},TileLayer:function(){return tn},Tooltip:function(){return rn},VideoOverlay:function(){return on},WMSTileLayer:function(){return un},ZoomControl:function(){return cn},useMap:function(){return a},useMapEvent:function(){return i},useMapEvents:function(){return l}});var r=t(7294);const o=(0,r.createContext)(null),u=o.Provider;function c(){const n=(0,r.useContext)(o);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function a(){return c().map}function i(n,e){const t=a();return(0,r.useEffect)((function(){return t.on(n,e),function(){t.off(n,e)}}),[t,n,e]),t}function l(n){const e=a();return(0,r.useEffect)((function(){return e.on(n),function(){e.off(n)}}),[e,n]),e}var s=t(3935);function f(n){function e(e,t){const{instance:o,context:c}=n(e).current;return(0,r.useImperativeHandle)(t,(()=>o)),null==e.children?null:r.createElement(u,{value:c},e.children)}return(0,r.forwardRef)(e)}function p(n){function e(e,t){const{instance:o}=n(e).current;return(0,r.useImperativeHandle)(t,(()=>o)),null}return(0,r.forwardRef)(e)}function d(n){return function(e){const t=c(),o=n(e,t),{instance:u}=o.current,a=(0,r.useRef)(e.position),{position:i}=e;return(0,r.useEffect)((function(){return u.addTo(t.map),function(){u.remove()}}),[t.map,u]),(0,r.useEffect)((function(){null!=i&&i!==a.current&&(u.setPosition(i),a.current=i)}),[u,i]),o}}function y(n,e){return null==e?function(e,t){return(0,r.useRef)(n(e,t))}:function(t,o){const u=(0,r.useRef)(n(t,o)),c=(0,r.useRef)(t),{instance:a}=u.current;return(0,r.useEffect)((function(){c.current!==t&&(e(a,t,c.current),c.current=t)}),[a,t,o]),u}}function m(n,e){const t=(0,r.useRef)(e);(0,r.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function v(n,e){const t=(0,r.useRef)();(0,r.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function C(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function w(n,e){(0,r.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layersControl)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}function h(n){return function(e){const t=c(),r=n(C(e,t),t);return m(t.map,e.attribution),v(r.current,e.eventHandlers),w(r.current,t),r}}function b(n){return function(e){const t=c(),o=n(C(e,t),t);return v(o.current,e.eventHandlers),w(o.current,t),function(n,e){const t=(0,r.useRef)();(0,r.useEffect)((function(){if(e.pathOptions!==t.current){const r=e.pathOptions??{};n.instance.setStyle(r),t.current=r}}),[n,e])}(o.current,e),o}}function g(n){return p(d(y((function(e,t){return{instance:n(e),context:t}}))))}function x(n,e){return f(h(y(n,e)))}function E(n,e){return function(n){function e(e,t){const[o,u]=(0,r.useState)(!1),{instance:c}=n(e,u).current;(0,r.useImperativeHandle)(t,(()=>c)),(0,r.useEffect)((function(){o&&c.update()}),[c,o,e.children]);const a=c._contentNode;return a?(0,s.createPortal)(e.children,a):null}return(0,r.forwardRef)(e)}(function(n,e){return function(t,r){const o=c(),u=n(C(t,o),o);return m(o.map,t.attribution),v(u.current,t.eventHandlers),e(u.current,o,t,r),u}}(y(n),e))}function L(n,e){return f(b(y(n,e)))}function O(n,e){return p(h(y(n,e)))}var P=t(5243);const R=g((function(n){return new P.Control.Attribution(n)}));function k(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}const I=L((function({center:n,children:e,...t},r){const o=new P.Circle(n,t);return{instance:o,context:{...r,overlayContainer:o}}}),k),S=L((function({center:n,children:e,...t},r){const o=new P.CircleMarker(n,t);return{instance:o,context:{...r,overlayContainer:o}}}),k),M=L((function({children:n,...e},t){const r=new P.FeatureGroup([],e);return{instance:r,context:{...t,layerContainer:r,overlayContainer:r}}})),_=L((function({data:n,...e},t){const r=new P.GeoJSON(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.style!==t.style&&(null==e.style?n.resetStyle():n.setStyle(e.style))}));function z(n,e,t){e.bounds instanceof P.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}const N=x((function({bounds:n,url:e,...t},r){const o=new P.ImageOverlay(e,n,t);return{instance:o,context:{...r,overlayContainer:o}}}),(function(n,e,t){z(n,e,t),e.url!==t.url&&n.setUrl(e.url)})),T=x((function({children:n,...e},t){const r=new P.LayerGroup([],e);return{instance:r,context:{...t,layerContainer:r}}})),G=f(d(y((function({children:n,...e},t){const r=new P.Control.Layers(void 0,void 0,e);return{instance:r,context:{...t,layersControl:r}}}),(function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}))));function A(n){return function(e){const t=c(),o=(0,r.useRef)(e),[a,i]=(0,r.useState)(null),{layersControl:l,map:s}=t,f=(0,r.useCallback)((e=>{null!=l&&(o.current.checked&&s.addLayer(e),n(l,e,o.current.name),i(e))}),[l,s]),p=(0,r.useCallback)((n=>{null==l||l.removeLayer(n),i(null)}),[l]),d=(0,r.useMemo)((()=>({...t,layerContainer:{addLayer:f,removeLayer:p}})),[t,f,p]);return(0,r.useEffect)((()=>{null!==a&&o.current!==e&&(!0!==e.checked||null!=o.current.checked&&!1!==o.current.checked?!0!==o.current.checked||null!=e.checked&&!1!==e.checked||s.removeLayer(a):s.addLayer(a),o.current=e)})),e.children?r.createElement(u,{value:d},e.children):null}}function B({children:n}){return n(a())}function H(){return(H=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function V({children:n,className:e,id:t,placeholder:o,style:c,whenCreated:a,...i}){const l=(0,r.useRef)(null),s=function(n,e){const[t,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{if(null!==n.current&&null===t){const t=new P.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),o(t)}}),[n,t,e]),t}(l,i),f=(0,r.useRef)(!1);(0,r.useEffect)((()=>{null!=s&&!1===f.current&&null!=a&&(f.current=!0,a(s))}),[s,a]);const[p]=(0,r.useState)({className:e,id:t,style:c}),d=(0,r.useMemo)((()=>s?{__version:1,map:s}:null),[s]),y=d?r.createElement(u,{value:d},n):o??null;return r.createElement("div",H({},p,{ref:l}),y)}G.BaseLayer=A((function(n,e,t){n.addBaseLayer(e,t)})),G.Overlay=A((function(n,e,t){n.addOverlay(e,t)}));const Z=x((function({position:n,...e},t){const r=new P.Marker(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}));function j(n){return n.split(" ").filter(Boolean)}function U(n,e){j(e).forEach((e=>{P.DomUtil.addClass(n,e)}))}const F=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function J(n,e){const{[e]:t,...r}=n;return r}function W(n){const[e,t]=(0,r.useState)(),o=c(),a=(0,r.useMemo)((()=>({...o,pane:n.name})),[o]);return(0,r.useEffect)((()=>(t(function(n,e){const t=n.name;if(-1!==F.indexOf(t))throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${t}`);if(null!=e.map.getPane(t))throw new Error(`A pane with this name already exists: ${t}`);const r=n.pane??e.pane,o=r?e.map.getPane(r):void 0,u=e.map.createPane(t,o);return null!=n.className&&U(u,n.className),null!=n.style&&Object.keys(n.style).forEach((e=>{u.style[e]=n.style[e]})),u}(n,o)),function(){const e=o.map.getPane(n.name);null==e||null==e.remove||e.remove(),null!=o.map._panes&&(o.map._panes=J(o.map._panes,n.name),o.map._paneRenderers=J(o.map._paneRenderers,n.name))})),[]),null!=n.children&&null!=e?(0,s.createPortal)(r.createElement(u,{value:a},n.children),e):null}const $=L((function({positions:n,...e},t){const r=new P.Polygon(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),q=L((function({positions:n,...e},t){const r=new P.Polyline(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)})),D=E((function(n,e){return{instance:new P.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,o){const{onClose:u,onOpen:c,position:a}=t;(0,r.useEffect)((function(){const{instance:t}=n;function r(n){n.popup===t&&(t.update(),o(!0),null==c||c())}function i(n){n.popup===t&&(o(!1),null==u||u())}return e.map.on({popupopen:r,popupclose:i}),null==e.overlayContainer?(null!=a&&t.setLatLng(a),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:r,popupclose:i}),e.map.removeLayer(t)}}),[n,e,o,u,c,a])})),Y=L((function({bounds:n,...e},t){const r=new P.Rectangle(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)})),K=g((function(n){return new P.Control.Scale(n)})),Q=h(y((function(n,e){const{attributes:t,bounds:r,...o}=n,u=document.createElementNS("http://www.w3.org/2000/svg","svg");return u.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((n=>{u.setAttribute(n,t[n])})),{instance:new P.SVGOverlay(u,r,o),container:u,context:e}}),z));function X({children:n,...e},t){const{instance:o,container:u}=Q(e).current;return(0,r.useImperativeHandle)(t,(()=>o)),null==u||null==n?null:(0,s.createPortal)(n,u)}const nn=(0,r.forwardRef)(X);function en(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}const tn=O((function({url:n,...e},t){return{instance:new P.TileLayer(n,C(e,t)),context:t}}),en),rn=E((function(n,e){return{instance:new P.Tooltip(n,e.overlayContainer),context:e}}),(function(n,e,t,o){const{onClose:u,onOpen:c}=t;(0,r.useEffect)((function(){const t=e.overlayContainer;if(null==t)return;const{instance:r}=n,a=n=>{n.tooltip===r&&(r.update(),o(!0),null==c||c())},i=n=>{n.tooltip===r&&(o(!1),null==u||u())};return t.on({tooltipopen:a,tooltipclose:i}),t.bindTooltip(r),function(){t.off({tooltipopen:a,tooltipclose:i}),null!=t._map&&t.unbindTooltip()}}),[n,e,o,u,c])})),on=x((function({bounds:n,url:e,...t},r){const o=new P.VideoOverlay(e,n,t);var u;!0===t.play&&(null==(u=o.getElement())||u.play());return{instance:o,context:{...r,overlayContainer:o}}}),(function(n,e,t){z(n,e,t),"string"===typeof e.url&&e.url!==t.url&&n.setUrl(e.url);const r=n.getElement();null!=r&&(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())})),un=O((function({params:n={},url:e,...t},r){return{instance:new P.TileLayer.WMS(e,{...n,...C(t,r)}),context:r}}),(function(n,e,t){en(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)})),cn=g((function(n){return new P.Control.Zoom(n)}))}}]);