const pive_cellek = [
    {
        id: 1,
        name: "Alivariya (filtrsiz)",
        price: 4.50,
    },
    {
        id: 2,
        name: "Xırdalan",
        price: 2.00,
    },
    {
        id: 3,
        name: "Xırdalan (filtrsiz)",
        price: 2.50,
    },
    {
        id: 4,
        name: "Brevel",
        price: "",
    },
    {
        id: 5,
        name: "Brevel (filtrsiz)",
        price: "",
    },
    {
        id: 6,
        name: "NZS",
        price: 1.50,
    },
]

const piveCellekDiv = document.getElementById("pive-cellek");
var piveCellekSetData = "";

pive_cellek.map((item)=>{
    piveCellekSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p> 
    <p class="food-price">${item.price} azn</p>
</div>`
})

piveCellekDiv.innerHTML = piveCellekSetData;