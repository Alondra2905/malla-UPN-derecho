// script.js
const cursosPorCiclo = {
  "Ciclo 1": [
    { id: "com1", nombre: "Comunicación 1", dependientes: ["com2"] },
    { id: "mat1", nombre: "Complementos De matemática", dependientes: ["mat2"] },
    { id: "desarrollo", nombre: "Desarrollo Del Talento", dependientes: ["empleabilidad"] },
    { id: "introD", nombre: "Introducción Al Derecho", dependientes: ["const1", "penal1"] },
    { id: "global", nombre: "Ciudadana Global", dependientes: [] }
  ],
  "Ciclo 2": [
    { id: "const1", nombre: "Derecho Constit. Y Teor. Estado", dependientes: ["const2", "admin1", "logica"] },
    { id: "respSoc", nombre: "Responsabilidad Social", dependientes: ["proyecto"] },
    { id: "pre1", nombre: "Pre Beginner 1", dependientes: ["pre2"] },
    { id: "metUni", nombre: "Metodología Universitaria", dependientes: ["metInv"] },
    { id: "com2", nombre: "Comunicación 2", dependientes: ["com3"] },
    { id: "mat2", nombre: "Matemática Básica", dependientes: [] }
  ],
  "Ciclo 3": [
    { id: "civil1", nombre: "Derecho Civil 1 Personas", dependientes: ["civil2", "empresarial1"] },
    { id: "penal1", nombre: "Derecho Penal I", dependientes: ["penal2"] },
    { id: "pre2", nombre: "Pre Beginner 2", dependientes: [] },
    { id: "com3", nombre: "Comunicación 3", dependientes: [] },
    { id: "const2", nombre: "Der.Constituc.Peruano Y Dd.Hh.", dependientes: ["intpub1", "politica"] }
  ],
  "Ciclo 4": [
    { id: "civil2", nombre: "Derecho Civil 2 (Acto Jurd.)", dependientes: ["civil3", "teorProc"] },
    { id: "empresarial1", nombre: "Derecho Empresarial 1", dependientes: ["empresarial2"] },
    { id: "penal2", nombre: "Derecho Penal 2", dependientes: ["procpenal1"] },
    { id: "admin1", nombre: "Derecho Administrativo 1", dependientes: ["admin2"] },
    { id: "herr", nombre: "Herramientas Informáticas", dependientes: [] },
    { id: "logica", nombre: "Lógica Jurídica", dependientes: [] }
  ],
  "Ciclo 5": [
    { id: "civil3", nombre: "Derecho Civil 3 Reales", dependientes: ["civil4"] },
    { id: "empresarial2", nombre: "Derecho Empr.2 Y Titulos Val.", dependientes: ["procconst"] },
    { id: "teorProc", nombre: "Teoría General Del Proceso", dependientes: ["proccivil1", "marcos"] },
    { id: "empleabilidad", nombre: "Empleabilidad", dependientes: ["practicas"] },
    { id: "admin2", nombre: "Derecho Administrativo 2", dependientes: ["competencia", "tributario1"] }
  ],
  "Ciclo 6": [
    { id: "civil4", nombre: "Derecho Civil 4 (Obligac.)", dependientes: ["civil5", "civil6"] },
    { id: "proccivil1", nombre: "Derecho Procesal Civil I", dependientes: ["proccivil2"] },
    { id: "procconst", nombre: "Derecho Procesal Constitucio.", dependientes: [] },
    { id: "marcos", nombre: "Marcs:Negoc.Concil.Y Arbitraje", dependientes: [] },
    { id: "procpenal1", nombre: "Derecho Procesal Penal I", dependientes: ["procpenal2"] },
    { id: "metInv", nombre: "Metodología De La Investigac.", dependientes: ["tesis"] }
  ],
  "Ciclo 7": [
    { id: "romano", nombre: "Derecho Romano", dependientes: [] },
    { id: "civil5", nombre: "Derecho Civil 5 Contratos", dependientes: ["laboral1", "civil7", "respCivil"] },
    { id: "proccivil2", nombre: "Derecho Procesal Civil II", dependientes: ["consultorio"] },
    { id: "procpenal2", nombre: "Derecho Pro.Pen. II Y Lit.Oral", dependientes: [] },
    { id: "proyecto", nombre: "Proyecto Social", dependientes: [] }
  ],
  "Ciclo 8": [
    { id: "laboral1", nombre: "Derecho Laboral 1", dependientes: ["laboral2"] },
    { id: "civil6", nombre: "Der.Civ.6 Fam. Nio Y Adoles.", dependientes: [] },
    { id: "competencia", nombre: "Derecho De La Competencia", dependientes: [] },
    { id: "tributario1", nombre: "Derecho Tributario 1", dependientes: ["tributario2"] },
    { id: "consultorio", nombre: "Consultorio Jurídico", dependientes: [] }
  ],
  "Ciclo 9": [
    { id: "respCivil", nombre: "Derecho Responsabilidad Civil", dependientes: [] },
    { id: "civil7", nombre: "Derecho Civil 7 Sucesiones", dependientes: ["intprivado", "penalempresa", "gestion", "aduanero", "contratacion"] },
    { id: "laboral2", nombre: "Derecho Laboral 2", dependientes: ["litigio"] },
    { id: "tributario2", nombre: "Derecho Tributario 2", dependientes: [] },
    { id: "intpub1", nombre: "Derecho Int. Pbli Y Pol. Amb.", dependientes: [] }
  ],
  "Ciclo 10": [
    { id: "propiedad", nombre: "Derecho Propiedad Intelectual", dependientes: [] },
    { id: "litigio", nombre: "Derecho Proc.Trab.Y Litig.Oral", dependientes: [] },
    { id: "practicas", nombre: "Prácticas Preprofesionales", dependientes: [] }
  ],
  "Ciclo 11": [
    { id: "intprivado", nombre: "Derecho Internacional Privado", dependientes: ["argumentacion"] },
    { id: "tesis", nombre: "Tesis", dependientes: ["investigacion"] },
    { id: "penalempresa", nombre: "Derecho Penal Y Empresa", dependientes: [] },
    { id: "gestion", nombre: "Delit. Contra La Gest. Pub.Ant", dependientes: [] },
    { id: "aduanero", nombre: "Tll. Derecho Tribut. Y Aduaner", dependientes: ["conflictos"] },
    { id: "contratacion", nombre: "Contratación Pública", dependientes: ["politicas"] }
  ],
  "Ciclo 12": [
    { id: "investigacion", nombre: "Trabajo De Investigación", dependientes: [] },
    { id: "argumentacion", nombre: "Argumentación Jurídica", dependientes: [] },
    { id: "conflictos", nombre: "Tll. De Gestion De Conflictos", dependientes: [] },
    { id: "politicas", nombre: "Gest. Y Polit. Pub. Prospect.", dependientes: [] }
  ]
};

