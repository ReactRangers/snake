(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},13:function(t,e,n){t.exports=n.p+"static/media/cherries.6f7f637f.svg"},14:function(t,e,n){t.exports=n(23)},19:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fruitsAge",function(){return E}),n.d(r,"fruitsDrop",function(){return M}),n.d(r,"noCrossing",function(){return A}),n.d(r,"snakeEats",function(){return D}),n.d(r,"snakeGrows",function(){return F}),n.d(r,"snakeMoves",function(){return W});var i=n(0),a=n.n(i),o=n(11),c=n.n(o),s=(n(19),n(3)),u=n(4),l=n(7),h=n(5),f=n(8),d=n(12),m=n.n(d),g=(n(21),n(1)),v=n(6),w=n(9),y=n(13),p=n.n(y),b=function(t){var e=t.x,n=t.y,r=t.r;return i.createElement("image",{x:e-r,y:n-r,height:2*r,width:2*r,xlinkHref:p.a})},O=function(t){var e=t.segments;return e.map(function(t,n){var r=t.x,a=t.y,o=Object(w.a)(t,["x","y"]);return i.createElement("circle",Object.assign({},Object(g.a)({cx:r,cy:a},o),{style:{fill:"navy",fillOpacity:1-n/e.length}}))})},j=n(2),k=0,x=function(){function t(e){Object(s.a)(this,t);var n=e.key,r=void 0===n?k++:n;Object.assign(this,e,{key:r})}return Object(u.a)(t,[{key:"collidesWith",value:function(t){var e=this;return e.r+t.r>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}},{key:"cloneWith",value:function(t){return new this.constructor(Object(g.a)({},this,t))}},{key:"cloneMovedBy",value:function(t,e){var n=t.direction,r=t.distance,i=t.height,a=t.width,o=function(t,e){var n=Object(j.a)(t,2),r=n[0],i=n[1],a=Object(j.a)(e,2);return[r+a[0],i+a[1]]}([this.x,this.y],function(t,e){var n=Object(j.a)(t,2);return[n[0]*e,n[1]*e]}(function(t){var e=t*Math.PI/180;return[Math.sin(e),-Math.cos(e)]}(n),r)),c=Object(j.a)(o,2),s=c[0],u=c[1];return this.cloneWith(Object(g.a)({x:(s%a+a)%a,y:(u%i+i)%i},e))}}]),t}(),E=function(t,e){var n=t.fruits,r=t.time,i=e.fruitExpirationDelay;return{fruits:n.filter(function(t){return r-t.createdAt<=i})}},M=function(t,e){var n=t.fruits,r=t.segments,i=t.time,a=t.lastFruitAt,o=e.width,c=e.height,s=e.newFruitProbability,u=e.newFruitDelay,l=e.newFruitSize;if(i<a+u||Math.random()>s)return null;if(Math.random()>s)return{lastFruitAt:i};var h=new x({x:Math.random()*o,y:Math.random()*c,r:l/2,createdAt:i});return n.concat(r).some(function(t){return t.collidesWith(h)})?null:{fruits:n.concat(h),lastFruitAt:i}},A=function(t){var e=t.segments;return{running:!e.slice(5).some(function(t){return t.collidesWith(e[0])})}},D=function(t){var e=Object(j.a)(t.segments,1)[0],n=t.fruits,r=t.growth,i=n.filter(function(t){return!t.collidesWith(e)});return{fruits:i,growth:r+n.length-i.length}},F=function(t,e){var n=t.segments,r=t.time,i=t.growth,a=t.lastGrowthAt,o=e.width,c=e.height,s=e.growthDelay;if(0===i||r<a+s)return null;var u=n.slice(-1),l=Object(j.a)(u,1)[0],h=2*l.r;return{segments:n.concat(l.cloneMovedBy({direction:l.trailDirection,distance:h,width:o,height:c},{key:void 0,offset:l.offset+h})),growth:i-1,lastGrowthAt:r}},W=function(t,e){var n=t.segments,r=t.direction,i=t.trail,a=(t.time,t.deltaTime),o=e.width,c=e.height,s=a*e.snakeSpeed,u=n[0].cloneMovedBy({direction:r,distance:s,width:o,height:c}),l=u.x,h=u.y,f=[{direction:r+180,distance:s}].concat(Object(v.a)(i));return{trail:f,segments:n.map(function(t){return f.reduce(function(t,e){var n=t.segment,r=t.trailOffset,i=e.direction,a=e.distance;return Object(g.a)({segment:n,trailOffset:r+a},n.offset>r&&{segment:n.cloneMovedBy({direction:i,distance:Math.min(n.offset-r,a),width:o,height:c},{trailDirection:i})})},{segment:t.cloneWith({x:l,y:h}),trailOffset:0}).segment})}},C=function(t){function e(t){var n;Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t)))._onKeyDown=function(t){var e=t.keyCode;return n.setState(function(t){var n=t.direction;switch(e){case 37:return{direction:n-21};case 39:return{direction:n+21};default:return null}})};return n.state={segments:[new x({x:n.props.width/2,y:n.props.height/2,r:10,offset:0,trailDirection:270})],direction:90,fruits:[],trail:[],running:!0,time:0,deltaTime:0,growth:8,lastGrowthAt:0,lastFruitAt:0},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t,e=this;document.addEventListener("keydown",this._onKeyDown);var n=function(n){var i=A,a=Object(w.a)(r,["noCrossing"]);e.setState(function(t,e){return[function(t){var e=t.time;return{time:n,deltaTime:n-e}},i].concat(Object(v.a)(Object.values(a))).reduce(function(n,r){return Object(g.a)({},n,t.running&&r(n,e))},t)},t)};(t=function(){e._requestId=requestAnimationFrame(n)})()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this._requestId),document.removeEventListener("keydown",this._onKeyDown)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,r=t.backgroundColor,a=this.state,o=a.fruits,c=a.segments,s=(a.time/1e3).toFixed(2);return i.createElement("svg",{style:{width:e,height:n,backgroundColor:r}},i.createElement("text",{style:{fontFamily:"monospace"},y:20},"Score: ",s," s and ",c.length," segments"),o.map(function(t){return i.createElement(b,t)}),i.createElement(O,{segments:c}))}}]),e}(i.Component);C.defaultProps={width:640,height:480,backgroundColor:"white",newFruitDelay:200,newFruitProbability:.35,newFruitSize:40,fruitExpirationDelay:1e4,snakeSpeed:.1,growthDelay:150};var S=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),a.a.createElement(C,null)))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.7b5064fd.chunk.js.map