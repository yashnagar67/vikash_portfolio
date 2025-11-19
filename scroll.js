 document.querySelectorAll(".navitems a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault()
        let targetid=e.target.getAttribute("href");
        let section=document.querySelector(targetid);
        if(section){
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        }
    })
})
// console.log(a)
// let targetsection=document.getElementById("aboutme")
// console.log("This  is target sedction", targetsection)
// a.addEventListener("click",function(){
//     targetsection.scrollIntoView({
//         behavior:'smooth',
//         block:'start'
//     })
// })