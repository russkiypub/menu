const isti_ickiler=[
    {
        id:1,
        name:"Çay bounty mürəbbəsi",
        price:7.00,
    },
    {
        id:2,
        name:"Çay şokolad",
        price:6.00,
    },
    {
        id:3,
        name:"Cappuccino",
        price:2.00,
    },
    {
        id:4,
        name:"Kofe",
        price:2.00,
    },
    
]

const isti_ickilerDiv = document.getElementById("isti-ickiler");
var isti_ickilerSetData = "";

isti_ickiler.map((item)=>{
    isti_ickilerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

isti_ickilerDiv.innerHTML = isti_ickilerSetData;