// 06 - Modelo HTML e CSS para exercícios posteriores

// Aqui irei avança nas proximas aulas e exercicios com um cenario mais real, aplicando o codigo no hmtl css, js
// Criando Relogio
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    };

    // console.log(criaHoraDosSegundos(10));

    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    };

    document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("zerar")) {
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            relogio.classList.remove("pausado");
            segundos = 0;
        }

        if (el.classList.contains("iniciar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains("pausar")) {
            clearInterval(timer);
            relogio.classList.add("pausado");
        }
    })
}
relogio();









