function handleFullWidthSizing() {
    var width, height;
    window.onresize = window.onload = function () {
            width = window.innerWidth
            height = window.innerHeight
            if (width < height) {
                    document.getElementById("background").style.width = `100vw`
                    document.getElementById("layer1").style.width = `100vw`
            }
            else {
                    const scrollbarwidth = window.innerWidth - document.body.clientWidth

                    document.getElementById("background").style.width = `calc(100vw - ${scrollbarwidth}px)`
                    document.getElementById("layer1").style.width = `calc(100vw - ${scrollbarwidth}px)`
            }
    }
}
function myfunction(x) {
    x.classList.toggle("change")
}