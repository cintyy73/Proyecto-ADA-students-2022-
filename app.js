const tarjetas = document.getElementById('tarjetas');
// const tarjetast1 = document.getElementById('tarjetast1');
// const tarjetast2 = document.getElementById('tarjetast2')
// const tarjetast3 = document.getElementById('tarjetast3');
// const tarjetast4 = document.getElementById('tarjetast4');
// const tarjetast5 = document.getElementById('tarjetast5');
const url = "https://www.breakingbadapi.com/api/characters"

fetch(url)
    .then((resp) => resp.json())
    .then((data) => printData(data))
    .catch((error) => console.log(error))


const printData = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].name
        const occupation = arr[i].occupation
        const img = arr[i].img
        const nickname = arr[i].nickname
        const status = arr[i].status
        const temporada = arr[i].appearance
       
        str = str +
             `   <div class="row">
             <div class="col s12 m6">
                 <div class="card">
                     <div class="card-image">
                         <img src="${img} alt="${name}" width="300px" heigth="300px">
                         <span class="card-title">Nickname: ${nickname}</span>
                     </div>
                     <div class="card-content">
                         <p>Name: ${name} </p>
                         <p>Ocupation: ${occupation}</p>
                         <p>Status: ${status} </p>
                         <p>Seasson: ${temporada}</p>
                     </div>
                 </div>
             </div>
         </div>
            `
    }
        tarjetas.innerHTML = str;

    // if(temporada  < 2){
    //     tarjetast1.innerHTML = str
    // }
    // else if(temporada < 3){
    //     tarjetast2.innerTML = str
    // }
    // else if(temporada < 4){
    //     tarjetast3.innerHTML = str
    // }
    // else if(temporada < 5){
    //     tarjetast4.innerHTML = str
    // }
    // else if(temporada < 6){
    //     tarjetast5.innerHTML = str
    // }
    // else {
    //     tarjetas.innerHTML = str
    // }
}
