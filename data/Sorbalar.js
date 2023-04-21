const sorbalar=[
    {
        id:1,
        name:"Mərci",
        price:3.00,
    },
    {
        id:2,
        name:"Toyuq",
        price:3.50,
    },
    {
        id:3,
        name:"Düşbərə",
        price:3.50,
    },
    {
        id:4,
        name:"Xarço",
        price:4.00,
    },
    {
        id:5,
        name:"Borş",
        price:4.00,
    },
]

const sorbalarDiv = document.getElementById("sorbalar");
var sorbalarSetData = "";

sorbalar.map((item)=>{
    sorbalarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

sorbalarDiv.innerHTML = sorbalarSetData;