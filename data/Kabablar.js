const kabablar=[
    {
        id:1,
        name:"Tikə kabab",
        price:7.00,
    },
    {
        id:2,
        name:"Lülə kabab",
        price:6.00,
    },
    {
        id:3,
        name:"Basdırma kabab",
        price:7.00,
    },
    {
        id:4,
        name:"Toyuq kabab",
        price:4.00,
    },
    {
        id:5,
        name:"Ciyər kabab",
        price:3.50,
    },
    {
        id:6,
        name:"Kartof quyruq",
        price:4.00,
    },
    {
        id:7,
        name:"Tərəvəz kababı",
        price:1.00,
    },
    {
        id:8,
        name:"Donuz kabab",
        price:7.00,
    },
    
]

const kabablarDiv = document.getElementById("kabablar");
var kabablarSetData = "";

kabablar.map((item)=>{
    kabablarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

kabablarDiv.innerHTML = kabablarSetData;