(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="164",z1=0,nd=1,G1=2,qm=1,V1=2,ji=3,Ar=0,vn=1,Zi=2,yr=0,Hs=1,id=2,rd=3,sd=4,H1=5,ts=100,W1=101,X1=102,q1=103,Y1=104,j1=200,K1=201,$1=202,Z1=203,Ch=204,Ph=205,J1=206,Q1=207,tv=208,ev=209,nv=210,iv=211,rv=212,sv=213,av=214,ov=0,cv=1,lv=2,_c=3,hv=4,uv=5,fv=6,dv=7,Tu=0,pv=1,mv=2,Mr=0,_v=1,gv=2,vv=3,xv=4,yv=5,Mv=6,Sv=7,Ym=300,$s=301,Zs=302,Lh=303,Dh=304,Vc=306,Uh=1e3,ns=1001,Ih=1002,Zn=1003,Ev=1004,Co=1005,ui=1006,Al=1007,is=1008,br=1009,Tv=1010,Av=1011,jm=1012,Km=1013,Js=1014,_r=1015,Hc=1016,$m=1017,Zm=1018,lo=1020,bv=35902,wv=1021,Rv=1022,wi=1023,Cv=1024,Pv=1025,Ws=1026,Ka=1027,Lv=1028,Jm=1029,Dv=1030,Qm=1031,t_=1033,bl=33776,wl=33777,Rl=33778,Cl=33779,ad=35840,od=35841,cd=35842,ld=35843,hd=36196,ud=37492,fd=37496,dd=37808,pd=37809,md=37810,_d=37811,gd=37812,vd=37813,xd=37814,yd=37815,Md=37816,Sd=37817,Ed=37818,Td=37819,Ad=37820,bd=37821,Pl=36492,wd=36494,Rd=36495,Uv=36283,Cd=36284,Pd=36285,Ld=36286,Iv=3200,Nv=3201,e_=0,Fv=1,pr="",yi="srgb",Fr="srgb-linear",Au="display-p3",Wc="display-p3-linear",gc="linear",he="srgb",vc="rec709",xc="p3",ys=7680,Dd=519,Ov=512,Bv=513,kv=514,n_=515,zv=516,Gv=517,Vv=518,Hv=519,Ud=35044,Id="300 es",Qi=2e3,yc=2001;class pa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,Nh=180/Math.PI;function ho(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function gn(n,t,e){return Math.max(t,Math.min(e,n))}function Wv(n,t){return(n%t+t)%t}function Dl(n,t,e){return(1-e)*n+e*t}function wa(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,i,r,s,a,o,c,l){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],v=r[4],S=r[7],w=r[2],A=r[5],b=r[8];return s[0]=a*_+o*M+c*w,s[3]=a*m+o*v+c*A,s[6]=a*p+o*S+c*b,s[1]=l*_+h*M+u*w,s[4]=l*m+h*v+u*A,s[7]=l*p+h*S+u*b,s[2]=f*_+d*M+g*w,s[5]=f*m+d*v+g*A,s[8]=f*p+d*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=e*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*l-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new Pt;function i_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xv(){const n=$a("canvas");return n.style.display="block",n}const Nd={};function qv(n){n in Nd||(Nd[n]=!0,console.warn(n))}const Fd=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Od=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Fr]:{transfer:gc,primaries:vc,toReference:n=>n,fromReference:n=>n},[yi]:{transfer:he,primaries:vc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wc]:{transfer:gc,primaries:xc,toReference:n=>n.applyMatrix3(Od),fromReference:n=>n.applyMatrix3(Fd)},[Au]:{transfer:he,primaries:xc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Od),fromReference:n=>n.applyMatrix3(Fd).convertLinearToSRGB()}},Yv=new Set([Fr,Wc]),te={enabled:!0,_workingColorSpace:Fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Po[t].toReference,r=Po[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Po[n].primaries},getTransfer:function(n){return n===pr?gc:Po[n].transfer}};function Xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Il(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class jv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=$a("canvas")),Ms.width=t.width,Ms.height=t.height;const i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xs(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xs(e[i]/255)*255):e[i]=Xs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kv=0;class r_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ho(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nl(r[a].image)):s.push(Nl(r[a]))}else s=Nl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $v=0;class fn extends pa{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,i=ns,r=ns,s=ui,a=is,o=wi,c=br,l=fn.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=ho(),this.name="",this.source=new r_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ym)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uh:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uh:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ym;fn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,e=0,i=0,r=1){qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(d+1)/2,w=(p+1)/2,A=(h+f)/4,b=(u+_)/4,P=(g+m)/4;return v>S&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=P/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends pa{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new r_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends Zv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class s_ extends fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jv extends fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,p*M);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const S=o*M;if(c=c*m+f*S,l=l*m+d*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fl.copy(this).projectOnVector(t),this.sub(Fl)}reflect(t){return this.sub(Fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new F,Bd=new ma;class uo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),Do.subVectors(this.max,Ra),Ss.subVectors(t.a,Ra),Es.subVectors(t.b,Ra),Ts.subVectors(t.c,Ra),or.subVectors(Es,Ss),cr.subVectors(Ts,Es),Gr.subVectors(Ss,Ts);let e=[0,-or.z,or.y,0,-cr.z,cr.y,0,-Gr.z,Gr.y,or.z,0,-or.x,cr.z,0,-cr.x,Gr.z,0,-Gr.x,-or.y,or.x,0,-cr.y,cr.x,0,-Gr.y,Gr.x,0];return!Ol(e,Ss,Es,Ts,Do)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,Ss,Es,Ts,Do))?!1:(Uo.crossVectors(or,cr),e=[Uo.x,Uo.y,Uo.z],Ol(e,Ss,Es,Ts,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vi=[new F,new F,new F,new F,new F,new F,new F,new F],ci=new F,Lo=new uo,Ss=new F,Es=new F,Ts=new F,or=new F,cr=new F,Gr=new F,Ra=new F,Do=new F,Uo=new F,Vr=new F;function Ol(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vr.fromArray(n,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),c=t.dot(Vr),l=e.dot(Vr),h=i.dot(Vr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Qv=new uo,Ca=new F,Bl=new F;class bu{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qv.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);const e=Ca.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(Bl)),this.expandByPoint(Ca.copy(t.center).sub(Bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new F,kl=new F,Io=new F,lr=new F,zl=new F,No=new F,Gl=new F;class a_{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){kl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),lr.copy(this.origin).sub(kl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Io),o=lr.dot(this.direction),c=-lr.dot(Io),l=lr.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(kl).addScaledVector(Io,f),d}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,r,s){zl.subVectors(e,t),No.subVectors(i,t),Gl.crossVectors(zl,No);let a=this.direction.dot(Gl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,t);const c=o*this.direction.dot(No.crossVectors(lr,No));if(c<0)return null;const l=o*this.direction.dot(zl.cross(lr));if(l<0||c+l>a)return null;const h=-o*lr.dot(Gl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,r,s,a,o,c,l,h,u,f,d,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,f,d,g,_,m)}set(t,e,i,r,s,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/As.setFromMatrixColumn(t,0).length(),s=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t2,t,e2)}lookAt(t,e,i){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),hr.crossVectors(i,Rn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),hr.crossVectors(i,Rn)),hr.normalize(),Fo.crossVectors(Rn,hr),r[0]=hr.x,r[4]=Fo.x,r[8]=Rn.x,r[1]=hr.y,r[5]=Fo.y,r[9]=Rn.y,r[2]=hr.z,r[6]=Fo.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],v=i[7],S=i[11],w=i[15],A=r[0],b=r[4],P=r[8],y=r[12],x=r[1],D=r[5],N=r[9],C=r[13],k=r[2],W=r[6],X=r[10],Z=r[14],z=r[3],tt=r[7],J=r[11],ft=r[15];return s[0]=a*A+o*x+c*k+l*z,s[4]=a*b+o*D+c*W+l*tt,s[8]=a*P+o*N+c*X+l*J,s[12]=a*y+o*C+c*Z+l*ft,s[1]=h*A+u*x+f*k+d*z,s[5]=h*b+u*D+f*W+d*tt,s[9]=h*P+u*N+f*X+d*J,s[13]=h*y+u*C+f*Z+d*ft,s[2]=g*A+_*x+m*k+p*z,s[6]=g*b+_*D+m*W+p*tt,s[10]=g*P+_*N+m*X+p*J,s[14]=g*y+_*C+m*Z+p*ft,s[3]=M*A+v*x+S*k+w*z,s[7]=M*b+v*D+S*W+w*tt,s[11]=M*P+v*N+S*X+w*J,s[15]=M*y+v*C+S*Z+w*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*o*f+i*l*f+r*o*d-i*c*d)+_*(+e*c*d-e*l*f+s*a*f-r*a*d+r*l*h-s*c*h)+m*(+e*l*u-e*o*d-s*a*u+i*a*d+s*o*h-i*l*h)+p*(-r*o*h-e*c*u+e*o*f+r*a*u-i*a*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,v=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,S=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,w=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,A=e*M+i*v+r*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=M*b,t[1]=(_*f*s-u*m*s-_*r*d+i*m*d+u*r*p-i*f*p)*b,t[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*b,t[3]=(u*c*s-o*f*s-u*r*l+i*f*l+o*r*d-i*c*d)*b,t[4]=v*b,t[5]=(h*m*s-g*f*s+g*r*d-e*m*d-h*r*p+e*f*p)*b,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*p-e*c*p)*b,t[7]=(a*f*s-h*c*s+h*r*l-e*f*l-a*r*d+e*c*d)*b,t[8]=S*b,t[9]=(g*u*s-h*_*s-g*i*d+e*_*d+h*i*p-e*u*p)*b,t[10]=(a*_*s-g*o*s+g*i*l-e*_*l-a*i*p+e*o*p)*b,t[11]=(h*o*s-a*u*s-h*i*l+e*u*l+a*i*d-e*o*d)*b,t[12]=w*b,t[13]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*m+e*u*m)*b,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*m-e*o*m)*b,t[15]=(a*u*r-h*o*r+h*i*c-e*u*c-a*i*f+e*o*f)*b,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,M=c*l,v=c*h,S=c*u,w=i.x,A=i.y,b=i.z;return r[0]=(1-(_+p))*w,r[1]=(d+S)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(d-S)*A,r[5]=(1-(f+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+v)*b,r[9]=(m-M)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const a=As.set(r[4],r[5],r[6]).length(),o=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],li.copy(this);const l=1/s,h=1/a,u=1/o;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,e.setFromRotationMatrix(li),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Qi){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(o===Qi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===yc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Qi){const c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(a-s),f=(e+t)*l,d=(i+r)*h;let g,_;if(o===Qi)g=(a+s)*u,_=-2*u;else if(o===yc)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const As=new F,li=new be,t2=new F(0,0,0),e2=new F(1,1,1),hr=new F,Fo=new F,Rn=new F,kd=new be,zd=new ma;class Di{constructor(t=0,e=0,i=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n2=0;const Gd=new F,bs=new ma,Wi=new be,Oo=new F,Pa=new F,i2=new F,r2=new ma,Vd=new F(1,0,0),Hd=new F(0,1,0),Wd=new F(0,0,1),Xd={type:"added"},s2={type:"removed"},ws={type:"childadded",child:null},Vl={type:"childremoved",child:null};class en extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new F,e=new Di,i=new ma,r=new F(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new Pt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Hd,t)}rotateZ(t){return this.rotateOnAxis(Wd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Hd,t)}translateZ(t){return this.translateOnAxis(Wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oo.copy(t):Oo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Pa,Oo,this.up):Wi.lookAt(Oo,Pa,this.up),this.quaternion.setFromRotationMatrix(Wi),r&&(Wi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Wi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xd),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(s2),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xd),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,t,i2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,r2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new F,Xi=new F,Hl=new F,qi=new F,Rs=new F,Cs=new F,qd=new F,Wl=new F,Xl=new F,ql=new F;class Ai{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hi.subVectors(t,e),r.cross(hi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hi.subVectors(r,e),Xi.subVectors(i,e),Hl.subVectors(t,e);const a=hi.dot(hi),o=hi.dot(Xi),c=hi.dot(Hl),l=Xi.dot(Xi),h=Xi.dot(Hl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qi.x),c.addScaledVector(a,qi.y),c.addScaledVector(o,qi.z),c)}static isFrontFacing(t,e,i,r){return hi.subVectors(i,e),Xi.subVectors(t,e),hi.cross(Xi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ai.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Rs.subVectors(r,i),Cs.subVectors(s,i),Wl.subVectors(t,i);const c=Rs.dot(Wl),l=Cs.dot(Wl);if(c<=0&&l<=0)return e.copy(i);Xl.subVectors(t,r);const h=Rs.dot(Xl),u=Cs.dot(Xl);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Rs,a);ql.subVectors(t,s);const d=Rs.dot(ql),g=Cs.dot(ql);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Cs,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qd.subVectors(s,r),o=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(qd,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Wv(t,1),e=gn(e,0,1),i=gn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Yl(a,s,t+1/3),this.g=Yl(a,s,t),this.b=Yl(a,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yi){const i=o_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=Il(t.r),this.g=Il(t.g),this.b=Il(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return te.fromWorkingColorSpace(Je.copy(this),t),Math.round(gn(Je.r*255,0,255))*65536+Math.round(gn(Je.g*255,0,255))*256+Math.round(gn(Je.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Je.copy(this),e);const i=Je.r,r=Je.g,s=Je.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=yi){te.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,r=Je.b;return t!==yi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+e,ur.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ur),t.getHSL(Bo);const i=Dl(ur.h,Bo.h,e),r=Dl(ur.s,Bo.s,e),s=Dl(ur.l,Bo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Ft;Ft.NAMES=o_;let a2=0;class fo extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=Hs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ch&&(i.blendSrc=this.blendSrc),this.blendDst!==Ph&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_c&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xc extends fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new F,ko=new Xt;class Ci{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ko.fromBufferAttribute(this,e),ko.applyMatrix3(t),this.setXY(e,ko.x,ko.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wa(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wa(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wa(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wa(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ud&&(t.usage=this.usage),t}}class c_ extends Ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class l_ extends Ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fn extends Ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}let o2=0;const Wn=new be,jl=new en,Ps=new F,Cn=new uo,La=new uo,He=new F;class sr extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i_(t)?l_:c_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(Cn.min,La.min),Cn.expandByPoint(He),He.addVectors(Cn.max,La.max),Cn.expandByPoint(He)):(Cn.expandByPoint(La.min),Cn.expandByPoint(La.max))}Cn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)He.fromBufferAttribute(o,l),c&&(Ps.fromBufferAttribute(t,l),He.add(Ps)),r=Math.max(r,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new F,c[P]=new F;const l=new F,h=new F,u=new F,f=new Xt,d=new Xt,g=new Xt,_=new F,m=new F;function p(P,y,x){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[y].add(_),o[x].add(_),c[P].add(m),c[y].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,y=M.length;P<y;++P){const x=M[P],D=x.start,N=x.count;for(let C=D,k=D+N;C<k;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const v=new F,S=new F,w=new F,A=new F;function b(P){w.fromBufferAttribute(r,P),A.copy(w);const y=o[P];v.copy(y),v.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(A,y);const D=S.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,y=M.length;P<y;++P){const x=M[P],D=x.start,N=x.count;for(let C=D,k=D+N;C<k;C+=3)b(t.getX(C+0)),b(t.getX(C+1)),b(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ci(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sr,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new be,Hr=new a_,zo=new bu,jd=new F,Ls=new F,Ds=new F,Us=new F,Kl=new F,Go=new F,Vo=new Xt,Ho=new Xt,Wo=new Xt,Kd=new F,$d=new F,Zd=new F,Xo=new F,qo=new F;class Jn extends en{constructor(t=new sr,e=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Go.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Kl.fromBufferAttribute(u,t),a?Go.addScaledVector(Kl,h):Go.addScaledVector(Kl.sub(e),h))}e.add(Go)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),Hr.copy(t.ray).recast(t.near),!(zo.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(zo,jd)===null||Hr.origin.distanceToSquared(jd)>(t.far-t.near)**2))&&(Yd.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,w=v;S<w;S+=3){const A=o.getX(S),b=o.getX(S+1),P=o.getX(S+2);r=Yo(this,p,t,i,l,h,u,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Yo(this,a,t,i,l,h,u,M,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,w=v;S<w;S+=3){const A=S,b=S+1,P=S+2;r=Yo(this,p,t,i,l,h,u,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,S=m+2;r=Yo(this,a,t,i,l,h,u,M,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function c2(n,t,e,i,r,s,a,o){let c;if(t.side===vn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Ar,o),c===null)return null;qo.copy(o),qo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(qo);return l<e.near||l>e.far?null:{distance:l,point:qo.clone(),object:n}}function Yo(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Ls),n.getVertexPosition(c,Ds),n.getVertexPosition(l,Us);const h=c2(n,t,e,i,Ls,Ds,Us,Xo);if(h){r&&(Vo.fromBufferAttribute(r,o),Ho.fromBufferAttribute(r,c),Wo.fromBufferAttribute(r,l),h.uv=Ai.getInterpolation(Xo,Ls,Ds,Us,Vo,Ho,Wo,new Xt)),s&&(Vo.fromBufferAttribute(s,o),Ho.fromBufferAttribute(s,c),Wo.fromBufferAttribute(s,l),h.uv1=Ai.getInterpolation(Xo,Ls,Ds,Us,Vo,Ho,Wo,new Xt)),a&&(Kd.fromBufferAttribute(a,o),$d.fromBufferAttribute(a,c),Zd.fromBufferAttribute(a,l),h.normal=Ai.getInterpolation(Xo,Ls,Ds,Us,Kd,$d,Zd,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new F,materialIndex:0};Ai.getNormal(Ls,Ds,Us,u.normal),h.face=u}return h}class po extends sr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Fn(l,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(u,2));function g(_,m,p,M,v,S,w,A,b,P,y){const x=S/b,D=w/P,N=S/2,C=w/2,k=A/2,W=b+1,X=P+1;let Z=0,z=0;const tt=new F;for(let J=0;J<X;J++){const ft=J*D-C;for(let At=0;At<W;At++){const Jt=At*x-N;tt[_]=Jt*M,tt[m]=ft*v,tt[p]=k,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(At/b),u.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let ft=0;ft<b;ft++){const At=f+ft+W*J,Jt=f+ft+W*(J+1),V=f+(ft+1)+W*(J+1),Q=f+(ft+1)+W*J;c.push(At,Jt,Q),c.push(Jt,V,Q),z+=6}o.addGroup(d,z,y),d+=z,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ln(n){const t={};for(let e=0;e<n.length;e++){const i=Qs(n[e]);for(const r in i)t[r]=i[r]}return t}function l2(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function h_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const h2={clone:Qs,merge:ln};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=f2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=l2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class u_ extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new F,Jd=new Xt,Qd=new Xt;class Kn extends u_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Ns=1;class d2 extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(Is,Ns,t,e);r.layers=this.layers,this.add(r);const s=new Kn(Is,Ns,t,e);s.layers=this.layers,this.add(s);const a=new Kn(Is,Ns,t,e);a.layers=this.layers,this.add(a);const o=new Kn(Is,Ns,t,e);o.layers=this.layers,this.add(o);const c=new Kn(Is,Ns,t,e);c.layers=this.layers,this.add(c);const l=new Kn(Is,Ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class f_ extends fn{constructor(t,e,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class p2 extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new f_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new po(5,5,5),s=new wr({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:yr});s.uniforms.tEquirect.value=e;const a=new Jn(r,s),o=e.minFilter;return e.minFilter===is&&(e.minFilter=ui),new d2(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const $l=new F,m2=new F,_2=new Pt;class $r{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=$l.subVectors(i,e).cross(m2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_2.getNormalMatrix(t),r=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new bu,jo=new F;class Ru{constructor(t=new $r,e=new $r,i=new $r,r=new $r,s=new $r,a=new $r){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-s,f-l,m-d,S-p).normalize(),i[1].setComponents(c+s,f+l,m+d,S+p).normalize(),i[2].setComponents(c+a,f+h,m+g,S+M).normalize(),i[3].setComponents(c-a,f-h,m-g,S-M).normalize(),i[4].setComponents(c-o,f-u,m-_,S-v).normalize(),e===Qi)i[5].setComponents(c+o,f+u,m+_,S+v).normalize();else if(e===yc)i[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(jo.x=r.normal.x>0?t.max.x:t.min.x,jo.y=r.normal.y>0?t.max.y:t.min.y,jo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d_(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function g2(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),u.count===-1&&f.length===0&&n.bufferSubData(l,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class mo extends sr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-a;for(let v=0;v<l;v++){const S=v*u-s;g.push(S,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const v=M+l*p,S=M+l*(p+1),w=M+1+l*(p+1),A=M+1+l*p;d.push(v,S,A),d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(_,3)),this.setAttribute("uv",new Fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var v2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,R2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j2="gl_FragColor = linearToOutputTexel( gl_FragColor );",K2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,A3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:v2,alphahash_pars_fragment:x2,alphamap_fragment:y2,alphamap_pars_fragment:M2,alphatest_fragment:S2,alphatest_pars_fragment:E2,aomap_fragment:T2,aomap_pars_fragment:A2,batching_pars_vertex:b2,batching_vertex:w2,begin_vertex:R2,beginnormal_vertex:C2,bsdfs:P2,iridescence_fragment:L2,bumpmap_pars_fragment:D2,clipping_planes_fragment:U2,clipping_planes_pars_fragment:I2,clipping_planes_pars_vertex:N2,clipping_planes_vertex:F2,color_fragment:O2,color_pars_fragment:B2,color_pars_vertex:k2,color_vertex:z2,common:G2,cube_uv_reflection_fragment:V2,defaultnormal_vertex:H2,displacementmap_pars_vertex:W2,displacementmap_vertex:X2,emissivemap_fragment:q2,emissivemap_pars_fragment:Y2,colorspace_fragment:j2,colorspace_pars_fragment:K2,envmap_fragment:$2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:J2,envmap_pars_vertex:Q2,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:ex,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ax,lights_lambert_fragment:ox,lights_lambert_pars_fragment:cx,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:fx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:_x,lights_fragment_begin:gx,lights_fragment_maps:vx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:bx,map_particle_pars_fragment:wx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Px,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Nx,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:t3,shadowmap_vertex:e3,shadowmask_pars_fragment:n3,skinbase_vertex:i3,skinning_pars_vertex:r3,skinning_vertex:s3,skinnormal_vertex:a3,specularmap_fragment:o3,specularmap_pars_fragment:c3,tonemapping_fragment:l3,tonemapping_pars_fragment:h3,transmission_fragment:u3,transmission_pars_fragment:f3,uv_pars_fragment:d3,uv_pars_vertex:p3,uv_vertex:m3,worldpos_vertex:_3,background_vert:g3,background_frag:v3,backgroundCube_vert:x3,backgroundCube_frag:y3,cube_vert:M3,cube_frag:S3,depth_vert:E3,depth_frag:T3,distanceRGBA_vert:A3,distanceRGBA_frag:b3,equirect_vert:w3,equirect_frag:R3,linedashed_vert:C3,linedashed_frag:P3,meshbasic_vert:L3,meshbasic_frag:D3,meshlambert_vert:U3,meshlambert_frag:I3,meshmatcap_vert:N3,meshmatcap_frag:F3,meshnormal_vert:O3,meshnormal_frag:B3,meshphong_vert:k3,meshphong_frag:z3,meshphysical_vert:G3,meshphysical_frag:V3,meshtoon_vert:H3,meshtoon_frag:W3,points_vert:X3,points_frag:q3,shadow_vert:Y3,shadow_frag:j3,sprite_vert:K3,sprite_frag:$3},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Ei={basic:{uniforms:ln([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ln([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ln([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ln([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ln([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ln([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ln([nt.points,nt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ln([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ln([nt.common,nt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ln([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ln([nt.sprite,nt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:ln([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:ln([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ei.physical={uniforms:ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ko={r:0,b:0,g:0},Xr=new Di,Z3=new be;function J3(n,t,e,i,r,s,a){const o=new Ft(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const S=g(M);S===null?p(o,c):S&&S.isColor&&(p(S,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Vc)?(h===void 0&&(h=new Jn(new po(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Qs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Xr.copy(v.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z3.makeRotationFromEuler(Xr)),h.material.toneMapped=te.getTransfer(S.colorSpace)!==he,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jn(new mo(2,2),new wr({name:"BackgroundMaterial",uniforms:Qs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Ko,h_(n)),i.buffers.color.setClear(Ko.r,Ko.g,Ko.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function Q3(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(x,D,N,C,k){let W=!1;const X=u(C,N,D);s!==X&&(s=X,l(s.object)),W=d(x,C,N,k),W&&g(x,C,N,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(x,D,N,C),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,D,N){const C=N.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let W=k[D.id];W===void 0&&(W={},k[D.id]=W);let X=W[C];return X===void 0&&(X=f(c()),W[C]=X),X}function f(x){const D=[],N=[],C=[];for(let k=0;k<e;k++)D[k]=0,N[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:C,object:x,attributes:{},index:null}}function d(x,D,N,C){const k=s.attributes,W=D.attributes;let X=0;const Z=N.getAttributes();for(const z in Z)if(Z[z].location>=0){const J=k[z];let ft=W[z];if(ft===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),J===void 0||J.attribute!==ft||ft&&J.data!==ft.data)return!0;X++}return s.attributesNum!==X||s.index!==C}function g(x,D,N,C){const k={},W=D.attributes;let X=0;const Z=N.getAttributes();for(const z in Z)if(Z[z].location>=0){let J=W[z];J===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const ft={};ft.attribute=J,J&&J.data&&(ft.data=J.data),k[z]=ft,X++}s.attributes=k,s.attributesNum=X,s.index=C}function _(){const x=s.newAttributes;for(let D=0,N=x.length;D<N;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const N=s.newAttributes,C=s.enabledAttributes,k=s.attributeDivisors;N[x]=1,C[x]===0&&(n.enableVertexAttribArray(x),C[x]=1),k[x]!==D&&(n.vertexAttribDivisor(x,D),k[x]=D)}function M(){const x=s.newAttributes,D=s.enabledAttributes;for(let N=0,C=D.length;N<C;N++)D[N]!==x[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function v(x,D,N,C,k,W,X){X===!0?n.vertexAttribIPointer(x,D,N,k,W):n.vertexAttribPointer(x,D,N,C,k,W)}function S(x,D,N,C){_();const k=C.attributes,W=N.getAttributes(),X=D.defaultAttributeValues;for(const Z in W){const z=W[Z];if(z.location>=0){let tt=k[Z];if(tt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const J=tt.normalized,ft=tt.itemSize,At=t.get(tt);if(At===void 0)continue;const Jt=At.buffer,V=At.type,Q=At.bytesPerElement,dt=V===n.INT||V===n.UNSIGNED_INT||tt.gpuType===Km;if(tt.isInterleavedBufferAttribute){const it=tt.data,Bt=it.stride,kt=tt.offset;if(it.isInstancedInterleavedBuffer){for(let I=0;I<z.locationSize;I++)p(z.location+I,it.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let I=0;I<z.locationSize;I++)m(z.location+I);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let I=0;I<z.locationSize;I++)v(z.location+I,ft/z.locationSize,V,J,Bt*Q,(kt+ft/z.locationSize*I)*Q,dt)}else{if(tt.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)p(z.location+it,tt.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<z.locationSize;it++)m(z.location+it);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let it=0;it<z.locationSize;it++)v(z.location+it,ft/z.locationSize,V,J,ft*Q,ft/z.locationSize*it*Q,dt)}}else if(X!==void 0){const J=X[Z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(z.location,J);break;case 3:n.vertexAttrib3fv(z.location,J);break;case 4:n.vertexAttrib4fv(z.location,J);break;default:n.vertexAttrib1fv(z.location,J)}}}}M()}function w(){P();for(const x in i){const D=i[x];for(const N in D){const C=D[N];for(const k in C)h(C[k].object),delete C[k];delete D[N]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const D=i[x.id];for(const N in D){const C=D[N];for(const k in C)h(C[k].object),delete C[k];delete D[N]}delete i[x.id]}function b(x){for(const D in i){const N=i[D];if(N[x.id]===void 0)continue;const C=N[x.id];for(const k in C)h(C[k].object),delete C[k];delete N[x.id]}}function P(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function ty(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u;d++)this.render(l[d],h[d]);else{f.multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ey(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==wi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Hc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==br&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_r&&!b)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:w}}function ny(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new $r,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:i,v=M*4;let S=p.clippingState||null;c.value=S,S=h(g,f,v,d);for(let w=0;w!==v;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function iy(n){let t=new WeakMap;function e(a,o){return o===Lh?a.mapping=$s:o===Dh&&(a.mapping=Zs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lh||o===Dh)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new p2(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class p_ extends u_{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ks=4,tp=[.125,.215,.35,.446,.526,.582],es=20,Zl=new p_,ep=new Ft;let Jl=null,Ql=0,th=0,eh=!1;const Zr=(1+Math.sqrt(5))/2,Fs=1/Zr,np=[new F(-Zr,Fs,0),new F(Zr,Fs,0),new F(-Fs,0,Zr),new F(Fs,0,Zr),new F(0,Zr,-Fs),new F(0,Zr,Fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class ip{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jl,Ql,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Hc,format:wi,colorSpace:Fr,depthBuffer:!1},r=rp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(s)),this._blurMaterial=sy(s,t,e)}return r}_compileMaterial(t){const e=new Jn(this._lodPlanes[0],t);this._renderer.compile(e,Zl)}_sceneToCubeUV(t,e,i,r){const o=new Kn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ep),h.toneMapping=Mr,h.autoClear=!1;const d=new Xc({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Jn(new po,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(ep),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;$o(r,M*v,p>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===$s||t.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;$o(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Zl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=np[(r-s-1)%np.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jn(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*es-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let M=0;for(let b=0;b<es;++b){const P=b/_,y=Math.exp(-P*P/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[r],w=3*S*(r>v-ks?r-v+ks:0),A=4*(this._cubeSize-S);$o(e,w,A,3*S,2*S),c.setRenderTarget(e),c.render(u,Zl)}}function ry(n){const t=[],e=[],i=[];let r=n;const s=n-ks+1+tp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ks?c=tp[a-n+ks-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,P=A>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(y,_*g*A),v.set(f,m*g*A);const x=[A,A,A,A,A,A];S.set(x,p*g*A)}const w=new sr;w.setAttribute("position",new Ci(M,_)),w.setAttribute("uv",new Ci(v,m)),w.setAttribute("faceIndex",new Ci(S,p)),t.push(w),r>ks&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rp(n,t,e){const i=new ds(n,t,e);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function sy(n,t,e){const i=new Float32Array(es),r=new F(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function sp(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ap(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lh||c===Dh,h=c===$s||c===Zs;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ip(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new ip(n)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function oy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cy(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,S=M.length;v<S;v+=3){const w=M[v+0],A=M[v+1],b=M[v+2];f.push(w,A,A,b,b,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const w=v+0,A=v+1,b=v+2;f.push(w,A,A,b,b,w)}}else return;const m=new(i_(f)?l_:c_)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ly(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/a,d[m]);else{_.multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M];for(let M=0;M<_.length;M++)e.update(p,i,_[M])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function uy(n,t,e){const i=new WeakMap,r=new qe;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let S=o.attributes.position.count*v,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*w*4*u),b=new s_(A,S,w,u);b.type=_r,b.needsUpdate=!0;const P=v*4;for(let x=0;x<u;x++){const D=m[x],N=p[x],C=M[x],k=S*w*4*x;for(let W=0;W<D.count;W++){const X=W*P;d===!0&&(r.fromBufferAttribute(D,W),A[k+X+0]=r.x,A[k+X+1]=r.y,A[k+X+2]=r.z,A[k+X+3]=0),g===!0&&(r.fromBufferAttribute(N,W),A[k+X+4]=r.x,A[k+X+5]=r.y,A[k+X+6]=r.z,A[k+X+7]=0),_===!0&&(r.fromBufferAttribute(C,W),A[k+X+8]=r.x,A[k+X+9]=r.y,A[k+X+10]=r.z,A[k+X+11]=C.itemSize===4?r.w:1)}}f={count:u,texture:b,size:new Xt(S,w)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function fy(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class m_ extends fn{constructor(t,e,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:Ws,h!==Ws&&h!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=Js),i===void 0&&h===Ka&&(i=lo),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Zn,this.minFilter=c!==void 0?c:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const __=new fn,g_=new m_(1,1);g_.compareFunction=n_;const v_=new s_,x_=new Jv,y_=new f_,op=[],cp=[],lp=new Float32Array(16),hp=new Float32Array(9),up=new Float32Array(4);function _a(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=op[r];if(s===void 0&&(s=new Float32Array(r),op[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qc(n,t){let e=cp[t];e===void 0&&(e=new Int32Array(t),cp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function gy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;up.set(i),n.uniformMatrix2fv(this.addr,!1,up),Ge(e,i)}}function vy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;hp.set(i),n.uniformMatrix3fv(this.addr,!1,hp),Ge(e,i)}}function xy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;lp.set(i),n.uniformMatrix4fv(this.addr,!1,lp),Ge(e,i)}}function yy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function Ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function by(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function Ry(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?g_:__;e.setTexture2D(t||s,r)}function Cy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||x_,r)}function Py(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||y_,r)}function Ly(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||v_,r)}function Dy(n){switch(n){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return _y;case 35674:return gy;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return Ty;case 36294:return Ay;case 36295:return by;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Uy(n,t){n.uniform1fv(this.addr,t)}function Iy(n,t){const e=_a(t,this.size,2);n.uniform2fv(this.addr,e)}function Ny(n,t){const e=_a(t,this.size,3);n.uniform3fv(this.addr,e)}function Fy(n,t){const e=_a(t,this.size,4);n.uniform4fv(this.addr,e)}function Oy(n,t){const e=_a(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function By(n,t){const e=_a(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ky(n,t){const e=_a(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zy(n,t){n.uniform1iv(this.addr,t)}function Gy(n,t){n.uniform2iv(this.addr,t)}function Vy(n,t){n.uniform3iv(this.addr,t)}function Hy(n,t){n.uniform4iv(this.addr,t)}function Wy(n,t){n.uniform1uiv(this.addr,t)}function Xy(n,t){n.uniform2uiv(this.addr,t)}function qy(n,t){n.uniform3uiv(this.addr,t)}function Yy(n,t){n.uniform4uiv(this.addr,t)}function jy(n,t,e){const i=this.cache,r=t.length,s=qc(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||__,s[a])}function Ky(n,t,e){const i=this.cache,r=t.length,s=qc(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||x_,s[a])}function $y(n,t,e){const i=this.cache,r=t.length,s=qc(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||y_,s[a])}function Zy(n,t,e){const i=this.cache,r=t.length,s=qc(e,r);ze(i,s)||(n.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||v_,s[a])}function Jy(n){switch(n){case 5126:return Uy;case 35664:return Iy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Hy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}class Qy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dy(e.type)}}class tM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jy(e.type)}}class eM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function fp(n,t){n.seq.push(t),n.map[t.id]=t}function nM(n,t,e){const i=n.name,r=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),a=nh.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){fp(e,l===void 0?new Qy(o,n,t):new tM(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new eM(o),fp(e,u)),e=u}}}class rc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);nM(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function dp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iM=37297;let rM=0;function sM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function aM(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===xc&&e===vc?i="LinearDisplayP3ToLinearSRGB":t===vc&&e===xc&&(i="LinearSRGBToLinearDisplayP3"),n){case Fr:case Wc:return[i,"LinearTransferOETF"];case yi:case Au:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+sM(n.getShaderSource(t),a)}else return r}function oM(n,t){const e=aM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cM(n,t){let e;switch(t){case _v:e="Linear";break;case gv:e="Reinhard";break;case vv:e="OptimizedCineon";break;case xv:e="ACESFilmic";break;case Mv:e="AgX";break;case Sv:e="Neutral";break;case yv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function hM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Na(n){return n!==""}function mp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _p(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(fM,pM)}const dM=new Map;function pM(n,t){let e=Ct[t];if(e===void 0){const i=dM.get(t);if(i!==void 0)e=Ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fh(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(n){return n.replace(mM,_M)}function _M(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===V1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Zs:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function yM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tu:t="ENVMAP_BLENDING_MULTIPLY";break;case pv:t="ENVMAP_BLENDING_MIX";break;case mv:t="ENVMAP_BLENDING_ADD";break}return t}function MM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function SM(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=gM(e),l=vM(e),h=xM(e),u=yM(e),f=MM(e),d=lM(e),g=hM(s),_=r.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Na).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(m=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mr?"#define TONE_MAPPING":"",e.toneMapping!==Mr?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Mr?cM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Na).join(`
`)),a=Fh(a),a=mp(a,e),a=_p(a,e),o=Fh(o),o=mp(o,e),o=_p(o,e),a=gp(a),o=gp(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+a,S=M+p+o,w=dp(r,r.VERTEX_SHADER,v),A=dp(r,r.FRAGMENT_SHADER,S);r.attachShader(_,w),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),C=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(A).trim();let W=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,A);else{const Z=pp(r,w,"vertex"),z=pp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+Z+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(C===""||k==="")&&(X=!1);X&&(D.diagnostics={runnable:W,programLog:N,vertexShader:{log:C,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(w),r.deleteShader(A),P=new rc(r,_),y=uM(r,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,iM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let EM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AM(t),e.set(t,i)),i}}class AM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function bM(n,t,e,i,r,s,a){const o=new wu,c=new TM,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,D,N,C){const k=N.fog,W=C.geometry,X=y.isMeshStandardMaterial?N.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),z=Z&&Z.mapping===Vc?Z.image.height:null,tt=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const J=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=J!==void 0?J.length:0;let At=0;W.morphAttributes.position!==void 0&&(At=1),W.morphAttributes.normal!==void 0&&(At=2),W.morphAttributes.color!==void 0&&(At=3);let Jt,V,Q,dt;if(tt){const Qt=Ei[tt];Jt=Qt.vertexShader,V=Qt.fragmentShader}else Jt=y.vertexShader,V=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),dt=c.getFragmentShaderID(y);const it=n.getRenderTarget(),Bt=C.isInstancedMesh===!0,kt=C.isBatchedMesh===!0,I=!!y.map,ce=!!y.matcap,Mt=!!Z,re=!!y.aoMap,Tt=!!y.lightMap,Ht=!!y.bumpMap,It=!!y.normalMap,Wt=!!y.displacementMap,Me=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,H=y.anisotropy>0,Y=y.clearcoat>0,K=y.dispersion>0,$=y.iridescence>0,yt=y.sheen>0,ot=y.transmission>0,at=H&&!!y.anisotropyMap,Lt=Y&&!!y.clearcoatMap,et=Y&&!!y.clearcoatNormalMap,xt=Y&&!!y.clearcoatRoughnessMap,qt=$&&!!y.iridescenceMap,St=$&&!!y.iridescenceThicknessMap,ht=yt&&!!y.sheenColorMap,Dt=yt&&!!y.sheenRoughnessMap,zt=!!y.specularMap,Ce=!!y.specularColorMap,Ut=!!y.specularIntensityMap,L=ot&&!!y.transmissionMap,j=ot&&!!y.thicknessMap,q=!!y.gradientMap,rt=!!y.alphaMap,ct=y.alphaTest>0,jt=!!y.alphaHash,le=!!y.extensions;let Se=Mr;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Se=n.toneMapping);const je={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:V,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:kt,instancing:Bt,instancingColor:Bt&&C.instanceColor!==null,instancingMorph:Bt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:I,matcap:ce,envMap:Mt,envMapMode:Mt&&Z.mapping,envMapCubeUVHeight:z,aoMap:re,lightMap:Tt,bumpMap:Ht,normalMap:It,displacementMap:f&&Wt,emissiveMap:Me,normalMapObjectSpace:It&&y.normalMapType===Fv,normalMapTangentSpace:It&&y.normalMapType===e_,metalnessMap:R,roughnessMap:E,anisotropy:H,anisotropyMap:at,clearcoat:Y,clearcoatMap:Lt,clearcoatNormalMap:et,clearcoatRoughnessMap:xt,dispersion:K,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:St,sheen:yt,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:zt,specularColorMap:Ce,specularIntensityMap:Ut,transmission:ot,transmissionMap:L,thicknessMap:j,gradientMap:q,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:ct,alphaHash:jt,combine:y.combine,mapUv:I&&_(y.map.channel),aoMapUv:re&&_(y.aoMap.channel),lightMapUv:Tt&&_(y.lightMap.channel),bumpMapUv:Ht&&_(y.bumpMap.channel),normalMapUv:It&&_(y.normalMap.channel),displacementMapUv:Wt&&_(y.displacementMap.channel),emissiveMapUv:Me&&_(y.emissiveMap.channel),metalnessMapUv:R&&_(y.metalnessMap.channel),roughnessMapUv:E&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:Lt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:zt&&_(y.specularMap.channel),specularColorMapUv:Ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Ut&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:j&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(It||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!W.attributes.uv&&(I||rt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:C.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:At,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:I&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zi,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:le&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)x.push(D),x.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(x,y),v(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),y.push(o.mask)}function S(y){const x=g[y.type];let D;if(x){const N=Ei[x];D=h2.clone(N.uniforms)}else D=y.uniforms;return D}function w(y,x){let D;for(let N=0,C=h.length;N<C;N++){const k=h[N];if(k.cacheKey===x){D=k,++D.usedTimes;break}}return D===void 0&&(D=new SM(n,x,y,s),h.push(D)),D}function A(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:P}}function wM(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||RM),i.length>1&&i.sort(f||xp),r.length>1&&r.sort(f||xp)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function CM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new yp,n.set(i,[a])):r>=s.length?(a=new yp,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ft};break;case"SpotLight":e={position:new F,direction:new F,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function LM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let DM=0;function UM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IM(n){const t=new PM,e=LM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const r=new F,s=new be,a=new be;function o(l,h){let u=0,f=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,_=0,m=0,p=0,M=0,v=0,S=0,w=0,A=0,b=0,P=0;l.sort(UM);const y=h===!0?Math.PI:1;for(let D=0,N=l.length;D<N;D++){const C=l[D],k=C.color,W=C.intensity,X=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*W*y,f+=k.g*W*y,d+=k.b*W*y;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],W);P++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const tt=C.shadow,J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=C.shadow.matrix,v++}i.directional[g]=z,g++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(k).multiplyScalar(W*y),z.distance=X,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[m]=z;const tt=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,tt.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[m]=tt.matrix,C.castShadow){const J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=Z,w++}m++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(k).multiplyScalar(W),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=z,p++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*y),z.distance=C.distance,z.decay=C.decay,C.castShadow){const tt=C.shadow,J=e.get(C);J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=C.shadow.matrix,S++}i.point[_]=z,_++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(W*y),z.groundColor.copy(C.groundColor).multiplyScalar(W*y),i.hemi[M]=z,M++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==M||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==w||x.numSpotMaps!==A||x.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,x.directionalLength=g,x.pointLength=_,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=M,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=w,x.numSpotMaps=A,x.numLightProbes=P,i.version=DM++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(v.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Mp(n){const t=new IM(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(h){t.setup(e,h)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function NM(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Mp(n),t.set(r,[o])):s>=a.length?(o=new Mp(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class FM extends fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zM(n,t,e){let i=new Ru;const r=new Xt,s=new Xt,a=new qe,o=new FM({depthPacking:Nv}),c=new OM,l={},h=e.maxTextureSize,u={[Ar]:vn,[vn]:Ar,[Zi]:Zi},f=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:BM,fragmentShader:kM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let p=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(yr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const C=p!==ji&&this.type===ji,k=p===ji&&this.type!==ji;for(let W=0,X=A.length;W<X;W++){const Z=A[W],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const tt=z.getFrameExtents();if(r.multiply(tt),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,z.mapSize.y=s.y)),z.map===null||C===!0||k===!0){const ft=this.type!==ji?{minFilter:Zn,magFilter:Zn}:{};z.map!==null&&z.map.dispose(),z.map=new ds(r.x,r.y,ft),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const J=z.getViewportCount();for(let ft=0;ft<J;ft++){const At=z.getViewport(ft);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),N.viewport(a),z.updateMatrices(Z,ft),i=z.getFrustum(),S(b,P,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===ji&&M(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,D)};function M(A,b){const P=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(b,null,P,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(b,null,P,d,_,null)}function v(A,b,P,y){let x=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?c:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=x.uuid,C=b.uuid;let k=l[N];k===void 0&&(k={},l[N]=k);let W=k[C];W===void 0&&(W=x.clone(),k[C]=W,b.addEventListener("dispose",w)),x=W}if(x.visible=b.visible,x.wireframe=b.wireframe,y===ji?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=P}return x}function S(A,b,P,y,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===ji)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const C=t.update(A),k=A.material;if(Array.isArray(k)){const W=C.groups;for(let X=0,Z=W.length;X<Z;X++){const z=W[X],tt=k[z.materialIndex];if(tt&&tt.visible){const J=v(A,tt,y,x);A.onBeforeShadow(n,A,b,P,C,J,z),n.renderBufferDirect(P,null,C,J,A,z),A.onAfterShadow(n,A,b,P,C,J,z)}}}else if(k.visible){const W=v(A,k,y,x);A.onBeforeShadow(n,A,b,P,C,W,null),n.renderBufferDirect(P,null,C,W,A,null),A.onAfterShadow(n,A,b,P,C,W,null)}}const N=A.children;for(let C=0,k=N.length;C<k;C++)S(N[C],b,P,y,x)}function w(A){A.target.removeEventListener("dispose",w);for(const P in l){const y=l[P],x=A.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function GM(n){function t(){let L=!1;const j=new qe;let q=null;const rt=new qe(0,0,0,0);return{setMask:function(ct){q!==ct&&!L&&(n.colorMask(ct,ct,ct,ct),q=ct)},setLocked:function(ct){L=ct},setClear:function(ct,jt,le,Se,je){je===!0&&(ct*=Se,jt*=Se,le*=Se),j.set(ct,jt,le,Se),rt.equals(j)===!1&&(n.clearColor(ct,jt,le,Se),rt.copy(j))},reset:function(){L=!1,q=null,rt.set(-1,0,0,0)}}}function e(){let L=!1,j=null,q=null,rt=null;return{setTest:function(ct){ct?dt(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(ct){j!==ct&&!L&&(n.depthMask(ct),j=ct)},setFunc:function(ct){if(q!==ct){switch(ct){case ov:n.depthFunc(n.NEVER);break;case cv:n.depthFunc(n.ALWAYS);break;case lv:n.depthFunc(n.LESS);break;case _c:n.depthFunc(n.LEQUAL);break;case hv:n.depthFunc(n.EQUAL);break;case uv:n.depthFunc(n.GEQUAL);break;case fv:n.depthFunc(n.GREATER);break;case dv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ct}},setLocked:function(ct){L=ct},setClear:function(ct){rt!==ct&&(n.clearDepth(ct),rt=ct)},reset:function(){L=!1,j=null,q=null,rt=null}}}function i(){let L=!1,j=null,q=null,rt=null,ct=null,jt=null,le=null,Se=null,je=null;return{setTest:function(Qt){L||(Qt?dt(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(Qt){j!==Qt&&!L&&(n.stencilMask(Qt),j=Qt)},setFunc:function(Qt,_i,on){(q!==Qt||rt!==_i||ct!==on)&&(n.stencilFunc(Qt,_i,on),q=Qt,rt=_i,ct=on)},setOp:function(Qt,_i,on){(jt!==Qt||le!==_i||Se!==on)&&(n.stencilOp(Qt,_i,on),jt=Qt,le=_i,Se=on)},setLocked:function(Qt){L=Qt},setClear:function(Qt){je!==Qt&&(n.clearStencil(Qt),je=Qt)},reset:function(){L=!1,j=null,q=null,rt=null,ct=null,jt=null,le=null,Se=null,je=null}}}const r=new t,s=new e,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,M=null,v=null,S=null,w=null,A=new Ft(0,0,0),b=0,P=!1,y=null,x=null,D=null,N=null,C=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=X>=2);let z=null,tt={};const J=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),At=new qe().fromArray(J),Jt=new qe().fromArray(ft);function V(L,j,q,rt){const ct=new Uint8Array(4),jt=n.createTexture();n.bindTexture(L,jt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<q;le++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(j+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return jt}const Q={};Q[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),s.setFunc(_c),Ht(!1),It(nd),dt(n.CULL_FACE),re(yr);function dt(L){l[L]!==!0&&(n.enable(L),l[L]=!0)}function it(L){l[L]!==!1&&(n.disable(L),l[L]=!1)}function Bt(L,j){return h[L]!==j?(n.bindFramebuffer(L,j),h[L]=j,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=j),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=j),!0):!1}function kt(L,j){let q=f,rt=!1;if(L){q=u.get(j),q===void 0&&(q=[],u.set(j,q));const ct=L.textures;if(q.length!==ct.length||q[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,le=ct.length;jt<le;jt++)q[jt]=n.COLOR_ATTACHMENT0+jt;q.length=ct.length,rt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,rt=!0);rt&&n.drawBuffers(q)}function I(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const ce={[ts]:n.FUNC_ADD,[W1]:n.FUNC_SUBTRACT,[X1]:n.FUNC_REVERSE_SUBTRACT};ce[q1]=n.MIN,ce[Y1]=n.MAX;const Mt={[j1]:n.ZERO,[K1]:n.ONE,[$1]:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,[nv]:n.SRC_ALPHA_SATURATE,[tv]:n.DST_COLOR,[J1]:n.DST_ALPHA,[Z1]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[ev]:n.ONE_MINUS_DST_COLOR,[Q1]:n.ONE_MINUS_DST_ALPHA,[iv]:n.CONSTANT_COLOR,[rv]:n.ONE_MINUS_CONSTANT_COLOR,[sv]:n.CONSTANT_ALPHA,[av]:n.ONE_MINUS_CONSTANT_ALPHA};function re(L,j,q,rt,ct,jt,le,Se,je,Qt){if(L===yr){g===!0&&(it(n.BLEND),g=!1);return}if(g===!1&&(dt(n.BLEND),g=!0),L!==H1){if(L!==_||Qt!==P){if((m!==ts||v!==ts)&&(n.blendEquation(n.FUNC_ADD),m=ts,v=ts),Qt)switch(L){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case id:n.blendFunc(n.ONE,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case id:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,M=null,S=null,w=null,A.set(0,0,0),b=0,_=L,P=Qt}return}ct=ct||j,jt=jt||q,le=le||rt,(j!==m||ct!==v)&&(n.blendEquationSeparate(ce[j],ce[ct]),m=j,v=ct),(q!==p||rt!==M||jt!==S||le!==w)&&(n.blendFuncSeparate(Mt[q],Mt[rt],Mt[jt],Mt[le]),p=q,M=rt,S=jt,w=le),(Se.equals(A)===!1||je!==b)&&(n.blendColor(Se.r,Se.g,Se.b,je),A.copy(Se),b=je),_=L,P=!1}function Tt(L,j){L.side===Zi?it(n.CULL_FACE):dt(n.CULL_FACE);let q=L.side===vn;j&&(q=!q),Ht(q),L.blending===Hs&&L.transparent===!1?re(yr):re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const rt=L.stencilWrite;a.setTest(rt),rt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(L){y!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),y=L)}function It(L){L!==z1?(dt(n.CULL_FACE),L!==x&&(L===nd?n.cullFace(n.BACK):L===G1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),x=L}function Wt(L){L!==D&&(W&&n.lineWidth(L),D=L)}function Me(L,j,q){L?(dt(n.POLYGON_OFFSET_FILL),(N!==j||C!==q)&&(n.polygonOffset(j,q),N=j,C=q)):it(n.POLYGON_OFFSET_FILL)}function R(L){L?dt(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function E(L){L===void 0&&(L=n.TEXTURE0+k-1),z!==L&&(n.activeTexture(L),z=L)}function H(L,j,q){q===void 0&&(z===null?q=n.TEXTURE0+k-1:q=z);let rt=tt[q];rt===void 0&&(rt={type:void 0,texture:void 0},tt[q]=rt),(rt.type!==L||rt.texture!==j)&&(z!==q&&(n.activeTexture(q),z=q),n.bindTexture(L,j||Q[L]),rt.type=L,rt.texture=j)}function Y(){const L=tt[z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){At.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),At.copy(L))}function Dt(L){Jt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Jt.copy(L))}function zt(L,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let rt=q.get(L);rt===void 0&&(rt=n.getUniformBlockIndex(j,L.name),q.set(L,rt))}function Ce(L,j){const rt=c.get(j).get(L);o.get(j)!==rt&&(n.uniformBlockBinding(j,rt,L.__bindingPointIndex),o.set(j,rt))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},z=null,tt={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,M=null,v=null,S=null,w=null,A=new Ft(0,0,0),b=0,P=!1,y=null,x=null,D=null,N=null,C=null,At.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:dt,disable:it,bindFramebuffer:Bt,drawBuffers:kt,useProgram:I,setBlending:re,setMaterial:Tt,setFlipSided:Ht,setCullFace:It,setLineWidth:Wt,setPolygonOffset:Me,setScissorTest:R,activeTexture:E,bindTexture:H,unbindTexture:Y,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:qt,texImage3D:St,updateUBOMapping:zt,uniformBlockBinding:Ce,texStorage2D:et,texStorage3D:xt,texSubImage2D:yt,texSubImage3D:ot,compressedTexSubImage2D:at,compressedTexSubImage3D:Lt,scissor:ht,viewport:Dt,reset:Ut}}function VM(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):$a("canvas")}function _(R,E,H){let Y=1;const K=Me(R);if((K.width>H||K.height>H)&&(Y=H/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Y*K.width),yt=Math.floor(Y*K.height);u===void 0&&(u=g($,yt));const ot=E?g($,yt):u;return ot.width=$,ot.height=yt,ot.getContext("2d").drawImage(R,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+yt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Zn&&R.minFilter!==ui}function p(R){n.generateMipmap(R)}function M(R,E,H,Y,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),E===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),E===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){const yt=K?gc:te.getTransfer(Y);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=yt===he?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zn&&R.minFilter!==ui?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){const E=R.target;E.removeEventListener("dispose",S),A(E),E.isVideoTexture&&h.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),P(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const H=R.source,Y=f.get(H);if(Y){const K=Y[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(R),Object.keys(Y).length===0&&f.delete(H)}i.remove(R)}function b(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const H=R.source,Y=f.get(H);delete Y[E.__cacheKey],a.memory.textures--}function P(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let K=0;K<E.__webglFramebuffer[Y].length;K++)n.deleteFramebuffer(E.__webglFramebuffer[Y][K]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=R.textures;for(let Y=0,K=H.length;Y<K;Y++){const $=i.get(H[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[Y])}i.remove(R)}let y=0;function x(){y=0}function D(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function N(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function C(R,E){const H=i.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(H,R,E);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function k(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){At(H,R,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function W(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){At(H,R,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function X(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Jt(H,R,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const Z={[Uh]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[Ih]:n.MIRRORED_REPEAT},z={[Zn]:n.NEAREST,[Ev]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},tt={[Ov]:n.NEVER,[Hv]:n.ALWAYS,[Bv]:n.LESS,[n_]:n.LEQUAL,[kv]:n.EQUAL,[Vv]:n.GEQUAL,[zv]:n.GREATER,[Gv]:n.NOTEQUAL};function J(R,E){if(E.type===_r&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ui||E.magFilter===Al||E.magFilter===Co||E.magFilter===is||E.minFilter===ui||E.minFilter===Al||E.minFilter===Co||E.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,z[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zn||E.minFilter!==Co&&E.minFilter!==is||E.type===_r&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ft(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",S));const Y=E.source;let K=f.get(Y);K===void 0&&(K={},f.set(Y,K));const $=N(E);if($!==R.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[$].usedTimes++;const yt=K[R.__cacheKey];yt!==void 0&&(K[R.__cacheKey].usedTimes--,yt.usedTimes===0&&b(E)),R.__cacheKey=$,R.__webglTexture=K[$].texture}return H}function At(R,E,H){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const K=ft(R,E),$=E.source;e.bindTexture(Y,R.__webglTexture,n.TEXTURE0+H);const yt=i.get($);if($.version!==yt.__version||K===!0){e.activeTexture(n.TEXTURE0+H);const ot=te.getPrimaries(te.workingColorSpace),at=E.colorSpace===pr?null:te.getPrimaries(E.colorSpace),Lt=E.colorSpace===pr||ot===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let et=_(E.image,!1,r.maxTextureSize);et=Wt(E,et);const xt=s.convert(E.format,E.colorSpace),qt=s.convert(E.type);let St=M(E.internalFormat,xt,qt,E.colorSpace,E.isVideoTexture);J(Y,E);let ht;const Dt=E.mipmaps,zt=E.isVideoTexture!==!0,Ce=yt.__version===void 0||K===!0,Ut=$.dataReady,L=v(E,et);if(E.isDepthTexture)St=n.DEPTH_COMPONENT16,E.type===_r?St=n.DEPTH_COMPONENT32F:E.type===Js?St=n.DEPTH_COMPONENT24:E.type===lo&&(St=n.DEPTH24_STENCIL8),Ce&&(zt?e.texStorage2D(n.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,St,et.width,et.height,0,xt,qt,null));else if(E.isDataTexture)if(Dt.length>0){zt&&Ce&&e.texStorage2D(n.TEXTURE_2D,L,St,Dt[0].width,Dt[0].height);for(let j=0,q=Dt.length;j<q;j++)ht=Dt[j],zt?Ut&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,xt,qt,ht.data):e.texImage2D(n.TEXTURE_2D,j,St,ht.width,ht.height,0,xt,qt,ht.data);E.generateMipmaps=!1}else zt?(Ce&&e.texStorage2D(n.TEXTURE_2D,L,St,et.width,et.height),Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,xt,qt,et.data)):e.texImage2D(n.TEXTURE_2D,0,St,et.width,et.height,0,xt,qt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&Ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,L,St,Dt[0].width,Dt[0].height,et.depth);for(let j=0,q=Dt.length;j<q;j++)ht=Dt[j],E.format!==wi?xt!==null?zt?Ut&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,et.depth,xt,ht.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,St,ht.width,ht.height,et.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ht.width,ht.height,et.depth,xt,qt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,St,ht.width,ht.height,et.depth,0,xt,qt,ht.data)}else{zt&&Ce&&e.texStorage2D(n.TEXTURE_2D,L,St,Dt[0].width,Dt[0].height);for(let j=0,q=Dt.length;j<q;j++)ht=Dt[j],E.format!==wi?xt!==null?zt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,xt,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,j,St,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?Ut&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,ht.width,ht.height,xt,qt,ht.data):e.texImage2D(n.TEXTURE_2D,j,St,ht.width,ht.height,0,xt,qt,ht.data)}else if(E.isDataArrayTexture)zt?(Ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,L,St,et.width,et.height,et.depth),Ut&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,qt,et.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,xt,qt,et.data);else if(E.isData3DTexture)zt?(Ce&&e.texStorage3D(n.TEXTURE_3D,L,St,et.width,et.height,et.depth),Ut&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,qt,et.data)):e.texImage3D(n.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,xt,qt,et.data);else if(E.isFramebufferTexture){if(Ce)if(zt)e.texStorage2D(n.TEXTURE_2D,L,St,et.width,et.height);else{let j=et.width,q=et.height;for(let rt=0;rt<L;rt++)e.texImage2D(n.TEXTURE_2D,rt,St,j,q,0,xt,qt,null),j>>=1,q>>=1}}else if(Dt.length>0){if(zt&&Ce){const j=Me(Dt[0]);e.texStorage2D(n.TEXTURE_2D,L,St,j.width,j.height)}for(let j=0,q=Dt.length;j<q;j++)ht=Dt[j],zt?Ut&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,xt,qt,ht):e.texImage2D(n.TEXTURE_2D,j,St,xt,qt,ht);E.generateMipmaps=!1}else if(zt){if(Ce){const j=Me(et);e.texStorage2D(n.TEXTURE_2D,L,St,j.width,j.height)}Ut&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,qt,et)}else e.texImage2D(n.TEXTURE_2D,0,St,xt,qt,et);m(E)&&p(Y),yt.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Jt(R,E,H){if(E.image.length!==6)return;const Y=ft(R,E),K=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const $=i.get(K);if(K.version!==$.__version||Y===!0){e.activeTexture(n.TEXTURE0+H);const yt=te.getPrimaries(te.workingColorSpace),ot=E.colorSpace===pr?null:te.getPrimaries(E.colorSpace),at=E.colorSpace===pr||yt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let q=0;q<6;q++)!Lt&&!et?xt[q]=_(E.image[q],!0,r.maxCubemapSize):xt[q]=et?E.image[q].image:E.image[q],xt[q]=Wt(E,xt[q]);const qt=xt[0],St=s.convert(E.format,E.colorSpace),ht=s.convert(E.type),Dt=M(E.internalFormat,St,ht,E.colorSpace),zt=E.isVideoTexture!==!0,Ce=$.__version===void 0||Y===!0,Ut=K.dataReady;let L=v(E,qt);J(n.TEXTURE_CUBE_MAP,E);let j;if(Lt){zt&&Ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,L,Dt,qt.width,qt.height);for(let q=0;q<6;q++){j=xt[q].mipmaps;for(let rt=0;rt<j.length;rt++){const ct=j[rt];E.format!==wi?St!==null?zt?Ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt,0,0,ct.width,ct.height,St,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt,Dt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt,0,0,ct.width,ct.height,St,ht,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt,Dt,ct.width,ct.height,0,St,ht,ct.data)}}}else{if(j=E.mipmaps,zt&&Ce){j.length>0&&L++;const q=Me(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,L,Dt,q.width,q.height)}for(let q=0;q<6;q++)if(et){zt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xt[q].width,xt[q].height,St,ht,xt[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Dt,xt[q].width,xt[q].height,0,St,ht,xt[q].data);for(let rt=0;rt<j.length;rt++){const jt=j[rt].image[q].image;zt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt+1,0,0,jt.width,jt.height,St,ht,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt+1,Dt,jt.width,jt.height,0,St,ht,jt.data)}}else{zt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,St,ht,xt[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Dt,St,ht,xt[q]);for(let rt=0;rt<j.length;rt++){const ct=j[rt];zt?Ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt+1,0,0,St,ht,ct.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,rt+1,Dt,St,ht,ct.image[q])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),$.__version=K.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function V(R,E,H,Y,K,$){const yt=s.convert(H.format,H.colorSpace),ot=s.convert(H.type),at=M(H.internalFormat,yt,ot,H.colorSpace);if(!i.get(E).__hasExternalTextures){const et=Math.max(1,E.width>>$),xt=Math.max(1,E.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,$,at,et,xt,E.depth,0,yt,ot,null):e.texImage2D(K,$,at,et,xt,0,yt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ht(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,K,i.get(H).__webglTexture,0,Tt(E)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,K,i.get(H).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(R,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let Y=n.DEPTH_COMPONENT24;if(H||Ht(E)){const K=E.depthTexture;K&&K.isDepthTexture&&(K.type===_r?Y=n.DEPTH_COMPONENT32F:K.type===Js&&(Y=n.DEPTH_COMPONENT24));const $=Tt(E);Ht(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,Y,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Y,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const Y=Tt(E);H&&Ht(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,E.width,E.height):Ht(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const Y=E.textures;for(let K=0;K<Y.length;K++){const $=Y[K],yt=s.convert($.format,$.colorSpace),ot=s.convert($.type),at=M($.internalFormat,yt,ot,$.colorSpace),Lt=Tt(E);H&&Ht(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,at,E.width,E.height):Ht(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,at,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,at,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),C(E.depthTexture,0);const Y=i.get(E.depthTexture).__webglTexture,K=Tt(E);if(E.depthTexture.format===Ws)Ht(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(E.depthTexture.format===Ka)Ht(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function it(R){const E=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]=n.createRenderbuffer(),Q(E.__webglDepthbuffer[Y],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Q(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(R,E,H){const Y=i.get(R);E!==void 0&&V(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&it(R)}function kt(R){const E=R.texture,H=i.get(R),Y=i.get(E);R.addEventListener("dispose",w);const K=R.textures,$=R.isWebGLCubeRenderTarget===!0,yt=K.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let at=0;at<E.mipmaps.length;at++)H.__webglFramebuffer[ot][at]=n.createFramebuffer()}else H.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)H.__webglFramebuffer[ot]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ot=0,at=K.length;ot<at;ot++){const Lt=i.get(K[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ht(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const at=K[ot];H.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);const Lt=s.convert(at.format,at.colorSpace),et=s.convert(at.type),xt=M(at.internalFormat,Lt,et,at.colorSpace,R.isXRRenderTarget===!0),qt=Tt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,xt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),J(n.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)V(H.__webglFramebuffer[ot][at],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else V(H.__webglFramebuffer[ot],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,at=K.length;ot<at;ot++){const Lt=K[ot],et=i.get(Lt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),J(n.TEXTURE_2D,Lt),V(H.__webglFramebuffer,R,Lt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Lt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),J(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let at=0;at<E.mipmaps.length;at++)V(H.__webglFramebuffer[at],R,E,n.COLOR_ATTACHMENT0,ot,at);else V(H.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ot,0);m(E)&&p(ot),e.unbindTexture()}R.depthBuffer&&it(R)}function I(R){const E=R.textures;for(let H=0,Y=E.length;H<Y;H++){const K=E[H];if(m(K)){const $=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,yt=i.get(K).__webglTexture;e.bindTexture($,yt),p($),e.unbindTexture()}}}const ce=[],Mt=[];function re(R){if(R.samples>0){if(Ht(R)===!1){const E=R.textures,H=R.width,Y=R.height;let K=n.COLOR_BUFFER_BIT;const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(R),ot=E.length>1;if(ot)for(let at=0;at<E.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let at=0;at<E.length;at++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[at]);const Lt=i.get(E[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,H,Y,0,0,H,Y,K,n.NEAREST),c===!0&&(ce.length=0,Mt.length=0,ce.push(n.COLOR_ATTACHMENT0+at),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ce.push($),Mt.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Mt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let at=0;at<E.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,yt.__webglColorRenderbuffer[at]);const Lt=i.get(E[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Tt(R){return Math.min(r.maxSamples,R.samples)}function Ht(R){const E=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Wt(R,E){const H=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Fr&&H!==pr&&(te.getTransfer(H)===he?(Y!==wi||K!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=C,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Bt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ht}function HM(n,t){function e(i,r=pr){let s;const a=te.getTransfer(r);if(i===br)return n.UNSIGNED_BYTE;if(i===$m)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tv)return n.BYTE;if(i===Av)return n.SHORT;if(i===jm)return n.UNSIGNED_SHORT;if(i===Km)return n.INT;if(i===Js)return n.UNSIGNED_INT;if(i===_r)return n.FLOAT;if(i===Hc)return n.HALF_FLOAT;if(i===wv)return n.ALPHA;if(i===Rv)return n.RGB;if(i===wi)return n.RGBA;if(i===Cv)return n.LUMINANCE;if(i===Pv)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Ka)return n.DEPTH_STENCIL;if(i===Lv)return n.RED;if(i===Jm)return n.RED_INTEGER;if(i===Dv)return n.RG;if(i===Qm)return n.RG_INTEGER;if(i===t_)return n.RGBA_INTEGER;if(i===bl||i===wl||i===Rl||i===Cl)if(a===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ad||i===od||i===cd||i===ld)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hd||i===ud||i===fd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hd||i===ud)return a===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dd||i===pd||i===md||i===_d||i===gd||i===vd||i===xd||i===yd||i===Md||i===Sd||i===Ed||i===Td||i===Ad||i===bd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===md)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_d)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Md)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ed)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Td)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ad)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bd)return a===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===wd||i===Rd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Pl)return a===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uv||i===Cd||i===Pd||i===Ld)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class WM extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zo extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new fn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new wr({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Jn(new mo(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class KM extends pa{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new jM,m=e.getContextAttributes();let p=null,M=null;const v=[],S=[],w=new Xt;let A=null;const b=new Kn;b.layers.enable(1),b.viewport=new qe;const P=new Kn;P.layers.enable(2),P.viewport=new qe;const y=[b,P],x=new WM;x.layers.enable(1),x.layers.enable(2);let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=v[V];return Q===void 0&&(Q=new ih,v[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=v[V];return Q===void 0&&(Q=new ih,v[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=v[V];return Q===void 0&&(Q=new ih,v[V]=Q),Q.getHandSpace()};function C(V){const Q=S.indexOf(V.inputSource);if(Q===-1)return;const dt=v[Q];dt!==void 0&&(dt.update(V.inputSource,V.frame,l||a),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let V=0;V<v.length;V++){const Q=S[V];Q!==null&&(S[V]=null,v[V].disconnect(Q))}D=null,N=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,r=null,M=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ds(d.framebufferWidth,d.framebufferHeight,{format:wi,type:br,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Ka:Ws,dt=m.stencil?lo:Js);const Bt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(Bt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ds(f.textureWidth,f.textureHeight,{format:wi,type:br,depthTexture:new m_(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Jt.setContext(r),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(V){for(let Q=0;Q<V.removed.length;Q++){const dt=V.removed[Q],it=S.indexOf(dt);it>=0&&(S[it]=null,v[it].disconnect(dt))}for(let Q=0;Q<V.added.length;Q++){const dt=V.added[Q];let it=S.indexOf(dt);if(it===-1){for(let kt=0;kt<v.length;kt++)if(kt>=S.length){S.push(dt),it=kt;break}else if(S[kt]===null){S[kt]=dt,it=kt;break}if(it===-1)break}const Bt=v[it];Bt&&Bt.connect(dt)}}const X=new F,Z=new F;function z(V,Q,dt){X.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(dt.matrixWorld);const it=X.distanceTo(Z),Bt=Q.projectionMatrix.elements,kt=dt.projectionMatrix.elements,I=Bt[14]/(Bt[10]-1),ce=Bt[14]/(Bt[10]+1),Mt=(Bt[9]+1)/Bt[5],re=(Bt[9]-1)/Bt[5],Tt=(Bt[8]-1)/Bt[0],Ht=(kt[8]+1)/kt[0],It=I*Tt,Wt=I*Ht,Me=it/(-Tt+Ht),R=Me*-Tt;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(R),V.translateZ(Me),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=I+Me,H=ce+Me,Y=It-R,K=Wt+(it-R),$=Mt*ce/H*E,yt=re*ce/H*E;V.projectionMatrix.makePerspective(Y,K,$,yt,E,H),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function tt(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=P.near=b.near=V.near,x.far=P.far=b.far=V.far,(D!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,N=x.far,b.near=D,b.far=N,P.near=D,P.far=N,b.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,dt=x.cameras;tt(x,Q);for(let it=0;it<dt.length;it++)tt(dt[it],Q);dt.length===2?z(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),J(V,x,Q)};function J(V,Q,dt){dt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Nh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ft=null;function At(V,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let it=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,it=!0);for(let kt=0;kt<dt.length;kt++){const I=dt[kt];let ce=null;if(d!==null)ce=d.getViewport(I);else{const re=u.getViewSubImage(f,I);ce=re.viewport,kt===0&&(t.setRenderTargetTextures(M,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(M))}let Mt=y[kt];Mt===void 0&&(Mt=new Kn,Mt.layers.enable(kt),Mt.viewport=new qe,y[kt]=Mt),Mt.matrix.fromArray(I.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(I.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(ce.x,ce.y,ce.width,ce.height),kt===0&&(x.matrix.copy(Mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),it===!0&&x.cameras.push(Mt)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const kt=u.getDepthInformation(dt[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,r.renderState)}}for(let dt=0;dt<v.length;dt++){const it=S[dt],Bt=v[dt];it!==null&&Bt!==void 0&&Bt.update(it,Q,l||a)}_.render(t,x),ft&&ft(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Jt=new d_;Jt.setAnimationLoop(At),this.setAnimationLoop=function(V){ft=V},this.dispose=function(){}}}const qr=new Di,$M=new be;function ZM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,h_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,S=M.envMapRotation;if(v&&(m.envMap.value=v,qr.copy(S),qr.x*=-1,qr.y*=-1,qr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),m.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(qr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JM(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const S=v.program;i.uniformBlockBinding(M,S)}function l(M,v){let S=r[M.id];S===void 0&&(g(M),S=h(M),r[M.id]=S,M.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(M,w);const A=t.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function h(M){const v=u();M.__bindingPointIndex=v;const S=n.createBuffer(),w=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],S=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,b=S.length;A<b;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,x=P.length;y<x;y++){const D=P[y];if(d(D,A,y,w)===!0){const N=D.__offset,C=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let W=0;W<C.length;W++){const X=C[W],Z=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+k,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,v,S,w){const A=M.value,b=v+"_"+S;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const P=w[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(M){const v=M.uniforms;let S=0;const w=16;for(let b=0,P=v.length;b<P;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,D=y.length;x<D;x++){const N=y[x],C=Array.isArray(N.value)?N.value:[N.value];for(let k=0,W=C.length;k<W;k++){const X=C[k],Z=_(X),z=S%w;z!==0&&w-z<Z.boundary&&(S+=w-z),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Z.storage}}}const A=S%w;return A>0&&(S+=w-A),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class QM{constructor(t={}){const{canvas:e=Xv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const v=this;let S=!1,w=0,A=0,b=null,P=-1,y=null;const x=new qe,D=new qe;let N=null;const C=new Ft(0);let k=0,W=e.width,X=e.height,Z=1,z=null,tt=null;const J=new qe(0,0,W,X),ft=new qe(0,0,W,X);let At=!1;const Jt=new Ru;let V=!1,Q=!1;const dt=new be,it=new F,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return b===null?Z:1}let I=i;function ce(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eu}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",q,!1),I===null){const U="webgl2";if(I=ce(U,T),I===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Mt,re,Tt,Ht,It,Wt,Me,R,E,H,Y,K,$,yt,ot,at,Lt,et,xt,qt,St,ht,Dt,zt;function Ce(){Mt=new oy(I),Mt.init(),ht=new HM(I,Mt),re=new ey(I,Mt,t,ht),Tt=new GM(I),Ht=new hy(I),It=new wM,Wt=new VM(I,Mt,Tt,It,re,ht,Ht),Me=new iy(v),R=new ay(v),E=new g2(I),Dt=new Q3(I,E),H=new cy(I,E,Ht,Dt),Y=new fy(I,H,E,Ht),xt=new uy(I,re,Wt),at=new ny(It),K=new bM(v,Me,R,Mt,re,Dt,at),$=new ZM(v,It),yt=new CM,ot=new NM(Mt),et=new J3(v,Me,R,Tt,Y,f,c),Lt=new zM(v,Y,re),zt=new JM(I,Ht,re,Tt),qt=new ty(I,Mt,Ht),St=new ly(I,Mt,Ht),Ht.programs=K.programs,v.capabilities=re,v.extensions=Mt,v.properties=It,v.renderLists=yt,v.shadowMap=Lt,v.state=Tt,v.info=Ht}Ce();const Ut=new KM(v,I);this.xr=Ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(W,X,!1))},this.getSize=function(T){return T.set(W,X)},this.setSize=function(T,U,G=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,X=U,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),G===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*Z,X*Z).floor()},this.setDrawingBufferSize=function(T,U,G){W=T,X=U,Z=G,e.width=Math.floor(T*G),e.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,U,G,O){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,U,G,O),Tt.viewport(x.copy(J).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,U,G,O){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,U,G,O),Tt.scissor(D.copy(ft).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){Tt.setScissorTest(At=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,U=!0,G=!0){let O=0;if(T){let B=!1;if(b!==null){const st=b.texture.format;B=st===t_||st===Qm||st===Jm}if(B){const st=b.texture.type,mt=st===br||st===Js||st===jm||st===lo||st===$m||st===Zm,gt=et.getClearColor(),Et=et.getClearAlpha(),bt=gt.r,Rt=gt.g,Nt=gt.b;mt?(d[0]=bt,d[1]=Rt,d[2]=Nt,d[3]=Et,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=bt,g[1]=Rt,g[2]=Nt,g[3]=Et,I.clearBufferiv(I.COLOR,0,g))}else O|=I.COLOR_BUFFER_BIT}U&&(O|=I.DEPTH_BUFFER_BIT),G&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",q,!1),yt.dispose(),ot.dispose(),It.dispose(),Me.dispose(),R.dispose(),Y.dispose(),Dt.dispose(),zt.dispose(),K.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Qt),Ut.removeEventListener("sessionend",_i),on.stop()};function L(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Ht.autoReset,U=Lt.enabled,G=Lt.autoUpdate,O=Lt.needsUpdate,B=Lt.type;Ce(),Ht.autoReset=T,Lt.enabled=U,Lt.autoUpdate=G,Lt.needsUpdate=O,Lt.type=B}function q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const U=T.target;U.removeEventListener("dispose",rt),ct(U)}function ct(T){jt(T),It.remove(T)}function jt(T){const U=It.get(T).programs;U!==void 0&&(U.forEach(function(G){K.releaseProgram(G)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,O,B,st){U===null&&(U=Bt);const mt=B.isMesh&&B.matrixWorld.determinant()<0,gt=F1(T,U,G,O,B);Tt.setMaterial(O,mt);let Et=G.index,bt=1;if(O.wireframe===!0){if(Et=H.getWireframeAttribute(G),Et===void 0)return;bt=2}const Rt=G.drawRange,Nt=G.attributes.position;let Ie=Rt.start*bt,Ke=(Rt.start+Rt.count)*bt;st!==null&&(Ie=Math.max(Ie,st.start*bt),Ke=Math.min(Ke,(st.start+st.count)*bt)),Et!==null?(Ie=Math.max(Ie,0),Ke=Math.min(Ke,Et.count)):Nt!=null&&(Ie=Math.max(Ie,0),Ke=Math.min(Ke,Nt.count));const wn=Ke-Ie;if(wn<0||wn===1/0)return;Dt.setup(B,O,gt,G,Et);let Gi,$t=qt;if(Et!==null&&(Gi=E.get(Et),$t=St,$t.setIndex(Gi)),B.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*kt()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(B.isLine){let wt=O.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*kt()),B.isLineSegments?$t.setMode(I.LINES):B.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else B.isPoints?$t.setMode(I.POINTS):B.isSprite&&$t.setMode(I.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?$t.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):$t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)$t.renderInstances(Ie,wn,B.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Aa=Math.min(G.instanceCount,wt);$t.renderInstances(Ie,wn,Aa)}else $t.render(Ie,wn)};function le(T,U,G){T.transparent===!0&&T.side===Zi&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,Ro(T,U,G),T.side=Ar,T.needsUpdate=!0,Ro(T,U,G),T.side=Zi):Ro(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),m=ot.get(G),m.init(U),M.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const O=new Set;return T.traverse(function(B){const st=B.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const gt=st[mt];le(gt,G,B),O.add(gt)}else le(st,G,B),O.add(st)}),M.pop(),m=null,O},this.compileAsync=function(T,U,G=null){const O=this.compile(T,U,G);return new Promise(B=>{function st(){if(O.forEach(function(mt){It.get(mt).currentProgram.isReady()&&O.delete(mt)}),O.size===0){B(T);return}setTimeout(st,10)}Mt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Se=null;function je(T){Se&&Se(T)}function Qt(){on.stop()}function _i(){on.start()}const on=new d_;on.setAnimationLoop(je),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(T){Se=T,Ut.setAnimationLoop(T),T===null?on.stop():on.start()},Ut.addEventListener("sessionstart",Qt),Ut.addEventListener("sessionend",_i),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(U),U=Ut.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,b),m=ot.get(T,M.length),m.init(U),M.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Jt.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,V=at.init(this.clippingPlanes,Q),_=yt.get(T,p.length),_.init(),p.push(_),jf(T,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,tt);const G=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1;G&&et.addToRenderList(_,T),this.info.render.frame++,V===!0&&at.beginShadows();const O=m.state.shadowsArray;Lt.render(O,T,U),V===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,st=_.transmissive;if(m.setupLights(v._useLegacyLights),U.isArrayCamera){const mt=U.cameras;if(st.length>0)for(let gt=0,Et=mt.length;gt<Et;gt++){const bt=mt[gt];$f(B,st,T,bt)}G&&et.render(T);for(let gt=0,Et=mt.length;gt<Et;gt++){const bt=mt[gt];Kf(_,T,bt,bt.viewport)}}else st.length>0&&$f(B,st,T,U),G&&et.render(T),Kf(_,T,U);b!==null&&(Wt.updateMultisampleRenderTarget(b),Wt.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,U),Dt.resetDefaultState(),P=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],V===!0&&at.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function jf(T,U,G,O){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Jt.intersectsSprite(T)){O&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const mt=Y.update(T),gt=T.material;gt.visible&&_.push(T,mt,gt,G,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Jt.intersectsObject(T))){const mt=Y.update(T),gt=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),it.copy(mt.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(gt)){const Et=mt.groups;for(let bt=0,Rt=Et.length;bt<Rt;bt++){const Nt=Et[bt],Ie=gt[Nt.materialIndex];Ie&&Ie.visible&&_.push(T,mt,Ie,G,it.z,Nt)}}else gt.visible&&_.push(T,mt,gt,G,it.z,null)}}const st=T.children;for(let mt=0,gt=st.length;mt<gt;mt++)jf(st[mt],U,G,O)}function Kf(T,U,G,O){const B=T.opaque,st=T.transmissive,mt=T.transparent;m.setupLightsView(G),V===!0&&at.setGlobalState(v.clippingPlanes,G),O&&Tt.viewport(x.copy(O)),B.length>0&&wo(B,U,G),st.length>0&&wo(st,U,G),mt.length>0&&wo(mt,U,G),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $f(T,U,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new ds(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Hc:br,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const st=m.state.transmissionRenderTarget[O.id],mt=O.viewport||x;st.setSize(mt.z,mt.w);const gt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(C),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Et=v.toneMapping;v.toneMapping=Mr;const bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),V===!0&&at.setGlobalState(v.clippingPlanes,O),wo(T,G,O),Wt.updateMultisampleRenderTarget(st),Wt.updateRenderTargetMipmap(st),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Nt=0,Ie=U.length;Nt<Ie;Nt++){const Ke=U[Nt],wn=Ke.object,Gi=Ke.geometry,$t=Ke.material,wt=Ke.group;if($t.side===Zi&&wn.layers.test(O.layers)){const Aa=$t.side;$t.side=vn,$t.needsUpdate=!0,Zf(wn,G,O,Gi,$t,wt),$t.side=Aa,$t.needsUpdate=!0,Rt=!0}}Rt===!0&&(Wt.updateMultisampleRenderTarget(st),Wt.updateRenderTargetMipmap(st))}v.setRenderTarget(gt),v.setClearColor(C,k),bt!==void 0&&(O.viewport=bt),v.toneMapping=Et}function wo(T,U,G){const O=U.isScene===!0?U.overrideMaterial:null;for(let B=0,st=T.length;B<st;B++){const mt=T[B],gt=mt.object,Et=mt.geometry,bt=O===null?mt.material:O,Rt=mt.group;gt.layers.test(G.layers)&&Zf(gt,U,G,Et,bt,Rt)}}function Zf(T,U,G,O,B,st){T.onBeforeRender(v,U,G,O,B,st),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,U,G,O,T,st),B.transparent===!0&&B.side===Zi&&B.forceSinglePass===!1?(B.side=vn,B.needsUpdate=!0,v.renderBufferDirect(G,U,O,B,T,st),B.side=Ar,B.needsUpdate=!0,v.renderBufferDirect(G,U,O,B,T,st),B.side=Zi):v.renderBufferDirect(G,U,O,B,T,st),T.onAfterRender(v,U,G,O,B,st)}function Ro(T,U,G){U.isScene!==!0&&(U=Bt);const O=It.get(T),B=m.state.lights,st=m.state.shadowsArray,mt=B.state.version,gt=K.getParameters(T,B.state,st,U,G),Et=K.getProgramCacheKey(gt);let bt=O.programs;O.environment=T.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(T.isMeshStandardMaterial?R:Me).get(T.envMap||O.environment),O.envMapRotation=O.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,bt===void 0&&(T.addEventListener("dispose",rt),bt=new Map,O.programs=bt);let Rt=bt.get(Et);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===mt)return Qf(T,gt),Rt}else gt.uniforms=K.getUniforms(T),T.onBuild(G,gt,v),T.onBeforeCompile(gt,v),Rt=K.acquireProgram(gt,Et),bt.set(Et,Rt),O.uniforms=gt.uniforms;const Nt=O.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=at.uniform),Qf(T,gt),O.needsLights=B1(T),O.lightsStateVersion=mt,O.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function Jf(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=rc.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Qf(T,U){const G=It.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function F1(T,U,G,O,B){U.isScene!==!0&&(U=Bt),Wt.resetTextureUnits();const st=U.fog,mt=O.isMeshStandardMaterial?U.environment:null,gt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Fr,Et=(O.isMeshStandardMaterial?R:Me).get(O.envMap||mt),bt=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Rt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Nt=!!G.morphAttributes.position,Ie=!!G.morphAttributes.normal,Ke=!!G.morphAttributes.color;let wn=Mr;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wn=v.toneMapping);const Gi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=Gi!==void 0?Gi.length:0,wt=It.get(O),Aa=m.state.lights;if(V===!0&&(Q===!0||T!==y)){const Hn=T===y&&O.id===P;at.setState(O,T,Hn)}let pe=!1;O.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Aa.state.version||wt.outputColorSpace!==gt||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==Et||O.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==at.numPlanes||wt.numIntersection!==at.numIntersection)||wt.vertexAlphas!==bt||wt.vertexTangents!==Rt||wt.morphTargets!==Nt||wt.morphNormals!==Ie||wt.morphColors!==Ke||wt.toneMapping!==wn||wt.morphTargetsCount!==$t)&&(pe=!0):(pe=!0,wt.__version=O.version);let zr=wt.currentProgram;pe===!0&&(zr=Ro(O,U,B));let td=!1,ba=!1,Sl=!1;const $e=zr.getUniforms(),ar=wt.uniforms;if(Tt.useProgram(zr.program)&&(td=!0,ba=!0,Sl=!0),O.id!==P&&(P=O.id,ba=!0),td||y!==T){$e.setValue(I,"projectionMatrix",T.projectionMatrix),$e.setValue(I,"viewMatrix",T.matrixWorldInverse);const Hn=$e.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,it.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&$e.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$e.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ba=!0,Sl=!0)}if(B.isSkinnedMesh){$e.setOptional(I,B,"bindMatrix"),$e.setOptional(I,B,"bindMatrixInverse");const Hn=B.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),$e.setValue(I,"boneTexture",Hn.boneTexture,Wt))}B.isBatchedMesh&&($e.setOptional(I,B,"batchingTexture"),$e.setValue(I,"batchingTexture",B._matricesTexture,Wt));const El=G.morphAttributes;if((El.position!==void 0||El.normal!==void 0||El.color!==void 0)&&xt.update(B,G,zr),(ba||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,$e.setValue(I,"receiveShadow",B.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ar.envMap.value=Et,ar.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(ar.envMapIntensity.value=U.environmentIntensity),ba&&($e.setValue(I,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&O1(ar,Sl),st&&O.fog===!0&&$.refreshFogUniforms(ar,st),$.refreshMaterialUniforms(ar,O,Z,X,m.state.transmissionRenderTarget[T.id]),rc.upload(I,Jf(wt),ar,Wt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(rc.upload(I,Jf(wt),ar,Wt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$e.setValue(I,"center",B.center),$e.setValue(I,"modelViewMatrix",B.modelViewMatrix),$e.setValue(I,"normalMatrix",B.normalMatrix),$e.setValue(I,"modelMatrix",B.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Hn=O.uniformsGroups;for(let Tl=0,k1=Hn.length;Tl<k1;Tl++){const ed=Hn[Tl];zt.update(ed,zr),zt.bind(ed,zr)}}return zr}function O1(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function B1(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,G){It.get(T.texture).__webglTexture=U,It.get(T.depthTexture).__webglTexture=G;const O=It.get(T);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=G===void 0,O.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const G=It.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){b=T,w=U,A=G;let O=!0,B=null,st=!1,mt=!1;if(T){const Et=It.get(T);Et.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(I.FRAMEBUFFER,null),O=!1):Et.__webglFramebuffer===void 0?Wt.setupRenderTarget(T):Et.__hasExternalTextures&&Wt.rebindTextures(T,It.get(T.texture).__webglTexture,It.get(T.depthTexture).__webglTexture);const bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);const Rt=It.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?B=Rt[U][G]:B=Rt[U],st=!0):T.samples>0&&Wt.useMultisampledRTT(T)===!1?B=It.get(T).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[G]:B=Rt,x.copy(T.viewport),D.copy(T.scissor),N=T.scissorTest}else x.copy(J).multiplyScalar(Z).floor(),D.copy(ft).multiplyScalar(Z).floor(),N=At;if(Tt.bindFramebuffer(I.FRAMEBUFFER,B)&&O&&Tt.drawBuffers(T,B),Tt.viewport(x),Tt.scissor(D),Tt.setScissorTest(N),st){const Et=It.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,G)}else if(mt){const Et=It.get(T.texture),bt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,bt)}P=-1},this.readRenderTargetPixels=function(T,U,G,O,B,st,mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=It.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(gt=gt[mt]),gt){Tt.bindFramebuffer(I.FRAMEBUFFER,gt);try{const Et=T.texture,bt=Et.format,Rt=Et.type;if(!re.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-O&&G>=0&&G<=T.height-B&&I.readPixels(U,G,O,B,ht.convert(bt),ht.convert(Rt),st)}finally{const Et=b!==null?It.get(b).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(T,U,G=0){const O=Math.pow(2,-G),B=Math.floor(U.image.width*O),st=Math.floor(U.image.height*O);Wt.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,T.x,T.y,B,st),Tt.unbindTexture()},this.copyTextureToTexture=function(T,U,G,O=0){const B=U.image.width,st=U.image.height,mt=ht.convert(G.format),gt=ht.convert(G.type);Wt.setTexture2D(G,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,T.x,T.y,B,st,mt,gt,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,mt,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,O,T.x,T.y,mt,gt,U.image),O===0&&G.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G,O,B=0){const st=T.max.x-T.min.x,mt=T.max.y-T.min.y,gt=T.max.z-T.min.z,Et=ht.convert(O.format),bt=ht.convert(O.type);let Rt;if(O.isData3DTexture)Wt.setTexture3D(O,0),Rt=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Wt.setTexture2DArray(O,0),Rt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Nt=I.getParameter(I.UNPACK_ROW_LENGTH),Ie=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ke=I.getParameter(I.UNPACK_SKIP_PIXELS),wn=I.getParameter(I.UNPACK_SKIP_ROWS),Gi=I.getParameter(I.UNPACK_SKIP_IMAGES),$t=G.isCompressedTexture?G.mipmaps[B]:G.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,$t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?I.texSubImage3D(Rt,B,U.x,U.y,U.z,st,mt,gt,Et,bt,$t.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Rt,B,U.x,U.y,U.z,st,mt,gt,Et,$t.data):I.texSubImage3D(Rt,B,U.x,U.y,U.z,st,mt,gt,Et,bt,$t),I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,wn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gi),B===0&&O.generateMipmaps&&I.generateMipmap(Rt),Tt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Wt.setTextureCube(T,0):T.isData3DTexture?Wt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Wt.setTexture2DArray(T,0):Wt.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,b=null,Tt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Au?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Wc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tS extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yc extends sr{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Fn(u,3)),this.setAttribute("normal",new Fn(f,3)),this.setAttribute("uv",new Fn(d,2));function M(){const S=new F,w=new F;let A=0;const b=(e-t)/i;for(let P=0;P<=s;P++){const y=[],x=P/s,D=x*(e-t)+t;for(let N=0;N<=r;N++){const C=N/r,k=C*c+o,W=Math.sin(k),X=Math.cos(k);w.x=D*W,w.y=-x*i+m,w.z=D*X,u.push(w.x,w.y,w.z),S.set(W,b,X).normalize(),f.push(S.x,S.y,S.z),d.push(C,1-x),y.push(g++)}_.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const x=_[y][P],D=_[y+1][P],N=_[y+1][P+1],C=_[y][P+1];h.push(x,D,C),h.push(D,N,C),A+=6}l.addGroup(p,A,0),p+=A}function v(S){const w=g,A=new Xt,b=new F;let P=0;const y=S===!0?t:e,x=S===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const D=g;for(let N=0;N<=r;N++){const k=N/r*c+o,W=Math.cos(k),X=Math.sin(k);b.x=y*X,b.y=m*x,b.z=y*W,u.push(b.x,b.y,b.z),f.push(0,x,0),A.x=W*.5+.5,A.y=X*.5*x+.5,d.push(A.x,A.y),g++}for(let N=0;N<r;N++){const C=w+N,k=D+N;S===!0?h.push(k,k+1,C):h.push(k+1,k,C),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pu extends sr{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new F,f=new F,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],v=p/i;let S=0;p===0&&a===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(r+A*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(r+A*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+S,1-v),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const v=h[p][M+1],S=h[p][M],w=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&d.push(v,S,A),(p!==i-1||c<Math.PI)&&d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(_,3)),this.setAttribute("uv",new Fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eS extends fo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e_,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Sp={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class nS{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const iS=new nS;class Lu{constructor(t){this.manager=t!==void 0?t:iS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Lu.DEFAULT_MATERIAL_NAME="__DEFAULT";class rS extends Lu{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Sp.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=$a("img");function c(){h(),Sp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class sS extends Lu{constructor(t){super(t)}load(t,e,i,r){const s=new fn,a=new rS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class M_ extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const rh=new be,Ep=new F,Tp=new F;class aS{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ep.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ep),Tp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tp),e.updateMatrixWorld(),rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oS extends aS{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cS extends M_{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new oS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lS extends M_{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ap=new be;class hS{constructor(t,e,i=0,r=1/0){this.ray=new a_(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ap.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(t,e=!0,i=[]){return Oh(t,this,i,e),i.sort(bp),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Oh(t[r],this,i,e);return i.sort(bp),i}}function bp(n,t){return n.distance-t.distance}function Oh(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Oh(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function Ki(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function S_(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},Du,nn,_e,Qn=1e8,se=1/Qn,Bh=Math.PI*2,uS=Bh/4,fS=0,E_=Math.sqrt,dS=Math.cos,pS=Math.sin,Ye=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},Uu=function(t){return typeof t>"u"},Ui=function(t){return typeof t=="object"},xn=function(t){return t!==!1},Iu=function(){return typeof window<"u"},Jo=function(t){return Te(t)||Ye(t)},T_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,kh=/(?:-?\.?\d|\.)+/gi,A_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,b_=/[+-]=-?[.\d]+/,w_=/[^,'"\[\]\s]+/gi,mS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,Mi,zh,Nu,Bn={},Mc={},R_,C_=function(t){return(Mc=ps(t,Bn))&&En},Fu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Za=function(t,e){return!e&&console.warn(t)},P_=function(t,e){return t&&(Bn[t]=e)&&Mc&&(Mc[t]=e)||Bn},Ja=function(){return 0},_S={suppressEvents:!0,isStart:!0,kill:!1},sc={suppressEvents:!0,kill:!1},gS={suppressEvents:!0},Ou={},Sr=[],Gh={},L_,Un={},ah={},wp=30,ac=[],Bu="",ku=function(t){var e=t[0],i,r;if(Ui(e)||Te(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=ac.length;r--&&!ac[r].targetTest(e););i=ac[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new e0(t[r],i)))||t.splice(r,1);return t},ss=function(t){return t._gsap||ku(ti(t))[0]._gsap},D_=function(t,e,i){return(i=t[e])&&Te(i)?t[e]():Uu(i)&&t.getAttribute&&t.getAttribute(e)||i},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Pe=function(t){return Math.round(t*1e5)/1e5||0},Xe=function(t){return Math.round(t*1e7)/1e7||0},qs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},vS=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Sc=function(){var t=Sr.length,e=Sr.slice(0),i,r;for(Gh={},Sr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},U_=function(t,e,i,r){Sr.length&&!nn&&Sc(),t.render(e,i,nn&&e<0&&(t._initted||t._startAt)),Sr.length&&!nn&&Sc()},I_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(w_).length<2?e:Ye(t)?t.trim():t},N_=function(t){return t},ii=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},xS=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},ps=function(t,e){for(var i in e)t[i]=e[i];return t},Rp=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ui(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Ec=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},za=function(t){var e=t.parent||xe,i=t.keyframes?xS(rn(t.keyframes)):ii;if(xn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},yS=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},F_=function(t,e,i,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},jc=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},as=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},MS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vh=function(t,e,i,r){return t._startAt&&(nn?t._startAt.revert(sc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},SS=function n(t){return!t||t._ts&&n(t.parent)},Cp=function(t){return t._repeat?ea(t._tTime,t=t.duration()+t._rDelay)*t:0},ea=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Tc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Kc=function(t){return t._end=Xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||se)||0))},$c=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Xe(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Kc(t),i._dirty||as(i,t)),t},O_=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Tc(t.rawTime(),e),(!e._dur||_o(0,e.totalDuration(),i)-e._tTime>se)&&e.render(i,!0)),as(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-se}},bi=function(t,e,i,r){return e.parent&&Rr(e),e._start=Xe((nr(i)?i:i||t!==xe?jn(t,i,e):t._time)+e._delay),e._end=Xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),F_(t,e,"_first","_last",t._sort?"_start":0),Hh(e)||(t._recent=e),r||O_(t,e),t._ts<0&&$c(t,t._tTime),t},B_=function(t,e){return(Bn.ScrollTrigger||Fu("scrollTrigger",e))&&Bn.ScrollTrigger.create(e,t)},k_=function(t,e,i,r,s){if(Gu(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&L_!==In.frame)return Sr.push(t),t._lazy=[s,r],1},ES=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Hh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},TS=function(t,e,i,r){var s=t.ratio,a=e<0||!e&&(!t._start&&ES(t)&&!(!t._initted&&Hh(t))||(t._ts<0||t._dp._ts<0)&&!Hh(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=_o(0,t._tDur,e),h=ea(c,o),t._yoyo&&h&1&&(a=1-a),h!==ea(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||nn||r||t._zTime===se||!e&&t._zTime){if(!t._initted&&k_(t,e,r,i,c))return;for(u=t._zTime,t._zTime=e||(i?se:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Vh(t,e,i,!0),t._onUpdate&&!i&&Nn(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&Nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Rr(t,1),!i&&!nn&&(Nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},AS=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},na=function(t,e,i,r){var s=t._repeat,a=Xe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Xe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&$c(t,t._tTime=t._tDur*o),t.parent&&Kc(t),i||as(t.parent,t),t},Pp=function(t){return t instanceof un?as(t):na(t,t._dur)},bS={_start:0,endTime:Ja,totalDuration:Ja},jn=function n(t,e,i){var r=t.labels,s=t._recent||bS,a=t.duration()>=Qn?s.endTime(!1):t._dur,o,c,l;return Ye(e)&&(isNaN(e)||e in r)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&i&&(c=c/100*(rn(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+c:a+c)):e==null?a:+e},Ga=function(t,e,i){var r=nr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,c;if(r&&(a.duration=e[1]),a.parent=i,t){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=xn(c.vars.inherit)&&c.parent;a.immediateRender=xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Fe(e[0],a,e[s+1])},Or=function(t,e){return t||t===0?e(t):e},_o=function(t,e,i){return i<t?t:i>e?e:i},tn=function(t,e){return!Ye(t)||!(e=mS.exec(t))?"":e[1]},wS=function(t,e,i){return Or(i,function(r){return _o(t,e,r)})},Wh=[].slice,z_=function(t,e){return t&&Ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ui(t[0]))&&!t.nodeType&&t!==Mi},RS=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Ye(r)&&!e||z_(r,1)?(s=i).push.apply(s,ti(r)):i.push(r)})||i},ti=function(t,e,i){return _e&&!e&&_e.selector?_e.selector(t):Ye(t)&&!i&&(zh||!ia())?Wh.call((e||Nu).querySelectorAll(t),0):rn(t)?RS(t,i):z_(t)?Wh.call(t,0):t?[t]:[]},Xh=function(t){return t=ti(t)[0]||Za("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ti(e,i.querySelectorAll?i:i===t?Za("Invalid scope")||Nu.createElement("div"):t)}},G_=function(t){return t.sort(function(){return .5-Math.random()})},V_=function(t){if(Te(t))return t;var e=Ui(t)?t:{each:t},i=os(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=e.axis,h=r,u=r;return Ye(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(h=r[0],u=r[1]),function(f,d,g){var _=(g||e).length,m=a[_],p,M,v,S,w,A,b,P,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!y){for(b=-Qn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=a[_]=[],p=c?Math.min(y,_)*h-.5:r%y,M=y===Qn?0:c?_*u/y-.5:r/y|0,b=0,P=Qn,A=0;A<_;A++)v=A%y-p,S=M-(A/y|0),m[A]=w=l?Math.abs(l==="y"?S:v):E_(v*v+S*S),w>b&&(b=w),w<P&&(P=w);r==="random"&&G_(m),m.max=b-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:l?l==="y"?_/y:y:Math.max(y,_/y))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(e.amount||e.each)||0,i=i&&_<0?J_(i):i}return _=(m[f]-m.min)/m.max||0,Xe(m.b+(i?i(_):_)*m.v)+m.u}},qh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Xe(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(nr(i)?0:tn(i))}},H_=function(t,e){var i=rn(t),r,s;return!i&&Ui(t)&&(r=i=t.radius||Qn,t.values?(t=ti(t.values),(s=!nr(t[0]))&&(r*=r)):t=qh(t.increment)),Or(e,i?Te(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Qn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-c,f=f*f+d*d):f=Math.abs(t[u]-o),f<l&&(l=f,h=u);return h=!r||l<=r?t[h]:a,s||h===a||nr(a)?h:h+tn(a)}:qh(t))},W_=function(t,e,i,r){return Or(rn(t)?!e:i===!0?!!(i=0):!r,function(){return rn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},CS=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,a){return a(s)},r)}},PS=function(t,e){return function(i){return t(parseFloat(i))+(e||tn(i))}},LS=function(t,e,i){return q_(t,e,0,1,i)},X_=function(t,e,i){return Or(i,function(r){return t[~~e(r)]})},DS=function n(t,e,i){var r=e-t;return rn(t)?X_(t,n(0,t.length),e):Or(i,function(s){return(r+(s-t)%r)%r+t})},US=function n(t,e,i){var r=e-t,s=r*2;return rn(t)?X_(t,n(0,t.length-1),e):Or(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Qa=function(t){for(var e=0,i="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?w_:kh),i+=t.substr(e,r-e)+W_(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},q_=function(t,e,i,r,s){var a=e-t,o=r-i;return Or(s,function(c){return i+((c-t)/a*o||0)})},IS=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ye(t),o={},c,l,h,u,f;if(i===!0&&(r=1)&&(i=null),a)t={p:t},e={p:e};else if(rn(t)&&!rn(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(n(t[l-1],t[l]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},i=e}else r||(t=ps(rn(t)?[]:{},t));if(!h){for(c in e)zu.call(o,t,c,"get",e[c]);s=function(g){return Wu(g,o)||(a?t.p:t)}}}return Or(i,s)},Lp=function(t,e,i){var r=t.labels,s=Qn,a,o,c;for(a in r)o=r[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Nn=function(t,e,i){var r=t.vars,s=r[e],a=_e,o=t._ctx,c,l,h;if(s)return c=r[e+"Params"],l=r.callbackScope||t,i&&Sr.length&&Sc(),o&&(_e=o),h=c?s.apply(l,c):s.call(l),_e=a,h},Fa=function(t){return Rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!nn),t.progress()<1&&Nn(t,"onInterrupt"),t},Gs,Y_=[],j_=function(t){if(t)if(t=!t.name&&t.default||t,Iu()||t.headless){var e=t.name,i=Te(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Ja,render:Wu,add:zu,kill:$S,modifier:KS,rawVars:0},a={targetTest:0,get:0,getSetter:Hu,aliases:{},register:0};if(ia(),t!==r){if(Un[e])return;ii(r,ii(Ec(t,s),a)),ps(r.prototype,ps(s,Ec(t,a))),Un[r.prop=e]=r,t.targetTest&&(ac.push(r),Ou[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P_(e,r),t.register&&t.register(En,r,Mn)}else Y_.push(t)},ne=255,Oa={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},oh=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ne+.5|0},K_=function(t,e,i){var r=t?nr(t)?[t>>16,t>>8&ne,t&ne]:0:Oa.black,s,a,o,c,l,h,u,f,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Oa[t])r=Oa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ne,r&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(kh),!e)c=+r[0]%360/360,l=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=oh(c+1/3,s,a),r[1]=oh(c,s,a),r[2]=oh(c-1/3,s,a);else if(~t.indexOf("="))return r=t.match(A_),i&&r.length<4&&(r[3]=1),r}else r=t.match(kh)||Oa.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/ne,a=r[1]/ne,o=r[2]/ne,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r},$_=function(t){var e=[],i=[],r=-1;return t.split(Er).forEach(function(s){var a=s.match(zs)||[];e.push.apply(e,a),i.push(r+=a.length+1)}),e.c=i,e},Dp=function(t,e,i){var r="",s=(t+r).match(Er),a=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=K_(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=$_(t),c=i.c,c.join(r)!==h.c.join(r)))for(l=t.replace(Er,"1").split(zs),u=l.length-1;o<u;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!l)for(l=t.split(Er),u=l.length-1;o<u;o++)r+=l[o]+s[o];return r+l[u]},Er=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Oa)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),NS=/hsl[a]?\(/,Z_=function(t){var e=t.join(" "),i;if(Er.lastIndex=0,Er.test(e))return i=NS.test(e),t[1]=Dp(t[1],i),t[0]=Dp(t[0],i,$_(t[1])),!0},to,In=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,a=s,o=[],c,l,h,u,f,d,g=function _(m){var p=n()-r,M=m===!0,v,S,w,A;if((p>t||p<0)&&(i+=p-e),r+=p,w=r-i,v=w-a,(v>0||M)&&(A=++u.frame,f=w-u.time*1e3,u.time=w=w/1e3,a+=v+(v>=s?4:s-v),S=1),M||(c=l(_)),S)for(d=0;d<o.length;d++)o[d](w,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){R_&&(!zh&&Iu()&&(Mi=zh=window,Nu=Mi.document||{},Bn.gsap=En,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(En.version),C_(Mc||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),Y_.forEach(j_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},to=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),to=0,l=Ja},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,M){var v=p?function(S,w,A,b){m(S,w,A,b),u.remove(v)}:m;return u.remove(m),o[M?"unshift":"push"](v),ia(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),ia=function(){return!to&&In.wake()},Vt={},FS=/^[\d.\-M][\d.\-,\s]/,OS=/["']/g,BS=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,a=i.length,o,c,l;s<a;s++)c=i[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[r]=isNaN(l)?l.replace(OS,"").trim():+l,r=c.substr(o+1).trim();return e},kS=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},zS=function(t){var e=(t+"").split("("),i=Vt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[BS(e[1])]:kS(t).split(",").map(I_)):Vt._CE&&FS.test(t)?Vt._CE("",t):i},J_=function(t){return function(e){return 1-t(1-e)}},Q_=function n(t,e){for(var i=t._first,r;i;)i instanceof un?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},os=function(t,e){return t&&(Te(t)?t:Vt[t]||zS(t))||e},vs=function(t,e,i,r){i===void 0&&(i=function(c){return 1-e(1-c)}),r===void 0&&(r=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},a;return yn(t,function(o){Vt[o]=Bn[o]=s,Vt[a=o.toLowerCase()]=i;for(var c in s)Vt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Vt[o+"."+c]=s[c]}),s},t0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ch=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/Bh*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*pS((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:t0(o);return s=Bh/s,c.config=function(l,h){return n(t,l,h)},c},lh=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:t0(i);return r.config=function(s){return n(t,s)},r};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;vs(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;vs("Elastic",ch("in"),ch("out"),ch());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<r?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});vs("Circ",function(n){return-(E_(1-n*n)-1)});vs("Sine",function(n){return n===1?1:-dS(n*uS)+1});vs("Back",lh("in"),lh("out"),lh());Vt.SteppedEase=Vt.steps=Bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,a=1-se;return function(o){return((r*_o(0,a,o)|0)+s)*i}}};ta.ease=Vt["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bu+=n+","+n+"Params,"});var e0=function(t,e){this.id=fS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:D_,this.set=e?e.getSetter:Hu},eo=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,na(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),to||In.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,na(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,i),!s._dp||s.parent||O_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===se||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),U_(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Cp(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Cp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ea(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-se?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-se?0:this._rts,this.totalTime(_o(-Math.abs(this._delay),this._tDur,s),r!==!1),Kc(this),MS(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==se&&(this._tTime-=se)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&bi(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(xn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tc(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=gS);var r=nn;return nn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nn=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Pp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Pp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(jn(this,i),xn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,xn(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-se,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-se)},t.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this;return new Promise(function(s){var a=Te(i)?i:N_,o=function(){var l=r.then;r.then=null,Te(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=l),s(a),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){Fa(this)},n}();ii(eo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-se,_prom:0,_ps:!1,_rts:1});var un=function(n){S_(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=xn(i.sortChildren),xe&&bi(i.parent||xe,Ki(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&B_(Ki(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Ga(0,arguments,this),this},e.from=function(r,s,a){return Ga(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Ga(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,za(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Fe(r,s,jn(this,a),1),this},e.call=function(r,s,a){return bi(this,Fe.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Fe(r,a,jn(this,c)),this},e.staggerFrom=function(r,s,a,o,c,l,h){return a.runBackwards=1,za(a).immediateRender=xn(a.immediateRender),this.staggerTo(r,s,a,o,c,l,h)},e.staggerFromTo=function(r,s,a,o,c,l,h,u){return o.startAt=a,za(o).immediateRender=xn(o.immediateRender),this.staggerTo(r,s,o,c,l,h,u)},e.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=r<=0?0:Xe(r),u=this._zTime<0!=r<0&&(this._initted||!l),f,d,g,_,m,p,M,v,S,w,A,b;if(this!==xe&&h>c&&r>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,r+=this._time-o),f=h,S=this._start,v=this._ts,p=!v,u&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=Xe(h%m),h===c?(_=this._repeat,f=l):(_=~~(h/m),_&&_===h/m&&(f=l,_--),f>l&&(f=l)),w=ea(this._tTime,m),!o&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(f=l-f,b=1),_!==w&&!this._lock){var P=A&&w&1,y=P===(A&&_&1);if(_<w&&(P=!P),o=P?0:h%l?l:h,this._lock=1,this.render(o||(b?0:Xe(_*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,o=P?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Q_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=AS(this,Xe(o),Xe(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&f&&!s&&!_&&(Nn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-se);break}}d=g}else{d=this._last;for(var x=r<0?r:f;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||nn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=x?-se:se);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-se)._zTime=f>=o?1:-1,this._ts))return this._start=S,Kc(this),this.render(r,s,a);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Rr(this,1),!s&&!(r<0&&!o)&&(h||o||!c)&&(Nn(this,h===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(nr(s)||(s=jn(this,s,r)),!(r instanceof eo)){if(rn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ye(r))return this.addLabel(r,s);if(Te(r))r=Fe.delayedCall(0,r);else return this}return this!==r?bi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Qn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Fe?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Ye(r)?this.removeLabel(r):Te(r)?this.killTweensOf(r):(jc(this,r),r===this._recent&&(this._recent=this._last),as(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xe(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=jn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=Fe.delayedCall(0,s||Ja,a);return o.data="isPause",this._hasPause=1,bi(this,o,jn(this,r))},e.removePause=function(r){var s=this._first;for(r=jn(this,r);s;)s._start===r&&s.data==="isPause"&&Rr(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)gr!==o[c]&&o[c].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=ti(r),c=this._first,l=nr(s),h;c;)c instanceof Fe?vS(c._targets,o)&&(l?(!gr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=jn(a,r),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,g=Fe.to(a,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||se,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&na(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,ii({startAt:{time:jn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Lp(this,jn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Lp(this,jn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+se)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return as(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),as(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,c=Qn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,bi(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;na(a,a===xe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(xe._ts&&(U_(xe,Tc(r,xe)),L_=In.frame),In.frame>=wp){wp+=On.autoSleep||120;var s=xe._first;if((!s||!s._ts)&&On.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},t}(eo);ii(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var GS=function(t,e,i,r,s,a,o){var c=new Mn(this._pt,t,e,0,1,o0,null,s),l=0,h=0,u,f,d,g,_,m,p,M;for(c.b=i,c.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Qa(r)),a&&(M=[i,r],a(M,t,e),i=M[0],r=M[1]),f=i.match(sh)||[];u=sh.exec(r);)g=u[0],_=r.substring(l,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?qs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=sh.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(b_.test(r)||p)&&(c.e=0),this._pt=c,c},zu=function(t,e,i,r,s,a,o,c,l,h){Te(r)&&(r=r(s||0,t,a));var u=t[e],f=i!=="get"?i:Te(u)?l?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=Te(u)?l?qS:s0:Vu,g;if(Ye(r)&&(~r.indexOf("random(")&&(r=Qa(r)),r.charAt(1)==="="&&(g=qs(f,r)+(tn(f)||0),(g||g===0)&&(r=g))),!h||f!==r||Yh)return!isNaN(f*r)&&r!==""?(g=new Mn(this._pt,t,e,+f||0,r-(f||0),typeof u=="boolean"?jS:a0,0,d),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&Fu(e,r),GS.call(this,t,e,f,r,d,c||On.stringFilter,l))},VS=function(t,e,i,r,s){if(Te(t)&&(t=Va(t,s,e,i,r)),!Ui(t)||t.style&&t.nodeType||rn(t)||T_(t))return Ye(t)?Va(t,s,e,i,r):t;var a={},o;for(o in t)a[o]=Va(t[o],s,e,i,r);return a},n0=function(t,e,i,r,s,a){var o,c,l,h;if(Un[t]&&(o=new Un[t]).init(s,o.rawVars?e[t]:VS(e[t],r,s,a,i),i,r,a)!==!1&&(i._pt=c=new Mn(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==Gs))for(l=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},gr,Yh,Gu=function n(t,e,i){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!Du,S=t.timeline,w,A,b,P,y,x,D,N,C,k,W,X,Z;if(S&&(!f||!s)&&(s="none"),t._ease=os(s,ta.ease),t._yEase=u?J_(os(u===!0?s:u,ta.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(N=m[0]?ss(m[0]).harness:0,X=N&&r[N.prop],w=Ec(r,Ou),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?sc:_S),_._lazy=0),a){if(Rr(t._startAt=Fe.set(m,ii({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&xn(c),startAt:null,delay:0,onUpdate:l&&function(){return Nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn||!o&&!d)&&t._startAt.revert(sc),o&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),b=ii({overwrite:!1,data:"isFromStart",lazy:o&&!_&&xn(c),immediateRender:o,stagger:0,parent:p},w),X&&(b[N.prop]=X),Rr(t._startAt=Fe.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn?t._startAt.revert(sc):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,se,se);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&xn(c)||c&&!g,A=0;A<m.length;A++){if(y=m[A],D=y._gsap||ku(m)[A]._gsap,t._ptLookup[A]=k={},Gh[D.id]&&Sr.length&&Sc(),W=M===m?A:M.indexOf(y),N&&(C=new N).init(y,X||w,t,W,M)!==!1&&(t._pt=P=new Mn(t._pt,y,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(z){k[z]=P}),C.priority&&(x=1)),!N||X)for(b in w)Un[b]&&(C=n0(b,w,t,W,y,M))?C.priority&&(x=1):k[b]=P=zu.call(t,y,b,"get",w[b],W,M,0,r.stringFilter);t._op&&t._op[A]&&t.kill(y,t._op[A]),v&&t._pt&&(gr=t,xe.killTweensOf(y,k,t.globalTime(e)),Z=!t.parent,gr=0),t._pt&&c&&(Gh[D.id]=1)}x&&c0(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Z,f&&e<=0&&S.render(Qn,!0,!0)},HS=function(t,e,i,r,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Yh=1,t.vars[e]="+=0",Gu(t,o),Yh=0,c?Za(e+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Pe(i)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},WS=function(t,e){var i=t[0]?ss(t[0]).harness:0,r=i&&i.aliases,s,a,o,c;if(!r)return e;s=ps({},e);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},XS=function(t,e,i,r){var s=e.ease||r||"power1.inOut",a,o;if(rn(e))o=i[t]||(i[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Va=function(t,e,i,r,s){return Te(t)?t.call(e,i,r,s):Ye(t)&&~t.indexOf("random(")?Qa(t):t},i0=Bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",r0={};yn(i0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return r0[n]=1});var Fe=function(n){S_(t,n);function t(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:za(r))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=r.parent||xe,v=(rn(i)||T_(i)?nr(i[0]):"length"in r)?[i]:ti(i),S,w,A,b,P,y,x,D;if(o._targets=v.length?ku(v):Za("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Jo(l)||Jo(h)){if(r=o.vars,S=o.timeline=new un({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),S.kill(),S.parent=S._dp=Ki(o),S._start=0,f||Jo(l)||Jo(h)){if(b=v.length,x=f&&V_(f),Ui(f))for(P in f)~i0.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(w=0;w<b;w++)A=Ec(r,r0),A.stagger=0,p&&(A.yoyoEase=p),D&&ps(A,D),y=v[w],A.duration=+Va(l,Ki(o),w,y,v),A.delay=(+Va(h,Ki(o),w,y,v)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),S.to(y,A,x?x(w,y,v):0),S._ease=Vt.none;S.duration()?l=h=0:o.timeline=0}else if(g){za(ii(S.vars.defaults,{ease:"none"})),S._ease=os(g.ease||r.ease||"none");var N=0,C,k,W;if(rn(g))g.forEach(function(X){return S.to(v,X,">")}),S.duration();else{A={};for(P in g)P==="ease"||P==="easeEach"||XS(P,g[P],A,g.easeEach);for(P in A)for(C=A[P].sort(function(X,Z){return X.t-Z.t}),N=0,w=0;w<C.length;w++)k=C[w],W={ease:k.e,duration:(k.t-(w?C[w-1].t:0))/100*l},W[P]=k.v,S.to(v,W,N),N+=W.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||o.duration(l=S.duration())}else o.timeline=0;return d===!0&&!Du&&(gr=Ki(o),xe.killTweensOf(v),gr=0),bi(M,Ki(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!l&&!g&&o._start===Xe(M._time)&&xn(u)&&SS(Ki(o))&&M.data!=="nested")&&(o._tTime=-se,o.render(Math.max(0,-h)||0)),m&&B_(Ki(o),m),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,h=r<0,u=r>c-se&&!h?c:r<se?0:r,f,d,g,_,m,p,M,v,S;if(!l)TS(this,r,s,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,a);if(f=Xe(u%_),u===c?(g=this._repeat,f=l):(g=~~(u/_),g&&g===Xe(u/_)&&(f=l,g--),f>l&&(f=l)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=l-f),m=ea(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(v&&this._yEase&&Q_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Xe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(k_(this,h?r:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&!g&&(Nn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Vh(this,r,s,a),Nn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Vh(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Rr(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Nn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,c){to||In.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gu(this,l),h=this._ease(l/this._dur),HS(this,r,s,a,o,h,l,c)?this.resetTo(r,s,a,o,1):($c(this,0),this.parent||F_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,gr&&gr.vars.overwrite!==!0)._first||Fa(this),this.parent&&a!==this.timeline.totalDuration()&&na(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?ti(r):o,l=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&yS(o,c))return s==="all"&&(this._pt=0),Fa(this);for(u=this._op=this._op||[],s!=="all"&&(Ye(s)&&(_={},yn(s,function(M){return _[M]=1}),s=_),s=WS(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&jc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Fa(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ga(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Ga(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return xe.killTweensOf(r,s,a)},t}(eo);ii(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(n){Fe[n]=function(){var t=new un,e=Wh.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Vu=function(t,e,i){return t[e]=i},s0=function(t,e,i){return t[e](i)},qS=function(t,e,i,r){return t[e](r.fp,i)},YS=function(t,e,i){return t.setAttribute(e,i)},Hu=function(t,e){return Te(t[e])?s0:Uu(t[e])&&t.setAttribute?YS:Vu},a0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},jS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},o0=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Wu=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},KS=function(t,e,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,i),s=a},$S=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?jc(this,e,"_pt"):e.dep||(i=1),e=r;return!i},ZS=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},c0=function(t){for(var e=t._pt,i,r,s,a;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=i}t._pt=s},Mn=function(){function n(e,i,r,s,a,o,c,l,h){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||a0,this.d=c||this,this.set=l||Vu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=ZS,this.m=i,this.mt=s,this.tween=r},n}();yn(Bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ou[n]=1});Bn.TweenMax=Bn.TweenLite=Fe;Bn.TimelineLite=Bn.TimelineMax=un;xe=new un({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Z_;var cs=[],oc={},JS=[],Up=0,QS=0,hh=function(t){return(oc[t]||JS).map(function(e){return e()})},jh=function(){var t=Date.now(),e=[];t-Up>2&&(hh("matchMediaInit"),cs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,c,l;for(o in r)a=Mi.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),c&&e.push(i))}),hh("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Up=t,hh("matchMedia"))},l0=function(){function n(e,i){this.selector=i&&Xh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QS++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Te(i)&&(s=r,r=i,i=Te);var a=this,o=function(){var l=_e,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=Xh(s)),_e=a,u=r.apply(a,arguments),Te(u)&&a._r.push(u),_e=l,a.selector=h,a.isReverted=!1,u};return a.last=o,i===Te?o(a,function(c){return a.add(null,c)}):i?a[i]=o:o},t.ignore=function(i){var r=_e;_e=null,i(this),_e=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Fe&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=s.data.length;c--;)l=s.data[c],l instanceof un?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Fe)&&l.revert&&l.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=cs.length;a--;)cs[a].id===this.id&&cs.splice(a,1)},t.revert=function(i){this.kill(i||{})},n}(),tE=function(){function n(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Ui(i)||(i={matches:i});var a=new l0(0,s||this.scope),o=a.conditions={},c,l,h;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(l in i)l==="all"?h=1:(c=Mi.matchMedia(i[l]),c&&(cs.indexOf(a)<0&&cs.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(jh):c.addEventListener("change",jh)));return h&&r(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ac={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return j_(r)})},timeline:function(t){return new un(t)},getTweensOf:function(t,e){return xe.getTweensOf(t,e)},getProperty:function(t,e,i,r){Ye(t)&&(t=ti(t)[0]);var s=ss(t||{}).get,a=i?N_:I_;return i==="native"&&(i=""),t&&(e?a((Un[e]&&Un[e].get||s)(t,e,i,r)):function(o,c,l){return a((Un[o]&&Un[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,i){if(t=ti(t),t.length>1){var r=t.map(function(h){return En.quickSetter(h,e,i)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}t=t[0]||{};var a=Un[e],o=ss(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;Gs._pt=0,u.init(t,i?h+i:h,Gs,0,[t]),u.render(1,u),Gs._pt&&Wu(1,Gs)}:o.set(t,c);return a?l:function(h){return l(t,c,i?h+i:h,o,1)}},quickTo:function(t,e,i){var r,s=En.to(t,ps((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=os(t.ease,ta.ease)),Rp(ta,t||{})},config:function(t){return Rp(On,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Un[o]&&!Bn[o]&&Za(e+" effect requires "+o+" plugin.")}),ah[e]=function(o,c,l){return i(ti(o),ii(c||{},s),l)},a&&(un.prototype[e]=function(o,c,l){return this.add(ah[e](o,Ui(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Vt[t]=os(e)},parseEase:function(t,e){return arguments.length?os(t,e):Vt},getById:function(t){return xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new un(t),r,s;for(i.smoothChildTiming=xn(t.smoothChildTiming),xe.remove(i),i._dp=0,i._time=i._tTime=xe._time,r=xe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Fe&&r.vars.onComplete===r._targets[0]))&&bi(i,r,r._start-r._delay),r=s;return bi(xe,i,0),i},context:function(t,e){return t?new l0(t,e):_e},matchMedia:function(t){return new tE(t)},matchMediaRefresh:function(){return cs.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||jh()},addEventListener:function(t,e){var i=oc[t]||(oc[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=oc[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:DS,wrapYoyo:US,distribute:V_,random:W_,snap:H_,normalize:LS,getUnit:tn,clamp:wS,splitColor:K_,toArray:ti,selector:Xh,mapRange:q_,pipe:CS,unitize:PS,interpolate:IS,shuffle:G_},install:C_,effects:ah,ticker:In,updateRoot:un.updateRoot,plugins:Un,globalTimeline:xe,core:{PropTween:Mn,globals:P_,Tween:Fe,Timeline:un,Animation:eo,getCache:ss,_removeLinkedListItem:jc,reverting:function(){return nn},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return Du=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ac[n]=Fe[n]});In.add(un.updateRoot);Gs=Ac.to({},{duration:0});var eE=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},nE=function(t,e){var i=t._targets,r,s,a;for(r in e)for(s=i.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=eE(a,r)),a&&a.modifier&&a.modifier(e[r],t,i[s],r))},uh=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(Ye(s)&&(c={},yn(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}nE(o,s)}}}},En=Ac.registerPlugin({name:"attr",init:function(t,e,i,r,s){var a,o,c;this.tween=i;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)nn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},uh("roundProps",qh),uh("modifiers"),uh("snap",H_))||Ac;Fe.version=un.version=En.version="3.12.5";R_=1;Iu()&&ia();Vt.Power0;Vt.Power1;Vt.Power2;Vt.Power3;Vt.Power4;Vt.Linear;Vt.Quad;Vt.Cubic;Vt.Quart;Vt.Quint;Vt.Strong;Vt.Elastic;Vt.Back;Vt.SteppedEase;Vt.Bounce;Vt.Sine;Vt.Expo;Vt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ip,vr,Ys,Xu,rs,Np,qu,iE=function(){return typeof window<"u"},ir={},Jr=180/Math.PI,js=Math.PI/180,Os=Math.atan2,Fp=1e8,Yu=/([A-Z])/g,rE=/(left|right|width|margin|padding|x)/i,sE=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},aE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},oE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cE=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},h0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},u0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},lE=function(t,e,i){return t.style[e]=i},hE=function(t,e,i){return t.style.setProperty(e,i)},uE=function(t,e,i){return t._gsap[e]=i},fE=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},dE=function(t,e,i,r,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},pE=function(t,e,i,r,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},ye="transform",Sn=ye+"Origin",mE=function n(t,e){var i=this,r=this.target,s=r.style,a=r._gsap;if(t in ir&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=$i(r,o)}):this.tfm[t]=a.x?a[t]:$i(r,t),t===Sn&&(this.tfm.zOrigin=a.zOrigin);else return Ri.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(ye)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=ye}(s||e)&&this.props.push(t,e,s[t])},f0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_E=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!i[ye]&&(f0(i),r.zOrigin&&i[Sn]&&(i[Sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},d0=function(t,e){var i={target:t,props:[],revert:_E,save:mE};return t._gsap||En.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},p0,$h=function(t,e){var i=vr.createElementNS?vr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):vr.createElement(t);return i&&i.style?i:vr.createElement(t)},Pi=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,ra(e)||e,1)||""},Op="O,Moz,ms,Ms,Webkit".split(","),ra=function(t,e,i){var r=e||rs,s=r.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Op[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Op[a]:"")+t},Zh=function(){iE()&&window.document&&(Ip=window,vr=Ip.document,Ys=vr.documentElement,rs=$h("div")||{style:{}},$h("div"),ye=ra(ye),Sn=ye+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",p0=!!ra("perspective"),qu=En.core.reverting,Xu=1)},fh=function n(t){var e=$h("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Ys.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ys.removeChild(e),this.style.cssText=s,a},Bp=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},m0=function(t){var e;try{e=t.getBBox()}catch{e=fh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===fh||(e=fh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bp(t,["x","cx","x1"])||0,y:+Bp(t,["y","cy","y1"])||0,width:0,height:0}:e},_0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&m0(t))},ms=function(t,e){if(e){var i=t.style,r;e in ir&&e!==Sn&&(e=ye),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Yu,"-$1").toLowerCase())):i.removeAttribute(e)}},xr=function(t,e,i,r,s,a){var o=new Mn(t._pt,e,i,0,1,a?u0:h0);return t._pt=o,o.b=r,o.e=s,t._props.push(i),o},kp={deg:1,rad:1,turn:1},gE={grid:1,flex:1},Cr=function n(t,e,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=rs.style,c=rE.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||kp[r]||kp[a])return s;if(a!=="px"&&!f&&(s=n(t,e,i,"px")),p=t.getCTM&&_0(t),(d||a==="%")&&(ir[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Pe(d?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(f?a:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===vr||!_.appendChild)&&(_=vr.body),m=_._gsap,m&&d&&m.width&&c&&m.time===In.time&&!m.uncache)return Pe(s/m.width*u);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+r,g=t[h],M?t.style[e]=M:ms(t,e)}else(d||a==="%")&&!gE[Pi(_,"display")]&&(o.position=Pi(t,"position")),_===t&&(o.position="static"),_.appendChild(rs),g=rs[h],_.removeChild(rs),o.position="absolute";return c&&d&&(m=ss(_),m.time=In.time,m.width=_[h]),Pe(f?g*s/u:g&&s?u/g*s:0)},$i=function(t,e,i,r){var s;return Xu||Zh(),e in Ri&&e!=="transform"&&(e=Ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),ir[e]&&e!=="transform"?(s=io(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:wc(Pi(t,Sn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bc[e]&&bc[e](t,e,i)||Pi(t,e)||D_(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Cr(t,e,s,i)+i:s},vE=function(t,e,i,r){if(!i||i==="none"){var s=ra(e,t,1),a=s&&Pi(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=Pi(t,"borderTopColor"))}var o=new Mn(this._pt,t.style,e,0,1,o0),c=0,l=0,h,u,f,d,g,_,m,p,M,v,S,w;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Pi(t,e)||r,_?t.style[e]=_:ms(t,e)),h=[i,r],Z_(h),i=h[0],r=h[1],f=i.match(zs)||[],w=r.match(zs)||[],w.length){for(;u=zs.exec(r);)m=u[0],M=r.substring(c,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=qs(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),c=zs.lastIndex-v.length,v||(v=v||On.units[e]||S,c===r.length&&(r+=v,o.e+=v)),S!==v&&(d=Cr(t,e,_,v)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=e==="display"&&r==="none"?u0:h0;return b_.test(r)&&(o.e=0),this._pt=o,o},zp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xE=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=zp[i]||i,e[1]=zp[r]||r,e.join(" ")},yE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,a=i._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],ir[o]&&(c=1,o=o==="transformOrigin"?Sn:ye),ms(i,o);c&&(ms(i,ye),a&&(a.svg&&i.removeAttribute("transform"),io(i,1),a.uncache=1,f0(r)))}},bc={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Mn(t._pt,e,i,0,0,yE);return a.u=r,a.pr=-10,a.tween=s,t._props.push(i),1}}},no=[1,0,0,1,0,0],g0={},v0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gp=function(t){var e=Pi(t,ye);return v0(e)?no:e.substr(7).match(A_).map(Pe)},ju=function(t,e){var i=t._gsap||ss(t),r=t.style,s=Gp(t),a,o,c,l;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?no:s):(s===no&&!t.offsetParent&&t!==Ys&&!i.svg&&(c=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,o=t.nextElementSibling,Ys.appendChild(t)),s=Gp(t),c?r.display=c:ms(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jh=function(t,e,i,r,s,a){var o=t._gsap,c=s||ju(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],v=e.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,b,P,y;i?c!==no&&(b=d*m-g*_)&&(P=S*(m/b)+w*(-_/b)+(_*M-m*p)/b,y=S*(-g/b)+w*(d/b)-(d*M-g*p)/b,S=P,w=y):(A=m0(t),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),r||r!==!1&&o.smooth?(p=S-l,M=w-h,o.xOffset=u+(p*d+M*_)-p,o.yOffset=f+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=w,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[Sn]="0px 0px",a&&(xr(a,o,"xOrigin",l,S),xr(a,o,"yOrigin",h,w),xr(a,o,"xOffset",u,o.xOffset),xr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+w)},io=function(t,e){var i=t._gsap||new e0(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=Pi(t,Sn)||"0",h,u,f,d,g,_,m,p,M,v,S,w,A,b,P,y,x,D,N,C,k,W,X,Z,z,tt,J,ft,At,Jt,V,Q;return h=u=f=_=m=p=M=v=S=0,d=g=1,i.svg=!!(t.getCTM&&_0(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[ye]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ye]!=="none"?c[ye]:"")),r.scale=r.rotate=r.translate="none"),b=ju(t,i.svg),i.svg&&(i.uncache?(z=t.getBBox(),l=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Jh(t,Z||l,!!Z||i.originIsAbsolute,i.smooth!==!1,b)),w=i.xOrigin||0,A=i.yOrigin||0,b!==no&&(D=b[0],N=b[1],C=b[2],k=b[3],h=W=b[4],u=X=b[5],b.length===6?(d=Math.sqrt(D*D+N*N),g=Math.sqrt(k*k+C*C),_=D||N?Os(N,D)*Jr:0,M=C||k?Os(C,k)*Jr+_:0,M&&(g*=Math.abs(Math.cos(M*js))),i.svg&&(h-=w-(w*D+A*C),u-=A-(w*N+A*k))):(Q=b[6],Jt=b[7],J=b[8],ft=b[9],At=b[10],V=b[11],h=b[12],u=b[13],f=b[14],P=Os(Q,At),m=P*Jr,P&&(y=Math.cos(-P),x=Math.sin(-P),Z=W*y+J*x,z=X*y+ft*x,tt=Q*y+At*x,J=W*-x+J*y,ft=X*-x+ft*y,At=Q*-x+At*y,V=Jt*-x+V*y,W=Z,X=z,Q=tt),P=Os(-C,At),p=P*Jr,P&&(y=Math.cos(-P),x=Math.sin(-P),Z=D*y-J*x,z=N*y-ft*x,tt=C*y-At*x,V=k*x+V*y,D=Z,N=z,C=tt),P=Os(N,D),_=P*Jr,P&&(y=Math.cos(P),x=Math.sin(P),Z=D*y+N*x,z=W*y+X*x,N=N*y-D*x,X=X*y-W*x,D=Z,W=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Pe(Math.sqrt(D*D+N*N+C*C)),g=Pe(Math.sqrt(X*X+Q*Q)),P=Os(W,X),M=Math.abs(P)>2e-4?P*Jr:0,S=V?1/(V<0?-V:V):0),i.svg&&(Z=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!v0(Pi(t,ye)),Z&&t.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Pe(d),i.scaleY=Pe(g),i.rotation=Pe(_)+o,i.rotationX=Pe(m)+o,i.rotationY=Pe(p)+o,i.skewX=M+o,i.skewY=v+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(r[Sn]=wc(l)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?SE:p0?x0:ME,i.uncache=0,i},wc=function(t){return(t=t.split(" "))[0]+" "+t[1]},dh=function(t,e,i){var r=tn(e);return Pe(parseFloat(e)+parseFloat(Cr(t,"x",i+"px",r)))+r},ME=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,x0(t,e)},Yr="0deg",Da="0px",jr=") ",x0=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,v=i.zOrigin,S="",w=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Yr||h!==Yr)){var A=parseFloat(h)*js,b=Math.sin(A),P=Math.cos(A),y;A=parseFloat(u)*js,y=Math.cos(A),a=dh(M,a,b*y*-v),o=dh(M,o,-Math.sin(A)*-v),c=dh(M,c,P*y*-v+v)}m!==Da&&(S+="perspective("+m+jr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||a!==Da||o!==Da||c!==Da)&&(S+=c!==Da||w?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+jr),l!==Yr&&(S+="rotate("+l+jr),h!==Yr&&(S+="rotateY("+h+jr),u!==Yr&&(S+="rotateX("+u+jr),(f!==Yr||d!==Yr)&&(S+="skew("+f+", "+d+jr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+jr),M.style[ye]=S||"translate(0, 0)"},SE=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,v=parseFloat(a),S=parseFloat(o),w,A,b,P,y;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=js,l*=js,w=Math.cos(c)*u,A=Math.sin(c)*u,b=Math.sin(c-l)*-f,P=Math.cos(c-l)*f,l&&(h*=js,y=Math.tan(l-h),y=Math.sqrt(1+y*y),b*=y,P*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),w*=y,A*=y)),w=Pe(w),A=Pe(A),b=Pe(b),P=Pe(P)):(w=u,P=f,A=b=0),(v&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(v=Cr(d,"x",a,"px"),S=Cr(d,"y",o,"px")),(g||_||m||p)&&(v=Pe(v+g-(g*w+_*b)+m),S=Pe(S+_-(g*A+_*P)+p)),(r||s)&&(y=d.getBBox(),v=Pe(v+r/100*y.width),S=Pe(S+s/100*y.height)),y="matrix("+w+","+A+","+b+","+P+","+v+","+S+")",d.setAttribute("transform",y),M&&(d.style[ye]=y)},EE=function(t,e,i,r,s){var a=360,o=Ye(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Jr:1),l=c-r,h=r+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Fp)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Fp)%a-~~(l/a)*a)),t._pt=f=new Mn(t._pt,e,i,r,l,aE),f.e=h,f.u="deg",t._props.push(i),f},Vp=function(t,e){for(var i in e)t[i]=e[i];return t},TE=function(t,e,i){var r=Vp({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,h,u,f,d,g;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[ye]=e,o=io(i,1),ms(i,ye),i.setAttribute("transform",l)):(l=getComputedStyle(i)[ye],a[ye]=e,o=io(i,1),a[ye]=l);for(c in ir)l=r[c],h=o[c],l!==h&&s.indexOf(c)<0&&(d=tn(l),g=tn(h),u=d!==g?Cr(i,c,l,g):parseFloat(l),f=parseFloat(h),t._pt=new Mn(t._pt,o,c,u,f-u,Kh),t._pt.u=g||0,t._props.push(c));Vp(o,r)};yn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",a=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(o){return t<2?n+o:"border"+o+n});bc[t>1?"border"+n:n]=function(o,c,l,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return $i(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,d,u)}});var y0={name:"css",register:Zh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var a=this._props,o=t.style,c=i.vars.startAt,l,h,u,f,d,g,_,m,p,M,v,S,w,A,b,P;Xu||Zh(),this.styles=this.styles||d0(t),P=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Un[_]&&n0(_,e,i,r,t,s)))){if(d=typeof h,g=bc[_],d==="function"&&(h=h.call(i,r,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Qa(h)),g)g(this,t,_,h,i)&&(b=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Er.lastIndex=0,Er.test(l)||(m=tn(l),p=tn(h)),p?m!==p&&(l=Cr(t,_,l,p)+p):m&&(h+=m),this.add(o,"setProperty",l,h,r,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(i,r,t,s):c[_],Ye(l)&&~l.indexOf("random(")&&(l=Qa(l)),tn(l+"")||l==="auto"||(l+=On.units[_]||tn($i(t,_))||""),(l+"").charAt(1)==="="&&(l=$i(t,_))):l=$i(t,_),f=parseFloat(l),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Ri&&(_==="autoAlpha"&&(f===1&&$i(t,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,o.visibility),xr(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ir,v){if(this.styles.save(_),S||(w=t._gsap,w.renderTransform&&!e.parseTransform||io(t,e.parseTransform),A=e.smoothOrigin!==!1&&w.smooth,S=this._pt=new Mn(this._pt,o,ye,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new Mn(this._pt,w,"scaleY",w.scaleY,(M?qs(w.scaleY,M+u):u)-w.scaleY||0,Kh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Sn,0,o[Sn]),h=xE(h),w.svg?Jh(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&xr(this,w,"zOrigin",w.zOrigin,p),xr(this,o,_,wc(l),wc(h)));continue}else if(_==="svgOrigin"){Jh(t,h,1,A,0,this);continue}else if(_ in g0){EE(this,w,_,f,M?qs(f,M+h):h);continue}else if(_==="smoothOrigin"){xr(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){TE(this,h,t);continue}}else _ in o||(_=ra(_)||_);if(v||(u||u===0)&&(f||f===0)&&!sE.test(h)&&_ in o)m=(l+"").substr((f+"").length),u||(u=0),p=tn(h)||(_ in On.units?On.units[_]:m),m!==p&&(f=Cr(t,_,l,p)),this._pt=new Mn(this._pt,v?w:o,_,f,(M?qs(f,M+u):u)-f,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?cE:Kh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=oE);else if(_ in o)vE.call(this,t,_,l,M?M+h:h);else if(_ in t)this.add(t,_,l||t[_],M?M+h:h,r,s);else if(_!=="parseTransform"){Fu(_,h);continue}v||(_ in o?P.push(_,0,o[_]):P.push(_,1,l||t[_])),a.push(_)}}b&&c0(this)},render:function(t,e){if(e.tween._time||!qu())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:$i,aliases:Ri,getSetter:function(t,e,i){var r=Ri[e];return r&&r.indexOf(",")<0&&(e=r),e in ir&&e!==Sn&&(t._gsap.x||$i(t,"x"))?i&&Np===i?e==="scale"?fE:uE:(Np=i||{})&&(e==="scale"?dE:pE):t.style&&!Uu(t.style[e])?lE:~e.indexOf("-")?hE:Hu(t,e)},core:{_removeProperty:ms,_getMatrix:ju}};En.utils.checkPrefix=ra;En.core.getStyleSaver=d0;(function(n,t,e,i){var r=yn(n+","+t+","+e,function(s){ir[s]=1});yn(t,function(s){On.units[s]="deg",g0[s]=1}),Ri[r[13]]=n+","+t,yn(i,function(s){var a=s.split(":");Ri[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});En.registerPlugin(y0);var ro=En.registerPlugin(y0)||En;ro.core.Tween;const AE=new URL("/day-12/",import.meta.url),bE=document.querySelector("canvas.webgl"),xs=new tS,Rc={width:window.innerWidth,height:window.innerHeight};let Zc=0,Jc=0;const wE=new lS(16777215,.7);xs.add(wE);const M0=new cS(16777215,1);M0.position.set(-5,10,10);xs.add(M0);const ei=new Kn(75,Rc.width/Rc.height,.1,100);ei.position.x=0;ei.position.y=0;ei.position.z=5;xs.add(ei);const Qc=new QM({canvas:bE,alpha:!0});Qc.setSize(Rc.width,Rc.height);Qc.setPixelRatio(Math.min(window.devicePixelRatio,2));Qc.setClearColor(new Ft(0),1);/*!SECTION */const S0=(n,t)=>{const e=t.position.z;n<e?n-=e:n+=e;const i=t.fov*Math.PI/180;return 2*Math.tan(i/2)*Math.abs(n)},RE=(n,t)=>S0(n,t)*t.aspect;/*!SECTION */const CE=new Pu(.1,32,32),PE=new Xc({color:16711680}),Qh=new Jn(CE,PE);xs.add(Qh);Zc=S0(0,ei);Jc=RE(0,ei);console.log(Zc,Jc);const Ha=[{part:"index",pair:[5,6]},{part:"index",pair:[6,7]},{part:"index",pair:[7,8]},{part:"middle",pair:[9,10]},{part:"middle",pair:[10,11]},{part:"middle",pair:[11,12]},{part:"ring",pair:[13,14]},{part:"ring",pair:[14,15]},{part:"ring",pair:[15,16]},{part:"pinky",pair:[17,18]},{part:"pinky",pair:[18,19]},{part:"pinky",pair:[19,20]},{part:"thumb",pair:[1,2]},{part:"thumb",pair:[2,3]},{part:"thumb",pair:[3,4]}],tu=[{part:"thumb",pair:[0,1]},{part:"palm",pair:[1,5]},{part:"palm",pair:[5,17]},{part:"palm",pair:[17,0]}],E0=.1,T0=.1,A0=32,LE=1,DE=new Yc(E0,T0,LE,A0);Ha.forEach(n=>{let t=b0(n.part,n.pair);n.cylinder=t});tu.forEach(n=>{let t=b0(n.part,n.pair);n.cylinder=t});function b0(n,t){let e=Math.random(),s=new Ft().setHSL(e,1,.7);const a=new eS({color:s}),o=new Jn(DE,a),c=(Math.random()-.5)*(Jc-4.5)-2,l=(Math.random()-.5)*(Zc-1.5),h=0,u=Math.random()*Math.PI*2;return o.rotation.z=u,o.position.set(c,l,h),o.userData.part=n,o.userData.pair=t,o.userData.originalColor=s,o.userData.random=Math.random(),xs.add(o),o}let Cc=[];const UE=10,Pc=2;for(let n=0;n<UE;n++){let t=Math.random();new Ft().setHSL(t,1,.5);let s=await new sS().loadAsync(`${AE.href}images/img-${n+1}.png`);const a=new Xc({map:s,transparent:!0}),o=new mo(1,1),c=new Jn(o,a),l=(Math.random()-.5)*(Jc-1),h=-Zc/2-Pc;c.position.set(l,h,0),c.userData.random=Math.random(),Cc.push(c),xs.add(c)}function IE(){R0()}/*!SECTION */let Si=Ha[0];const ph=new Ft(16711680),NE=.75,w0=()=>{console.log("blink",Si),Si&&ro.to(Si.cylinder.material.color,{r:ph.r,g:ph.g,b:ph.b,duration:NE,yoyo:!0,repeat:1,onComplete:w0})};function FE(n){if(n.length>0){const t=n[0];if(n[1],tu.forEach(e=>{let i=mh(t[e.pair[0]]),r=mh(t[e.pair[1]]);OE(e.cylinder,i,r)}),Si){let e=t[Si.pair[0]],i=mh(t[Si.pair[0]]),r=Si.cylinder,s={x:-e.x*2+1,y:-e.y*2+1};Qh.position.copy(i);const a=new hS;if(a.setFromCamera(s,ei),a.intersectObject(r).length>0){const c=Ha.indexOf(Si);c>-1&&Ha.splice(c,1),tu.push(Si),Si=Ha[0],BE()}}else Qh.visible=!1,window.applauseCalled||(kE(),window.applauseCalled=!0)}}function mh(n){let t=-n.x*2+1,e=-n.y*2+1;const i=new F(t,e,.5);i.unproject(ei);const r=i.sub(ei.position).normalize(),s=-ei.position.z/r.z;return ei.position.clone().add(r.multiplyScalar(s))}function OE(n,t,e){const i=new F().addVectors(t,e).multiplyScalar(.5),r=t.distanceTo(e);n.geometry.dispose(),n.geometry=new Yc(E0,T0,r,A0),n.position.copy(i);const s=new F().subVectors(e,t).normalize(),a=new F(0,1,0),o=new ma().setFromUnitVectors(a,s);n.setRotationFromQuaternion(o)}function BE(){const n=Cc[Math.floor(Math.random()*Cc.length)],t=n.position.y,e=t+Pc*2;ro.to(n.position,{y:e,duration:1,onComplete:()=>{ro.to(n.position,{y:t,duration:1})}})}function kE(){Cc.forEach(n=>{const t=n.position.y,e=Math.random()*Pc*2+Pc,i=t+e;ro.to(n.position,{y:i,duration:1+Math.random(),yoyo:!0,repeat:-1,ease:"power1.inOut"})})}w0();function R0(){requestAnimationFrame(R0),Qc.render(xs,ei)}var go=typeof self<"u"?self:{};function C0(n){t:{for(var t=["CLOSURE_FLAGS"],e=go,i=0;i<t.length;i++)if((e=e[t[i]])==null){t=null;break t}t=e}return(n=t&&t[n])!=null&&n}function Kr(){throw Error("Invalid UTF8")}function Hp(n,t){return t=String.fromCharCode.apply(null,t),n==null?t:n+t}let Qo,_h;const zE=typeof TextDecoder<"u";let GE;const VE=typeof TextEncoder<"u";function P0(n){if(VE)n=(GE||=new TextEncoder).encode(n);else{let e=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var t=n.charCodeAt(r);if(128>t)i[e++]=t;else{if(2048>t)i[e++]=t>>6|192;else{if(55296<=t&&57343>=t){if(56319>=t&&r<n.length){const s=n.charCodeAt(++r);if(56320<=s&&57343>=s){t=1024*(t-55296)+s-56320+65536,i[e++]=t>>18|240,i[e++]=t>>12&63|128,i[e++]=t>>6&63|128,i[e++]=63&t|128;continue}r--}t=65533}i[e++]=t>>12|224,i[e++]=t>>6&63|128}i[e++]=63&t|128}}n=e===i.length?i:i.subarray(0,e)}return n}var so,L0=C0(610401301),HE=C0(188588736);const Wp=go.navigator;function eu(n){return!!L0&&!!so&&so.brands.some(({brand:t})=>t&&t.indexOf(n)!=-1)}function $n(n){var t;return(t=go.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(n)!=-1}function mr(){return!!L0&&!!so&&0<so.brands.length}function gh(){return mr()?eu("Chromium"):($n("Chrome")||$n("CriOS"))&&!(!mr()&&$n("Edge"))||$n("Silk")}function Ku(n){return Ku[" "](n),n}so=Wp&&Wp.userAgentData||null,Ku[" "]=function(){};var WE=!mr()&&($n("Trident")||$n("MSIE"));!$n("Android")||gh(),gh(),$n("Safari")&&(gh()||!mr()&&$n("Coast")||!mr()&&$n("Opera")||!mr()&&$n("Edge")||(mr()?eu("Microsoft Edge"):$n("Edg/"))||mr()&&eu("Opera"));var D0={},Ba=null;function XE(n){var t=n.length,e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(n[t-1])!=-1&&(e="=.".indexOf(n[t-2])!=-1?e-2:e-1);var i=new Uint8Array(e),r=0;return function(s,a){function o(d){for(;c<s.length;){var g=s.charAt(c++),_=Ba[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return d}U0();for(var c=0;;){var l=o(-1),h=o(0),u=o(64),f=o(64);if(f===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),f!=64&&a(u<<6&192|f))}}(n,function(s){i[r++]=s}),r!==e?i.subarray(0,r):i}function U0(){if(!Ba){Ba={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var i=n.concat(t[e].split(""));D0[e]=i;for(var r=0;r<i.length;r++){var s=i[r];Ba[s]===void 0&&(Ba[s]=r)}}}}var I0=typeof Uint8Array<"u",N0=!WE&&typeof btoa=="function";function Xp(n){if(!N0){var t;t===void 0&&(t=0),U0(),t=D0[t];var e=Array(Math.floor(n.length/3)),i=t[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var r=n[c],s=n[c+1],a=n[c+2],o=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|a>>6],a=t[63&a],e[l++]=o+r+s+a}switch(o=0,a=i,n.length-c){case 2:a=t[(15&(o=n[c+1]))<<2]||i;case 1:n=n[c],e[l]=t[n>>2]+t[(3&n)<<4|o>>4]+a+i}return e.join("")}for(t="",e=0,i=n.length-10240;e<i;)t+=String.fromCharCode.apply(null,n.subarray(e,e+=10240));return t+=String.fromCharCode.apply(null,e?n.subarray(e):n),btoa(t)}const qp=/[-_.]/g,qE={"-":"+",_:"/",".":"="};function YE(n){return qE[n]||""}function F0(n){if(!N0)return XE(n);qp.test(n)&&(n=n.replace(qp,YE)),n=atob(n);const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}function vo(n){return I0&&n!=null&&n instanceof Uint8Array}let jE;function tl(){return jE||=new Uint8Array(0)}var sa={};let KE;function O0(n){if(n!==sa)throw Error("illegal external caller")}function _s(){return KE||=new tr(null,sa)}function $u(n){O0(sa);var t=n.g;return(t=t==null||vo(t)?t:typeof t=="string"?F0(t):null)==null?t:n.g=t}var tr=class{constructor(n,t){if(O0(t),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const n=$u(this);return n?new Uint8Array(n):tl()}};function B0(n,t){return Error(`Invalid wire type: ${n} (at position ${t})`)}function Zu(){return Error("Failed to read varint, encoding is invalid.")}function k0(n,t){return Error(`Tried to read past the end of the data ${t} > ${n}`)}function Ju(n){if(typeof n=="string")return{buffer:F0(n),P:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Uint8Array)return{buffer:n,P:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),P:!1};if(n.constructor===tr)return{buffer:$u(n)||tl(),P:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Qu(){return typeof BigInt=="function"}const $E=typeof Uint8Array.prototype.slice=="function";let z0,ue=0,Oe=0;function ls(n){const t=0>n;let e=(n=Math.abs(n))>>>0;if(n=Math.floor((n-e)/4294967296),t){const[i,r]=nf(e,n);n=r,e=i}ue=e>>>0,Oe=n>>>0}function tf(n){const t=z0||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+n,!0),Oe=0,ue=t.getUint32(0,!0)}function nu(n,t){return 4294967296*t+(n>>>0)}function ef(n,t){const e=2147483648&t;return e&&(t=~t>>>0,(n=1+~n>>>0)==0&&(t=t+1>>>0)),n=nu(n,t),e?-n:n}function Lc(n,t){if(n>>>=0,2097151>=(t>>>=0))var e=""+(4294967296*t+n);else Qu()?e=""+(BigInt(t)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(e=16777215&(n>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),1e7<=e&&(t+=Math.floor(e/1e7),e%=1e7),e=t+Yp(e)+Yp(n));return e}function Yp(n){return n=String(n),"0000000".slice(n.length)+n}function G0(){var n=ue,t=Oe;if(2147483648&t)if(Qu())n=""+(BigInt(0|t)<<BigInt(32)|BigInt(n>>>0));else{const[e,i]=nf(n,t);n="-"+Lc(e,i)}else n=Lc(n,t);return n}function el(n){if(16>n.length)ls(Number(n));else if(Qu())n=BigInt(n),ue=Number(n&BigInt(4294967295))>>>0,Oe=Number(n>>BigInt(32)&BigInt(4294967295));else{const t=+(n[0]==="-");Oe=ue=0;const e=n.length;for(let i=t,r=(e-t)%6+t;r<=e;i=r,r+=6){const s=Number(n.slice(i,r));Oe*=1e6,ue=1e6*ue+s,4294967296<=ue&&(Oe+=Math.trunc(ue/4294967296),Oe>>>=0,ue>>>=0)}if(t){const[i,r]=nf(ue,Oe);ue=i,Oe=r}}}function nf(n,t){return t=~t,n?n=1+~n:t+=1,[n,t]}function rf(n,t){let e,i=0,r=0,s=0;const a=n.h;let o=n.g;do e=a[o++],i|=(127&e)<<s,s+=7;while(32>s&&128&e);for(32<s&&(r|=(127&e)>>4),s=3;32>s&&128&e;s+=7)e=a[o++],r|=(127&e)<<s;if(hs(n,o),128>e)return t(i>>>0,r>>>0);throw Zu()}function sf(n){let t=0,e=n.g;const i=e+10,r=n.h;for(;e<i;){const s=r[e++];if(t|=s,(128&s)==0)return hs(n,e),!!(127&t)}throw Zu()}function Pr(n){const t=n.h;let e=n.g,i=t[e++],r=127&i;if(128&i&&(i=t[e++],r|=(127&i)<<7,128&i&&(i=t[e++],r|=(127&i)<<14,128&i&&(i=t[e++],r|=(127&i)<<21,128&i&&(i=t[e++],r|=i<<28,128&i&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Zu();return hs(n,e),r}function Lr(n){return Pr(n)>>>0}function iu(n){var t=n.h;const e=n.g,i=t[e],r=t[e+1],s=t[e+2];return t=t[e+3],hs(n,n.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function ru(n){var t=iu(n);n=2*(t>>31)+1;const e=t>>>23&255;return t&=8388607,e==255?t?NaN:1/0*n:e==0?n*Math.pow(2,-149)*t:n*Math.pow(2,e-150)*(t+Math.pow(2,23))}function ZE(n){return Pr(n)}function vh(n,t,{ca:e=!1}={}){n.ca=e,t&&(t=Ju(t),n.h=t.buffer,n.m=t.P,n.j=0,n.l=n.h.length,n.g=n.j)}function hs(n,t){if(n.g=t,t>n.l)throw k0(n.l,t)}function V0(n,t){if(0>t)throw Error(`Tried to read a negative byte length: ${t}`);const e=n.g,i=e+t;if(i>n.l)throw k0(t,n.l-e);return n.g=i,e}function H0(n,t){if(t==0)return _s();var e=V0(n,t);return n.ca&&n.m?e=n.h.subarray(e,e+t):(n=n.h,e=e===(t=e+t)?tl():$E?n.slice(e,t):new Uint8Array(n.subarray(e,t))),e.length==0?_s():new tr(e,sa)}var jp=[];function W0(n){var t=n.g;if(t.g==t.l)return!1;n.l=n.g.g;var e=Lr(n.g);if(t=e>>>3,!(0<=(e&=7)&&5>=e))throw B0(e,n.l);if(1>t)throw Error(`Invalid field number: ${t} (at position ${n.l})`);return n.m=t,n.h=e,!0}function cc(n){switch(n.h){case 0:n.h!=0?cc(n):sf(n.g);break;case 1:hs(n=n.g,n.g+8);break;case 2:if(n.h!=2)cc(n);else{var t=Lr(n.g);hs(n=n.g,n.g+t)}break;case 5:hs(n=n.g,n.g+4);break;case 3:for(t=n.m;;){if(!W0(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=t)throw Error("Unmatched end-group tag");break}cc(n)}break;default:throw B0(n.h,n.l)}}function xo(n,t,e){const i=n.g.l,r=Lr(n.g),s=n.g.g+r;let a=s-i;if(0>=a&&(n.g.l=s,e(t,n,void 0,void 0,void 0),a=s-n.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,t}function af(n){var t=Lr(n.g),e=V0(n=n.g,t);if(n=n.h,zE){var i,r=n;(i=_h)||(i=_h=new TextDecoder("utf-8",{fatal:!0})),t=e+t,r=e===0&&t===r.length?r:r.subarray(e,t);try{var s=i.decode(r)}catch(o){if(Qo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Qo=!0}catch{Qo=!1}}throw!Qo&&(_h=void 0),o}}else{t=(s=e)+t,e=[];let o,c=null;for(;s<t;){var a=n[s++];128>a?e.push(a):224>a?s>=t?Kr():(o=n[s++],194>a||(192&o)!=128?(s--,Kr()):e.push((31&a)<<6|63&o)):240>a?s>=t-1?Kr():(o=n[s++],(192&o)!=128||a===224&&160>o||a===237&&160<=o||(192&(i=n[s++]))!=128?(s--,Kr()):e.push((15&a)<<12|(63&o)<<6|63&i)):244>=a?s>=t-2?Kr():(o=n[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,Kr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,e.push(55296+(a>>10&1023),56320+(1023&a)))):Kr(),8192<=e.length&&(c=Hp(c,e),e.length=0)}s=Hp(c,e)}return s}function X0(n){const t=Lr(n.g);return H0(n.g,t)}function nl(n,t,e){var i=Lr(n.g);for(i=n.g.g+i;n.g.g<i;)e.push(t(n.g))}var tc=[];function Kp(n){return n?/^\d+$/.test(n)?(el(n),new $p(ue,Oe)):null:JE||=new $p(0,0)}var $p=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let JE;function Zp(n){return n?/^-?\d+$/.test(n)?(el(n),new Jp(ue,Oe)):null:QE||=new Jp(0,0)}var Jp=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let QE;function Dc(n,t,e){for(;0<e||127<t;)n.g.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;n.g.push(t)}function yo(n,t){for(;127<t;)n.g.push(127&t|128),t>>>=7;n.g.push(t)}function il(n,t){if(0<=t)yo(n,t);else{for(let e=0;9>e;e++)n.g.push(127&t|128),t>>=7;n.g.push(1)}}function ao(n,t){n.g.push(t>>>0&255),n.g.push(t>>>8&255),n.g.push(t>>>16&255),n.g.push(t>>>24&255)}function aa(n,t){t.length!==0&&(n.l.push(t),n.h+=t.length)}function si(n,t,e){yo(n.g,8*t+e)}function of(n,t){return si(n,t,2),t=n.g.end(),aa(n,t),t.push(n.h),t}function cf(n,t){var e=t.pop();for(e=n.h+n.g.length()-e;127<e;)t.push(127&e|128),e>>>=7,n.h++;t.push(e),n.h++}function rl(n,t,e){si(n,t,2),yo(n.g,e.length),aa(n,n.g.end()),aa(n,e)}function su(n,t,e,i){e!=null&&(t=of(n,t),i(e,n),cf(n,t))}class ga{constructor(t,e,i,r){this.g=t,this.h=e,this.l=i,this.pa=r}}function kn(n){return Array.prototype.slice.call(n)}function lf(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var Ii=lf(),Qp=lf("0di"),xh=lf("2ex"),hf=Ii?(n,t)=>{n[Ii]|=t}:(n,t)=>{n.g!==void 0?n.g|=t:Object.defineProperties(n,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Uc=Ii?(n,t)=>{n[Ii]&=~t}:(n,t)=>{n.g!==void 0&&(n.g&=~t)};function Qe(n,t,e){return e?n|t:n&~t}var we=Ii?n=>0|n[Ii]:n=>0|n.g,Zt=Ii?n=>n[Ii]:n=>n.g,Ae=Ii?(n,t)=>(n[Ii]=t,n):(n,t)=>(n.g!==void 0?n.g=t:Object.defineProperties(n,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}}),n);function va(n){return hf(n,34),n}function tT(n,t){Ae(t,-14591&(0|n))}function au(n,t){Ae(t,-14557&(34|n))}function q0(n){return(n=n>>14&1023)===0?536870912:n}var uf,Mo={},Y0={};function tm(n){return!(!n||typeof n!="object"||n.Ja!==Y0)}function ff(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function df(n,t,e){if(n!=null){if(typeof n=="string")n=n?new tr(n,sa):_s();else if(n.constructor!==tr)if(vo(n))n=n.length?new tr(e?n:new Uint8Array(n),sa):_s();else{if(!t)throw Error();n=void 0}}return n}function Ic(n,t,e){if(!Array.isArray(n)||n.length)return!1;const i=we(n);return!!(1&i)||!(!t||!(Array.isArray(t)?t.includes(e):t.has(e)))&&(Ae(n,1|i),!0)}const em=[];function Bi(n){if(2&n)throw Error()}Ae(em,55),uf=Object.freeze(em);class Nc{constructor(t,e,i){this.l=0,this.g=t,this.h=e,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Nc(this.g,this.h,this.m)}}let Tr,eT,nT;function j0(n,t){(t=Tr?t[Tr]:void 0)&&(n[Tr]=kn(t))}function K0(n,t){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=t}function iT(){const n=Error();K0(n,"incident"),function(t){go.setTimeout(()=>{throw t},0)}(n)}function ou(n){return K0(n=Error(n),"warning"),n}function Br(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function $0(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}Object.freeze(new class{}),Object.freeze(new class{});const rT=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function sl(n){const t=typeof n;return t==="number"?Number.isFinite(n):t==="string"&&rT.test(n)}function xa(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function sT(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function nm(n){return n[0]!=="-"&&(20>n.length||n.length===20&&184467>Number(n.substring(0,6)))}function Z0(n){return n[0]==="-"?20>n.length||n.length===20&&-922337<Number(n.substring(0,7)):19>n.length||n.length===19&&922337>Number(n.substring(0,6))}function pf(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(ls(n),n=ef(ue,Oe)),n}function mf(n){var t=Math.trunc(Number(n));return Number.isSafeInteger(t)?String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),Z0(n)||(el(n),n=G0()),n)}function Fc(n){return n==null?n:sl(n)?typeof n=="number"?pf(n):mf(n):void 0}function So(n){if(typeof n!="string")throw Error();return n}function ya(n){if(n!=null&&typeof n!="string")throw Error();return n}function us(n){return n==null||typeof n=="string"?n:void 0}function _f(n,t,e,i){if(n!=null&&typeof n=="object"&&n.X===Mo)return n;if(!Array.isArray(n))return e?2&i?(n=t[Qp])?t=n:(va((n=new t).s),t=t[Qp]=n):t=new t:t=void 0,t;let r=e=we(n);return r===0&&(r|=32&i),r|=2&i,r!==e&&Ae(n,r),new t(n)}function aT(n,t,e){if(t){var i=!!i;if(!sl(t=n))throw ou("int64");typeof t=="string"?i=mf(t):i?(i=Math.trunc(t),Number.isSafeInteger(i)?i=String(i):Z0(t=String(i))?i=t:(ls(i),i=G0())):i=pf(t)}else i=Fc(n);return typeof(e=(n=i)==null?e?0:void 0:n)=="string"&&(i=+e,Number.isSafeInteger(i))?i:e}let Oc,gf,oT;function Bc(n){switch(typeof n){case"boolean":return gf||=[0,void 0,!0];case"number":return 0<n?void 0:n===0?oT||=[0,void 0]:[-n,void 0];case"string":return[0,n];case"object":return n}}function fs(n,t){return J0(n,t[0],t[1])}function J0(n,t,e){if(n==null&&(n=Oc),Oc=void 0,n==null){var i=96;e?(n=[e],i|=512):n=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(i=we(n)))throw Error("farr");if(64&i)return n;if(i|=64,e&&(i|=512,e!==n[0]))throw Error("mid");t:{const r=(e=n).length;if(r){const s=r-1;if(ff(e[s])){if(1024<=(t=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&t)<<14;break t}}if(t){if(1024<(t=Math.max(t,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&t)<<14}}}return Ae(n,i),n}const cT={};let lT=function(){try{return Ku(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class yh{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const hT=lT?(Object.setPrototypeOf(yh.prototype,Map.prototype),Object.defineProperties(yh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),yh):class extends Map{constructor(){super()}};function im(n){return n}function Mh(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var ri=class extends hT{constructor(n,t,e=im,i=im){super();let r=we(n);r|=64,Ae(n,r),this.N=r,this.U=t,this.S=e,this.Z=this.U?uT:i;for(let s=0;s<n.length;s++){const a=n[s],o=e(a[0],!1,!0);let c=a[1];t?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}oa(n=rm){if(this.size!==0)return this.Y(n)}Y(n=rm){const t=[],e=super.entries();for(var i;!(i=e.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),t.push(i);return t}clear(){Mh(this),super.clear()}delete(n){return Mh(this),super.delete(this.S(n,!0,!1))}entries(){var n=this.na();return new Nc(n,fT,this)}keys(){return this.Ia()}values(){var n=this.na();return new Nc(n,ri.prototype.get,this)}forEach(n,t){super.forEach((e,i)=>{n.call(t,this.get(i),i,this)})}set(n,t){return Mh(this),(n=this.S(n,!0,!1))==null?this:t==null?(super.delete(n),this):super.set(n,this.Z(t,!0,!0,this.U,!1,this.N))}Oa(n){const t=this.S(n[0],!1,!0);n=n[1],n=this.U?n===void 0?null:n:this.Z(n,!1,!0,void 0,!1,this.N),super.set(t,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const t=super.get(n);if(t!==void 0){var e=this.U;return e?((e=this.Z(t,!1,!0,e,this.ta,this.N))!==t&&super.set(n,e),e):t}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function uT(n,t,e,i,r,s){return n=_f(n,i,e,s),r&&(n=ol(n)),n}function rm(n){return n}function fT(n){return[n,this.get(n)]}let dT;function sm(){return dT||=new ri(va([]),void 0,void 0,void 0,cT)}function vf(n,t,e,i,r){if(n!=null){if(Array.isArray(n))n=Ic(n,void 0,0)?void 0:r&&2&we(n)?n:al(n,t,e,i!==void 0,r);else if(ff(n)){const s={};for(let a in n)s[a]=vf(n[a],t,e,i,r);n=s}else n=t(n,i);return n}}function al(n,t,e,i,r){const s=i||e?we(n):0;i=i?!!(32&s):void 0;const a=kn(n);for(let o=0;o<a.length;o++)a[o]=vf(a[o],t,e,i,r);return e&&(j0(a,n),e(s,a)),a}function pT(n){return vf(n,xf,void 0,void 0,!1)}function xf(n){return n.X===Mo?n.toJSON():n instanceof ri?n.oa(pT):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Ic(t,void 0,0))return}else{if(vo(t))return Xp(t);if(t instanceof tr){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=Xp(e)}if(t instanceof ri)return t.oa()}}return t}(n)}function cu(n,t,e=au){if(n!=null){if(I0&&n instanceof Uint8Array)return t?n:new Uint8Array(n);if(Array.isArray(n)){var i=we(n);return 2&i||(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),n=t?Ae(n,-12293&(34|i)):al(n,cu,4&i?au:e,!0,!0)),n}return n.X===Mo?(e=n.s,n=2&(i=Zt(e))?n:yf(n,e,i,!0)):n instanceof ri&&!(2&n.N)&&(e=va(n.Y(cu)),n=new ri(e,n.U,n.S,n.Z)),n}}function yf(n,t,e,i){return n=n.constructor,Oc=t=Q0(t,e,i),t=new n(t),Oc=void 0,t}function Q0(n,t,e){const i=e||2&t?au:tT,r=!!(32&t);return n=function(s,a,o){const c=kn(s);var l=c.length;const h=256&a?c[l-1]:void 0;for(l+=h?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(h){a=c[a]={};for(const u in h)a[u]=o(h[u])}return j0(c,s),c}(n,t,s=>cu(s,r,i)),hf(n,32|(e?2:0)),n}function ol(n){const t=n.s,e=Zt(t);return 2&e?yf(n,t,e,!1):n}function tg(n,t,e,i){return!(4&t)||e!=null}function Dr(n,t){return ki(n=n.s,Zt(n),t)}function am(n,t,e,i){if(!(0>(t=i+(+!!(512&t)-1))||t>=n.length||t>=e))return n[t]}function ki(n,t,e,i){if(e===-1)return null;const r=q0(t);if(!(e>=r)){var s=n.length;return i&&256&t&&(i=n[s-1][e])!=null?(am(n,t,r,e)&&xh!=null&&(4<=(t=(n=nT??={})[xh]||0)||(n[xh]=t+1,iT())),i):am(n,t,r,e)}return 256&t?n[n.length-1][e]:void 0}function ae(n,t,e,i){const r=n.s;let s=Zt(r);return Bi(s),fe(r,s,t,e,i),n}function fe(n,t,e,i,r){const s=q0(t);if(e>=s||r){let a=t;if(256&t)r=n[n.length-1];else{if(i==null)return a;r=n[s+(+!!(512&t)-1)]={},a|=256}return r[e]=i,e<s&&(n[e+(+!!(512&t)-1)]=void 0),a!==t&&Ae(n,a),a}return n[e+(+!!(512&t)-1)]=i,256&t&&e in(n=n[n.length-1])&&delete n[e],t}function Ma(n,t,e,i,r){var s=2&t;let a=ki(n,t,e,r);Array.isArray(a)||(a=uf);const o=!(2&i);i=!(1&i);const c=!!(32&t);let l=we(a);return l!==0||!c||s||o?1&l||(l|=1,Ae(a,l)):(l|=33,Ae(a,l)),s?(n=!1,2&l||(va(a),n=!!(4&l)),(i||n)&&Object.freeze(a)):(s=!!(2&l)||!!(2048&l),i&&s?(a=kn(a),i=1,c&&!o&&(i|=32),Ae(a,i),fe(n,t,e,a,r)):o&&32&l&&!s&&Uc(a,32)),a}function lc(n,t){n=n.s;let e=Zt(n);const i=ki(n,e,t),r=Br(i);return r!=null&&r!==i&&fe(n,e,t,r),r}function eg(n){n=n.s;let t=Zt(n);const e=ki(n,t,1),i=df(e,!0,!!(34&t));return i!=null&&i!==e&&fe(n,t,1,i),i}function Vs(n,t,e){const i=n.s;let r=Zt(i);const s=2&r?1:2;let a=ng(i,r,t);var o=we(a);if(tg(n,o,void 0)){(4&o||Object.isFrozen(a))&&(a=kn(a),o=gs(o,r),r=fe(i,r,t,a));let c=n=0;for(;n<a.length;n++){const l=e(a[n]);l!=null&&(a[c++]=l)}c<n&&(a.length=c),o=Qe(o=ig(o,r),20,!0),o=Qe(o,4096,!1),o=Qe(o,8192,!1),Ae(a,o),2&o&&Object.freeze(a)}return Wa(o)||(e=o,(o=(n=s===1||s===4&&!!(32&o))?Qe(o,2,!0):oa(o,r,!1))!==e&&Ae(a,o),n&&Object.freeze(a)),s===2&&Wa(o)&&(a=kn(a),o=oa(o=gs(o,r),r,!1),Ae(a,o),fe(i,r,t,a)),a}function ng(n,t,e){return n=ki(n,t,e),Array.isArray(n)?n:uf}function ig(n,t){return n===0&&(n=gs(n,t)),Qe(n,1,!0)}function Wa(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function rg(n){n=kn(n);for(let t=0;t<n.length;t++){const e=n[t]=kn(n[t]);Array.isArray(e[1])&&(e[1]=va(e[1]))}return n}function kc(n,t,e){{const o=n.s;let c=Zt(o);if(Bi(c),e==null)fe(o,c,t);else{var i,r=we(e),s=r,a=!!(2&r)||Object.isFrozen(e);if((i=!a)&&(i=!1),tg(n,r))for(r=21,a&&(e=kn(e),s=0,r=oa(r=gs(r,c),c,!0)),n=0;n<e.length;n++)e[n]=So(e[n]);i&&(e=kn(e),s=0,r=oa(r=gs(r,c),c,!0)),r!==s&&Ae(e,r),fe(o,c,t,e)}}}function lu(n,t,e,i){n=n.s;let r=Zt(n);Bi(r),fe(n,r,t,(i==="0"?Number(e)===0:e===i)?void 0:e)}function Eo(n,t,e,i){const r=Zt(n);Bi(r),n=Ma(n,r,t,2),i=e(i,!!(4&(t=we(n)))&&!!(4096&t)),n.push(i)}function mT(n){return n}function Sh(n,t){return Mf(n=n.s,Zt(n),Vg)===t?t:-1}function Mf(n,t,e){let i=0;for(let r=0;r<e.length;r++){const s=e[r];ki(n,t,s)!=null&&(i!==0&&(t=fe(n,t,i)),i=s)}return i}function Sf(n,t,e,i){let r=Zt(n);Bi(r);const s=ki(n,r,e,i);let a;if(s!=null&&s.X===Mo)return(t=ol(s))!==s&&fe(n,r,e,t,i),t.s;if(Array.isArray(s)){const o=we(s);a=2&o?Q0(s,o,!1):s,a=fs(a,t)}else a=fs(void 0,t);return a!==s&&fe(n,r,e,a,i),a}function sg(n,t,e,i){n=n.s;let r=Zt(n);const s=ki(n,r,e,i);return(t=_f(s,t,!1,r))!==s&&t!=null&&fe(n,r,e,t,i),t}function Yt(n,t,e,i=!1){if((t=sg(n,t,e,i))==null)return t;n=n.s;let r=Zt(n);if(!(2&r)){const s=ol(t);s!==t&&fe(n,r,e,t=s,i)}return t}function ag(n,t,e,i,r,s){var a=2,o=!!(2&t);a=o?1:a,r=!!r,s&&=!o,o=ng(n,t,i);var c=we(o);const l=!!(4&c);if(!l){var h=o,u=t;const f=!!(2&(c=ig(c,t)));f&&(u=Qe(u,2,!0));let d=!f,g=!0,_=0,m=0;for(;_<h.length;_++){const p=_f(h[_],e,!1,u);if(p instanceof e){if(!f){const M=!!(2&we(p.s));d&&=!M,g&&=M}h[m++]=p}}m<_&&(h.length=m),c=Qe(c,4,!0),c=Qe(c,16,g),c=Qe(c,8,d),Ae(h,c),f&&Object.freeze(h)}if(s&&!(8&c||!o.length&&(a===1||a===4&&32&c))){for(Wa(c)&&(o=kn(o),c=gs(c,t),t=fe(n,t,i,o)),e=o,s=c,h=0;h<e.length;h++)(c=e[h])!==(u=ol(c))&&(e[h]=u);s=Qe(s,8,!0),s=Qe(s,16,!e.length),Ae(e,s),c=s}return Wa(c)||(e=c,(c=(s=a===1||a===4&&!!(32&c))?Qe(c,!o.length||16&c&&(!l||32&c)?2:2048,!0):oa(c,t,r))!==e&&Ae(o,c),s&&Object.freeze(o)),a===2&&Wa(c)&&(o=kn(o),c=oa(c=gs(c,t),t,r),Ae(o,c),fe(n,t,i,o)),o}function rr(n,t,e){n=n.s;const i=Zt(n);return ag(n,i,t,e,!1,!(2&i))}function vt(n,t,e,i,r){return i==null&&(i=void 0),ae(n,e,i,r)}function Xa(n,t,e,i){i==null&&(i=void 0),n=n.s;let r=Zt(n);Bi(r),(e=Mf(n,r,e))&&e!==t&&i!=null&&(r=fe(n,r,e)),fe(n,r,t,i)}function gs(n,t){return n=Qe(n,2,!!(2&t)),n=Qe(n,32,!0),Qe(n,2048,!1)}function oa(n,t,e){return 32&t&&e||(n=Qe(n,32,!1)),n}function zc(n,t,e,i){n=n.s;const r=Zt(n);Bi(r),t=ag(n,r,e,t,!0),e=i??new e,t.push(e),2&we(e.s)?Uc(t,8):Uc(t,16)}function ni(n,t){return xa(Dr(n,t))}function fi(n,t){return n??t}function Le(n,t){return fi(lc(n,t),0)}function Ni(n,t){return fi(us(Dr(n,t)),"")}function oo(n,t,e){if(e!=null&&typeof e!="boolean")throw n=typeof e,Error(`Expected boolean but got ${n!="object"?n:e?Array.isArray(e)?"array":n:"null"}: ${e}`);ae(n,t,e)}function Fi(n,t,e){if(e!=null){if(typeof e!="number"||!Number.isFinite(e))throw ou("int32");e|=0}ae(n,t,e)}function pt(n,t,e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);ae(n,t,e)}function di(n,t,e){t.g?t.m(n,t.g,t.h,e,!0):t.m(n,t.h,e,!0)}ri.prototype.toJSON=void 0,ri.prototype.Ja=Y0;var ut=class{constructor(n,t){this.s=J0(n,t)}toJSON(){return og(this,al(this.s,xf,void 0,void 0,!1),!0)}l(){var n=MA;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return yf(this,n,Zt(n),!1)}P(){return!!(2&we(this.s))}};function og(n,t,e){var i=HE?void 0:n.constructor.B;const r=Zt(e?n.s:t);if(!(n=t.length))return t;let s,a;if(ff(e=t[n-1])){t:{var o=e;let h={},u=!1;for(var c in o){let f=o[c];if(Array.isArray(f)){let d=f;(Ic(f,i,+c)||tm(f)&&f.size===0)&&(f=null),f!=d&&(u=!0)}f!=null?h[c]=f:u=!0}if(u){for(var l in h){o=h;break t}o=null}}o!=e&&(s=!0),n--}for(c=+!!(512&r)-1;0<n&&(e=t[l=n-1],l-=c,e==null||Ic(e,i,l)||tm(e)&&e.size===0);n--)a=!0;return(s||a)&&(t=Array.prototype.slice.call(t,0,n),o&&t.push(o)),t}function cg(n){return Array.isArray(n)?n[0]instanceof ga?n:[bT,n]:[n,void 0]}function Sa(n,t){if(Array.isArray(t)){var e=we(t);if(4&e)return t;for(var i=0,r=0;i<t.length;i++){const s=n(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),Ae(t,-12289&(5|e)),2&e&&Object.freeze(t),t}}ut.prototype.X=Mo,ut.prototype.toString=function(){return og(this,this.s,!1).toString()};const om=Symbol();function Ef(n){let t=n[om];if(!t){const e=hg(n),i=Af(n),r=i.l;t=r?(s,a)=>r(s,a,i):(s,a)=>{for(;W0(a)&&a.h!=4;){var o=a.m,c=i[o];if(!c){var l=i.ea;l&&(l=l[o])&&(c=i[o]=_T(l))}c&&c(a,s,o)||(o=(c=a).l,cc(c),c.ia?c=void 0:(l=c.g.g-o,c.g.g=o,c=H0(c.g,l)),o=s,c&&(Tr||=Symbol(),(l=o[Tr])?l.push(c):o[Tr]=[c]))}e===lg||e===hc||e.j||(s[eT||=Symbol()]=e)},n[om]=t}return t}function _T(n){const t=(n=cg(n))[0].g;if(n=n[1]){const e=Ef(n),i=Af(n).T;return(r,s,a)=>t(r,s,a,i,e)}return t}class Eh{}let lg,hc;const qa=Symbol();function gT(n,t,e){const i=e[1];let r;if(i){const s=i[qa];r=s?s.T:Bc(i[0]),n[t]=s??i}r&&r===gf?(n.g||(n.g=new Set)).add(t):e[0]&&(n.h||(n.h=new Set)).add(t)}function cm(n,t){return[n.l,!t||0<t[0]?void 0:t]}function hg(n){var t=n[qa];if(t)return t;if(!(t=Tf(n,n[qa]=new Eh,cm,cm,gT)).ea&&!t.h&&!t.g){let e=!0;for(let i in t)isNaN(i)||(e=!1);e?(Bc(n[0])===gf?hc?t=hc:((t=new Eh).T=Bc(!0),t=hc=t):t=lg||=new Eh,t=n[qa]=t):t.j=!0}return t}function vT(n,t,e){n[t]=e}function Tf(n,t,e,i,r=vT){t.T=Bc(n[0]);let s=0;var a=n[++s];a&&a.constructor===Object&&(t.ea=a,typeof(a=n[++s])=="function"&&(t.l=a,t.m=n[++s],a=n[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&0<a[0];){for(var c=0;c<a.length;c++)o[a[c]]=a;a=n[++s]}for(c=1;a!==void 0;){let u;typeof a=="number"&&(c+=a,a=n[++s]);var l=void 0;if(a instanceof ga?u=a:(u=wT,s--),u.pa){a=n[++s],l=n;var h=s;typeof a=="function"&&(a=a(),l[h]=a),l=a}for(h=c+1,typeof(a=n[++s])=="number"&&0>a&&(h-=a,a=n[++s]);c<h;c++){const f=o[c];r(t,c,l?i(u,l,f):e(u,f))}}return t}const lm=Symbol();function ug(n){let t=n[lm];if(!t){const e=cl(n);t=(i,r)=>dg(i,r,e),n[lm]=t}return t}const hu=Symbol();function xT(n){return n.h}function yT(n,t){let e,i;const r=n.h;return(s,a,o)=>r(s,a,o,i||=cl(t).T,e||=ug(t))}function cl(n){let t=n[hu];return t||(t=Tf(n,n[hu]={},xT,yT),fg(n),t)}const uu=Symbol();function MT(n,t){const e=n.g;return t?(i,r,s)=>e(i,r,s,t):e}function ST(n,t,e){const i=n.g;let r,s;return(a,o,c)=>i(a,o,c,s||=Af(t).T,r||=Ef(t),e)}function Af(n){let t=n[uu];return t||(hg(n),t=Tf(n,n[uu]={},MT,ST),fg(n),t)}function fg(n){uu in n&&qa in n&&hu in n&&(n.length=0)}function hm(n,t){var e=n[t];if(e)return e;if((e=n.ea)&&(e=e[t])){var i=(e=cg(e))[0].h;if(e=e[1]){const r=ug(e),s=cl(e).T;e=(e=n.m)?e(s,r):(a,o,c)=>i(a,o,c,s,r)}else e=i;return n[t]=e}}function dg(n,t,e){for(var i=Zt(n),r=+!!(512&i)-1,s=n.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=n[a];if(c==null)continue;const l=a-r,h=hm(e,l);h&&h(t,c,l)}if(256&i){i=n[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(o=hm(e,r))&&o(t,s,r)}if(n=Tr?n[Tr]:void 0)for(aa(t,t.g.end()),e=0;e<n.length;e++)aa(t,$u(n[e])||tl())}function An(n,t){return new ga(n,t,!1,!1)}function Ea(n,t){return new ga(n,t,!0,!1)}function ll(n,t){return new ga(n,t,!1,!0)}function bn(n,t,e){fe(n,Zt(n),t,e)}var ET=ll(function(n,t,e,i,r){return n.h===2&&(n=xo(n,fs([void 0,void 0],i),r),Bi(i=Zt(t)),(r=ki(t,i,e))instanceof ri?2&r.N?((r=r.Y()).push(n),fe(t,i,e,r)):r.Oa(n):Array.isArray(r)?(2&we(r)&&fe(t,i,e,r=rg(r)),r.push(n)):fe(t,i,e,[n]),!0)},function(n,t,e,i,r){if(t instanceof ri)t.forEach((s,a)=>{su(n,e,fs([a,s],i),r)});else if(Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&su(n,e,fs(a,i),r)}});function pg(n,t,e){t:if(t!=null){if(sl(t)){if(typeof t=="string"){t=mf(t);break t}if(typeof t=="number"){t=pf(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&Zp(t),t!=null&&(si(n,e,0),typeof t=="number"?(n=n.g,ls(t),Dc(n,ue,Oe)):(e=Zp(t),Dc(n.g,e.h,e.g))))}function mg(n,t,e){(t=xa(t))!=null&&t!=null&&(si(n,e,0),il(n.g,t))}function _g(n,t,e){(t=$0(t))!=null&&(si(n,e,0),n.g.g.push(t?1:0))}function gg(n,t,e){(t=us(t))!=null&&rl(n,e,P0(t))}function hl(n,t,e,i,r){su(n,e,t instanceof ut?t.s:Array.isArray(t)?fs(t,i):void 0,r)}function vg(n,t,e){(t=t==null||typeof t=="string"||vo(t)||t instanceof tr?t:void 0)!=null&&rl(n,e,Ju(t).buffer)}function xg(n,t,e){return(n.h===5||n.h===2)&&(t=Ma(t,Zt(t),e,2,!1),n.h==2?nl(n,ru,t):t.push(ru(n.g)),!0)}var Be,er=An(function(n,t,e){if(n.h!==1)return!1;var i=n.g;n=iu(i);const r=iu(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,bn(t,e,s==2047?n?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0},function(n,t,e){(t=Br(t))!=null&&(si(n,e,1),n=n.g,(e=z0||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),ue=e.getUint32(0,!0),Oe=e.getUint32(4,!0),ao(n,ue),ao(n,Oe))}),Ve=An(function(n,t,e){return n.h===5&&(bn(t,e,ru(n.g)),!0)},function(n,t,e){(t=Br(t))!=null&&(si(n,e,5),n=n.g,tf(t),ao(n,ue))}),TT=Ea(xg,function(n,t,e){if((t=Sa(Br,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(si(i,r,5),i=i.g,tf(s),ao(i,ue))}}),bf=Ea(xg,function(n,t,e){if((t=Sa(Br,t))!=null&&t.length){si(n,e,2),yo(n.g,4*t.length);for(let i=0;i<t.length;i++)e=n.g,tf(t[i]),ao(e,ue)}}),Ur=An(function(n,t,e){return n.h===0&&(bn(t,e,rf(n.g,ef)),!0)},pg),Th=An(function(n,t,e){return n.h===0&&(bn(t,e,(n=rf(n.g,ef))===0?void 0:n),!0)},pg),AT=An(function(n,t,e){return n.h===0&&(bn(t,e,rf(n.g,nu)),!0)},function(n,t,e){t:if(t!=null){if(sl(t)){if(typeof t=="string"){var i=Math.trunc(Number(t));Number.isSafeInteger(i)&&0<=i?t=String(i):((i=t.indexOf("."))!==-1&&(t=t.substring(0,i)),nm(t)||(el(t),t=Lc(ue,Oe)));break t}if(typeof t=="number"){t=0<=(t=Math.trunc(t))&&Number.isSafeInteger(t)?t:function(r){if(0>r){ls(r);const s=Lc(ue,Oe);return r=Number(s),Number.isSafeInteger(r)?r:s}return nm(String(r))?r:(ls(r),nu(ue,Oe))}(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&Kp(t),t!=null&&(si(n,e,0),typeof t=="number"?(n=n.g,ls(t),Dc(n,ue,Oe)):(e=Kp(t),Dc(n.g,e.h,e.g))))}),Re=An(function(n,t,e){return n.h===0&&(bn(t,e,Pr(n.g)),!0)},mg),ul=Ea(function(n,t,e){return(n.h===0||n.h===2)&&(t=Ma(t,Zt(t),e,2,!1),n.h==2?nl(n,Pr,t):t.push(Pr(n.g)),!0)},function(n,t,e){if((t=Sa(xa,t))!=null&&t.length){e=of(n,e);for(let i=0;i<t.length;i++)il(n.g,t[i]);cf(n,e)}}),ca=An(function(n,t,e){return n.h===0&&(bn(t,e,(n=Pr(n.g))===0?void 0:n),!0)},mg),De=An(function(n,t,e){return n.h===0&&(bn(t,e,sf(n.g)),!0)},_g),Ya=An(function(n,t,e){return n.h===0&&(bn(t,e,(n=sf(n.g))===!1?void 0:n),!0)},_g),sn=Ea(function(n,t,e){return n.h===2&&(Eo(t,e,mT,n=af(n)),!0)},function(n,t,e){if((t=Sa(us,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&rl(i,r,P0(s))}}),Ir=An(function(n,t,e){return n.h===2&&(bn(t,e,(n=af(n))===""?void 0:n),!0)},gg),ee=An(function(n,t,e){return n.h===2&&(bn(t,e,af(n)),!0)},gg),bT=ll(function(n,t,e,i,r){return n.h===2&&(xo(n,Sf(t,i,e,!0),r),!0)},hl),wT=ll(function(n,t,e,i,r){return n.h===2&&(xo(n,Sf(t,i,e),r),!0)},hl);Be=new ga(function(n,t,e,i,r){if(n.h!==2)return!1;i=fs(void 0,i);let s=Zt(t);Bi(s);let a=Ma(t,s,e,3);return s=Zt(t),4&we(a)&&(a=kn(a),Ae(a,-2079&(1|we(a))),fe(t,s,e,a)),a.push(i),xo(n,i,r),!0},function(n,t,e,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)hl(n,t[s],e,i,r)},!0,!0);var ie=ll(function(n,t,e,i,r,s){if(n.h!==2)return!1;let a=Zt(t);return Bi(a),(s=Mf(t,a,s))&&e!==s&&fe(t,a,s),xo(n,t=Sf(t,i,e),r),!0},hl),yg=An(function(n,t,e){return n.h===2&&(bn(t,e,X0(n)),!0)},vg),RT=Ea(function(n,t,e){return(n.h===0||n.h===2)&&(t=Ma(t,Zt(t),e,2,!1),n.h==2?nl(n,Lr,t):t.push(Lr(n.g)),!0)},function(n,t,e){if((t=Sa(sT,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(si(i,r,0),yo(i.g,s))}}),Oi=An(function(n,t,e){return n.h===0&&(bn(t,e,Pr(n.g)),!0)},function(n,t,e){(t=xa(t))!=null&&(t=parseInt(t,10),si(n,e,0),il(n.g,t))}),CT=Ea(function(n,t,e){return(n.h===0||n.h===2)&&(t=Ma(t,Zt(t),e,2,!1),n.h==2?nl(n,ZE,t):t.push(Pr(n.g)),!0)},function(n,t,e){if((t=Sa(xa,t))!=null&&t.length){e=of(n,e);for(let i=0;i<t.length;i++)il(n.g,t[i]);cf(n,e)}});class PT{constructor(t,e){this.h=t,this.g=e,this.l=Yt,this.m=vt,this.defaultValue=void 0}}function pi(n,t){return new PT(n,t)}function kr(n,t){return(e,i)=>{if(tc.length){const s=tc.pop();s.o(i),vh(s.g,e,i),e=s}else e=new class{constructor(s,a){if(jp.length){const o=jp.pop();vh(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,vh(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ia:s=!1}={}){this.ia=s}}(e,i);try{const s=new n,a=s.s;Ef(t)(a,e);var r=s}finally{e.g.clear(),e.m=-1,e.h=-1,100>tc.length&&tc.push(e)}return r}}function fl(n){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};dg(this.s,t,cl(n)),aa(t,t.g.end());const e=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];e.set(o,s),s+=o.length}return t.l=[e],e}}var um=class extends ut{constructor(n){super(n)}},Mg=[0,Ir,An(function(n,t,e){return n.h===2&&(bn(t,e,(n=X0(n))===_s()?void 0:n),!0)},function(n,t,e){if(t!=null){if(t instanceof ut){const i=t.Qa;return void(i&&(t=i(t),t!=null&&rl(n,e,Ju(t).buffer)))}if(Array.isArray(t))return}vg(n,t,e)})],LT=[0,ee],Sg=[0,Re,Oi,De,-1,ul,Oi,-1],DT=[0,De,-1],Eg=class extends ut{constructor(){super()}};Eg.B=[6];var Tg=[0,De,ee,De,Oi,-1,CT,ee,-1,DT,Oi],Ag=[0,ee,-2],fm=class extends ut{constructor(){super()}},bg=[0],wg=[0,Re,De,-4],zn=class extends ut{constructor(n){super(n,2)}},ge={},UT=[-2,ge,De];ge[336783863]=[0,ee,De,-1,Re,[0,[1,2,3,4,5,6],ie,bg,ie,Tg,ie,Ag,ie,wg,ie,Sg,ie,[0,ee]],LT,De,[0,[1,3],[2,4],ie,[0,ul],-1,ie,[0,sn],-1,Be,[0,ee,-1]],ee];var IT=[0,Ir,Ya],Rg=[0,Th,-1,Ya,-3,Th,ul,Ir,ca,Th,-1,Ya,ca,Ya,-2,Ir],To=[-1,{}],Cg=[0,ee,1,To],Pg=[0,ee,sn,To];function Gn(n,t){lu(n,2,ya(t),"")}function oe(n,t){Eo(n.s,3,So,t)}function Gt(n,t){Eo(n.s,4,So,t)}var an=class extends ut{constructor(n){super(n,500)}o(n){return vt(this,0,7,n)}};an.B=[3,4,5,6,8,13,17,1005];var NT=[-500,Ir,-1,sn,-3,UT,Be,Mg,ca,-1,Cg,Pg,Be,IT,Ir,Rg,ca,sn,987,sn],FT=[0,Ir,-1,To],OT=[-500,ee,-1,[-1,{}],998,ee],BT=[-500,ee,sn,-1,[-2,{},De],997,sn,-1],kT=[-500,ee,sn,To,998,sn];function Vn(n,t){zc(n,1,an,t)}function de(n,t){Eo(n.s,10,So,t)}function Kt(n,t){Eo(n.s,15,So,t)}var pn=class extends ut{constructor(n){super(n,500)}o(n){return vt(this,0,1001,n)}};pn.B=[1,6,7,9,10,15,16,17,14,1002];var Lg=[-500,Be,NT,4,Be,OT,Be,BT,ca,Be,kT,sn,ca,Cg,Pg,Be,FT,sn,-2,Rg,Ir,-1,Ya,979,To,Be,Mg],zT=kr(pn,Lg);pn.prototype.g=fl(Lg);var GT=[0,Be,[0,Re,-2]],VT=class extends ut{constructor(n){super(n)}},HT=[0,Re,Ve,ee,-1],wf=class extends ut{constructor(n){super(n)}g(){return rr(this,VT,1)}};wf.B=[1];var Dg=[0,Be,HT],dl=kr(wf,Dg),WT=[0,Re,Ve],XT=[0,Re,-1,GT],qT=class extends ut{constructor(n){super(n)}},YT=[0,Re,-3],jT=[0,Ve,-3],KT=class extends ut{constructor(n){super(n)}},$T=[0,Ve,-1,ee,Ve],uc=class extends ut{constructor(n){super(n)}h(){return Yt(this,qT,2)}g(){return rr(this,KT,5)}};uc.B=[5];var ZT=[0,Oi,YT,jT,XT,Be,$T],Ug=class extends ut{constructor(n){super(n)}};Ug.B=[1,2,3,8,9];var Ig=kr(Ug,[0,sn,ul,bf,ZT,ee,-1,Ur,Be,WT,sn,Ur]),Ng=class extends ut{constructor(n){super(n)}},JT=[0,Ve,-4],Fg=class extends ut{constructor(n){super(n)}};Fg.B=[1];var Ks=kr(Fg,[0,Be,JT]),Og=class extends ut{constructor(n){super(n)}},QT=[0,Ve,-4],Bg=class extends ut{constructor(n){super(n)}};Bg.B=[1];var Ao=kr(Bg,[0,Be,QT]),kg=class extends ut{constructor(n){super(n)}};kg.B=[3];var tA=[0,Re,-1,bf,Oi],zg=class extends ut{constructor(){super()}};zg.prototype.g=fl([0,Ve,-4,Ur]);var eA=class extends ut{constructor(n){super(n)}},nA=[0,1,Re,ee,Dg],Gg=class extends ut{constructor(n){super(n)}};Gg.B=[1];var iA=kr(Gg,[0,Be,nA,Ur]),fu=class extends ut{constructor(n){super(n)}};fu.B=[1];var rA=class extends ut{constructor(n){super(n)}qa(){const n=eg(this);return n??_s()}},sA=class extends ut{constructor(n){super(n)}},Vg=[1,2],aA=[0,Vg,ie,[0,bf],ie,[0,yg],Re,ee],Hg=class extends ut{constructor(n){super(n)}};Hg.B=[1];var oA=kr(Hg,[0,Be,aA,Ur]),pl=class extends ut{constructor(n){super(n)}};pl.B=[4,5];var Wg=[0,ee,Re,Ve,sn,-1],dm=class extends ut{constructor(n){super(n)}},cA=[0,De,-1],pm=class extends ut{constructor(n){super(n)}},fc=[1,2,3,4,5],Gc=class extends ut{constructor(n){super(n)}g(){return eg(this)!=null}h(){return us(Dr(this,2))!=null}},Xg=[0,yg,ee,[0,Re,Ur,-1],[0,AT,Ur]],ve=class extends ut{constructor(n){super(n)}g(){return $0(Dr(this,2))??!1}},Ue=[0,Xg,De,[0,fc,ie,wg,ie,Tg,ie,Sg,ie,bg,ie,Ag],Oi],ml=class extends ut{constructor(n){super(n)}},Rf=[0,Ue,Ve,-1,Re],lA=pi(502141897,ml);ge[502141897]=Rf;var qg=[0,Xg];ge[512499200]=qg;var Yg=[0,qg];ge[515723506]=Yg;var hA=kr(class extends ut{constructor(n){super(n)}},[0,[0,Oi,-1,TT,RT],tA]),jg=[0,Ue];ge[508981768]=jg;var Kg=class extends ut{constructor(n){super(n)}},Cf=[0,Ue,Ve,jg,De],$g=class extends ut{constructor(n){super(n)}},Zg=[0,Ue,Rf,Cf,Ve,Yg];ge[508968149]=Cf;var uA=pi(508968150,$g);ge[508968150]=Zg;var Jg=class extends ut{constructor(n){super(n)}},fA=pi(513916220,Jg);ge[513916220]=[0,Ue,Zg,Re];var Bs=class extends ut{constructor(n){super(n)}h(){return Yt(this,pl,2)}g(){ae(this,2)}},Qg=[0,Ue,Wg];ge[478825465]=Qg;var t1=[0,Ue];ge[478825422]=t1;var dA=class extends ut{constructor(n){super(n)}},e1=[0,Ue,t1,Qg,-1],n1=class extends ut{constructor(n){super(n)}},i1=[0,Ue,Ve,Re],Pf=class extends ut{constructor(n){super(n)}},Lf=[0,Ue,Ve],Df=class extends ut{constructor(n){super(n)}},r1=[0,Ue,i1,Lf,Ve],s1=class extends ut{constructor(n){super(n)}},pA=[0,Ue,r1,e1];ge[463370452]=e1,ge[464864288]=i1,ge[474472470]=Lf;var mA=pi(462713202,Df);ge[462713202]=r1;var _A=pi(479097054,s1);ge[479097054]=pA;var gA=class extends ut{constructor(n){super(n)}},vA=[0,Ue],a1=class extends ut{constructor(n){super(n)}},Uf=[0,Ue,Ve,-1,Re];ge[514774813]=Uf;var o1=class extends ut{constructor(n){super(n)}},If=[0,Ue,Ve,De];ge[518928384]=If;var c1=class extends ut{constructor(){super()}};c1.prototype.g=fl([0,Ue,Lf,vA,Rf,Cf,Uf,If]);var l1=class extends ut{constructor(n){super(n)}},xA=pi(456383383,l1);ge[456383383]=[0,Ue,Wg];var h1=class extends ut{constructor(n){super(n)}},yA=pi(476348187,h1);ge[476348187]=[0,Ue,cA];var u1=class extends ut{constructor(n){super(n)}},f1=[0,Oi,-1],du=class extends ut{constructor(n){super(n)}};du.B=[3];var MA=pi(458105876,class extends ut{constructor(n){super(n)}g(){var n=this.s;const t=Zt(n);var e=2&t;return n=function(i,r,s){var a=du;const o=2&r;let c=!1;if(s==null){if(o)return sm();s=[]}else if(s.constructor===ri){if(!(2&s.N)||o)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&we(s)):s=[];if(o){if(!s.length)return sm();c||(c=!0,va(s))}else c&&(c=!1,s=rg(s));return c||(64&we(s)?Uc(s,32):32&r&&hf(s,32)),fe(i,r,2,a=new ri(s,a,aT,void 0),!1),a}(n,t,ki(n,t,2)),n==null||!e&&du&&(n.ta=!0),e=n}});ge[458105876]=[0,f1,ET,[!0,Ur,[0,ee,-1,sn]]];var Nf=class extends ut{constructor(n){super(n)}},d1=pi(458105758,Nf);ge[458105758]=[0,Ue,ee,f1];var Ff=class extends ut{constructor(n){super(n)}};Ff.B=[5,6];var SA=pi(443442058,Ff);ge[443442058]=[0,Ue,ee,Re,Ve,sn,-1];var p1=class extends ut{constructor(n){super(n)}},EA=pi(516587230,p1);function pu(n,t){return t=t?t.clone():new pl,n.displayNamesLocale!==void 0?ae(t,1,ya(n.displayNamesLocale)):n.displayNamesLocale===void 0&&ae(t,1),n.maxResults!==void 0?Fi(t,2,n.maxResults):"maxResults"in n&&ae(t,2),n.scoreThreshold!==void 0?pt(t,3,n.scoreThreshold):"scoreThreshold"in n&&ae(t,3),n.categoryAllowlist!==void 0?kc(t,4,n.categoryAllowlist):"categoryAllowlist"in n&&ae(t,4),n.categoryDenylist!==void 0?kc(t,5,n.categoryDenylist):"categoryDenylist"in n&&ae(t,5),t}function Of(n,t=-1,e=""){return{categories:n.map(i=>({index:fi(ni(i,1),0)??-1,score:Le(i,2)??0,categoryName:Ni(i,3)??"",displayName:Ni(i,4)??""})),headIndex:t,headName:e}}function m1(n){var t=Vs(n,3,Br),e=Vs(n,2,xa),i=Vs(n,1,us),r=Vs(n,9,us);const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:e[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=Yt(n,uc,4)?.h())&&(s.boundingBox={originX:ni(t,1)??0,originY:ni(t,2)??0,width:ni(t,3)??0,height:ni(t,4)??0,angle:0}),Yt(n,uc,4)?.g().length)for(const a of Yt(n,uc,4).g())s.keypoints.push({x:lc(a,1)??0,y:lc(a,2)??0,score:lc(a,4)??0,label:us(Dr(a,3))??""});return s}function _l(n){const t=[];for(const e of rr(n,Og,1))t.push({x:Le(e,1)??0,y:Le(e,2)??0,z:Le(e,3)??0,visibility:Le(e,4)??0});return t}function ja(n){const t=[];for(const e of rr(n,Ng,1))t.push({x:Le(e,1)??0,y:Le(e,2)??0,z:Le(e,3)??0,visibility:Le(e,4)??0});return t}function mm(n){return Array.from(n,t=>127<t?t-256:t)}function _m(n,t){if(n.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${t.length}).`);let e=0,i=0,r=0;for(let s=0;s<n.length;s++)e+=n[s]*t[s],i+=n[s]*n[s],r+=t[s]*t[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(i*r)}let ec;ge[516587230]=[0,Ue,Uf,If,Ve];const TA=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function _1(){if(ec===void 0)try{await WebAssembly.instantiate(TA),ec=!0}catch{ec=!1}return ec}async function Ua(n,t=""){const e=await _1()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${n}_${e}.js`,wasmBinaryPath:`${t}/${n}_${e}.wasm`}}var Qr=class{};function g1(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=n.length&&17<=Number(n[1])))}async function gm(n){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=n.toString(),t.crossOrigin="anonymous",new Promise((e,i)=>{t.addEventListener("load",()=>{e()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}importScripts(n.toString())}function v1(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function _t(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=n.i.stringToNewUTF8(t)),n.i._free(t)}function vm(n,t,e){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(e?n.i._bindTextureToStream(e):n.i._bindTextureToCanvas(),!(e=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=v1(t);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function xm(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=n.i.stringToNewUTF8(t[r]);t=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,t>>2),e(t);for(const r of i)n.i._free(r);n.i._free(t)}function gi(n,t,e){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=e}function dr(n,t,e){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=(r,s,a)=>{s?(e(i,a),i=[]):i.push(r)}}Qr.forVisionTasks=function(n){return Ua("vision",n)},Qr.forTextTasks=function(n){return Ua("text",n)},Qr.forGenAiExperimentalTasks=function(n){return Ua("genai_experimental",n)},Qr.forGenAiTasks=function(n){return Ua("genai",n)},Qr.forAudioTasks=function(n){return Ua("audio",n)},Qr.isSimdSupported=function(){return _1()};async function AA(n,t,e,i){return n=await(async(r,s,a,o,c)=>{if(s&&await gm(s),!self.ModuleFactory||a&&(await gm(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(n,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&r.endsWith(".data")?e.assetBinaryPath.toString():r}),await n.o(i),n}function Ah(n,t){const e=Yt(n.baseOptions,Gc,1)||new Gc;typeof t=="string"?(ae(e,2,ya(t)),ae(e,1)):t instanceof Uint8Array&&(ae(e,1,df(t,!1,!1)),ae(e,2)),vt(n.baseOptions,0,1,e)}function ym(n){try{const t=n.K.length;if(t===1)throw Error(n.K[0].message);if(1<t)throw Error("Encountered multiple errors: "+n.K.map(e=>e.message).join(", "))}finally{n.K=[]}}function lt(n,t){n.J=Math.max(n.J,t)}function gl(n,t){n.C=new an,Gn(n.C,"PassThroughCalculator"),oe(n.C,"free_memory"),Gt(n.C,"free_memory_unused_out"),de(t,"free_memory"),Vn(t,n.C)}function la(n,t){oe(n.C,t),Gt(n.C,t+"_unused_out")}function vl(n){n.g.addBoolToStream(!0,"free_memory",n.J)}var dc=class{constructor(n){this.g=n,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(n,t=!0){if(t){const e=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Yt(this.baseOptions,Gc,1)?.g()||Yt(this.baseOptions,Gc,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,r){let s=Yt(i.baseOptions,pm,3);if(!s){var a=s=new pm,o=new fm;Xa(a,4,fc,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Eg,Xa(r,2,fc,a)):(r=s,a=new fm,Xa(r,4,fc,a))),vt(i.baseOptions,0,3,s)}(this,e),e.modelAssetPath)return fetch(e.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${e.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Ah(this,"/model.dat"),this.m(),this.L()});if(e.modelAssetBuffer instanceof Uint8Array)Ah(this,e.modelAssetBuffer);else if(e.modelAssetBuffer)return async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i}(e.modelAssetBuffer).then(i=>{Ah(this,i),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let n;if(this.g.fa(t=>{n=zT(t)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,t){this.g.attachErrorListener((e,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(n,t),this.C=void 0,ym(this)}finishProcessing(){this.g.finishProcessing(),ym(this)}close(){this.C=void 0,this.g.closeGraph()}};function dn(n,t){if(!n)throw Error(`Unable to obtain required WebGL resource: ${t}`);return n}dc.prototype.close=dc.prototype.close,function(n,t){n=n.split(".");var e,i=go;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(e=n.shift());)n.length||t===void 0?i=i[e]&&i[e]!==Object.prototype[e]?i[e]:i[e]={}:i[e]=t}("TaskRunner",dc);class bA{constructor(t,e,i,r){this.g=t,this.h=e,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Mm(n,t,e){const i=n.g;if(e=dn(i.createShader(e),"Failed to create WebGL shader"),i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(e)}`);return i.attachShader(n.h,e),e}function Sm(n,t){const e=n.g,i=dn(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(i);const r=dn(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(n.K),e.vertexAttribPointer(n.K,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);const s=dn(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(n.J),e.vertexAttribPointer(n.J,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new bA(e,i,r,s)}function Bf(n,t){if(n.g){if(t!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=t}function bo(n,t,e,i){return Bf(n,t),n.h||(n.m(),n.D()),e?(n.v||(n.v=Sm(n,!0)),e=n.v):(n.A||(n.A=Sm(n,!1)),e=n.A),t.useProgram(n.h),e.bind(),n.l(),n=i(),e.g.bindVertexArray(null),n}function Nr(n,t,e){return Bf(n,t),n=dn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),n}function xl(n,t,e){Bf(n,t),n.u||(n.u=dn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,n.u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function kf(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var Ta=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=dn(n.createProgram(),"Failed to create WebGL program"),this.ba=Mm(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=Mm(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.K=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.ba),n.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}},wA=class extends Ta{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){const n=this.g;n.activeTexture(n.TEXTURE1),this.C=Nr(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.j=Nr(this,n,n.NEAREST)}m(){super.m();const n=this.g;this.M=dn(n.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.V=dn(n.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=dn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const n=this.g;n.uniform1i(this.L,0),n.uniform1i(this.M,1),n.uniform1i(this.V,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},RA=class extends Ta{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){const n=this.g;n.activeTexture(n.TEXTURE1),this.j=Nr(this,n),n.activeTexture(n.TEXTURE2),this.C=Nr(this,n)}m(){super.m();const n=this.g;this.L=dn(n.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.M=dn(n.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=dn(n.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const n=this.g;n.uniform1i(this.I,0),n.uniform1i(this.L,1),n.uniform1i(this.M,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function Ji(n,t){switch(t){case 0:return n.g.find(e=>e instanceof Uint8Array);case 1:return n.g.find(e=>e instanceof Float32Array);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function mu(n){var t=Ji(n,1);if(!t){if(t=Ji(n,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(n.width*n.height);const i=ha(n);var e=zf(n);if(xl(e,i,x1(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){e=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,e);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=e[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,t)}n.g.push(t)}return t}function x1(n){let t=Ji(n,2);if(!t){const e=ha(n);t=M1(n);const i=mu(n),r=y1(n);e.texImage2D(e.TEXTURE_2D,0,r,n.width,n.height,0,e.RED,e.FLOAT,i),_u(n)}return t}function ha(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=dn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function y1(n){if(n=ha(n),!nc)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))nc=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");nc=n.R16F}return nc}function zf(n){return n.l||(n.l=new Ta),n.l}function M1(n){const t=ha(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Ji(n,2);return e||(e=Nr(zf(n),t,n.m?t.LINEAR:t.NEAREST),n.g.push(e),n.j=!0),t.bindTexture(t.TEXTURE_2D,e),e}function _u(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var nc,ke=class{constructor(n,t,e,i,r,s,a){this.g=n,this.m=t,this.j=e,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Em===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Ji(this,0)}la(){return!!Ji(this,1)}R(){return!!Ji(this,2)}ka(){return(t=Ji(n=this,0))||(t=mu(n),t=new Uint8Array(t.map(e=>255*e)),n.g.push(t)),t;var n,t}ja(){return mu(this)}O(){return x1(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=ha(this),r=zf(this);i.activeTexture(i.TEXTURE1),e=Nr(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,e);const s=y1(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),xl(r,i,e),bo(r,i,!1,()=>{M1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),_u(this)}),kf(r),_u(this)}}n.push(e)}return new ke(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ha(this).deleteTexture(Ji(this,2)),Em=-1}};ke.prototype.close=ke.prototype.close,ke.prototype.clone=ke.prototype.clone,ke.prototype.getAsWebGLTexture=ke.prototype.O,ke.prototype.getAsFloat32Array=ke.prototype.ja,ke.prototype.getAsUint8Array=ke.prototype.ka,ke.prototype.hasWebGLTexture=ke.prototype.R,ke.prototype.hasFloat32Array=ke.prototype.la,ke.prototype.hasUint8Array=ke.prototype.Ha;var Em=250;const CA={color:"white",lineWidth:4,radius:6};function bh(n){return{...CA,fillColor:(n=n||{}).color,...n}}function Yi(n,t){return n instanceof Function?n(t):n}function Tm(n,t,e){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),n))}function Ia(n){if(!n.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.l}function co(n){if(!n.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.j}function Am(n,t,e){if(t.R())e(t.O());else{const i=t.la()?t.ja():t.ka();n.m=n.m??new Ta;const r=co(n);e((n=new ke([i],t.m,!1,r.canvas,n.m,t.width,t.height)).O()),n.close()}}function bm(n,t,e,i){const r=function(o){return o.g||(o.g=new wA),o.g}(n),s=co(n),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e;bo(r,s,!0,()=>{(function(c,l,h,u){const f=c.g;if(f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,l),f.activeTexture(f.TEXTURE1),f.bindTexture(f.TEXTURE_2D,c.C),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,h),c.I&&function(d,g){if(d!==g)return!1;d=d.entries(),g=g.entries();for(const[m,p]of d){d=m;const M=p;var _=g.next();if(_.done)return!1;const[v,S]=_.value;if(_=S,d!==v||M[0]!==_[0]||M[1]!==_[1]||M[2]!==_[2]||M[3]!==_[3])return!1}return!!g.next().done}(c.I,u))f.activeTexture(f.TEXTURE2),f.bindTexture(f.TEXTURE_2D,c.j);else{c.I=u;const d=Array(1024).fill(0);u.forEach((g,_)=>{if(g.length!==4)throw Error(`Color at index ${_} is not a four-channel value.`);d[4*_]=g[0],d[4*_+1]=g[1],d[4*_+2]=g[2],d[4*_+3]=g[3]}),f.activeTexture(f.TEXTURE2),f.bindTexture(f.TEXTURE_2D,c.j),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,256,1,0,f.RGBA,f.UNSIGNED_BYTE,new Uint8Array(d))}})(r,t,a,i),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4);const o=r.g;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function wm(n,t,e,i){const r=co(n),s=function(c){return c.h||(c.h=new RA),c.h}(n),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;bo(s,r,!0,()=>{var c=s.g;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,s.j),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,s.C),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),r.bindTexture(r.TEXTURE_2D,null),(c=s.g).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var cn=class{constructor(n,t){n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.l=n,this.j=t):this.j=n}Aa(n,t){if(n){var e=Ia(this);t=bh(t),e.save();var i=e.canvas,r=0;for(const s of n)e.fillStyle=Yi(t.fillColor,{index:r,from:s}),e.strokeStyle=Yi(t.color,{index:r,from:s}),e.lineWidth=Yi(t.lineWidth,{index:r,from:s}),(n=new Path2D).arc(s.x*i.width,s.y*i.height,Yi(t.radius,{index:r,from:s}),0,2*Math.PI),e.fill(n),e.stroke(n),++r;e.restore()}}za(n,t,e){if(n&&t){var i=Ia(this);e=bh(e),i.save();var r=i.canvas,s=0;for(const a of t){i.beginPath(),t=n[a.start];const o=n[a.end];t&&o&&(i.strokeStyle=Yi(e.color,{index:s,from:t,to:o}),i.lineWidth=Yi(e.lineWidth,{index:s,from:t,to:o}),i.moveTo(t.x*r.width,t.y*r.height),i.lineTo(o.x*r.width,o.y*r.height)),++s,i.stroke()}i.restore()}}wa(n,t){const e=Ia(this);t=bh(t),e.save(),e.beginPath(),e.lineWidth=Yi(t.lineWidth,{}),e.strokeStyle=Yi(t.color,{}),e.fillStyle=Yi(t.fillColor,{}),e.moveTo(n.originX,n.originY),e.lineTo(n.originX+n.width,n.originY),e.lineTo(n.originX+n.width,n.originY+n.height),e.lineTo(n.originX,n.originY+n.height),e.lineTo(n.originX,n.originY),e.stroke(),e.fill(),e.restore()}xa(n,t,e=[0,0,0,255]){this.l?function(i,r,s,a){const o=co(i);Am(i,r,c=>{bm(i,c,s,a),(c=Ia(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})}(this,n,e,t):bm(this,n.O(),e,t)}ya(n,t,e){this.l?function(i,r,s,a){const o=co(i);Am(i,r,c=>{wm(i,c,s,a),(c=Ia(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})}(this,n,t,e):wm(this,n.O(),t,e)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Ti(n,t){switch(t){case 0:return n.g.find(e=>e instanceof ImageData);case 1:return n.g.find(e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function S1(n){var t=Ti(n,0);if(!t){t=ua(n);const e=yl(n),i=new Uint8Array(n.width*n.height*4);xl(e,t,pc(n)),t.readPixels(0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,i),kf(e),t=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(t)}return t}function pc(n){let t=Ti(n,2);if(!t){const e=ua(n);t=mc(n);const i=Ti(n,1)||S1(n);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),ka(n)}return t}function ua(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=dn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function yl(n){return n.l||(n.l=new Ta),n.l}function mc(n){const t=ua(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Ti(n,2);return e||(e=Nr(yl(n),t),n.g.push(e),n.m=!0),t.bindTexture(t.TEXTURE_2D,e),e}function ka(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function Rm(n){const t=ua(n);return bo(yl(n),t,!0,()=>function(e,i){const r=e.canvas;if(r.width===e.width&&r.height===e.height)return i();const s=r.width,a=r.height;return r.width=e.width,r.height=e.height,e=i(),r.width=s,r.height=a,e}(n,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}cn.prototype.close=cn.prototype.close,cn.prototype.drawConfidenceMask=cn.prototype.ya,cn.prototype.drawCategoryMask=cn.prototype.xa,cn.prototype.drawBoundingBox=cn.prototype.wa,cn.prototype.drawConnectors=cn.prototype.za,cn.prototype.drawLandmarks=cn.prototype.Aa,cn.lerp=function(n,t,e,i,r){return Tm(i*(1-(n-t)/(e-t))+r*(1-(e-n)/(e-t)),i,r)},cn.clamp=Tm;var We=class{constructor(n,t,e,i,r,s,a){this.g=n,this.j=t,this.m=e,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Cm===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!Ti(this,0)}ma(){return!!Ti(this,1)}R(){return!!Ti(this,2)}Ea(){return S1(this)}Da(){var n=Ti(this,1);return n||(pc(this),mc(this),n=Rm(this),ka(this),this.g.push(n),this.j=!0),n}O(){return pc(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=ua(this),r=yl(this);i.activeTexture(i.TEXTURE1),e=Nr(r,i),i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),xl(r,i,e),bo(r,i,!1,()=>{mc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ka(this)}),kf(r),ka(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);pc(this),mc(this),e=Rm(this),ka(this)}n.push(e)}return new We(n,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ti(this,1).close(),this.m&&ua(this).deleteTexture(Ti(this,2)),Cm=-1}};We.prototype.close=We.prototype.close,We.prototype.clone=We.prototype.clone,We.prototype.getAsWebGLTexture=We.prototype.O,We.prototype.getAsImageBitmap=We.prototype.Da,We.prototype.getAsImageData=We.prototype.Ea,We.prototype.hasWebGLTexture=We.prototype.R,We.prototype.hasImageBitmap=We.prototype.ma,We.prototype.hasImageData=We.prototype.Ga;var Cm=250;function mi(...n){return n.map(([t,e])=>({start:t,end:e}))}const PA=function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}}((Pm=class{constructor(n,t){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:g1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const t=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(t),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,t){const e=n.length,i=this.i._malloc(e);this.i.HEAPU8.set(n,i),t?this.i._changeBinaryGraph(e,i):this.i._changeTextGraph(e,i),this.i._free(i)}configureAudio(n,t,e,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),_t(this,i||"input_audio",s=>{_t(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,n,t,e)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}fa(n){gi(this,"__graph_config__",t=>{n(t)}),_t(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=t}addAudioToStream(n,t,e){this.addAudioToStreamWithShape(n,0,0,t,e)}addAudioToStreamWithShape(n,t,e,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),_t(this,i,a=>{this.i._addAudioToInputStream(this.g,t,e,a,r)})}addGpuBufferToStream(n,t,e){_t(this,t,i=>{const[r,s]=vm(this,n,i);this.i._addBoundTextureToStream(i,r,s,e)})}addBoolToStream(n,t,e){_t(this,t,i=>{this.i._addBoolToInputStream(n,i,e)})}addDoubleToStream(n,t,e){_t(this,t,i=>{this.i._addDoubleToInputStream(n,i,e)})}addFloatToStream(n,t,e){_t(this,t,i=>{this.i._addFloatToInputStream(n,i,e)})}addIntToStream(n,t,e){_t(this,t,i=>{this.i._addIntToInputStream(n,i,e)})}addUintToStream(n,t,e){_t(this,t,i=>{this.i._addUintToInputStream(n,i,e)})}addStringToStream(n,t,e){_t(this,t,i=>{_t(this,n,r=>{this.i._addStringToInputStream(r,i,e)})})}addStringRecordToStream(n,t,e){_t(this,t,i=>{xm(this,Object.keys(n),r=>{xm(this,Object.values(n),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,e)})})})}addProtoToStream(n,t,e,i){_t(this,e,r=>{_t(this,t,s=>{const a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(n,t){_t(this,n,e=>{this.i._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,e)})}addDoubleVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,e)})}addFloatVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,e)})}addIntVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,e)})}addUintVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,e)})}addStringVectorToStream(n,t,e){_t(this,t,i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)_t(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,e)})}addBoolToInputSidePacket(n,t){_t(this,t,e=>{this.i._addBoolToInputSidePacket(n,e)})}addDoubleToInputSidePacket(n,t){_t(this,t,e=>{this.i._addDoubleToInputSidePacket(n,e)})}addFloatToInputSidePacket(n,t){_t(this,t,e=>{this.i._addFloatToInputSidePacket(n,e)})}addIntToInputSidePacket(n,t){_t(this,t,e=>{this.i._addIntToInputSidePacket(n,e)})}addUintToInputSidePacket(n,t){_t(this,t,e=>{this.i._addUintToInputSidePacket(n,e)})}addStringToInputSidePacket(n,t){_t(this,t,e=>{_t(this,n,i=>{this.i._addStringToInputSidePacket(i,e)})})}addProtoToInputSidePacket(n,t,e){_t(this,e,i=>{_t(this,t,r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,e)})}addDoubleVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,e)})}addFloatVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,e)})}addIntVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,e)})}addUintVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,e)})}addStringVectorToInputSidePacket(n,t){_t(this,t,e=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)_t(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,e)})}attachBoolListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachBoolListener(e)})}attachBoolVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachBoolVectorListener(e)})}attachIntListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachIntListener(e)})}attachIntVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachIntVectorListener(e)})}attachUintListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachUintListener(e)})}attachUintVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachUintVectorListener(e)})}attachDoubleListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachDoubleListener(e)})}attachDoubleVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachDoubleVectorListener(e)})}attachFloatListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachFloatListener(e)})}attachFloatVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachFloatVectorListener(e)})}attachStringListener(n,t){gi(this,n,t),_t(this,n,e=>{this.i._attachStringListener(e)})}attachStringVectorListener(n,t){dr(this,n,t),_t(this,n,e=>{this.i._attachStringVectorListener(e)})}attachProtoListener(n,t,e){gi(this,n,t),_t(this,n,i=>{this.i._attachProtoListener(i,e||!1)})}attachProtoVectorListener(n,t,e){dr(this,n,t),_t(this,n,i=>{this.i._attachProtoVectorListener(i,e||!1)})}attachAudioListener(n,t,e){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),gi(this,n,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),_t(this,n,i=>{this.i._attachAudioListener(i,e||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Pm{get ha(){return this.i}sa(n,t,e){_t(this,t,i=>{const[r,s]=vm(this,n,i);this.ha._addBoundTextureAsImageToStream(i,r,s,e)})}W(n,t){gi(this,n,t),_t(this,n,e=>{this.ha._attachImageListener(e)})}da(n,t){dr(this,n,t),_t(this,n,e=>{this.ha._attachImageVectorListener(e)})}}));var Pm,ai=class extends PA{};async function Ot(n,t,e){return async function(i,r,s,a){return AA(i,r,s,a)}(n,e.canvas??(g1()?void 0:document.createElement("canvas")),t,e)}function E1(n,t,e,i){if(n.V){const s=new zg;if(e?.regionOfInterest){if(!n.ra)throw Error("This task doesn't support region-of-interest.");var r=e.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");pt(s,1,(r.left+r.right)/2),pt(s,2,(r.top+r.bottom)/2),pt(s,4,r.right-r.left),pt(s,3,r.bottom-r.top)}else pt(s,1,.5),pt(s,2,.5),pt(s,4,1),pt(s,3,1);if(e?.rotationDegrees){if(e?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(pt(s,5,-Math.PI*e.rotationDegrees/180),e?.rotationDegrees%180!=0){const[a,o]=v1(t);e=Le(s,3)*o/a,r=Le(s,4)*a/o,pt(s,4,e),pt(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.V,i)}n.g.sa(t,n.ba,i??performance.now()),n.finishProcessing()}function oi(n,t,e){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");E1(n,t,e,n.J+1)}function zi(n,t,e,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");E1(n,t,e,i)}function fa(n,t,e,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return n=new ke([r],e,!1,n.g.i.canvas,n.M,s,t),i?n.clone():n}var Tn=class extends dc{constructor(n,t,e,i){super(n),this.g=n,this.ba=t,this.V=e,this.ra=i,this.M=new Ta}l(n,t=!0){if("runningMode"in n&&oo(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,t)}close(){this.M.close(),super.close()}};Tn.prototype.close=Tn.prototype.close;var Xn=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect_in",!1),this.j={detections:[]},vt(n=this.h=new ml,0,1,t=new ve),pt(this.h,2,.5),pt(this.h,3,.3)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&pt(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&pt(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,t){return this.j={detections:[]},oi(this,n,t),this.j}G(n,t,e){return this.j={detections:[]},zi(this,n,e,t),this.j}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect_in"),Kt(n,"detections");const t=new zn;di(t,lA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect_in"),Gt(e,"DETECTIONS:detections"),e.o(t),Vn(n,e),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Ig(s),this.j.detections.push(m1(i));lt(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Xn.prototype.detectForVideo=Xn.prototype.G,Xn.prototype.detect=Xn.prototype.F,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=async function(n,t){return Ot(Xn,n,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(n,t){return Ot(Xn,n,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(n,t){return Ot(Xn,n,t)};var Gf=mi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Vf=mi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Hf=mi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),T1=mi([474,475],[475,476],[476,477],[477,474]),Wf=mi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Xf=mi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),A1=mi([469,470],[470,471],[471,472],[472,469]),qf=mi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),b1=[...Gf,...Vf,...Hf,...Wf,...Xf,...qf],w1=mi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Lm(n){n.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ee=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,vt(n=this.h=new $g,0,1,t=new ve),this.H=new Kg,vt(this.h,0,3,this.H),this.j=new ml,vt(this.h,0,2,this.j),Fi(this.j,4,1),pt(this.j,2,.5),pt(this.H,2,.5),pt(this.h,4,.5)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return"numFaces"in n&&Fi(this.j,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&pt(this.j,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&pt(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&pt(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,t){return Lm(this),oi(this,n,t),this.u}G(n,t,e){return Lm(this),zi(this,n,e,t),this.u}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"face_landmarks");const t=new zn;di(t,uA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"NORM_LANDMARKS:face_landmarks"),e.o(t),Vn(n,e),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=Ao(s),this.u.faceLandmarks.push(_l(i));lt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{lt(this,i)}),this.outputFaceBlendshapes&&(Kt(n,"blendshapes"),Gt(e,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=dl(s),this.u.faceBlendshapes.push(Of(i.g()??[]));lt(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{lt(this,i)})),this.outputFacialTransformationMatrixes&&(Kt(n,"face_geometry"),Gt(e,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Yt(hA(s),kg,2))&&this.u.facialTransformationMatrixes.push({rows:fi(ni(i,1),0)??0,columns:fi(ni(i,2),0)??0,data:Vs(i,3,Br).slice()??[]});lt(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{lt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ee.prototype.detectForVideo=Ee.prototype.G,Ee.prototype.detect=Ee.prototype.F,Ee.prototype.setOptions=Ee.prototype.o,Ee.createFromModelPath=function(n,t){return Ot(Ee,n,{baseOptions:{modelAssetPath:t}})},Ee.createFromModelBuffer=function(n,t){return Ot(Ee,n,{baseOptions:{modelAssetBuffer:t}})},Ee.createFromOptions=function(n,t){return Ot(Ee,n,t)},Ee.FACE_LANDMARKS_LIPS=Gf,Ee.FACE_LANDMARKS_LEFT_EYE=Vf,Ee.FACE_LANDMARKS_LEFT_EYEBROW=Hf,Ee.FACE_LANDMARKS_LEFT_IRIS=T1,Ee.FACE_LANDMARKS_RIGHT_EYE=Wf,Ee.FACE_LANDMARKS_RIGHT_EYEBROW=Xf,Ee.FACE_LANDMARKS_RIGHT_IRIS=A1,Ee.FACE_LANDMARKS_FACE_OVAL=qf,Ee.FACE_LANDMARKS_CONTOURS=b1,Ee.FACE_LANDMARKS_TESSELATION=w1;var vi=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!0),vt(n=this.j=new Jg,0,1,t=new ve)}get baseOptions(){return Yt(this.j,ve,1)}set baseOptions(n){vt(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,t,e){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:e,oi(this,n,i??{}),!this.h)return this.u}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"stylized_image");const t=new zn;di(t,fA,this.j);const e=new an;Gn(e,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"STYLIZED_IMAGE:stylized_image"),e.o(t),Vn(n,e),this.g.W("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=a[3*h],l[4*h+1]=a[3*h+1],l[4*h+2]=a[3*h+2],l[4*h+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new We([a],!1,!1,this.g.i.canvas,this.M,o,i),this.u=s=s?o.clone():o,this.h&&this.h(s),lt(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};vi.prototype.stylize=vi.prototype.Pa,vi.prototype.setOptions=vi.prototype.o,vi.createFromModelPath=function(n,t){return Ot(vi,n,{baseOptions:{modelAssetPath:t}})},vi.createFromModelBuffer=function(n,t){return Ot(vi,n,{baseOptions:{modelAssetBuffer:t}})},vi.createFromOptions=function(n,t){return Ot(vi,n,t)};var Yf=mi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Dm(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Um(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function Im(n,t=!0){const e=[];for(const r of n){var i=dl(r);n=[];for(const s of i.g())i=t&&ni(s,1)!=null?fi(ni(s,1),0):-1,n.push({score:Le(s,2)??0,index:i,categoryName:Ni(s,3)??"",displayName:Ni(s,4)??""});e.push(n)}return e}var Pn=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vt(n=this.v=new s1,0,1,t=new ve),this.A=new Df,vt(this.v,0,2,this.A),this.u=new Pf,vt(this.A,0,3,this.u),this.h=new n1,vt(this.A,0,2,this.h),this.j=new dA,vt(this.v,0,3,this.j),pt(this.h,2,.5),pt(this.A,4,.5),pt(this.u,2,.5)}get baseOptions(){return Yt(this.v,ve,1)}set baseOptions(n){vt(this.v,0,1,n)}o(n){if(Fi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&pt(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&pt(this.A,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&pt(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var t=new Bs,e=t,i=pu(n.cannedGesturesClassifierOptions,Yt(this.j,Bs,3)?.h());vt(e,0,2,i),vt(this.j,0,3,t)}else n.cannedGesturesClassifierOptions===void 0&&Yt(this.j,Bs,3)?.g();return n.customGesturesClassifierOptions?(vt(e=t=new Bs,0,2,i=pu(n.customGesturesClassifierOptions,Yt(this.j,Bs,4)?.h())),vt(this.j,0,4,t)):n.customGesturesClassifierOptions===void 0&&Yt(this.j,Bs,4)?.g(),this.l(n)}Ka(n,t){return Dm(this),oi(this,n,t),Um(this)}La(n,t,e){return Dm(this),zi(this,n,e,t),Um(this)}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"hand_gestures"),Kt(n,"hand_landmarks"),Kt(n,"world_hand_landmarks"),Kt(n,"handedness");const t=new zn;di(t,_A,this.v);const e=new an;Gn(e,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"HAND_GESTURES:hand_gestures"),Gt(e,"LANDMARKS:hand_landmarks"),Gt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(e,"HANDEDNESS:handedness"),e.o(t),Vn(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=Ao(s);const a=[];for(const o of rr(i,Og,1))a.push({x:Le(o,1)??0,y:Le(o,2)??0,z:Le(o,3)??0,visibility:Le(o,4)??0});this.landmarks.push(a)}lt(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{lt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Ks(s);const a=[];for(const o of rr(i,Ng,1))a.push({x:Le(o,1)??0,y:Le(o,2)??0,z:Le(o,3)??0,visibility:Le(o,4)??0});this.worldLandmarks.push(a)}lt(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{lt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Im(i,!1)),lt(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{lt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Im(i)),lt(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Nm(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Pn.prototype.recognizeForVideo=Pn.prototype.La,Pn.prototype.recognize=Pn.prototype.Ka,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(n,t){return Ot(Pn,n,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(n,t){return Ot(Pn,n,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(n,t){return Ot(Pn,n,t)},Pn.HAND_CONNECTIONS=Yf;var hn=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vt(n=this.j=new Df,0,1,t=new ve),this.u=new Pf,vt(this.j,0,3,this.u),this.h=new n1,vt(this.j,0,2,this.h),Fi(this.h,3,1),pt(this.h,2,.5),pt(this.u,2,.5),pt(this.j,4,.5)}get baseOptions(){return Yt(this.j,ve,1)}set baseOptions(n){vt(this.j,0,1,n)}o(n){return"numHands"in n&&Fi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&pt(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&pt(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&pt(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,n,t),Nm(this)}G(n,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],zi(this,n,e,t),Nm(this)}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"hand_landmarks"),Kt(n,"world_hand_landmarks"),Kt(n,"handedness");const t=new zn;di(t,mA,this.j);const e=new an;Gn(e,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"LANDMARKS:hand_landmarks"),Gt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(e,"HANDEDNESS:handedness"),e.o(t),Vn(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=Ao(s),this.landmarks.push(_l(i));lt(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{lt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Ks(s),this.worldLandmarks.push(ja(i));lt(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{lt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=dl(c);const l=[];for(const h of i.g())l.push({score:Le(h,2)??0,index:fi(ni(h,1),0)??-1,categoryName:Ni(h,3)??"",displayName:Ni(h,4)??""});o.push(l)}a.call(s,...o),lt(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};hn.prototype.detectForVideo=hn.prototype.G,hn.prototype.detect=hn.prototype.F,hn.prototype.setOptions=hn.prototype.o,hn.createFromModelPath=function(n,t){return Ot(hn,n,{baseOptions:{modelAssetPath:t}})},hn.createFromModelBuffer=function(n,t){return Ot(hn,n,{baseOptions:{modelAssetBuffer:t}})},hn.createFromOptions=function(n,t){return Ot(hn,n,t)},hn.HAND_CONNECTIONS=Yf;var R1=mi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Fm(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Om(n){try{if(!n.I)return n.h;n.I(n.h)}finally{vl(n)}}function ic(n,t){n=Ao(n),t.push(_l(n))}var me=class extends Tn{constructor(n,t){super(new ai(n,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,vt(n=this.A=new c1,0,1,t=new ve),this.u=new Pf,vt(this.A,0,2,this.u),this.aa=new gA,vt(this.A,0,3,this.aa),this.j=new ml,vt(this.A,0,4,this.j),this.H=new Kg,vt(this.A,0,5,this.H),this.v=new a1,vt(this.A,0,6,this.v),this.D=new o1,vt(this.A,0,7,this.D),pt(this.j,2,.5),pt(this.j,3,.3),pt(this.H,2,.5),pt(this.v,2,.5),pt(this.v,3,.3),pt(this.D,2,.5),pt(this.u,2,.5)}get baseOptions(){return Yt(this.A,ve,1)}set baseOptions(n){vt(this.A,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&pt(this.j,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&pt(this.j,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&pt(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&pt(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&pt(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&pt(this.D,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&pt(this.u,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,t,e){const i=typeof t!="function"?t:{};return this.I=typeof t=="function"?t:e,Fm(this),oi(this,n,i),Om(this)}G(n,t,e,i){const r=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:i,Fm(this),zi(this,n,r,t),Om(this)}m(){var n=new pn;de(n,"input_frames_image"),Kt(n,"pose_landmarks"),Kt(n,"pose_world_landmarks"),Kt(n,"face_landmarks"),Kt(n,"left_hand_landmarks"),Kt(n,"left_hand_world_landmarks"),Kt(n,"right_hand_landmarks"),Kt(n,"right_hand_world_landmarks");const t=new zn,e=new um;lu(e,1,ya("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))ae(r,2,al(s,xf,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof tr||vo(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");lu(r,2,df(s,!1,!1),_s())}}(e,this.A.g());const i=new an;Gn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),zc(i,8,um,e),oe(i,"IMAGE:input_frames_image"),Gt(i,"POSE_LANDMARKS:pose_landmarks"),Gt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Gt(i,"FACE_LANDMARKS:face_landmarks"),Gt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Gt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Gt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Gt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Vn(n,i),gl(this,n),this.g.attachProtoListener("pose_landmarks",(r,s)=>{ic(r,this.h.poseLandmarks),lt(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{lt(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=Ks(r),a.push(ja(r)),lt(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{lt(this,r)}),this.outputPoseSegmentationMasks&&(Gt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),la(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[fa(this,r,!0,!this.I)],lt(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],lt(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{ic(r,this.h.faceLandmarks),lt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{lt(this,r)}),this.outputFaceBlendshapes&&(Kt(n,"extra_blendshapes"),Gt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=dl(r),a.push(Of(r.g()??[]))),lt(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{lt(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{ic(r,this.h.leftHandLandmarks),lt(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{lt(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Ks(r),a.push(ja(r)),lt(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{lt(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{ic(r,this.h.rightHandLandmarks),lt(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{lt(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Ks(r),a.push(ja(r)),lt(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{lt(this,r)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};me.prototype.detectForVideo=me.prototype.G,me.prototype.detect=me.prototype.F,me.prototype.setOptions=me.prototype.o,me.createFromModelPath=function(n,t){return Ot(me,n,{baseOptions:{modelAssetPath:t}})},me.createFromModelBuffer=function(n,t){return Ot(me,n,{baseOptions:{modelAssetBuffer:t}})},me.createFromOptions=function(n,t){return Ot(me,n,t)},me.HAND_CONNECTIONS=Yf,me.POSE_CONNECTIONS=R1,me.FACE_LANDMARKS_LIPS=Gf,me.FACE_LANDMARKS_LEFT_EYE=Vf,me.FACE_LANDMARKS_LEFT_EYEBROW=Hf,me.FACE_LANDMARKS_LEFT_IRIS=T1,me.FACE_LANDMARKS_RIGHT_EYE=Wf,me.FACE_LANDMARKS_RIGHT_EYEBROW=Xf,me.FACE_LANDMARKS_RIGHT_IRIS=A1,me.FACE_LANDMARKS_FACE_OVAL=qf,me.FACE_LANDMARKS_CONTOURS=b1,me.FACE_LANDMARKS_TESSELATION=w1;var qn=class extends Tn{constructor(n,t){super(new ai(n,t),"input_image","norm_rect",!0),this.j={classifications:[]},vt(n=this.h=new l1,0,1,t=new ve)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return vt(this.h,0,2,pu(n,Yt(this.h,pl,2))),this.l(n)}ua(n,t){return this.j={classifications:[]},oi(this,n,t),this.j}va(n,t,e){return this.j={classifications:[]},zi(this,n,e,t),this.j}m(){var n=new pn;de(n,"input_image"),de(n,"norm_rect"),Kt(n,"classifications");const t=new zn;di(t,xA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),oe(e,"IMAGE:input_image"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"CLASSIFICATIONS:classifications"),e.o(t),Vn(n,e),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:rr(s,eA,1).map(o=>Of(Yt(o,wf,4)?.g()??[],fi(ni(o,2),0),Ni(o,3)))};return Fc(Dr(s,2))!=null&&(a.timestampMs=fi(Fc(Dr(s,2)),0)),a}(iA(i)),lt(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};qn.prototype.classifyForVideo=qn.prototype.va,qn.prototype.classify=qn.prototype.ua,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=function(n,t){return Ot(qn,n,{baseOptions:{modelAssetPath:t}})},qn.createFromModelBuffer=function(n,t){return Ot(qn,n,{baseOptions:{modelAssetBuffer:t}})},qn.createFromOptions=function(n,t){return Ot(qn,n,t)};var Ln=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!0),this.h=new h1,this.embeddings={embeddings:[]},vt(n=this.h,0,1,t=new ve)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){var t=this.h,e=Yt(this.h,dm,2);return e=e?e.clone():new dm,n.l2Normalize!==void 0?oo(e,1,n.l2Normalize):"l2Normalize"in n&&ae(e,1),n.quantize!==void 0?oo(e,2,n.quantize):"quantize"in n&&ae(e,2),vt(t,0,2,e),this.l(n)}Ba(n,t){return oi(this,n,t),this.embeddings}Ca(n,t,e){return zi(this,n,e,t),this.embeddings}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"embeddings_out");const t=new zn;di(t,yA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"EMBEDDINGS:embeddings_out"),e.o(t),Vn(n,e),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=oA(i),this.embeddings=function(s){return{embeddings:rr(s,sA,1).map(a=>{const o={headIndex:fi(ni(a,3),0)??-1,headName:Ni(a,4)??""};if(sg(a,fu,Sh(a,1))!==void 0)a=Vs(a=Yt(a,fu,Sh(a,1)),1,Br),o.floatEmbedding=a.slice();else{const c=new Uint8Array(0);o.quantizedEmbedding=Yt(a,rA,Sh(a,2))?.qa()?.h()??c}return o}),timestampMs:fi(Fc(Dr(s,2)),0)}}(i),lt(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ln.cosineSimilarity=function(n,t){if(n.floatEmbedding&&t.floatEmbedding)n=_m(n.floatEmbedding,t.floatEmbedding);else{if(!n.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=_m(mm(n.quantizedEmbedding),mm(t.quantizedEmbedding))}return n},Ln.prototype.embedForVideo=Ln.prototype.Ca,Ln.prototype.embed=Ln.prototype.Ba,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(n,t){return Ot(Ln,n,{baseOptions:{modelAssetPath:t}})},Ln.createFromModelBuffer=function(n,t){return Ot(Ln,n,{baseOptions:{modelAssetBuffer:t}})},Ln.createFromOptions=function(n,t){return Ot(Ln,n,t)};var gu=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function Bm(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function km(n){try{const t=new gu(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return t;n.j(t)}finally{vl(n)}}gu.prototype.close=gu.prototype.close;var _n=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Nf,this.v=new u1,vt(this.h,0,3,this.v),vt(n=this.h,0,1,t=new ve)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ae(this.h,2,ya(n.displayNamesLocale)):"displayNamesLocale"in n&&ae(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){(function(n){const t=rr(n.fa(),an,1).filter(e=>Ni(e,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],1<t.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(Yt(t[0],zn,7)?.l()?.g()??new Map).forEach((e,i)=>{n.u[Number(i)]=Ni(e,1)})})(this)}ga(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Bm(this),oi(this,n,i),km(this)}Na(n,t,e,i){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Bm(this),zi(this,n,r,t),km(this)}Fa(){return this.u}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect");const t=new zn;di(t,d1,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),e.o(t),Vn(n,e),gl(this,n),this.outputConfidenceMasks&&(Kt(n,"confidence_masks"),Gt(e,"CONFIDENCE_MASKS:confidence_masks"),la(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>fa(this,s,!0,!this.j)),lt(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],lt(this,i)})),this.outputCategoryMask&&(Kt(n,"category_mask"),Gt(e,"CATEGORY_MASK:category_mask"),la(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=fa(this,i,!1,!this.j),lt(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,lt(this,i)})),Kt(n,"quality_scores"),Gt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,lt(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_n.prototype.getLabels=_n.prototype.Fa,_n.prototype.segmentForVideo=_n.prototype.Na,_n.prototype.segment=_n.prototype.ga,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(n,t){return Ot(_n,n,{baseOptions:{modelAssetPath:t}})},_n.createFromModelBuffer=function(n,t){return Ot(_n,n,{baseOptions:{modelAssetBuffer:t}})},_n.createFromOptions=function(n,t){return Ot(_n,n,t)};var vu=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};vu.prototype.close=vu.prototype.close;var LA=class extends ut{constructor(n){super(n)}},da=[0,Re,-2],DA=[0,er,-3,De],Ml=[0,er,-3,De,er,-1],C1=[0,Ml],UA=[0,C1,da],IA=[0,Ml,da],P1=[0,Ml,Re,-1],NA=[0,P1,da],FA=[0,er,-3,De,da,-1],OA=[0,er,-3,De,Oi],wh=class extends ut{constructor(n){super(n)}},zm=[0,er,-1,De],L1=class extends ut{constructor(){super()}};L1.B=[1];var Gm=class extends ut{constructor(n){super(n)}},xu=[1,2,3,4,5,6,7,8,9,10,14,15],BA=[0,xu,ie,Ml,ie,IA,ie,C1,ie,UA,ie,zm,ie,OA,ie,DA,ie,[0,ee,er,-2,De,Re,De,-1,2,er,da],ie,P1,ie,NA,er,da,ee,ie,FA,ie,[0,Be,zm]],kA=[0,ee,Re,-1,De],yu=class extends ut{constructor(){super()}};yu.B=[1],yu.prototype.g=fl([0,Be,BA,ee,kA]);var xi=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Nf,this.v=new u1,vt(this.h,0,3,this.v),vt(n=this.h,0,1,t=new ve)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ga(n,t,e,i){const r=typeof e!="function"?e:{};this.j=typeof e=="function"?e:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.J+1,i=new yu;const s=new Gm;var a=new LA;if(Fi(a,1,255),vt(s,0,12,a),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var o=new wh;oo(o,3,!0),pt(o,1,t.keypoint.x),pt(o,2,t.keypoint.y),Xa(s,5,xu,o)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new L1,t.scribble))oo(t=new wh,3,!0),pt(t,1,o.x),pt(t,2,o.y),zc(a,1,wh,t);Xa(s,15,xu,a)}zc(i,1,Gm,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",e),oi(this,n,r);t:{try{const l=new vu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{vl(this)}c=void 0}return c}m(){var n=new pn;de(n,"image_in"),de(n,"roi_in"),de(n,"norm_rect_in");const t=new zn;di(t,d1,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),oe(e,"IMAGE:image_in"),oe(e,"ROI:roi_in"),oe(e,"NORM_RECT:norm_rect_in"),e.o(t),Vn(n,e),gl(this,n),this.outputConfidenceMasks&&(Kt(n,"confidence_masks"),Gt(e,"CONFIDENCE_MASKS:confidence_masks"),la(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>fa(this,s,!0,!this.j)),lt(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],lt(this,i)})),this.outputCategoryMask&&(Kt(n,"category_mask"),Gt(e,"CATEGORY_MASK:category_mask"),la(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=fa(this,i,!1,!this.j),lt(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,lt(this,i)})),Kt(n,"quality_scores"),Gt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,lt(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};xi.prototype.segment=xi.prototype.ga,xi.prototype.setOptions=xi.prototype.o,xi.createFromModelPath=function(n,t){return Ot(xi,n,{baseOptions:{modelAssetPath:t}})},xi.createFromModelBuffer=function(n,t){return Ot(xi,n,{baseOptions:{modelAssetBuffer:t}})},xi.createFromOptions=function(n,t){return Ot(xi,n,t)};var Yn=class extends Tn{constructor(n,t){super(new ai(n,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},vt(n=this.h=new Ff,0,1,t=new ve)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ae(this.h,2,ya(n.displayNamesLocale)):"displayNamesLocale"in n&&ae(this.h,2),n.maxResults!==void 0?Fi(this.h,3,n.maxResults):"maxResults"in n&&ae(this.h,3),n.scoreThreshold!==void 0?pt(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&ae(this.h,4),n.categoryAllowlist!==void 0?kc(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&ae(this.h,5),n.categoryDenylist!==void 0?kc(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&ae(this.h,6),this.l(n)}F(n,t){return this.j={detections:[]},oi(this,n,t),this.j}G(n,t,e){return this.j={detections:[]},zi(this,n,e,t),this.j}m(){var n=new pn;de(n,"input_frame_gpu"),de(n,"norm_rect"),Kt(n,"detections");const t=new zn;di(t,SA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.ObjectDetectorGraph"),oe(e,"IMAGE:input_frame_gpu"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"DETECTIONS:detections"),e.o(t),Vn(n,e),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Ig(s),this.j.detections.push(m1(i));lt(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{lt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Yn.prototype.detectForVideo=Yn.prototype.G,Yn.prototype.detect=Yn.prototype.F,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=async function(n,t){return Ot(Yn,n,{baseOptions:{modelAssetPath:t}})},Yn.createFromModelBuffer=function(n,t){return Ot(Yn,n,{baseOptions:{modelAssetBuffer:t}})},Yn.createFromOptions=function(n,t){return Ot(Yn,n,t)};var Mu=class{constructor(n,t,e){this.landmarks=n,this.worldLandmarks=t,this.segmentationMasks=e}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function Vm(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function Hm(n){try{const t=new Mu(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.j)return t;n.j(t)}finally{vl(n)}}Mu.prototype.close=Mu.prototype.close;var Dn=class extends Tn{constructor(n,t){super(new ai(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,vt(n=this.h=new p1,0,1,t=new ve),this.D=new o1,vt(this.h,0,3,this.D),this.v=new a1,vt(this.h,0,2,this.v),Fi(this.v,4,1),pt(this.v,2,.5),pt(this.D,2,.5),pt(this.h,4,.5)}get baseOptions(){return Yt(this.h,ve,1)}set baseOptions(n){vt(this.h,0,1,n)}o(n){return"numPoses"in n&&Fi(this.v,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&pt(this.v,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&pt(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&pt(this.D,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Vm(this),oi(this,n,i),Hm(this)}G(n,t,e,i){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Vm(this),zi(this,n,r,t),Hm(this)}m(){var n=new pn;de(n,"image_in"),de(n,"norm_rect"),Kt(n,"normalized_landmarks"),Kt(n,"world_landmarks"),Kt(n,"segmentation_masks");const t=new zn;di(t,EA,this.h);const e=new an;Gn(e,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),oe(e,"IMAGE:image_in"),oe(e,"NORM_RECT:norm_rect"),Gt(e,"NORM_LANDMARKS:normalized_landmarks"),Gt(e,"WORLD_LANDMARKS:world_landmarks"),e.o(t),Vn(n,e),gl(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=Ao(s),this.landmarks.push(_l(i));lt(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],lt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Ks(s),this.worldLandmarks.push(ja(i));lt(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],lt(this,i)}),this.outputSegmentationMasks&&(Gt(e,"SEGMENTATION_MASK:segmentation_masks"),la(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>fa(this,s,!0,!this.j)),lt(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],lt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Dn.prototype.detectForVideo=Dn.prototype.G,Dn.prototype.detect=Dn.prototype.F,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=function(n,t){return Ot(Dn,n,{baseOptions:{modelAssetPath:t}})},Dn.createFromModelBuffer=function(n,t){return Ot(Dn,n,{baseOptions:{modelAssetBuffer:t}})},Dn.createFromOptions=function(n,t){return Ot(Dn,n,t)},Dn.POSE_CONNECTIONS=R1;const zA="/day-12/models/hand-landmarker.task";var GA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var D1={exports:{}};(function(n,t){(function(e,i){n.exports=i()})(GA,function(){var e=function(){function i(d){return a.appendChild(d.dom),d}function r(d){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===d?"block":"none";s=d}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(d){d.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),c=o,l=0,h=i(new e.Panel("FPS","#0ff","#002")),u=i(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){l++;var d=(performance||Date).now();if(u.update(d-o,200),d>c+1e3&&(h.update(1e3*l/(d-c),100),c=d,l=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){o=this.end()},domElement:a,setMode:r}};return e.Panel=function(i,r,s){var a=1/0,o=0,c=Math.round,l=c(window.devicePixelRatio||1),h=80*l,u=48*l,f=3*l,d=2*l,g=3*l,_=15*l,m=74*l,p=30*l,M=document.createElement("canvas");M.width=h,M.height=u,M.style.cssText="width:80px;height:48px";var v=M.getContext("2d");return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,h,u),v.fillStyle=r,v.fillText(i,f,d),v.fillRect(g,_,m,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g,_,m,p),{dom:M,update:function(S,w){a=Math.min(a,S),o=Math.max(o,S),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,h,_),v.fillStyle=r,v.fillText(c(S)+" "+i+" ("+c(a)+"-"+c(o)+")",f,d),v.drawImage(M,g+l,_,m-l,p,g,_,m-l,p),v.fillRect(g+m-l,_,l,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g+m-l,_,l,c((1-S/w)*p))}}},e})})(D1);var HA=D1.exports;const WA=VA(HA),U1=new WA;U1.showPanel(0);let I1;async function XA(){const n=await Qr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");I1=await hn.createFromOptions(n,{baseOptions:{modelAssetPath:zA,delegate:"GPU"},numHands:2,runningMode:"VIDEO"})}XA();let Li=document.getElementById("webcam"),Wm,Xm=-1,Rh=document.getElementById("liveVideoView");const Su=document.querySelector("#hand-landmarks-canvas"),qA=()=>!!navigator.mediaDevices?.getUserMedia;qA()?(Wm=document.getElementById("startButton"),Wm.addEventListener("click",YA)):console.warn("getUserMedia() is not supported by your browser");async function YA(n){document.getElementById("startScreen").remove();const t={video:!0};navigator.mediaDevices.getUserMedia(t).then(function(e){Li.srcObject=e,Li.style.transform="scaleX(-1)",Li.addEventListener("loadeddata",KA)}).catch(e=>{console.error(e)}),IE()}function jA(){let n=window.innerWidth/window.innerHeight,t=Li.videoWidth/Li.videoHeight,e=0,i=0;n>=t?(e=window.innerHeight,i=window.innerHeight*t):(i=window.innerWidth,e=window.innerWidth/t),Rh.style.height=e+"px",Rh.style.width=i+"px",Rh.style.display="block"}function KA(){Su.setAttribute("width",Li.videoWidth+"px"),Su.setAttribute("height",Li.videoHeight+"px"),jA(),N1()}async function N1(){let n=performance.now();if(Li.currentTime!==Xm){Xm=Li.currentTime;const t=I1.detectForVideo(Li,n);if(t.landmarks){const e=Su.getContext("2d");e.clearRect(0,0,e.canvas.width,e.canvas.height),$A(t.landmarks,e),FE(t.landmarks)}}window.requestAnimationFrame(N1),U1.update()}function $A(n,t){const e=new cn(t);for(const i of n)e.drawConnectors(i,hn.HAND_CONNECTIONS)}
//# sourceMappingURL=index-DRo2LHjU.js.map
