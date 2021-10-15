// const nombrePersona = document.querySelector("#nombrePersona");
// const correoPersona = document.querySelector("#correoPersona");
// const edadPersona = document.querySelector("#edadPersona");
// const paisOrigenPersona = document.querySelector("#paisOrigenPersona");
// nombrePersona.innerText = `${nuevaPersona.nombre}  ${nuevaPersona.apellido}`;
// correoPersona.innerText = nuevaPersona.correo;
// edadPersona.innerText = nuevaPersona.edad;
// paisOrigenPersona.innerText = nuevaPersona.pais;
// const title = document.createElement("h1");
// title.innerText = "Soy un titulo";
// contenedorPersonas.appendChild(title);
// const h1 = document.querySelector("#h1");
// map,reduce,filter

// h1.style.color = "blue";

let data = {
  personas: [
    {
      nombre: "nombre",
      apellido: "apellido",
      correo: "asd@asd.com",
      edad: "25",
      pais: "Argentina",
    },
  ],
};

//Se crean los "lectores" del HTML para relacionarlos con una variable que podamos agregarlos a JS
const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");
const contenedorPersonas = document.querySelector("#contenedorPersonas");

const handleSendBtn = () => {
  //capturamos los datos del fomurlario al hacer click en enviar
  const nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    correo: form.correo.value,
    edad: form.edad.value,
    pais: form.pais.value,
  };

  //agregamos la nueva persona al objeto de datos

  data = { ...data, personas: [...data.personas, nuevaPersona] };

  //limpiamos el formulario

  form.reset();

  //pintamos el DOM con la neuva persona llamando a la funcion correspondiente
  addNewPerson(nuevaPersona);

  // console.log(data.personas);
};

const addNewPerson = (nuevaPersona) => {
  //se crean los elementos que luego seran populados con los datos del form y se les agregan las clases para darles estilos luego
  const elementoNombre = document.createElement("h3");
  elementoNombre.classList.add("nombre-persona");
  const elementoCorreo = document.createElement("h3");
  elementoCorreo.classList.add("correo-persona");
  const elementoEdad = document.createElement("h4");
  elementoEdad.classList.add("edad-persona");
  const elementoPais = document.createElement("h4");
  elementoPais.classList.add("pais-persona");
  const contenedorPersona = document.createElement("div");
  contenedorPersona.classList.add("persona");

  //popular los elementos con los datos correspondientes

  elementoNombre.innerText = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
  elementoCorreo.innerText = nuevaPersona.correo;
  elementoEdad.innerText = nuevaPersona.edad;
  elementoPais.innerText = nuevaPersona.pais;

  //se aniaden los elementos (con su informacion correspondiente) al contenedor creado a tal fin(el de cada persona), y luego este elemento se agrega al contenedor general de personas

  contenedorPersona.appendChild(elementoNombre);
  contenedorPersona.appendChild(elementoCorreo);
  contenedorPersona.appendChild(elementoEdad);
  contenedorPersona.appendChild(elementoPais);

  contenedorPersonas.appendChild(contenedorPersona);
};

//Aqui escuchamos al evento click del evento form

sendBtn.addEventListener("click", handleSendBtn);

//se agrega programaticamente una primer persona al contenedor para poder visualizar entre renderizaciones (F5) y poder darle estilos

addNewPerson({
  nombre: "nombre",
  apellido: "apellido",
  correo: "asd@asd.com",
  edad: "25",
  pais: "Argentina",
});
