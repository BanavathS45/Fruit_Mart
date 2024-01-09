const grocery = [{
        id: 1,
        itemImg: "./Assets/Images/orange.png",
        brand: "Fresho",
        furitNmae: "Oranage",
        qty: 1,
        price: 200
    },
    {
        id: 2,
        itemImg: "./Assets/Images/apple.png",
        brand: "Fresho",
        furitNmae: "Apple",
        qty: 1,
        price: 250
    },
    {
        id: 3,
        itemImg: "./Assets/Images/pomegranate.webp",
        brand: "Fresho",
        furitNmae: "Pomegranate",
        qty: 1,
        price: 180
    },
    {
        id: 4,
        itemImg: "./Assets/Images/green-grapes.png",
        brand: "Fresho",
        furitNmae: "Green-Grapes",
        qty: 1,
        price: 70
    }, {
        id: 5,
        itemImg: "./Assets/Images/black-grapes.png",
        brand: "Fresho",
        furitNmae: "Black-Grapes",
        qty: 1,
        price: 80
    },
    {
        id: 6,
        itemImg: "./Assets/Images/Guava-fruit.png",
        brand: "Fresho",
        furitNmae: "Guava",
        qty: 1,
        price: 170
    },
    {
        id: 7,
        itemImg: "./Assets/Images/strawberry.jpeg",
        brand: "Fresho",
        furitNmae: "Strawberry",
        qty: 1,
        price: 120
    },
    {
        id: 8,
        itemImg: "./Assets/Images/lichi.png",
        brand: "Fresho",
        furitNmae: "Lichi",
        qty: 1,
        price: 100
    },
    {
        id: 9,
        itemImg: "./Assets/Images/dragon-fruit1.png",
        brand: "Fresho",
        furitNmae: "Dragon-Fruit",
        qty: 1,
        price: 120
    },
    {
        id: 10,
        itemImg: "./Assets/Images/Papaya.png",
        brand: "Fresho",
        furitNmae: "Papaya",
        qty: 1,
        price: 50
    },
    {
        id: 11,
        itemImg: "./Assets/Images/png/ango.png",
        brand: "Fresho",
        furitNmae: "Mango",
        qty: 1,
        price: 50
    },
    {
        id: 12,
        itemImg: "./Assets/Images/banana.png",
        brand: "Fresho",
        furitNmae: " banana Dazon",
        qty: 1,
        price: 50
    },
    {
        id: 12,
        itemImg: "./Assets/Images/blackberries.png",
        brand: "Fresho",
        furitNmae: "blackberries",
        qty: 1,
        price: 180
    },
    {
        id: 12,
        itemImg: "./Assets/Images/cranberry.png",
        brand: "Fresho",
        furitNmae: "Cranberry",
        qty: 1,
        price: 210
    }

]
console.table(grocery);
const emptyarray = [];
if (emptyarray == "") {
    document.getElementById("empty").innerHTML = "your card is empty";
}




function fun(x) {

    let chk = 0;
    for (let j = 0; j < emptyarray.length; j++) {
        if (emptyarray[j].furitNmae == grocery[x].furitNmae) {
            emptyarray[j].qty++;
            chk = 1;
        }

    }
    if (chk == 0) {
        emptyarray.push(grocery[x]);
        emptyarray[emptyarray.length - 1].qty = 1;

    }
    console.log(emptyarray);
    localStorage.setItem("emptyarray", JSON.stringify(emptyarray))
    swal("Item add to Cart");

    document.getElementById("count").innerHTML = emptyarray.length;
    if (emptyarray.length == -1) {
        document.querySelector(".total").style.display = "none";

    } else {
        document.querySelector(".total").style.display = "block";

    }
    recart()
}
const itemcard = document.querySelector("#fruitsCard");
i = 0;
grocery.map(items => {
    console.table(items);
    // const postEle = document.createElement("div");
    // postEle.classList.add("fCard")
    itemcard.innerHTML += `
        <div class="fCard">
            <p class="offcard">get off</p>
            <img class="furitsImg" src="${items.itemImg}" alt="${items.furitNmae}">
            <div class="details">
                <img src="/Assets/Images/veg.webp" alt="veg_log" title="Vegtrain">
                <p>${items.brand}</p>
                <h5><a href="">${items.furitNmae}</a></h5>
                <div class="rate">
                    <h5>${items.qty}kg - Rs ${items.price}.00</h5>
                </div>
            </div>

            <div class="add">
                <p>Qty</p>
                <input type="number" value="1" >
                <a href="#" id="alladdbtn" onclick = "fun(${i})"><button type="button" class="normal" >Add<i class="fa fa-shopping-basket" aria-hidden="true"></i>
                </button><a/>
                
            </div>
            </div>

    `

    i++;
   
    // itemcard.appendChild(postEle)
});

