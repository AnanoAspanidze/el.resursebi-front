
let hostname;

if(location.host == "ananoaspanidze.github.io") {
    hostname = `${location.origin}/el.resursebi-front`

} else {
    hostname = location.origin;   
}


window.addEventListener("DOMContentLoaded", function() {                   
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(location.pathname !== "/el.resursebi-front/main-page/landscape.html" || location.pathname !== "/main-page/landscape.html") {
            if(!isMobile()) {
                document.querySelector('body').setAttribute('style', 'display: none')
                location.href = `${hostname}/main-page/landscape.html`
            }
        }
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        if(location.pathname !== "/el.resursebi-front/main-page/portrait.html" || location.pathname !== "/main-page/portrait.html") {
            if(!isMobile()) {
                document.querySelector('body').setAttribute('style', 'display: none')
                location.href = `${hostname}/main-page/portrait.html`
            }
        } 
     }
});



window.addEventListener("orientationchange", function() {                   
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(!isMobile()) {
            document.querySelector('body').setAttribute('style', 'display: none')
            location.href = `${hostname}/main-page/portrait.html`

        }

    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        if(!isMobile()) {
            document.querySelector('body').setAttribute('style', 'display: none')
            location.href = `${hostname}/main-page/landscape.html`
        }
     }
}, true);




function isMobile() {
    let width = screen.width;
    let height = screen.height;

    if(width < 1000 || height < 768){
        return false

    } else {
        return true
    }
};


