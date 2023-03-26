let search=document.querySelector('.searchContainer');
let searchIcon=document.querySelector('.navSearch');
let cross=document.querySelector('.navCross')
searchIcon.addEventListener("click",function(){
    this.style.display="none"
    search.style.display="block";
    cross.style.display="block";
    cross.addEventListener("click",function(){
        this.style.display="none";
        search.style.display="none";
        searchIcon.style.display="block"
    })
})
let tableData=[
    {
        image:"./assets/B1.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+2.4%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:true,
        date:"-0.7%",
        chart:"./assets/V2.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B3.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+1.2%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B1.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:true,
        date:"+2.4%",
        chart:"./assets/V2.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+2.4%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B3.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:true,
        date:"-0.7%",
        chart:"./assets/V2.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+2.4%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B3.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+2.4%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B1.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:true,
        date:"+2.4%",
        chart:"./assets/V2.png",
        Marketcap:"$320,893,271,955"
    },
    {
        image:"./assets/B2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        color:false,
        date:"+2.4%",
        chart:"./assets/V1.png",
        Marketcap:"$320,893,271,955"
    },
]
let singleData=[
    {
        image:"./assets/Card.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        date:"+2.4%",
    },
    {
        image:"./assets/Card2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        date:"-0.7%",
    },
    {
        image:"./assets/Card3.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        date:"+1.2%",
    },
    {
        image:"./assets/Card.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",
        date:"+2.4%",
    },
    {
        image:"./assets/Card2.png",
        name:"Bitcoin",
        sname:"ETH",
        price:"$3625.24",

        date:"+2.4%",
    },
]

let table=document.querySelector('.table');
tableData.forEach((data)=>{
    let html=`
    <tr>
    <td class="first">
        <img src=${data.image} alt=${data.image}>
        <h3>${data.name}</h2>
            <span>${data.sname}</span>
    </td>
    <td>
    
    ${data.price}
    
    </td>
    <td style=${
        (data.color)?
        "color:red":"color:green"}>${data.date}</td>
    <td><img src=${data.chart} alt=${data.chart}></td>
    <td>${data.Marketcap}</td>
</tr>
    `
    table.innerHTML+=html
})

let investCard=document.querySelector('.investRightCard');
singleData.forEach((data)=>{
    let html=`
    <div class="investSingleCard">
        <div class="singleCardLeft">
            <img src=${data.image} alt="">
                <div class="cardSpan">
                    <h3>${data.name}</h3>
                    <span>${data.sname}</span>
                </div>
        </div>
        <div class="singleCardRight">
            <span>${data.date} <i class="fa fa-arrow-up"></i></span>
        </div>
    </div>
    `
    investCard.innerHTML+=html
})
