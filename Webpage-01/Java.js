function handleFullWidthSizing() {
        var width, height;
        window.onresize = window.onload = function () {
                width = window.innerWidth
                height = window.innerHeight
                if (width < height) {
                        document.getElementById("Background").style.width = `100vw`
                }
                else {
                        const scrollbarwidth = window.innerWidth - document.body.clientWidth

                        document.getElementById("Background").style.width = `calc(100vw - ${scrollbarwidth}px)`
                }
        }
}
function myfunction(x){
        if (document.getElementById("navitems").style.display=="none"){
                console.log("Yes its none")
                x.classList.toggle("change")
                document.getElementById("navitems").style.display="block";
        }
        else{
                document.getElementById("navitems").style.display="none";
                x.classList.toggle("change")
        }
}