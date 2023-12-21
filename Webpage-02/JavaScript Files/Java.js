function myfunction(x) {
    if (document.getElementById("Navigator").style.display == ("flex") && (window.innerWidth < 1000)){
        x.classList.toggle("change")
        document.getElementById("Navigator").style.display = "";
        document.getElementById("line").style.position = "static";
        document.getElementById("line-size-clone").style.display = "none";
    }
    else {
        x.classList.toggle("change")
        document.getElementById("Navigator").style.display = "flex";
        document.getElementById("line").style.position = "fixed";
    }
}
window.onresize = ()=>{
    console.log(window.innerWidth)
}