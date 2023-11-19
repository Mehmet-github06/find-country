const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("btn");
const card = document.querySelector(".card");
const list = document.getElementById("list");

const getCountry = async ()=>{
    try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        
    } catch (error) {
        
    }

}