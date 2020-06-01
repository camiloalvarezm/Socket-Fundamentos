var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Escuchar
socket.on('disconnect', function() {
    console.log('Conexion perdida con el servidor.');
});
//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Camilo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});