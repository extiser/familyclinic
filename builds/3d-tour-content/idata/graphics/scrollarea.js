/* krpano 1.18.2 scrollarea plugin (build 2014-12-18) */
var krpanoplugin=function(){function N(a){return"boolean"==typeof a?a:0<="yesontrue1".indexOf(String(a).toLowerCase())}function X(a){if(a&&m&&Y){var c=m.timertick,h=0;0==O&&(O=c);var f=c-O|0;O=c;"wheel"==a.type?h=a.deltaY:"mousewheel"==a.type?h=-a.wheelDelta:"DOMMouseScroll"==a.type&&(h=a.detail);h=-h;500<f?P=1==a.deltaMode||0==h%20?0:1:66>f&&(0==P&&0!=h%40&&6<Math.abs(h))&&(P=1);a.preventDefault();a.stopPropagation();0!=h&&(0==P?h=0>h?-5:5:(h/=20,-10>h?h=-10:10<h&&(h=10)),1==j?Q(h*y,0):2==j?Q(0,
h*w):3==j&&Q(0,h*w))}}function s(a,c,h,f,b){var d=null;b=(!0===b?"remove":"add")+"EventListener";var e=R.browser.events;if(e.touch&&("down"==c?d=e.touchstart:"move"==c?d=e.touchmove:"up"==c&&(d=e.touchend),R.ie&&!1==e.mouse&&("over"==c?d=e.pointerover?e.pointerover:"MSPointerOver":"out"==c&&(d=e.pointerout?e.pointerout:"MSPointerOut")),d))a[b](d,h,f);if(e.mouse&&("down"==c?d="mousedown":"move"==c?d="mousemove":"up"==c?d="mouseup":"over"==c?d="mouseover":"out"==c&&(d="mouseout"),d))a[b](d,h,f)}function ca(){if(b){var a=
b.sprite.parentNode;if(a&&(a=a.kobject))a.maskchildren=!0,a.poschanged&&a.updatepluginpos(),Z=a,q=a.pixelwidth,r=a.pixelheight,isNaN(q)&&(q=0),isNaN(r)&&(r=0),B=0<q||0<r}}function E(){d=Number(b.x);e=Number(b.y);isNaN($)&&(d=0);isNaN(aa)&&(e=0)}function F(a){a=void 0===a?!1:a;1==(j&1)?b.x!=d&&(b.x=d,a=!0):d=0;2==(j&2)?b.y!=e&&(b.y=e,a=!0):e=0;if(B&&(S[0]!=t||S[1]!=u))S[0]=t,S[1]=u,a=!0;if(a&&b&&B){a=q-t;var c=r-u,h=d,f=e;isNaN(h)&&(h=0);isNaN(f)&&(f=0);h+=a*n;f+=c*p;b.woverflow=-a;b.hoverflow=-c;
b.loverflow=Math.round((-h+C*a)*y);b.roverflow=Math.round((+h-(1-C)*a)*y);b.toverflow=Math.round((-f+D*c)*w);b.boverflow=Math.round((+f-(1-D)*c)*w);b.onscroll&&m.call(b.onscroll,b)}}function da(a){for(;0<x.length&&!(100>=a-x[0].time);)x.shift()}function G(){ca();var a=String(b.align).toLowerCase();if(""==a||"null"==a)a="lefttop";w=y=1;p=n=0.5;D=C=0;0<=a.indexOf("left")&&(n=C=0,y=1);0<=a.indexOf("top")&&(p=D=0,w=1);0<=a.indexOf("right")&&(C=1,n=0,y=-1);0<=a.indexOf("bottom")&&(D=1,p=0,w=-1)}function ea(a){G();
x=[];if(!1==H)v=!1;else{s(window,"up",fa,!0);s(window,"move",ga,ha);var c=m.stagescale,b=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a;a=b.pageX/c;c=b.pageY/c;v=!1;T=a;U=c;return!1}}function ia(a){if((void 0===a.pointerType||4==a.pointerType||"mouse"==a.pointerType)&&ba)if(G(),!1!=B&&(a=r-u,0>q-t||0>a))I=!0,s(b.sprite,"move",ja,!0),s(b.sprite,"out",ka,!0)}function ja(){if(I&&!1==v&&Z){var a=Z.getmouse();V(a.x/q*b.pixelwidth,a.y/r*b.pixelheight,!0)}}function ka(){s(b.sprite,"move",
ja,!0,!0);s(b.sprite,"out",ka,!0,!0);I=!1}function ga(a){if(!1==H)return v=!1;var c=m.stagescale,b=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a,f=b.pageX/c,c=b.pageY/c;if(!1==v&&(j&1&&5<Math.abs(f-T)||j&2&&5<Math.abs(c-U)))z&&(g=k=0,z=!1),null!=l&&(clearInterval(l),l=null),v=!0,I=!1,T=f,U=c,E(),$=d,aa=e;v&&(a=a.timeStamp,da(a),x.push({time:a,x:f,y:c}),d=$+(f-T)*y,e=aa+(c-U)*w,f=-(t-q),a=-(u-r),d+=f*n,e+=a*p,c=1/(1+A*A),d=0<f?d-(d-f*n)*c:d-(0<d?d:d<f?d-f:0)*c,e=0<a?e-(e-a*p)*c:
e-(0<e?e:e<a?e-a:0)*c,d-=f*n,e-=a*p,F());return!1}function fa(a){s(window,"up",fa,!0,!0);s(window,"move",ga,ha,!0);if(!1==H)g=k=0,v=!1;else if(v){da(a.timeStamp);if(1<x.length){a=x[0];var c=x[x.length-1],b=c.y-a.y,f=(c.time-a.time)*W;k=(c.x-a.x)/f*y;g=b/f*w}else g=k=0;l=setInterval(J,1E3/60);v=!1}}function na(){setTimeout(function(){ca();F(!0);null==l&&(l=setInterval(J,1E3/60))},100)}function J(){d+=k;e+=g;k*=K;g*=K;var a=0,c=0,b=-(t-q),f=-(u-r);d+=b*n;e+=f*p;0<b?a=d-b*n:z?a=d-la:d<b?a=d-b:0<d&&(a=
d);0.1>a*a&&(a=0);0<f?c=e-f*p:z?c=e-ma:e<f?c=e-f:0<e&&(c=e);0.1>c*c&&(c=0);d-=b*n;e-=f*p;0==(j&1)&&(k=a=0);0==(j&2)&&(g=c=0);0!=a&&(a*=-1,d+=a*(1-A),k=0>=a*k?k+a*L:a*M,k*=A);0!=c&&(c*=-1,e+=c*(1-A),g=0>=c*g?g+c*L:c*M,g*=A);0==a&&(0==c&&0.05>Math.sqrt(k*k+g*g))&&(z=!1,g=k=0,clearInterval(l),l=null);F()}function V(a,c,b){G();E();if(!1==B)setTimeout(function(){V(a,c,b)},10);else{a=Number(a);isNaN(a)&&(a=0);c=Number(c);isNaN(c)&&(c=0);var f=q-t,g=r-u;a=C*t+a*y;c=D*u+c*w;a*=-1;c*=-1;a+=q/2;0<a&&(a=0);
a<f&&(a=f);c+=r/2;0<c&&(c=0);c<g&&(c=g);!0===b?(z=!0,la=a,ma=c,null==l&&(l=setInterval(J,1E3/60))):(f=-(t-q),g=-(u-r),a=0>f?a-f*n:0,c=0>g?c-g*p:0,d=a,e=c,F())}}function oa(a,c){V(a,c,!0)}function pa(){null!=l&&(clearInterval(l),l=null);I=v=!1;x=[];g=k=0;z=!1;E()}function Q(a,c){z=!1;a=Number(a);isNaN(a)&&(a=0);c=Number(c);isNaN(c)&&(c=0);G();E();if(!1!=B){var b=q-t,f=r-u,j=!1;0>b&&(d+=b*n,0<a&&0>d?(j=!0,k+=a):0>a&&d>b&&(j=!0,k+=a),d-=b*n);0>f&&(e+=f*p,0<c&&0>e?(j=!0,g+=c):0>c&&e>f&&(j=!0,g+=c),e-=
f*p);j&&null==l&&(l=setInterval(J,1E3/60))}}var m=null,b=null,R=null,ha=!0,j=3,t=0,u=0,S=[0,0],B=!1,Z=null,q=0,r=0,z=!1,la=0,ma=0,y=1,w=1,n=0,p=0,C=0,D=0,A=1,K=0.95,L=0.08,M=0.15,W=1/15,H=!0,Y=!0,v=!1,T=0,U=0,d=0,e=0,$=0,aa=0,l=null,x=[],k=0,g=0,I=!1,ba=!1;this.registerplugin=function(a,c,d){m=a;b=d;"1.18">m.version?(m.trace(3,"Scrollarea Plugin - too old krpano version (min. version 1.18)"),b=m=null):(R=m.device,b.registerattribute("direction","all",function(a){a=String(a).toLowerCase();j=0;j|=1*
(0<=a.indexOf("h"));j|=2*(0<=a.indexOf("v"));j|=3*(0<=a.indexOf("all"))},function(){return 3==(j&3)?"all":1==(j&1)?"h":"v"}),b.registerattribute("overscroll",A,function(a){A=0>a?0:1<a?1:a},function(){return A}),b.registerattribute("friction",K,function(a){K=Number(a)},function(){return K}),b.registerattribute("acceleration",L,function(a){L=Number(a)},function(){return L}),b.registerattribute("returnacceleration",M,function(a){M=Number(a)},function(){return M}),b.registerattribute("momentum",W,function(a){W=
Number(a)},function(){return W}),b.registerattribute("onscroll",null),b.registerattribute("woverflow",0),b.registerattribute("hoverflow",0),b.registerattribute("loverflow",0),b.registerattribute("roverflow",0),b.registerattribute("toverflow",0),b.registerattribute("boverflow",0),b.registerattribute("draggable",!0,function(a){H=N(a)},function(){return H}),b.registerattribute("mwheel",!0,function(a){Y=N(a)},function(){return Y}),b.registerattribute("onhover_autoscrolling",!1,function(a){ba=N(a)},function(){return ba}),
b.registerattribute("csshardwareacceleration","auto"),b.setcenter=V,b.scrolltocenter=oa,b.stopscrolling=pa,b.scrollby=Q,!0==N(b.csshardwareacceleration)&&(b.sprite.style[R.browser.css.transform+"Style"]="preserve-3d"),b.sprite.addEventListener("DOMMouseScroll",X,!0),b.sprite.addEventListener("mousewheel",X,!0),b.sprite.addEventListener("wheel",X,!0),s(b.sprite,"down",ea,!0),s(b.sprite,"over",ia,!0),m.set("events["+b.name+"_scrollarea].keep",!0),m.set("events["+b.name+"_scrollarea].onresize",na))};
var O=0,P=0;this.onresize=function(a,c){if(!m)return!1;t=a;u=c;var b;z=!1;G();E();if(!1==B)b=!1;else{b=q-t;var f=r-u,g=!1;d+=b*n;if(0>b){if(0>d||d>b)g=!0}else 0!=d&&(g=!0);d-=b*n;e+=f*p;if(0>f){if(0>e||e>f)g=!0}else 0!=e&&(g=!0);e-=f*p;g&&null==l&&(l=setInterval(J,1E3/60));b=g}!1==b&&F(!0);return!1};this.unloadplugin=function(){m&&b&&(m.set("events["+b.name+"_scrollarea].name",null),null!=l&&(clearInterval(l),l=null),s(b.sprite,"down",ea,!0,!0),s(b.sprite,"over",ia,!0,!0));m=b=null}};
