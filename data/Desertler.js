const desertler=[
    {
        id:1,
        name:"Meyvə",
        price:"10 / 15",
    },
    {
        id:2,
        name:"Ləbləbi",
        price:8.00,
    },
    {
        id:3,
        name:"Alma limon",
        price:3.00,
    },
    {
        id:4,
        name:"Badam",
        price:6.00,
    },
    {
        id:5,
        name:"Püstə",
        price:5.00,
    },
    {
        id:6,
        name:"Araxis",
        price:6.00,
    },
]

const desertlerDiv = document.getElementById("desertler");
var desertlerSetData = "";

desertler.map((item)=>{
    desertlerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

desertlerDiv.innerHTML = desertlerSetData;