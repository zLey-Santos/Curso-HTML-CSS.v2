let quebrada = false;

function mudaLampada(tipo) {
    if (!quebrada) {
        document.getElementById("luz").src = "../imagens/" + tipo + ".png";
        if (tipo == 'lampada-quebrada') {
            quebrada = true;
        }
    }
}