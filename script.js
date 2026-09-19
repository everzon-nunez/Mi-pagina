// =========================
// TÍTULO
// =========================

let titulo = document.createElement("h1");

document.body.appendChild(titulo);

let texto = "Un pedacito de sol para acortar la distancia 😁😉.";
let i = 0;

function escribir() {

    if (i < texto.length) {

        titulo.textContent += texto[i];

        i++;

        setTimeout(escribir, 100);

    } else {

        escribir2();
    }
}

escribir();


// =========================
// POEMA
// =========================

let entrada = document.createElement("h2");

document.body.appendChild(entrada);

let texto2 =
    "Tengo miedo de verte,\n" +
    "necesidad de verte,\n" +
    "esperanza de verte y\n" +
    "desilusiones de verte.\n\n" +

    "Tengo ganas de hallarte,\n" +
    "preocupación de hallarte,\n" +
    "certidumbre de hallarte,\n" +
    "pobres dudas de hallarte.\n\n" +

    "Tengo urgencia de oírte,\n" +
    "alegría de oírte,\n" +
    "buena suerte de oírte,\n" +
    "y temores de oírte.\n\n" +

    "O sea,\n" +
    "resumiendo,\n" +
    "estoy jodido\n" +
    "y radiante,\n" +
    "quizá más lo primero\n" +
    "que lo segundo\n" +
    "y también\n" +
    "viceversa.";

let j = 0;


// =========================
// 💌 DEDICATORIA + 🖼️ FOTO
// =========================

function mostrarFinal() {

    // 💌 DEDICATORIA

    let dedicatoria = document.createElement("div");

    dedicatoria.classList.add("dedicatoria");

    dedicatoria.innerHTML = `
        <span>Para ti,</span>
        <strong>de Jhon para Liz</strong>
        <span>❤️</span>
    `;

    document.body.appendChild(dedicatoria);


    // 🖼️ FOTO

    let foto = document.createElement("img");

    foto.src = "ramo-girasoles-sobre-fondo-blanco-papel_53876-1135141.avif";

    foto.classList.add("foto-romantica");

    document.body.appendChild(foto);
}


// =========================
// ✍️ ESCRIBIR POEMA
// =========================

function escribir2() {

    if (j < texto2.length) {

        entrada.textContent += texto2[j];

        j++;

        setTimeout(escribir2, 50);

    } else {

        // Esperar un poquito después
        // de terminar el poema

        setTimeout(mostrarFinal, 1000);
    }
}


// =========================
// RESULTADO
// =========================

let resultado = document.createElement("p");

document.body.appendChild(resultado);


// =========================
// ❤️ CORAZONES FLOTANTES
// =========================

function crearCorazon() {

    let corazon = document.createElement("div");

    corazon.textContent = "❤️";

    corazon.classList.add("corazon");

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(corazon);

    setTimeout(function() {

        corazon.remove();

    }, 6000);
}

setInterval(crearCorazon, 500);


// =========================
// ✨ PARTÍCULAS BRILLANTES
// =========================

function crearBrillito() {

    let brillito = document.createElement("div");

    brillito.textContent = "✦";

    brillito.classList.add("brillito");

    // Posición inicial

    brillito.style.left =
        Math.random() * 100 + "vw";

    brillito.style.top =
        Math.random() * 100 + "vh";

    // Tamaño aleatorio

    brillito.style.fontSize =
        (Math.random() * 14 + 8) + "px";

    // Movimiento horizontal aleatorio

    brillito.style.setProperty(
        "--movimientoX",
        (Math.random() * 120 - 60) + "px"
    );

    // Movimiento vertical aleatorio

    brillito.style.setProperty(
        "--movimientoY",
        (Math.random() * 120 - 60) + "px"
    );

    // Duración aleatoria

    brillito.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    document.body.appendChild(brillito);

    setTimeout(function() {

        brillito.remove();

    }, 5500);
}


// Más estrellitas

setInterval(crearBrillito, 250);


// =========================
// 🌼 FLORES EN LAS ESQUINAS
// =========================

let flor1 = document.createElement("div");

flor1.textContent = "🌼";

flor1.classList.add(
    "flor-esquina",
    "flor-arriba-izquierda"
);

document.body.appendChild(flor1);


let flor2 = document.createElement("div");

flor2.textContent = "🌼";

flor2.classList.add(
    "flor-esquina",
    "flor-arriba-derecha"
);

document.body.appendChild(flor2);


let flor3 = document.createElement("div");

flor3.textContent = "🌼";

flor3.classList.add(
    "flor-esquina",
    "flor-abajo-izquierda"
);

document.body.appendChild(flor3);


let flor4 = document.createElement("div");

flor4.textContent = "🌼";

flor4.classList.add(
    "flor-esquina",
    "flor-abajo-derecha"
);

document.body.appendChild(flor4);


// =========================
// 🎵 MÚSICA DE FONDO
// =========================

let musica = document.createElement("audio");

musica.src = "WhatsApp Audio 2026-09-19 at 1.25.11 PM.mpeg";

musica.loop = true;

musica.volume = 0.35;

document.body.appendChild(musica);


// =========================
// ▶️ INTENTAR REPRODUCIR
// =========================

musica.play().catch(function() {

    console.log("El navegador bloqueó el autoplay.");

});


// =========================
// 👆 REPRODUCIR AL INTERACTUAR
// =========================

function iniciarMusica() {

    musica.play().catch(function() {});

    document.removeEventListener(
        "click",
        iniciarMusica
    );

    document.removeEventListener(
        "touchstart",
        iniciarMusica
    );

    document.removeEventListener(
        "scroll",
        iniciarMusica
    );
}

document.addEventListener(
    "click",
    iniciarMusica
);

document.addEventListener(
    "touchstart",
    iniciarMusica
);

document.addEventListener(
    "scroll",
    iniciarMusica
);