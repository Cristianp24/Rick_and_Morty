const validation = (data) => {
  let errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexNumber = /\d/;

  if (!regexEmail.test(data.username)) {
    errors.e1 = "Ingrese un email valido";
  }
  if (!data.username) {
    errors.e2 = "Debe ingresar un usuario";
  }
  if (data.username.length > 35) {
    errors.e3 = "El nombre de usuario no debe tener más de 35 caracteres";
  }
  if (!regexNumber.test(data.password)) {
    errors.p1 = "Debe ingresar al menos un numero";
  }
  if (data.password.length > 6 || data.password.length > 10) {
    errors.p2 =
      "La contraseña  tiene que tener una longitud entre 6 y 10 caracteres ";
  }
  return errors;
};

export default validation;
