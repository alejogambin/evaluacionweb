
function miPrimeraChamba(){
        var contador=1
        for(contador;contador<=100;contador++){
            console.log(contador)
        } 
    }

function obtenerFormulario(){
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
