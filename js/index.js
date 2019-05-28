const ThingsWeDo = [
    {"SNAIL FARMING": "#F4D03F"},
    {"AGRICULTURAL INNOVATION": "#58D68D"},
    {"STORAGE AND LOGISTICS": "ff5851"},
]

let index = 0;

const ThrottleThingsWeDo = () => {
    setInterval(() => {
        const target = document.getElementById("throttling-div");
        const node = document.getElementById("rapidly-changing-text");
        if (index == ThingsWeDo.length) {
            index = 0;
        }
        //Leaving this here incase we need to change the colors or something
        // target.style.backgroundColor = Object.entries(ThingsWeDo[index])[0][1]
        node.innerText = Object.entries(ThingsWeDo[index])[0][0]
        index += 1
    }, 1200)
}

const technologies = [
    "Snail farming",
    "Farm retailing",
    "Stocklife trading",
    "Large scale retail"
]

let i = 0
const ThrottleTechnologies = () => {
    setInterval(() => {
     if (i == technologies.length) { i = 0 }
     const str = document.createElement('div')
     let html =`<p id='languages-used' class='languages-used' >${technologies[i]}</p>` 
     str.setAttribute('id', 'languages-used')
     str.innerHTML = html
     let target = document.getElementsByClassName('main-one-content')[0];
     target.removeChild(document.getElementById('languages-used'));
     target.insertBefore(str, target.childNodes[0]);
    i += 1
    }, 1000)
    
}

ThrottleThingsWeDo() 
ThrottleTechnologies()