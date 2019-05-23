var sliderTrigger = document.getElementsByClassName("slider-trigger")
var slider = document.getElementsByClassName('slider-parent')[0];
Array.from(sliderTrigger).forEach((node) => {
 node.addEventListener( "click" , function(el){
    if(slider.classList.contains("active")){
      slider.classList.remove("active");
     }else{
      slider.classList.add("active");
     }
    });
})