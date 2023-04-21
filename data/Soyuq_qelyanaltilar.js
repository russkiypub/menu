const soyuq_qelyanaltilar=[
    {
        id:0,
        name:"Zeytun",
        price:3.00,
    },
    {
        id:1,
        name:"Pendir assorti",
        price:5.00,
    },
    {
        id:2,
        name:"Turşu assorti",
        price:5.00,
    },
    {
        id:3,
        name:"Mal dili soyutma",
        price:4,
    },
    {
        id:4,
        name:"Tərəvəz buketi",
        price:5.00,
    },
    {
        id:5,
        name:"Zirə salatı",
        price:4.00,
    },
    {
        id:6,
        name:"Çoban salatı",
        price:3.00,
    },
    {
        id:7,
        name:"Sezar salatı toyuq ilə",
        price:7.00,
    },
    {
        id:8,
        name:"Sezar salatı krevetka ilə",
        price:9.00,
    },
    {
        id:9,
        name:"Süzmə",
        price:2.00,
    },
    {
        id:10,
        name:"Limon",
        price:1.00,
    },
    {
        id:11,
        name:"Sous",
        price:0.50,
    },
    {
        id:12,
        name:"Qatıq",
        price:1.00,
    },
    {
        id:13,
        name:"Çörək",
        price:1.00,
    },
    {
        id:14,
        name:"Atom",
        price:4.00,
    },
    
]

const soyuqQelyanAltiDiv = document.getElementById("soyuq-qelyanalti");
var soyuqQelyanAltiSetData = "";

soyuq_qelyanaltilar.map((item)=>{
    soyuqQelyanAltiSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

soyuqQelyanAltiDiv.innerHTML = soyuqQelyanAltiSetData;
