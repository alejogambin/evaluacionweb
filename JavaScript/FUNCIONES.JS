$(document).ready(function(){
    //esto se ejecuta una vez carga la pagina
    var datatabla = ""
    new 
    $.ajax({
        url:'https://huachitos.cl/api/animales/tipo/perro',
        dataType:'json',
        success:function(infomascota){
        //console.log(infomascota)
        var mascotas= infomascota.data
        for(var i=0;i<mascotas.length;i++){
            var fila = " "
            //console.log(mascotas[i])
            //console.log(mascotas[i].imagen)
            //console.log(mascotas[i].nombre)
            //console.log(mascotas[i].edad)
            //console.log(mascotas[i].estado)
            fila = "<tr><td><img src='"+mascotas[i].imagen+"'width='100' length= '100' </td><td>"+mascotas[i].nombre+"</td><td>"+mascotas[i].edad+"</td><td>"+mascotas[i].estado+"</td></tr>"
            $("#adopcion").append(fila)
        }
        let mytabla = new DataTable('#adopcion', {
            layout: {
                topStart: {
                    buttons: [
                        'csv',
                        'pdf'
                    ]
                }
            }
        });
    }
    })

})
/*function miPrimeraChamba(){
        var contador=1
        for(contador;contador<=100;contador++){
            console.log(contador)
        } 
    }
*/
/*function obtenerFormulario(){
        var nombre = document.getElementById("nombre").value
        var vacuna = document.getElementById("vacuna").value
        var fecha = document.getElementById("fecha").value
        var proxDosis = document.getElementById("proxDosis").value
        var precio = document.getElementById("precio").value
        var errores = "" 
        if(nombre.length<=1){
            errores = errores + "nombre es campo requerido o debe ser mayor a 1 caracter\n"
        }
        if (vacuna.length==0) {
            errores = errores + "vacuna es campo requerido \n"
        }
        if (precio.length==0) {
            errores = errores + "precio es campo requerido \n"
        }
        if (fecha.length==0) {
            errores = errores + "fecha es campo requerido \n"
        }
        if (errores != 0) {
            //alert(errores)
            $("#errores").html(errores)
            return false
        }
    }
*/
function obtenerFormularioJquery(){
        var nombre = $("#nombre").val()
        var vacuna = $("#vacuna").val()
        var fecha = $("#fecha").val()
        var proxDosis = $("#proxDosis").val()
        var precio = $("#precio").val()
        var errorCampoRequerido= "<p class='text-danger errorform'>* CAMPO REQUERIDO</p>"
        var errores = "" 
        $(".errorform").remove()
        if(nombre.length<=1){
            errores = errores + "<p class='text-danger'>nombre es campo requerido o debe ser mayor a 1 caracter</p>"
            $("#errornombre").append(errorCampoRequerido)
        }
        if (vacuna.length==0) {
            errores = errores + "<p>vacuna es campo requerido </p>"
            $("#errorvacuna").append(errorCampoRequerido)
        }
        if (precio.length==0) {
            errores = errores + "<p>precio es campo requerido </p>"
            $("#errorprecio").append(errorCampoRequerido)
        }
        if (fecha.length==0) {
            errores = errores + "<p>fecha es campo requerido </p>"
            $("#errorfecha").append(errorCampoRequerido)
        }
        if (proxDosis.length==0){
            errores = errores + "<p>fecha es campo requerido </p>"
            $("#errorproxDosis").append(errorCampoRequerido)
        }
        if (errores != "") {
            //alert(errores)
            //$("#errores").html(errores)
            swal.fire({
                title : "ERROR",
                html : errores,
                icon: "error"
            });
            return false
        }else{
            swal.fire({
                title: "CONFIRMACION",
                text: "todos los datos guardados de forma exitosa",
                icon: "success"
            });
            return false
        }
        
}
