!function(t){var e={endY:1,duration:200,updateRate:15},n=function(t,e,n){return t+(e-t)*n},r=function(t){return-Math.cos(t*Math.PI)/2+.5},i=function(i){var o=t.extend({},e,i);if(0===o.duration)return window.scrollTo(0,o.endY),void("function"==typeof o.callback&&o.callback());var a=window.pageYOffset,s=Date.now(),c=s+o.duration,u=function(){var t=Date.now(),e=t>c?1:(t-s)/o.duration;window.scrollTo(0,n(a,o.endY,r(e))),c>t?setTimeout(u,o.updateRate):"function"==typeof o.callback&&o.callback()};u()},o=function(i){var o=t.extend({},e,i);if(0===o.duration)return this.scrollTop=o.endY,void("function"==typeof o.callback&&o.callback());var a=this.scrollTop,s=Date.now(),c=s+o.duration,u=this,l=function(){var t=Date.now(),e=t>c?1:(t-s)/o.duration;u.scrollTop=n(a,o.endY,r(e)),c>t?setTimeout(l,o.updateRate):"function"==typeof o.callback&&o.callback()};l()};t.scrollTo=i,t.fn.scrollTo=function(){if(this.length){var t=arguments;this.forEach(function(e){o.apply(e,t)})}}}(Zepto);