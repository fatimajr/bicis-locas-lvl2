function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var lista = document.querySelector("select").value;

	if( nombre == null || nombre.length == 0 || /^[A-Z]\s+$/.test(nombre)) {
       var span = document.createElement("span");
       var referencia= document.getElementById("name");
       var padre = referencia.parentNode;
       padre.insertBefore(span,referencia);
       var texto = document.createTextNode("Debe ingresar su nombre");
       span.appendChild(texto);
       return span;
    }else{
		var m = /^[a-zA-Z]*$/;
		if(!nombre.search(m)) {
			console.log("letra")
			m = /[a-z]/g;
		}
		if(!nombre.search(m)){
            var span = document.createElement("span");
            var referencia= document.getElementById("name");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
		}
	}

	if(apellido == null || apellido.length == 0 || /^[A-Z]\s+$/.test(apellido)){
	   var span = document.createElement("span");
       var referencia= document.getElementById("lastname");
       var padre = referencia.parentNode;
       padre.insertBefore(span,referencia);
       var texto = document.createTextNode("Debe ingresar su apellido");
       span.appendChild(texto);
       return span;
	} else{
		var m = /^[a-zA-Z]*$/;
		if(!nombre.search(m)) {
			console.log("letra")
			m = /[a-z]/g;
		}
		if(!nombre.search(m)){
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
		}
	}
	if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
       var span = document.createElement("span");
       var referencia= document.getElementById("input-email");
       var padre = referencia.parentNode;
       padre.insertBefore(span,referencia);
       var texto = document.createTextNode("Verifique su email");
       span.appendChild(texto);
       return span;
  	} else if (contraseña == null || contraseña.length <=6 || contraseña == "password" || contraseña == 123456 || contraseña == 098754 || /^\s+$/.test(contraseña)){
       var span = document.createElement("span");
       var referencia= document.getElementById("input-password");
       var padre = referencia.parentNode;
       padre.insertBefore(span,referencia);
       var texto = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
       span.appendChild(texto);
       return span;
   	}
   	if (lista == 0) {
		var span = document.createElement("span");
		var referencia= document.querySelector("select");
		var padre=referencia.parentNode;
		padre.insertBefore(span,referencia);
		var texto = document.createTextNode("Debes seleccionar al menos un tipo de bici");
		span.appendChild(texto);
		return span;
		}
}
