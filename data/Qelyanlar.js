 const qelyanlar=[
    {
        id:1,
        name:"Qəlyan sadə",
        price:15.00,
    },
    {
        id:2,
        name:"Qəlyan alma",
        price:20.00,
    },
    {
        id:3,
        name:"Qəlyan qreyfrut",
        price:25.00,
    },
    {
        id:4,
        name:"Qəlyan ananas",
        price:30.00,
    },

]

const qelyanlarDiv = document.getElementById("qelyanlar");
var qelyanlarSetData = "";

qelyanlar.map((item)=>{
    qelyanlarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

qelyanlarDiv.innerHTML = qelyanlarSetData;