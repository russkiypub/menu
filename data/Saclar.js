const saclar=[
    {
        id:1,
        name:"Sac çolpa",
        price:20.00,
    },
    {
        id:2,
        name:"Sac quzu",
        price:22.00,
    },
    {
        id:3,
        name:"Sac can əti ",
        price:25.00,
    },
    {
        id:4,
        name:"Sac qarışıq",
        price:28.00,
    },
]
const saclarDiv = document.getElementById("saclar");
var saclarSetData = "";

saclar.map((item)=>{
    saclarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

saclarDiv.innerHTML = saclarSetData;