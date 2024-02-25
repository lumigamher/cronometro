let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;
let funcionando = false;

function iniciar() {
    if (!funcionando) {
        cronometro = setInterval(actualizarCronometro, 1000);
        funcionando = true;
    }
}

function pausar(){
    clearInterval(cronometro);
    funcionando = false;
}

function detener(){
    pausar();
    segundos=0;
    minutos=0;
    horas=0;
    actualizarInterfaz();
}

function actualizarCronometro(){
    segundos++;
    if (segundos == 60){
        segundos = 0;
        minutos++;
        if (minutos == 60){
            minutos = 0;
            horas++;
        }
    }
    actualizarInterfaz();
}

function actualizarInterfaz(){
    document.getElementsByClassName("segundos")[0].innerText = segundos < 10 ? "0" + segundos : segundos;
    document.getElementsByClassName("minutos")[0].innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementsByClassName("horas")[0].innerText = horas < 10 ? "0" + horas : horas;
}

document.getElementsByClassName("play")[0].addEventListener("click", iniciar);
document.getElementsByClassName("pause")[0].addEventListener("click", pausar);
document.getElementsByClassName("stop")[0].addEventListener("click", detener);
