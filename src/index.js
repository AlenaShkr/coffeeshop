async function getData (coffee) {
    const response = await fetch('src/data.json').then(res => res.json());
    const informationAboutCoffe = await response.find(el => el.name === coffee);
    const copy = Object.assign({}, informationAboutCoffe);
    return copy;
    
}
async function handlerClick(ev) {
    let choicedCoffee = ev.target.textContent.toLowerCase();
    const data = await getData(choicedCoffee);
    const { name, coffee, milk } = data;
    window.console.log(name, coffee, milk);
}
window.onload = function load() {
   const listCoffee = document.querySelector('.kind-coffee');
    listCoffee.addEventListener('click', handlerClick);

}