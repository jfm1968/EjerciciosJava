// Al hacer click sobre el botón de Guardar salta un alert
document.getElementById("boton1").addEventListener ("click", alarma);

function alarma(){
    alert("Pulsado el boton");
}

// Al quitar el foco del input cambia de color
document.getElementById("texto1").addEventListener ("focusin", cambio_color_foco);

function cambio_color_foco(){
    document.getElementById("texto1").style.backgroundColor = "yellow";
}

document.getElementById("texto1").addEventListener ("focusout", cambio_color_foco2);

function cambio_color_foco2(){
    document.getElementById("texto1").style.backgroundColor = "orange";
}

// Si la letra que pulsemos es vocal lo pintaremos de rojo y de verde si es consonante
document.getElementById("texto2").addEventListener ("keypress", cambio_color_tecla);

function cambio_color_tecla(evento){
    const  letra  =  evento.key;
    if  ( letra  == 'a'  ||  letra  ==  'e'  ||  letra  ==  'i'  ||  letra  ==  'o'  ||  letra  ==  'u' ||
    letra  == 'A'  ||  letra  ==  'E'  ||  letra  ==  'I'  ||  letra  ==  'O'  ||  letra  ==  'U'
    ) {
        document.getElementById("texto2").style.backgroundColor = "orange";}
    else{
        document.getElementById("texto2").style.backgroundColor = "red";
    }
}
