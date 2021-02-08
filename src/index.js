async function getData (coffee) {
    const response = await fetch('src/data.json').then(res => res.json());
    const informationAboutCoffe = await response.find(el => el.name === coffee);
    const copy = Object.assign({}, informationAboutCoffe);
    return copy;
    
}
const colours = {
    'coffee': 'rgb(110, 55, 18)',
    'milk': '#f8f8de',
    'water': '#aad2db',
    'whippedmilk': 'rgb(247, 247, 191)'
};

async function handlerClick(ev) {
    let choicedCoffee = ev.target.textContent.toLowerCase();
    const data = await getData(choicedCoffee);
    const cup = document.body.querySelector('.cup');
    cup.style = 'animation: none;';
    document.body.style.setProperty(`--component-1`, 'whitesmoke');
    document.body.style.setProperty(`--component-2`, 'whitesmoke');
    document.body.style.setProperty(`--component-3`, 'whitesmoke');
    document.body.style.setProperty(`--component-4`, 'whitesmoke');
    document.body.style.setProperty(`--comp-1`, '0%');
    document.body.style.setProperty(`--comp-2`, '0%');
    document.body.style.setProperty(`--comp-3`, '0%');
    document.body.style.setProperty(`--comp-4`, '0%');
    cup.style = 'animation: pour 3s linear forwards;';
    const ingrediants = Object.entries(data).slice(1);
    ingrediants.forEach((el, index) => {
        window.console.log(el[0], el[1]);
        if (colours.hasOwnProperty(el[0])) {
            document.body.style.setProperty(`--component-${index + 1}`, colours[el[0]]);
            document.body.style.setProperty(`--comp-${index + 1}`, el[1])
        }
    })
}
window.onload = function load() {
   const listCoffee = document.querySelector('.kind-coffee');
    listCoffee.addEventListener('click', handlerClick);

}