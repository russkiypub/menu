const araq =[
    {
        id: 1,
        name:"Organic",
        price:"2 / 12 / 15 / 17 azn"
    },
    {
        id: 2,
        name:"Banketnaya",
        price:"2  / 13 / 17 / 20 azn"
    },
    {
        id: 3,
        name:"Nemiroff",
        price:"3 / 22 / 30 /    azn"
    },
    {
        id: 4,
        name:"Stolichnaya",
        price:"3  / 23 / 23 /   azn"
    },
    {
        id: 5,
        name:"Cardinal",
        price:"2  / 14 / 17 / 20 azn"
    },
]

const araqlarDiv = document.getElementById("araqlar");
var araqlarSetData = "";

araq.map((item)=>{
    araqlarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price}</p>
</div>`
})

araqlarDiv.innerHTML = araqlarSetData;