
async function getData() {
  const response = await fetch('./PRODUCTS.JSON');
    const data = await response.json();
    console.log(data);
    for (const i in data) {
        document.getElementById("container").innerHTML += 
        
    `
    <div class="card" style="width: 18rem;">
    <img src="${data[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${data[i].id}</h5>
    <p class="card-text">${data[i].price}</p>
    <button onclick="StoreP(${data[i].id})" class="btn btn-primary">Add to Cart</button>
    </div>
    </div>`
    }
}

getData();



const StoreP = (item) => {
     localStorage.setItem(item, JSON.stringify(cart));
}


 


