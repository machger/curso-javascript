// Ejercicio numero 1

// numeral = "";
// for (i = 1; i <= 5; i++) {
//   numeral = numeral + "#";
//   console.log(numeral);
// }

//#######################################################################

//Ejercicio numero 2

// for (i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`El ${i} es PAR`);
//   } else {
//     console.log(`El ${i} es IMPAR(`);
//   }
// }

//#######################################################################

//Ejercicio numero 3

// for (i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

//########################################################################

//CODING CHALLENGE

//1) REGISTRO.
// let seRegistro, usuarioRegistro, contraseñaRegistro;

// confirmacion = confirm(
//   "Bienvenido a mi App...Quieres registrarte...? pulsa Aceptar para continuar.. o Cancelar para salir"
// );
// console.log(confirmacion);
// if (confirmacion) {
//   usuarioRegistro = prompt("Ingrese un nombre de usuario");
//   if (usuarioRegistro.length >= 3) {
//     usuarioRegistro = usuarioRegistro.toLowerCase();
//     console.log(usuarioRegistro);
//     contraseñaRegistro = prompt("Ingrese una contraseña ");
//     if (contraseñaRegistro.length >= 6) {
//       alert("Registro ingresado satisfactoriamente ");
//       seRegistro = true;
//     } else {
//       alert("Contraseña invalida ");
//     }
//   } else {
//     alert("Usuario invalido");
//   }
// } else {
//   alert("Saliendo del Registro");
// }

//2) LOGIN
// login = confirm("Hola ... Saludos ..Deseas iniciar sesion en la App..? ");
// console.log(login);
// if (seRegistro && login) {
//   let usuarioLogin = prompt("Ingrese su Usuario ");
//   usuarioLogin = usuarioLogin.toLocaleLowerCase();
//   let contraseñaLogin = prompt("Ingrese su Contraseña ");
//   console.log(usuarioRegistro);
//   if (
//     usuarioLogin === usuarioRegistro &&
//     contraseñaLogin === contraseñaRegistro
//   ) {
//     alert("Login Exitoso");
//   } else {
//     alert("Login Erroneo");
//   }
// } else {
//   alert("Saliendo del Login");
// }
// console.log(usuarioRegistro);

//*3) EXTRA
let seRegistro, usuarioRegistro, contraseñaRegistro;

confirmacion = confirm(
  "Bienvenido a mi App...Quieres registrarte...? pulsa Aceptar para continuar.. o Cancelar para salir"
);
console.log(confirmacion);
if (confirmacion) {
  do {
    usuarioRegistro = prompt(
      "Ingrese un nombre de usuario de longitud igual o mayor a 3 caracteres"
    );
  } while (usuarioRegistro.length < 3);
  usuarioRegistro = usuarioRegistro.toLowerCase();
  console.log(usuarioRegistro);
  do {
    contraseñaRegistro = prompt(
      "Ingrese una contraseña de longitud igual o mayor a 6 caracteres"
    );
  } while (contraseñaRegistro.length < 6);
  alert("Registro ingresado satisfactoriamente ");
  seRegistro = true;
  login = confirm("Hola ... Saludos ..Deseas iniciar sesion en la App..? ");
  console.log(login);
  if (seRegistro && login) {
    let usuarioLogin, contraseñaLogin, bucleUsuario, bucleContraseña;
    do {
      console.log(usuarioLogin);
      usuarioLogin = prompt("Ingrese el Usuario ");
      usuarioLogin = usuarioLogin.toLocaleLowerCase();
      if (usuarioLogin === null) {
        bucleUsuario = false;
      } else if (usuarioLogin === usuarioRegistro) {
        bucleUsuario = false;
      } else {
        bucleUsuario = true;
      }
      console.log(usuarioRegistro);
      console.log(usuarioLogin);
    } while (bucleUsuario);
    do {
      contraseñaLogin = prompt("Ingrese la Contraseña ");
      if (contraseñaLogin === null) {
        bucleContraseña = false;
      } else if (contraseñaLogin === contraseñaRegistro) {
        bucleContraseña = false;
        alert("Login Exitoso");
      } else {
        bucleContraseña = true;
      }
      console.log(contraseñaRegistro);
      console.log(contraseñaLogin);
    } while (bucleContraseña);
  } else {
    alert("Saliendo del Login");
  }
} else {
  alert("Saliendo del Registro");
}

console.log(usuarioRegistro);
