async function getData (coffee) {
    const response = await fetch('src/data.json').then(res => res.json());
    const informationAboutCoffe = await response.find(el => el.name === coffee);
    const copy = Object.assign({}, informationAboutCoffe);
    return copy;
    
}
const colours = {
    'coffee': 'pink',
    'milk': '#f8f8dd',
    'water': '#aad2db'
};

async function handlerClick(ev) {
    let choicedCoffee = ev.target.textContent.toLowerCase();
    const data = await getData(choicedCoffee);
    const cup = document.body.querySelector('.cup');
    cup.style = 'animation: pour 5s linear forwards;';
    const ingrediants = Object.entries(data).slice(1);
    ingrediants.forEach(el => {
        window.console.log(el[0], el[1]);
        if (colours.hasOwnProperty(el[0])) {
            document.body.style.setProperty(`--first-component`, colours[el[0]])
        }
    })
}
window.onload = function load() {
   const listCoffee = document.querySelector('.kind-coffee');
    listCoffee.addEventListener('click', handlerClick);

}