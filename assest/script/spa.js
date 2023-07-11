import router from "./router.js";
let wrap=document.querySelector('.wrapper')

wrap.addEventListener('click',(event)=>{
    if(event.target.className.includes('dropdown__link')){
        event.preventDefault();
        urlRoutes(event);
    };
    
})

let urlRoutes=event=>{
    window.history.pushState({},"",event.target.href);
    locationHandler();
}

async function locationHandler(){
    const loc=window.location.pathname;
    const myRout=router[loc] || router[404];
    const myHtmlFile= await fetch(myRout.template).then(res=>res.text());
    document.querySelector('.wrapper').innerHTML=myHtmlFile;
    document.title=myRout.title
}
window.onpopstate= locationHandler;
