function sendMessage() {
   const prefixSelect = document.getElementById('prefix-select');
   const phoneNumberInput = document.getElementById('phone-number');
   const selectedPrefix = prefixSelect.value;
   let phoneNumber = phoneNumberInput.value;

   if (!phoneNumber.startsWith('+')) {
      phoneNumber = selectedPrefix + phoneNumber;
   }

   alert('Número completo: ' + phoneNumber);
   // Aquí puedes agregar el código para enviar el mensaje o procesar el número
}

function sendMessage() {
   var enlace = "https://wa.me/"
   var numero = document.getElementById("phone-number").value;
   var prefix = document.getElementById("prefix-select").value;
   var unir = enlace + prefix + numero;

   alert("Desea iniciar conversacion con el numero: " + prefix + "" + numero + " ?")
   window.open(unir);
}

let box = new gsap.timeline();

box.from(".container", {
   width: "0%",
   stagger: 0.4,
   duration: 1.5
});
box.from(".form__title", {
   opacity: 0,
   y: -30
});
box.from(".form__input-group input", {
   opacity: 0,
   stagger: 0.3
});

box.from(".form__button ", {
   opacity: 0,
   y: 20
});
