function iniciar(){
   var enlace = "https://wa.me/"
   var numero = document.getElementById("NumberInput").value;
   var unir = enlace + numero;

   alert("Desea iniciar conversacion con el numero: " + numero +" ?" )
   window.open(unir);
}

let box = new gsap.timeline();

box.from(".container", { width: "0%", stagger: 0.4, duration: 1.5 });
box.from(".form__title", { opacity: 0, y: -30 });
box.from(".form__input-group input", { opacity: 0, stagger: 0.3 });

box.from(".form__button ", { opacity: 0, y: 20 });
