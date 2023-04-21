const soyuq_ickiler=[
    {
        id:1,
        name:"Banka coca-cola",
        price:2.50,
    },
    {
        id:2,
        name:"Banka sprite",
        price:2.50,
    },
    {
        id:3,
        name:"Banka fanta",
        price:2.50,
    },
    {
        id:4,
        name:"Sirab qazlı 0.5ml",
        price:2.00,
    },
    {
        id:5,
        name:"Sirab qazsız 0.5ml",
        price:2.00,
    },
    {
        id:6,
        name:"Natakhtari 0.5ml",
        price:2.50,
    },
    {
        id:7,
        name:"Redbull",
        price:5.00,
    },
    {
        id:8,
        name:"Hell",
        price:2.00,
    },
    {
        id:9,
        name:"Bizon",
        price:2.00,
    },
    {
        id:10,
        name:"Coca-cola 1l",
        price:3.00,
    },
    {
        id:11,
        name:"Fanta 1l",
        price:3.00,
    },
    {
        id:12,
        name:"Sprite 1l",
        price:3.00,
    },
    {
        id:13,
        name:"Kompot 1l",
        price:3.00,
    },
    {
        id:16,
        name:"Meyvə şirəsi 1l",
        price:4.00,
    },
    {
        id:17,
        name:"Ayran",
        price:2.00,
    },
    {
        id:17,
        name:"Akroşka",
        price:4.00,
    },
]

const soyuqIckilerDiv = document.getElementById("soyuq-ickiler");
var soyuqIckilerSetData = "";

soyuq_ickiler.map((item)=>{
    soyuqIckilerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

soyuqIckilerDiv.innerHTML = soyuqIckilerSetData;