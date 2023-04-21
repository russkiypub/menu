const sosiskalar=[
    {
        id:1,
        name:"İverya",
        price:5.50,
    },
    {
        id:2,
        name:"Moloçnaya",
        price:5.50,
    },
    {
        id:3,
        name:"Sardelka",
        price:5.00,
    },
    {
        id:4,
        name:"Kolbasa sadə / tomatlı",
        price:"6 / 7",
    },
]

const sosiskalarDiv = document.getElementById("sosiskalar");
var sosiskalarSetData = "";

sosiskalar.map((item)=>{
    sosiskalarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

sosiskalarDiv.innerHTML = sosiskalarSetData;