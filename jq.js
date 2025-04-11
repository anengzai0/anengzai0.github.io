{window._={};let w=(a,b)=>{_[a]=b},t=(a,b,c)=>{Object.defineProperty(_,a,{get:b,set:c,enumerable:!![]})};
w('f',![]);
w('t',!![]);
t('Date',()=>new Date());
t('doc',()=>document);
w('log',function(){console.log(...arguments)});
w('write',a=>_.doc.write(a));
t('body',()=>_.doc.body);
w('date',{Y:()=>_.Date.getFullYear()+'年',Mt:()=>_.Date.getMonth()+1+'月',Dt:()=>_.Date.getDate()+'日',D:()=>'星期'+(a=>a==0?'日':a==1?'一':a==2?'二':a==3?'三':a==4?'四':a==5?'五':'六')(_.Date.getDay()),H:()=>_.Date.getHours(),M:()=>_.Date.getMinutes(),S:()=>_.Date.getSeconds(),s:()=>_.Date.getMilliseconds()});
w('setI',(a,b=0)=>setInterval(a,b));
w('setTO',(a,b=0)=>setTimeout(a,b));
w('id',d=>document.getElementById(d));
w('tag',d=>document.getElementsByTagName(d));
w('class',d=>document.getElementsByClassName(d));
w('ajax',a=>{var x=new XMLHttpRequest();x.open(a.method,a.url,a.async,a.user,a.psw);x.responseType=a.type;x.onload=function(){a.onload(this.responseText,this)};x.onreadystatechange=a.onreadystatechange;x.responseXML=a.responseXML;x.send(a.data)});
w('get',(u,f)=>_.ajax({method:'get',url:u,onload:f}))
w('post',(u,d,f)=>_.ajax({method:'post',url:u,onload:f,data:d}))
w('gj',(u,f)=>_.get(u,(d,e)=>f(JSON.parse(d),e)))
w('urlg',(a=window.location.search)=>{var f,r={},q=a.match(/[?&][^?&]+=[^?&]+/g);q?(()=>{q.forEach(d=>{f=d.substring(1).split('=');r[f[0]]=f[1]})})():'';return r})
w('urls',(a=_.urlg())=>{var d,b='';for(d in a){b+=`${(b==''?'?':'&')+d}=${a[d]}`};return b})}