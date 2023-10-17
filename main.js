// console.log("hai")
// alert("ada notifikasi")
// prompt("pinjam seratus")

// var promnet ="shilda cantik"
// console.log(promnet)
// var promnet ="shilda cantik"
// console.log(promnet)
// var promnet ="nothing is posible"
// console.log(promnet)

// let promnet ="coding is boring"
// console.log(promnet)
// let promnet ="coding is boring"
// console.log(promnet)

// const promnet ="coding is not fun"
// console.log(promnet)
// const promnet ="coding is not fun"
// console.log(promnet)

// let totalPoin = prompt("masukkan Poin anda")
//     if(totalPoin > 100) {
//         document.write("selamat");
//     }else{
//         document.write("coba lagi");
//     }

// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1); 
// console.log(x < 10 && y < 1);
// console.log(x ==5||y==5);
// console.log(x==6||y==5); 
// console.log(!(x==y)); 

// document.write(x < 10 && y > 1);
// document.write("<br>");
// document.write(x < 10 && y < 1);
// document.write("<br>");
// document.write(x ==5||y==5);
// document.write("<br>");
// document.write(x==6||y==5);
// document.write("<br>");
// document.write(!(x==5));

let p = document.querySelector("P");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function () {
    let isi = input.value;
    console.log(isi);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(isi));

    let deleteButton = document.createElement("button");
    deleteButton.style.marginLeft = "200px";
    deleteButton.textContent = "X";
    label.appendChild(deleteButton);

    p.appendChild(label);
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createElement("br"));

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through'; 
        } else {
            label.style.textDecoration = 'none'; 
        }
    });

    deleteButton.addEventListener('click', function () {
        p.removeChild(label);
    });

    input.value = "";

});












