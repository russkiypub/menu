const ana_yemekler=[
    {
        id:1,
        name:"Quzu dili qaymaqlı",
        price:9.00,
    },
    {
        id:2,
        name:"Quzu maçası şirəli",
        price:8.00,
    },
    {
        id:3,
        name:"Quzu qovurma",
        price:8.00,
    },
    {
        id:4,
        name:"Nar qovurma",
        price:9.00,
    },
    {
        id:5,
        name:"Cızbız",
        price:7.00,
    },
    {
        id:6,
        name:"Can əti nar qovurma",
        price:10.00,
    },
    {
        id:7,
        name:"Tuşonka",
        price:8.00,
    },
    {
        id:8,
        name:"Beef Stroganoff",
        price:10.00,
    },
    {
        id:9,
        name:"Faxitos",
        price:10.00,
    },
    {
        id:10,
        name:"Tabaka çolpa",
        price:12.00,
    },
    {
        id:11,
        name:"Langet Toyuq",
        price:7.00,
    },
    {
        id:12,
        name:"Çolpa zoğalda",
        price:13.00,
    },
    {
        id:13,
        name:"Piti",
        price:7.00,
    },
    {
        id:14,
        name:"Pelmeni Rus",
        price:5.00,
    },
    {
        id:15,
        name:"Xəngəl",
        price:0.80,
    },
]


const anaYemeklerDiv = document.getElementById("ana-yemekler");
var anaYemeklerSetData = "";

ana_yemekler.map((item)=>{
    anaYemeklerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

anaYemeklerDiv.innerHTML = anaYemeklerSetData;