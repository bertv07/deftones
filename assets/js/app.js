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


var name1 = document.getElementById('form-fullName')
var c_i = document.getElementById('form-identification')
var phone = document.getElementById('form-phone')
var mail = document.getElementById('form-email')
var envi = document.getElementById('envi')

envi.addEventListener('click', (e) =>{
    e.preventDefault();

    if(name1.value === "" || c_i.value === "" || phone.value === "" || mail.value === ""){
        alert("Por favor, complete todos los campos");
        abrirFor1()
    }else{
        console.log(name1.value);
        console.log(c_i.value);
        console.log(phone.value);
        console.log(mail.value);
        name1.value = "";
        c_i.value = "";
        phone.value = "";
        mail.value = "";
        cerrarFor1()
    }
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




var off = document.getElementById('vide-off'); // Elemento que se muestra/oculta
var play_video = document.getElementById('playVideo'); // Botón de play
var off_video = document.getElementById('off'); // Botón de apagar
var pause_video = document.getElementById('pauseVideo'); // Botón de pausa
var video = document.getElementById('video');
var principio = document.getElementById('principio')
var retroceder = document.getElementById('retroceder')
var avanzar = document.getElementById('avanzar')
var final = document.getElementById('final')
var quitar = document.getElementById('quitar')
var estadov = 0;

function pauseVideo() {
    if (estadov === 0 || estadov === 1) {
        video.pause();
        estado = 1;
        console.log("Video pausado");
    }
}

function apagar() {
    off.classList.toggle('active');
    pauseVideo();
    video.currentTime = 0;
    estado = 2;
    console.log("Video apagado y reiniciado");
}

function playVideo() {
    if (estadov === 1 || estadov === 2 || estadov === 0) {
        video.play();
        estado = 0;
        off.classList.remove('active');
        console.log("Video reproduciendo");
    }
}

function princi(){
    video.currentTime = 0;
}

function retro(){
    video.currentTime -= 5;
}
function avan(){
    video.currentTime += 5;
}

function fin(){
        video.currentTime = video.duration - 1; 
}


//mover con tiempo
const punto = document.querySelector('.punto');

function actualizarPunto() {
    if (video.duration) {
        const porcentaje = (video.currentTime / video.duration) * 100;
        punto.style.left = `${porcentaje}%`;
    }
}

video.addEventListener('timeupdate', actualizarPunto);
video.addEventListener('loadedmetadata', actualizarPunto);







play_video.addEventListener('click', playVideo);
off_video.addEventListener('click', apagar);
pause_video.addEventListener('click', pauseVideo);
principio.addEventListener('click', princi)
retroceder.addEventListener('click', retro)
avanzar.addEventListener('click', avan)
final.addEventListener('click', fin)
quitar.addEventListener('click', apagar)
play.addEventListener('click', playMusic);
pause.addEventListener('click', pauseMusic);



var abrir_video = document.querySelector('#pesta');
var close = document.querySelector('#cerrar');
var vid = document.querySelector('.pesta')
var info = document.querySelector('.info')
var vi = document.querySelector('.vi')

function abrir(){
    vid.style.display = "block";
    vi.style.display = "block";
    info.style.display = "block";
}
function cerrar(){
    vid.style.display = "none";
    vi.style.display = "none";
    info.style.display = "none";
}
abrir_video.addEventListener('click', abrir);
close.addEventListener('click', cerrar);

var cerrar_mapa = document.querySelector('#cerrarma');
var abrir_mapa = document.querySelector('#abrirma');
var map = document.querySelector('.ma')
var map1 = document.querySelector('.map1')

function abrirMapa(){
    map.style.display = "block";
    map1.style.display = "block";
}
function cerrarMapa(){
    map.style.display = "none";
    map1.style.display = "none";
}
cerrar_mapa.addEventListener('click', cerrarMapa);
abrir_mapa.addEventListener('click', abrirMapa);


var cerrar_for1 = document.querySelector('#ce');
var abrir_for1 = document.querySelector('#formuu');
var for1 = document.querySelector('.form-section')
var formu1 = document.querySelector('.formu1')
function abrirFor1(){
    for1.style.display = "block";
    formu1.style.display = "block";
}
function cerrarFor1(){
    for1.style.display = "none";
    formu1.style.display = "none";
}

cerrar_for1.addEventListener('click', cerrarFor1);
abrir_for1.addEventListener('click', abrirFor1);

var cerrar_for2 = document.querySelector('#cee');
var abrir_for2 = document.querySelector('#formuo');
var for2 = document.querySelector('.footer')
var formu2 = document.querySelector('.formu2')
function abrirFor2(){
    for2.style.display = "block";
    formu2.style.display = "block";
}
function cerrarFor2(){
    for2.style.display = "none";
    formu2.style.display = "none";
}

cerrar_for2.addEventListener('click', cerrarFor2);
abrir_for2.addEventListener('click', abrirFor2);