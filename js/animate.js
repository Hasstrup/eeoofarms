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

const pagesList = {
  index: ['farms-banner.png', 'EEOO FARMS 5.png', 'EEOO FARMS 6.png'],
  products: ['EEOO FARMS 8.png', 'EEOO FARMS BANNER 1.jpg'],
  'about-us': ['EEOO FARMS 4.png', 'EEOO FARMS 7.png'],
  'contact-us': ['EEOO FARMS 3.png', 'EEOO FARMS BANNER png3.png']


}
const rotateImagesForPages = (page) => {
  if (page == "blog") return;

  let index = 1;
  setInterval(() => {
    const list = pagesList[page] || pagesList.index
    const url = `./assets/${list[index]}`
    const parent = document.getElementsByClassName('main-content-container')[0]
    const node = document.getElementsByClassName('main-content-image')[0]
    node.remove()
    const newNode = document.createElement('img')
    newNode.classList.add('main-content-image', 'fade-in')
    newNode.setAttribute('src', url)
    node.setAttribute('src', url)
    parent.appendChild(newNode)
    if(index === list.length - 1) {
      index = 0;
    } else {
      index += 1
    }
  }, 3500)
} 

const extractPath = () => {
  const target = window.location.pathname.split('/').pop()
  return target.split('.')[0]
}

const navigate = (path) => {
  const { href } = window.location
  const __href = href.split('/')
  __href.pop()
  __href.push(`${path}.html`)
  window.location.href = __href.join('/')
}

rotateImagesForPages(extractPath())