const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector("#nombre");
const email= document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


function leerTexto(e){
	datos[e.target.id] = e.target.value
}


const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	const {nombre, email, mensaje} = datos;

	if(nombre === '' || email === '' || mensaje === ''){
		mostrarError('Todos los campos son obligatorios');
		return;
	}

	mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(msg){
	const alerta = document.createElement('P');
	alerta.textContent = msg;
	alerta.classList.add('error')

	formulario.appendChild(alerta)

	setTimeout(() =>{
		alerta.remove();
	}, 3000);
}

function mostrarMensaje(msg){
	const alerta = document.createElement('P');
	alerta.textContent = msg;
	alerta.classList.add('correcto')

	formulario.appendChild(alerta)

	setTimeout(() =>{
		alerta.remove();
	}, 3000);
}