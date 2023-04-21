 const pive_mezeleri=[
    {
        id:1,
        name:"Saçaq rulet",
        price:7.00,
    },
    {
        id:2,
        name:"Saçaq sadə",
        price:2.50,
    },
    {
        id:3,
        name:"Saçaq qızartma",
        price:3.50,
    },
    {
        id:4,
        name:"Püstə",
        price:5.00,
    },
    {
        id:5,
        name:"Noxud",
        price:2.00,
    },
    {
        id:6,
        name:"Suxarı",
        price:2.00,
    },
    {
        id:7,
        name:"Çipsi",
        price:3.00,
    },
    {
        id:8,
        name:"Fimi",
        price:4.50,
    },
    {
        id:9,
        name:"Boğaz hissə verilmiş",
        price:2.50,
    },
    {
        id:10,
        name:"Boğaz qızartma",
        price:3.00,
    },
    {
        id:11,
        name:"Pətənək qızartma",
        price:3.50,
    },
    {
        id:12,
        name:"Düşbərə",
        price:3.00,
    },
    {
        id:13,
        name:"Bildirçin",
        price:3.00,
    },
    {
        id:14,
        name:"Hamsi",
        price:6.50,
    },
    {
        id:15,
        name:"Krevetka dəniz",
        price:12.00,
    },
    {
        id:16,
        name:"Krevetka çay",
        price:10.00,
    },
    {
        id:17,
        name:"Krevetka okean",
        price:12.00,
    },
    {
        id:18,
        name:"Tempura 16/20",
        price:10.00,
    },
    {
        id:19,
        name:"Forel hisə verilmiş",
        price:9.00,
    },
    {
        id:20,
        name:"Dorado hisə verilmiş",
        price:13.00,
    },
    {
        id:21,
        name:"Şamayka",
        price:2.00,
    },
    {
        id:22,
        name:"Grenki pendirli",
        price:4.00,
    },
    {
        id:23,
        name:"Kalmar",
        price:8.50,
    },
    {
        id:24,
        name:"Basdırma",
        price:5.00,
    },
    {
        id:25,
        name:"Göbələk çipsi",
        price:4.00,
    },
    {
        id:26,
        name:"Semiçka",
        price:3.00,
    },
    {
        id:27,
        name:"Fimi çipsi",
        price:5.00,
    },
    {
        id:28,
        name:"Grenki sadə",
        price:2.50,
    },
    {
        id:29,
        name:"Qızardılmış kilkə",
        price:4.00,
    },
    {
        id:30,
        name:"Mini qutab",
        price:3.50,
    },
]

const pive_mezeleriDiv = document.getElementById("pive-mezeleri");
var pive_mezeleriSetData = "";

pive_mezeleri.map((item)=>{
    pive_mezeleriSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

pive_mezeleriDiv.innerHTML = pive_mezeleriSetData;