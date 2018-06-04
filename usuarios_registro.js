

function password1(){

  var password1 = document.getElementById("password").value;

   if (password1.length >= 8) {
      document.getElementById("comprobacionPassword").innerHTML = "Las contraseña es valida";


   }else {
    document.getElementById("comprobacionPassword").innerHTML = "Las contraseña tiene que tener más de 8 caracteres.";

   }

}

function passwordrepeat(){


	 var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;


	// Si la contraseña tiene menos de 8 caracteres
	if (password == password2) {

		document.getElementById("comprobacionPasswordRepeticion").innerHTML = "Las contraseñas coinciden.";
    document.getElementById("crear").removeAttribute("disabled");

	} else {

		// si no coinciden, muestra mensaje de error

		document.getElementById("comprobacionPasswordRepeticion").innerHTML = "Las contraseñas no coinciden.";
		//document.getElementById("alertaDeContrasena").classList.remove("invisible");


	}

}
