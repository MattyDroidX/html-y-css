// const h1 = document.querySelector("#h1");
//map,reduce,filter

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

const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");
const contenedorPersonas = document.querySelector("#contenedorPersonas");
const nombrePersona = document.querySelector("#nombrePersona");
const correoPersona = document.querySelector("#correoPersona");
const edadPersona = document.querySelector("#edadPersona");
const paisOrigenPersona = document.querySelector("#paisOrigenPersona");
const newh3 = document.querySelector("h3");
const newh4 = document.querySelector("h4");

const handleSendBtn = () => {
  const nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    correo: form.correo.value,
    edad: form.edad.value,
    pais: form.pais.value,
  };

  data = { ...data, personas: [...data.personas, nuevaPersona] };

  form.reset();

  nombrePersona.innerText = `${nuevaPersona.nombre}  ${nuevaPersona.apellido}`;
  correoPersona.innerText = nuevaPersona.correo;
  edadPersona.innerText = nuevaPersona.edad;
  paisOrigenPersona.innerText = nuevaPersona.pais;
  console.log(data.personas);
};

sendBtn.addEventListener("click", handleSendBtn);

// const title = document.createElement("h1");
// title.innerText = "Soy un titulo";
// contenedorPersonas.appendChild(title);
