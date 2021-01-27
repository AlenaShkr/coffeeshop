getData = (promise) => {
  promise.forEach(el => window.console.log(el));
}

async function fetchData () {
    const response = await fetch('src/data.json').then(res => res.json());
    getData(response);
}
window.onload = function load() {
   const itemKindOfCoffee = document.querySelectorAll('coffee-name');
   window.console.log(itemKindOfCoffee);
}