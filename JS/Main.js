let slideindex = 1;
function setSlide(input,index){
    slideindex=index;
    let show = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.slides-div').children];
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    show.classList.add('active');
}

setInterval(() => {
    slideindex+=1;

    if (slideindex==4){
    slideindex=1;}

    setSlide(`slide${slideindex}` , slideindex)
}, 5000);