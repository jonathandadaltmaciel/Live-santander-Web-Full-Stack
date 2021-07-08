window.addEventListener("load", () => {


//Tempo em segundos que queremos.
let sec= 180;

const CountDiv= document.getElementById("timer");

const secpass = () =>{
    
    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;

    if(segundosRestantes < 10 ) {
        segundosRestantes = "0" + segundosRestantes;
    }

    if (min < 10 ){
        min= "0" + min;

    }

    // Vai gerar o formato de 02:59
    CountDiv.innerHTML = min + ":" + segundosRestantes;


    // Condição Final
    if(sec > 0 ){
    sec = sec -1;

    }
    else {
    CountDiv.innerHTML= "Acabou!"

}

};

const countDown = setInterval (() => secpass(), 1000);

});