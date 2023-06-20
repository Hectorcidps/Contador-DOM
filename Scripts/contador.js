//Contador
const btn_suma = document.getElementById('btn-suma');
const btn_resta = document.getElementById('btn-resta');
const p = document.getElementById('contador'); 

let contador = 0;

btn_resta.addEventListener('click', async () => {
    await setTimeout(() =>{
        contador--;
       p.textContent = contador;
    }, 0);
})

btn_suma.addEventListener('click', async () => {
    await setTimeout(() => {
        contador++;
        p.textContent = contador;
    }, 0);
});

// Temporizador

let inter;
let tiempo;

    function inicioTiempo() {
      const minutos = parseInt(document.getElementById('minutos').value);

      if (isNaN(minutos) || minutos <= 0) {
        alert("Ingrese un valor válido para los minutos.");
        return;
      }

      const segundos = minutos * 60;

      if (inter != null) {
        clearInterval(inter);
      }

      let correTiempo;
      let temporizador = segundos;
      document.getElementById("minutos").value = minutos;
      document.getElementById("temporizador").innerText = tiempoCorrido(temporizador);

      correTiempo = setInterval(() => {
        temporizador--;
        document.getElementById("temporizador").innerText = tiempoCorrido(temporizador);

        if (temporizador <= 0) {
          clearInterval(correTiempo);
          alert("¡Tiempo Finalizado!");
        }
      }, 1000);
    }
    function tiempoCorrido(tiempo) {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
  
        return minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
      }