const  fCard = document.querySelectorAll(".fCard");
console.log(fCard);
function serc() {
     document.querySelector("#ser") 
    for (let i = 0; i < grocery.length; i++) {
        const element = grocery[i].furitNmae ;
         console.log(element)
     
        if (fCard.innerHTML.indexOf(serach1) > -1) {
            element.style.display = ""
        } else {
            element.style.display = "none"

        }
    }
    let value = serach1.value.toLowerCase();
    htg = grocery.filter(se => se.furitNmae.includes(value))
}
// console.log(grocery[i]);      




// }


// const alladdbtn = document.querySelector("#alladdbtn");
// alladdbtn.style.display = "block"
  
function recart() {
    if (localStorage.getItem("emptyarray") != null) {
        emptyarray1 = JSON.parse(localStorage.getItem("emptyarray"))
    }
    const readdcart = document.querySelector("#re-addcart");
    readdcart.innerHTML = "";
    emptyarray1.map((citems, index) => {
        console.log(citems);
        // console.log(index);
        readdcart.innerHTML += `
        <div class="aCard">
        <img class="cartImg" src="${citems.itemImg}" alt="orange">
        <div class="details">
            <img src="/Assets/Images/veg.webp" alt="veg_log" title="Vegtrain">
            <p>${citems.brand}</p>
            <h5><a href="">${citems.furitNmae}
                
            </a></h5>
            <div class="crate">
                <h5>${citems.qty} * ${citems.price}</h5>
            </div>
        </div>
        <div class="count1">
        <i class="fa fa-minus" aria-hidden="true" onclick="minusdec(${index})"></i>
        <div class="num">${citems.qty}</div>
        <i class="fa fa-plus" aria-hidden="true" onclick="plusinc(${index} )"></i>
       
    </div>
        <div class="subamout">
            <p>Rs.${citems.price * citems.qty}</p>
        </div>

        <div class="del">
            <button type="button" class="normal" onclick = "del(${index})"><p style="color:white">Delete</p><i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
        
    </div>
    
    `
    

    })
   
    const free = 100
    const totalamount = emptyarray.reduce((total, emptyarray) => total += emptyarray.qty * emptyarray.price, 0);
    const shipping = free === "free" ? "free" : free
    document.querySelector(".subtotal").innerHTML = `Sub Total is   :   ${totalamount}.00`;
    document.querySelector(".deltype").innerHTML = `Shipping :    ${shipping}`;
    if (shipping == "free") {
        document.querySelector(".grandtotal").innerHTML = `Grand Total :   ${ totalamount}.00`;
    } else {
        document.querySelector(".grandtotal").innerHTML = `Grand Total :   ${ totalamount + shipping}.00`;
    }


    close()
}

function close() {
    const checkout = document.querySelector(".check");
    checkout.addEventListener("click", () => {
        document.querySelector(".succimg").style.display = "block";

    })
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
        document.querySelector(".succimg").style.display = "none";
        window.open("acc.html")
    })
}



function del(index) {
    emptyarray.splice(index, 1);
    recart()
    swal("Item Delete to Cart");
}

function plusinc(index) {
    emptyarray[index].qty++
    recart()
}

function minusdec(index) {
    if (emptyarray[index].qty > 0) {
        emptyarray[index].qty--
        recart()
    }
}