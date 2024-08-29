const num = document.getElementById('num')
const blurImage = document.getElementById('blurImage')

let load = 0;
let intt = setInterval(blurring, 30);
function blurring(){
    load++;
    if(load >99){
        clearInterval(intt)
    }
    num.innerHTML = load+'%';
    if(load == 100){
        blurImage.style.filter =  "blur(0px)"
        num.style.opacity = 0
        
    }
}
