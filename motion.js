 /*  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2019  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
 * 
 */!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n){L.Motion.Seq=L.Motion.Group.extend({_activeLayer:null,motionStart:function(){var t=this.getFirstLayer();return t&&(this.__prepareStart(),t.motionStart(),this.fire(L.Motion.Event.Started,{layer:this},!1)),this},motionStop:function(){return this.invoke("motionStop"),this._activeLayer=null,this.fire(L.Motion.Event.Ended,{layer:this},!1),this},motionPause:function(){return this._activeLayer&&(this._activeLayer.motionPause(),this.fire(L.Motion.Event.Paused,{layer:this},!1)),this},motionResume:function(){return this._activeLayer&&(this._activeLayer.motionResume(),this.fire(L.Motion.Event.Resumed,{layer:this},!1)),this},motionToggle:function(){return this._activeLayer?this.motionPause():this.motionResume(),this},getFirstLayer:function(){var t=this.getLayers();return t.length?t[0]:null},__prepareStart:function(){var t=this;this.getLayers().forEach(function(n){n.off(L.Motion.Event.Ended,t.__clearActiveLayer__,t),n.on(L.Motion.Event.Ended,t.__clearActiveLayer__,t),n.off(L.Motion.Event.Started,t.__putActiveLayer__,t),n.on(L.Motion.Event.Started,t.__putActiveLayer__,t)})},__clearActiveLayer__:function(t){this._activeLayer=null;var n=this.getLayers(),e=t.layer._leaflet_id,i=n.filter(function(t){return t._leaflet_id==e})[0],o=n.indexOf(i)+1;n.length>o?n[o].motionStart():this.fire(L.Motion.Event.Ended,{layer:this},!1)},__putActiveLayer__:function(t){this._activeLayer=t.layer,this.fire(L.Motion.Event.Section,{layer:this._activeLayer},!1)}}),L.motion.seq=function(t,n){return new L.Motion.Seq(t,n)}},function(t,n){L.Motion.Group=L.FeatureGroup.extend({options:{pane:L.Motion.Animate.options.pane,attribution:L.Motion.Animate.options.attribution},motionStart:function(){return this.invoke("motionStart"),this.fire(L.Motion.Event.Started,{layer:this},!1),this},motionStop:function(){return this.invoke("motionStop"),this.fire(L.Motion.Event.Ended,{layer:this},!1),this},motionPause:function(){return this.invoke("motionPause"),this.fire(L.Motion.Event.Paused,{layer:this},!1),this},motionResume:function(){return this.invoke("motionResume"),this.fire(L.Motion.Event.Resumed,{layer:this},!1),this},motionToggle:function(){return this.invoke("motionToggle"),this},getMarkers:function(){return this.getLayers().map(function(t){return t.getMarkers()})}}),L.motion.group=function(t,n){return new L.Motion.Group(t,n)}},function(t,n){L.Motion.Polyline=L.Polyline.extend(L.Motion.Animate),L.motion.polyline=function(t,n,e,i){return new L.Motion.Polyline(t,n,e,i)}},function(t,n){L.Motion.Ease={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},easeInQuad:function(t,n,e,i,o){return i*(n/=o)*n+e},easeOutQuad:function(t,n,e,i,o){return-i*(n/=o)*(n-2)+e},easeInOutQuad:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n+e:-i/2*(--n*(n-2)-1)+e},easeInCubic:function(t,n,e,i,o){return i*(n/=o)*n*n+e},easeOutCubic:function(t,n,e,i,o){return i*((n=n/o-1)*n*n+1)+e},easeInOutCubic:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n+e:i/2*((n-=2)*n*n+2)+e},easeInQuart:function(t,n,e,i,o){return i*(n/=o)*n*n*n+e},easeOutQuart:function(t,n,e,i,o){return-i*((n=n/o-1)*n*n*n-1)+e},easeInOutQuart:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n*n+e:-i/2*((n-=2)*n*n*n-2)+e},easeInQuint:function(t,n,e,i,o){return i*(n/=o)*n*n*n*n+e},easeOutQuint:function(t,n,e,i,o){return i*((n=n/o-1)*n*n*n*n+1)+e},easeInOutQuint:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n*n*n+e:i/2*((n-=2)*n*n*n*n+2)+e},easeInSine:function(t,n,e,i,o){return-i*Math.cos(n/o*(Math.PI/2))+i+e},easeOutSine:function(t,n,e,i,o){return i*Math.sin(n/o*(Math.PI/2))+e},easeInOutSine:function(t,n,e,i,o){return-i/2*(Math.cos(Math.PI*n/o)-1)+e},easeInExpo:function(t,n,e,i,o){return 0==n?e:i*Math.pow(2,10*(n/o-1))+e},easeOutExpo:function(t,n,e,i,o){return n==o?e+i:i*(1-Math.pow(2,-10*n/o))+e},easeInOutExpo:function(t,n,e,i,o){return 0==n?e:n==o?e+i:(n/=o/2)<1?i/2*Math.pow(2,10*(n-1))+e:i/2*(2-Math.pow(2,-10*--n))+e},easeInCirc:function(t,n,e,i,o){return-i*(Math.sqrt(1-(n/=o)*n)-1)+e},easeOutCirc:function(t,n,e,i,o){return i*Math.sqrt(1-(n=n/o-1)*n)+e},easeInOutCirc:function(t,n,e,i,o){return(n/=o/2)<1?-i/2*(Math.sqrt(1-n*n)-1)+e:i/2*(Math.sqrt(1-(n-=2)*n)+1)+e},easeInElastic:function(t,n,e,i,o){var r=1.70158,a=0,s=i;if(0==n)return e;if(1==(n/=o))return e+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;r=a/4}else r=a/(2*Math.PI)*Math.asin(i/s);return-s*Math.pow(2,10*(n-=1))*Math.sin((n*o-r)*(2*Math.PI)/a)+e},easeOutElastic:function(t,n,e,i,o){var r=1.70158,a=0,s=i;if(0==n)return e;if(1==(n/=o))return e+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;r=a/4}else r=a/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*n)*Math.sin((n*o-r)*(2*Math.PI)/a)+i+e},easeInOutElastic:function(t,n,e,i,o){var r=1.70158,a=0,s=i;if(0==n)return e;if(2==(n/=o/2))return e+i;if(a||(a=o*(.3*1.5)),s<Math.abs(i)){s=i;r=a/4}else r=a/(2*Math.PI)*Math.asin(i/s);return n<1?s*Math.pow(2,10*(n-=1))*Math.sin((n*o-r)*(2*Math.PI)/a)*-.5+e:s*Math.pow(2,-10*(n-=1))*Math.sin((n*o-r)*(2*Math.PI)/a)*.5+i+e},easeInBack:function(t,n,e,i,o,r){return void 0==r&&(r=1.70158),i*(n/=o)*n*((r+1)*n-r)+e},easeOutBack:function(t,n,e,i,o,r){return void 0==r&&(r=1.70158),i*((n=n/o-1)*n*((r+1)*n+r)+1)+e},easeInOutBack:function(t,n,e,i,o,r){return void 0==r&&(r=1.70158),(n/=o/2)<1?i/2*(n*n*((1+(r*=1.525))*n-r))+e:i/2*((n-=2)*n*((1+(r*=1.525))*n+r)+2)+e},easeInBounce:function(t,n,e,i,o){return i-L.Motion.Ease.easeOutBounce(t,o-n,0,i,o)+e},easeOutBounce:function(t,n,e,i,o){return(n/=o)<1/2.75?i*(7.5625*n*n)+e:n<2/2.75?i*(7.5625*(n-=1.5/2.75)*n+.75)+e:n<2.5/2.75?i*(7.5625*(n-=2.25/2.75)*n+.9375)+e:i*(7.5625*(n-=2.625/2.75)*n+.984375)+e},easeInOutBounce:function(t,n,e,i,o){return n<o/2?.5*L.Motion.Ease.easeInBounce(t,2*n,0,i,o)+e:.5*L.Motion.Ease.easeOutBounce(t,2*n-o,0,i,o)+.5*i+e}}},function(t,n){L.Motion.Utils={interpolateOnLine:function(t,n,e){var i=(n=n instanceof L.Polyline?n.getLatLngs():n).length;if(i<2)return null;if(0===(e=Math.max(Math.min(e,1),0)))return{latLng:n[0]instanceof L.LatLng?n[0]:L.latLng(n[0]),predecessor:-1};if(1==e)return{latLng:n[n.length-1]instanceof L.LatLng?n[n.length-1]:L.latLng(n[n.length-1]),predecessor:n.length-2};var o=t.getMaxZoom();o===1/0&&(o=t.getZoom());for(var r=[],a=0,s=0;s<i;s++)r[s]=t.project(n[s],o),s>0&&(a+=r[s-1].distanceTo(r[s]));var u=a*e,h=0,l=0;for(s=0;l<u;s++){var c=r[s],f=r[s+1];h=l,l+=c.distanceTo(f)}if(void 0==c&&void 0==f)c=r[0],f=r[1],s=1;var m=l-h!=0?(u-h)/(l-h):0,d=this.interpolateOnPointSegment(c,f,m);return{latLng:t.unproject(d,o),predecessor:s-1}},interpolateOnPointSegment:function(t,n,e){return L.point(t.x*(1-e)+e*n.x,t.y*(1-e)+e*n.y)},distance:function(t){for(var n=0,e=1;e<t.length;e++)n+=t[e].distanceTo(t[e-1]);return n},getDuration:function(t,n){return L.Motion.Utils.distance(t.map(function(t){return L.Motion.Utils.toLatLng(t)}))/(n/3600)},toLatLng:function(t,n,e){return t instanceof L.LatLng?t:L.Util.isArray(t)&&"object"!=typeof t[0]?3===t.length?L.latLng(t[0],t[1],t[2]):2===t.length?L.latLng(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?L.latLng(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===n?null:L.latLng(t,n,e)},getAngle:function(t,n){var e=180*Math.atan2(n.lat-t.lat,n.lng-t.lng)/Math.PI;return e<0&&(e+=360),e}}},function(t,n){L.Motion=L.Motion||{Event:{Started:"motion-started",Paused:"motion-paused",Resumed:"motion-resumed",Section:"motion-section",Ended:"motion-ended"}},L.motion=L.motion||{},L.Motion.Animate={options:{pane:"polymotionPane",attribution:"Leaflet.Motion © "+(new Date).getFullYear()+" Igor Vladyka"},motionOptions:{auto:!1,easing:function(t){return t},speed:0,duration:0},markerOptions:void 0,initialize:function(t,n,e,i){L.Util.setOptions(this,n),this.motionOptions=L.Util.extend({},this.motionOptions,e||{}),this.markerOptions=L.Util.extend({},i||{}),this._bounds=L.latLngBounds(),this._linePoints=this._convertLatLngs(t),L.LineUtil.isFlat(this._linePoints)||(this._linePoints=this._linePoints[0]),this._latlngs=[],L.Util.stamp(this)},addLatLng:function(t,n){return t=L.Motion.Utils.toLatLng(t),this._linePoints.push(t),this._latlngs.length&&this._latlngs.push(t),this},beforeAdd:function(t){t.getPane(this.options.pane)||(t.createPane(this.options.pane).style.zIndex=599),this._renderer=t.getRenderer(this)},onAdd:function(t){return this._renderer._initPath(this),this._reset(),this._renderer._addPath(this),this.motionOptions.auto&&this.motionStart(),this},onRemove:function(t){this.motionStop(),this.__marker&&t.removeLayer(this.__marker),this._renderer._removePath(this)},_motion:function(t){var n=(new Date).getTime()-t,e=1;if(this.motionOptions.duration&&(e=n/this.motionOptions.duration),e<1){e=this.motionOptions.easing(e,n,0,1,this.motionOptions.duration);var i=L.Motion.Utils.interpolateOnLine(this._map,this._linePoints,e);L.Polyline.prototype.addLatLng.call(this,i.latLng),this._drawMarker(i.latLng),this.__ellapsedTime=n,this.animation=L.Util.requestAnimFrame(function(){this._motion(t)},this)}else this.motionStop()},_drawMarker:function(t){var n=this.getMarker();if(n){var e=n.getLatLng();if(e.lat||e.lng){if(n._icon.children.length){var i=n._icon.children[0].getAttribute("motion-base");if(i){var o=0;i&&!isNaN(+i)&&(o=+i),n._icon.children[0].style.transform="rotate(-"+Math.round(L.Motion.Utils.getAngle(e,t)+o)+"deg)"}}}else n.addTo(this._map),n.addEventParent(this);n.setLatLng(t)}},_removeMarker:function(){this.markerOptions&&this.markerOptions.removeOnEnd&&this.__marker&&(this.__marker.remove(),delete this.__marker)},motionStart:function(){return this._map&&!this.animation&&(this.motionOptions.duration||(this.motionOptions.speed?this.motionOptions.duration=L.Motion.Utils.getDuration(this._linePoints,this.motionOptions.speed):this.motionOptions.duration=0),this.setLatLngs([]),this._motion((new Date).getTime()),this.fire(L.Motion.Event.Started,{layer:this},!1)),this},motionStop:function(){return this.motionPause(),this.setLatLngs(this._linePoints),this.__ellapsedTime=null,this._removeMarker(),this.fire(L.Motion.Event.Ended,{layer:this},!1),this},motionPause:function(){return this.animation&&(L.Util.cancelAnimFrame(this.animation),this.animation=null,this.fire(L.Motion.Event.Paused,{layer:this},!1)),this},motionResume:function(){return!this.animation&&this.__ellapsedTime&&(this.motionOptions.duration||(this.motionOptions.speed?this.motionOptions.duration=L.Motion.Utils.getDuration(this._linePoints,this.motionOptions.speed):this.motionOptions.duration=0),this._motion((new Date).getTime()-this.__ellapsedTime),this.fire(L.Motion.Event.Resumed,{layer:this},!1)),this},motionToggle:function(){return this.animation?this.__ellapsedTime&&this.motionPause():this.__ellapsedTime?this.motionResume():this.motionStart(),this},motionDuration:function(t){return this.motionOptions.duration=t||0,this},motionSpeed:function(t){return this.motionOptions.speed=t||0,this},getMarker:function(){return this.markerOptions&&(this.__marker||(this.__marker=L.marker([0,0],this.markerOptions),this.markerOptions.showMarker&&marker.addTo(this._map))),this.__marker},getMarkers:function(){return[this.getMarker()]}}},function(t,n,e){e(5),e(4),e(3),e(2),e(1),t.exports=e(0)}]);