const mallaContainer = document.getElementById("malla");

for (const ciclo in cursosPorCiclo) {
  const cicloDiv = document.createElement("div");
  cicloDiv.className = "ciclo";
  const titulo = document.createElement("h2");
  titulo.textContent = ciclo;
  cicloDiv.appendChild(titulo);

  const cursosGrid = document.createElement("div");
  cursosGrid.className = "cursos";

  cursosPorCiclo[ciclo].forEach(curso => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course disabled";
    courseDiv.dataset.id = curso.id;

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.disabled = true;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(curso.nombre));

    courseDiv.appendChild(label);
    cursosGrid.appendChild(courseDiv);
  });

  cicloDiv.appendChild(cursosGrid);
  mallaContainer.appendChild(cicloDiv);
}

function activarIniciales() {
  const todasDependencias = new Set();
  Object.values(cursosPorCiclo).flat().forEach(c => c.dependientes.forEach(dep => todasDependencias.add(dep)));
  const iniciales = Object.values(cursosPorCiclo).flat().filter(c => !todasDependencias.has(c.id)).map(c => c.id);
  iniciales.forEach(id => habilitarCurso(id));
}

function habilitarCurso(id) {
  const div = document.querySelector(`.course[data-id='${id}']`);
  if (div && div.classList.contains("disabled")) {
    div.classList.remove("disabled");
    const checkbox = div.querySelector("input[type='checkbox']");
    checkbox.disabled = false;
    checkbox.addEventListener("change", () => manejarClick(id));
  }
}

function manejarClick(id) {
  const curso = Object.values(cursosPorCiclo).flat().find(c => c.id === id);
  if (curso) curso.dependientes.forEach(habilitarCurso);
}

activarIniciales();
