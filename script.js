function captura(){
    var Nombre=document.getElementById("Nombre").value;
    var Apellidos=document.getElementById("Apellidos").value;
    var Correo=document.getElementById("Correo").value;

    if(Nombre==""){
        alert("Ingrese Nombre");
        document.getElementById("Nombre").focus();
    }else{
        if(Apellidos==""){
            alert("Ingrese Apellido/s");
            document.getElementById("Apellidos").focus();
    }else{
        if(Correo==""){
            alert("Ingrese Correo");
            document.getElementById("Correo").focus();

    }else{
        console.log(Nombre+" "+Apellidos+" | "+Correo);
        document.getElementById("Nombre").value="";
        document.getElementById("Apellidos").value="";
        document.getElementById("Correo").value="";
    }
    }
    }
}
