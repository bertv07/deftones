var play = document.querySelector('#play');
var cancion = document.querySelector('#cancion');
var pause = document.querySelector('#pause');
var mute = document.querySelector('#mute');
var img = document.querySelector('#img');
var estado = 0;
var muted = false;


var correo = document.getElementById('email')
var mensaje = document.getElementById('mensaje')
var enviar = document.getElementById('enviar')


enviar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(correo.value);
    console.log(mensaje.value);
    correo.value = "";
    mensaje.value = "";
});


function toggleActive() {
    const tapaCd = document.querySelector('.tapa-cd');
    const agarre = document.querySelector('.agarre');
    const agarre1 = document.querySelector('.agarre1');
    
    tapaCd.classList.toggle('active');
    agarre.classList.toggle('active');
    agarre1.classList.toggle('active');
}

function muteMusic() {
    if (!muted) {
        cancion.muted = true;
        muted = true;
        mute.classList.toggle('color');
    } else {
        cancion.muted = false;
        muted = false;
        mute.classList.remove('color');

    }
}
mute.addEventListener('click', muteMusic);

function pauseMusic() {
    if (estado === 0 || estado === 2) {
        cancion.pause();
        img.classList.remove('img-girando'); // Detiene la animación
        estado = 2;
    }
}

function apagar() {
    const tapaCd = document.querySelector('.tapa-cd');

    tapaCd.classList.toggle('active1');
    if (estado === 2 || estado === 0) {
        estado = 3;
        cancion.pause();
        img.classList.remove('img-girando'); // Detiene la animación
    } else if (estado === 3) {
        estado = 0;
        cancion.play(); // Optional: restart music when turning off
        img.classList.add('img-girando'); // Inicia la animación
    }
}

// Event listener for buttons
document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', function() {
        if (estado === 3) {
            alert('Los otros botones están deshabilitados cuando el estado es 3.');
        } else {
            // Continue with button action if estado is not 3
            if (this.id === 'pauseButton') {
                pauseMusic();
            } else if (this.id === 'playButton') {
                playMusic();
            }
        }
    });
});

// Adding playMusic function for completeness
function playMusic() {
    if (estado === 0 || estado === 2) {
        cancion.play();
        img.classList.add('img-girando'); // Inicia la animación
        estado = 0; // Optional: reset estado when play music
    } else if (estado === 3) {
        cancion.pause();
        img.classList.remove('img-girando'); // Detiene la animación
    }
}

play.addEventListener('click', playMusic);
pause.addEventListener('click', pauseMusic);
