(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{fileName:"Bangalore.png",id:1},{fileName:"Bloodhound.png",id:2},{fileName:"Caustic.png",id:3},{fileName:"Pikachu.png",id:4},{fileName:"Gibraltar.png",id:5},{fileName:"Lifeline.png",id:6},{fileName:"Mirage.png",id:7},{fileName:"Nomad.png",id:8},{fileName:"Octane.png",id:9},{fileName:"Pathfinder.png",id:10},{fileName:"Wattson.png",id:11},{fileName:"Wraith.png",id:12}]},,,,,,function(e,a,t){e.exports=t.p+"static/media/headerimage.f3e4d32b.png"},,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c),o=(t(16),t(4)),l=t(5),s=t(8),m=t(6),d=t(9);t(17);var u=function(e){return r.a.createElement("div",{className:"navbar sticky-top"},r.a.createElement("h3",{className:"navbar-brand"},"A Memory Game"),r.a.createElement("h3",{className:"navbar-brand"},"Click an image to begin!"),r.a.createElement("h3",{className:"navbar-brand"},"SCORE: ",e.score," | Top Score: ",e.topscore))},g=t(7),p=t.n(g);var h=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:p.a,alt:"Apex",width:"850px",height:"380px"}),r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"mx-auto"},"Click on an image to earn points, but don't click on any more than once!")),r.a.createElement("div",{className:"row space"},r.a.createElement("h3",{className:"mx-auto"},"\u2b07Scroll Down to Begin\u2b07")))},f=t(1);var N=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mx-auto"},f.map(function(a){return r.a.createElement("img",{className:"click-item shake",onClick:e.handleimageclick,key:a.id,src:"/clicky-game/img/"+a.fileName,alt:"Apex-character",id:a.id})})))};var v=function(e){return r.a.createElement("div",{className:"navbar sticky-bottom"},r.a.createElement("h3",{className:"navbar-brand"},"Trevor Fairbank"),r.a.createElement("h3",{className:"navbar-brand"},"APEX LEGENDS + pikachu"))},k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:f,score:0,topscore:0,clickedarray:[]},t.randomOrder=function(){return t.state.images.sort(function(){return Math.random()-.5})},t.handleImageClick=function(e){var a=e.target.id;t.state.clickedarray.indexOf(a)>-1?(t.setState({images:t.randomOrder(),clickedarray:[],score:0}),alert("Sorry, try Again.")):t.setState({images:t.randomOrder(),clickedarray:t.state.clickedarray.concat(a),score:t.state.score+1}),t.state.score>t.state.topscore&&t.setState({topscore:t.state.score}),11===t.state.score&&(alert("YOU WON!!! GREAT JOB!!!! NOW DO IT AGAIN."),t.setState({images:t.randomOrder(),clickedarray:[],score:0}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,{score:this.state.score,topscore:this.state.topscore}),r.a.createElement(h,null),r.a.createElement(N,{handleimageclick:this.handleImageClick}),r.a.createElement(v,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.a34d7925.chunk.js.map