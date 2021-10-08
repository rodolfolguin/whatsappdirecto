function iniciar(){
   var enlace = "https://wa.me/"
   var numero = document.getElementById("numero").value;
   var unir = enlace + numero;

   alert("Desea iniciar conversacion con el numero: " + numero +" ?" )
   window.open(unir);
}