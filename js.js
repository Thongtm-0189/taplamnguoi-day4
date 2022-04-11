const main_div = document.getElementById("main_div")
for(let i=0;i<2000;i++){
    const sub_div = document.createElement("div")
    sub_div.classList.add("sub")
    main_div.appendChild(sub_div)
}



const subs = document.querySelectorAll(".sub")
subs.forEach(sub => {
    sub.addEventListener('mousemove',()=>{
        const rand = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
        sub.style.background = rand
        sub.style.boxShadow = "0 0 2px "+rand+",0 0 4px "+rand+",0 0 12px "+rand+",0 0 22px "+rand+", 0 0 1px #ffff"
    })

    sub.addEventListener('mouseout',()=>{
        setTimeout(outColor,1300)
        function outColor(){
            sub.style.background = "rgb(30, 30, 30)"
            sub.style.boxShadow = "0 0 0 rgb(30, 30, 30)"
        }
    })
});

