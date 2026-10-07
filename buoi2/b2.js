const   getDiv = document.getElementById(`container`);
const   getDivv = document.getElementById(`#container`);
const   getButton = document.querySelector(`button`);
//getDiv.innerText =`hello`;
// chen/lay va chinh sua noi dung van ban;
getDiv.innerHTML +=`hello`;
// chen/ lay va chinh sua noi dung HTML
//= là thay thế luôn
//+= là nối tiếp


const arr = [
    {name: `Huong` , class : "CNTT1 K66" },
    {name: `Hoai` , class : "CNTT2 K66" },
    {name: `Nga` , class : "CNTT3 K66" },
    {name: `Diep` , class : "CNTT4 K66" }
]

// arr.forEach(function(arr){
//     getDiv.innerHTML+= 
//     `
//     <div>
//         <h2> ${arr.name}</h2>
//         <p>${arr.class}</p>
//     </div>
//     `
// });


// function taoHTML(value){
//     return(
//         `
//     <div>
//         <h2> ${value.name}</h2>
//         <p>${value.class}</p>
//     </div>
//     `
//     )
// }

const taoHTML = (value) =>{
    return(
        `
    <div>
        <h2> ${value.name}</h2>
        <p>${value.class}</p>
    </div>
    `
    )
}

function HandleClick(){
    arr.forEach((value)=>{
    getDiv.innerHTML += taoHTML(value);
});
}
// arr.forEach((value)=>{
//     getDiv.innerHTML += taoHTML(value);
// });

getButton.addEventListener('click',HandleClick);
