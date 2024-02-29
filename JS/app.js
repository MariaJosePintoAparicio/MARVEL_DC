document.addEventListener("DOMContentLoaded", function () {
    // Datos de los personajes
    const personajes_Marvel = [
        {
            "id": "5d86371f25a058e5b1c8a65e",
            "about": " El Capitán América es un superhéroe ficticio creado por Joe Simon y Jack Kirby para Marvel Comics. Su identidad secreta es Steve Rogers, un joven frágil y débil que, gracias a un experimento científico durante la Segunda Guerra Mundial, se convierte en un súper soldado con fuerza, agilidad y resistencia sobrehumanas. Portando un escudo indestructible, lucha contra el crimen y defiende los valores de libertad, justicia y patriotismo, convirtiéndose en un símbolo icónico del heroísmo estadounidense.",
            "picture": "./images/capitan-america.jpg",
            "name": "Capitan America "
        },
        {
            "id": "5d86371f1efebc31def272e2",
            "about": " Iron Man es personaje de Marvel Comics, creado por Stan Lee, Larry Lieber, Don Heck y Jack Kirby. Su identidad secreta es Tony Stark, un genio multimillonario, inventor y empresario. Después de ser herido y secuestrado por terroristas, construye una armadura avanzada impulsada por tecnología de vanguardia para escapar. Posteriormente, utiliza esta armadura para convertirse en el héroe conocido como Iron Man. Stark lucha tanto contra amenazas tecnológicas como contra villanos convencionales, utilizando su ingenio y recursos para proteger al mundo. A lo largo de su historia, ha sido miembro destacado de los Vengadores y ha enfrentado desafíos personales relacionados con su identidad secreta y sus propias acciones como industrial de armas.",
            "picture": "./images/iro-man.jpg",
            "name": "Iron Man"
        },
        {
            "id": "5d86371f2343e37870b91ef1",
            "about": "Hulk es un personaje de cómic creado por Stan Lee y Jack Kirby para Marvel Comics. Su identidad secreta es la del científico Bruce Banner. Después de ser expuesto a una intensa radiación gamma, Banner se transforma en Hulk, una criatura de piel verde con una fuerza descomunal y resistencia sobrehumana cuando experimenta emociones intensas como la ira. A menudo, Hulk es representado como una fuerza imparable y destructiva, pero también ha sido retratado como un héroe, luchando contra amenazas tanto terrestres como extraterrestres. La lucha interna de Banner por controlar su transformación y la dualidad entre su inteligencia y la furia primal de Hulk son temas recurrentes en su historia.",
            "picture": "./images/hulk.jpg",
            "name": "Hulk"
        },
        {
            "id": "5d86371f9f80b591f499df32",
            "about": "La Bruja Escarlata es un personaje de Marvel Comics creado por Stan Lee y Jack Kirby. Su nombre real es Wanda Maximoff y es uno de los mutantes más poderosos del Universo Marvel. Ella tiene habilidades de manipulación de la realidad y la probabilidad, lo que le permite alterar eventos y situaciones a su voluntad, así como lanzar ráfagas de energía mística.",
            "picture": "./images/bruja-escarlata.jpg",
            "name": "Bruja Escarlata"
        },
        {
            "id": "5d86371f233c9f2425f16916",
            "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
            "picture": "./images/deadpool.jpg",
            "name": "Deadpool"
        },
        {
            "id": "5d86371f97c29d020f1e1f6d",
            "about": "Deadpool es un personaje de cómic de Marvel Comics conocido por su personalidad irreverente y su habilidad para romper la cuarta pared, es decir, dirigirse directamente al lector o espectador. Su nombre real es Wade Wilson y es un mercenario con habilidades de regeneración acelerada, lo que le permite curarse de cualquier lesión o enfermedad, incluso regenerando miembros perdidos.",
            "picture": "./images/doctor.jpg",
            "name": "Doctor Strange"
        },
        {
            "id": "5d86371fd55e2e2a30fe1ccb",
            "about": "Spider-Man es uno de los superhéroes más icónicos de Marvel Comics. Su identidad secreta es Peter Parker, un joven que adquiere habilidades arácnidas después de ser picado por una araña radiactiva en un experimento científico. Estas habilidades incluyen fuerza sobrehumana, agilidad, reflejos mejorados y la capacidad de adherirse a superficies.",
            "picture": "./images/spider-man.jpg",
            "name": "Spider Man"
        },
        {
            "id": "5d86371fd55e2e2a30fe1ccb1",
            "about": "Thanos es un supervillano ficticio que aparece en los cómics publicados por Marvel Comics. Creado por Jim Starlin, el personaje hizo su primera aparición en iroman #55 en 1973. Thanos es conocido por su apariencia distintiva, con una piel morada y una constitución física imponente.Su obsesión principal es conquistar y gobernar el universo, y está obsesionado con la idea de cortejar a la personificación de la Muerte. Thanos es extremadamente poderoso, con habilidades físicas y mentales aumentadas por el uso del Cubo Cósmico y el Guantelete del Infinito, objetos que le otorgan un control casi ilimitado sobre la realidad, el tiempo, el espacio y otras fuerzas cósmicas",
            "picture": "./images/thanos.jpg",
            "name": "Thanos"
        }, 
        {
            "id": "5d86371fd55e2e2a30fe1ccb2",
            "about": "Thor es un personaje de Marvel Comics inspirado en la mitología nórdica. Creado por Stan Lee, Larry Lieber y Jack Kirby, hizo su primera aparición en Journey into Mystery #83 en 1962. Thor es el dios del trueno y el príncipe de Asgard, un reino celestial en el universo de Marvel. Thor posee una fuerza sobrehumana, resistencia, durabilidad y longevidad, así como la capacidad de controlar el clima y manipular la energía del trueno con su martillo encantado, Mjolnir. Además, es un hábil guerrero y líder",
            "picture": "./images/thor.jpg",
            "name": "Thor"
        },
        {
            "id": "5d86371fd55e2e2a30fe1cc3",
            "about": " La Viuda Negra es un personaje de Marvel Comics conocido por su habilidad como espía y luchadora experta. Su nombre real es Natasha Romanoff. Apareció por primera vez en Tales of Suspense #52 en 1964. Natasha ha sido parte de varias organizaciones, incluidas S.H.I.E.L.D. y los Vengadores.Como agente entrenada del KGB, la Viuda Negra es experta en combate cuerpo a cuerpo, armas de fuego y técnicas de sigilo. Además de su habilidad física, a menudo se la representa como una maestra manipuladora y estratega.",
            "picture": "./images/viuda-negra.jpg",
            "name": "Viuda Negra"
        },
        {
            "id": "5d86371fd55e2e2a30fe1cc4",
            "about": "Nebula es una pirata espacial y mercenaria en Marvel Comics, hija adoptiva de Thanos. Ha tenido varios enfrentamientos con héroes cósmicos y busca poder y venganza, a menudo enfrentándose a su padre adoptivo. En el Universo Cinematográfico de Marvel, es interpretada por Karen Gillan y su historia incluye una relación complicada con Thanos y su búsqueda de redención..",
            "picture":"./images/nebula.jpg",
            "name": "Nebula"
        },
        {
            "id": "5d86371fd55e2e2a30fe1cc5",
            "about": "Nebula es una pirata espacial y mercenaria en Marvel Comics, hija adoptiva de Thanos. Ha tenido varios enfrentamientos con héroes cósmicos y busca poder y venganza, a menudo enfrentándose a su padre adoptivo. En el Universo Cinematográfico de Marvel, es interpretada por Karen Gillan y su historia incluye una relación complicada con Thanos y su búsqueda de redención.",
            "picture":"./images/pantera-negra.jpg",
            "name": "Pantera Negra"
        }
    ];

    const personajesDC = [
        {
            "id": "5d86371f25a058e5b1c8a65e",
            "about": " Aquaman es un héroe de DC Comics, mitad humano y mitad atlante, con habilidades sobrehumanas bajo el agua. Como rey de Atlantis, tiene fuerza y velocidad aumentadas, así como la capacidad de comunicarse con la vida marina. Ha sido miembro de la Liga de la Justicia y protagonista de sus propios cómics. En la cultura popular, Jason Momoa lo interpretó en el cine, dándole una imagen moderna y poderosa.",
            "squarePic": "images/Aquaman.jpg",
            "name": "Aquaman"
        },
        {
            "id": "5d86371f1efebc31def272e2",
            "about": "Batman es un héroe de DC Comics, también conocido como Bruce Wayne, que lucha contra el crimen en Ciudad Gótica. Sin poderes sobrehumanos, confía en su ingenio, habilidades físicas y tecnología avanzada para combatir a los villanos. Ha sido adaptado en numerosas películas y otros medios, convirtiéndose en un icono cultural",
            "squarePic": "images/bat.jpg",
            "name": "Batman"
        },
        {
            "id": "5d86371f2343e37870b91ef1",
            "about": "Flash es un héroe de DC Comics conocido por su velocidad sobrehumana. Barry Allen, el más conocido, obtiene sus habilidades después de un accidente científico. Como miembro de la Liga de la Justicia, protege Ciudad Central y lucha contra villanos usando su velocidad y valentía. Ha sido adaptado en series de televisión y películas, ganando popularidad por su carisma y poderes únicos.",
            "squarePic": "images/flash-dc.jpg",
            "name": "Flash"
        },
        {
            "id": "5d86371f9f80b591f499df32",
            "about": "Green Arrow es un héroe de DC Comics conocido por su habilidad con el arco y la flecha. Como Oliver Queen, lucha contra el crimen en Ciudad Starling, mostrando un fuerte sentido de justicia social. Ha sido adaptado en series de televisión y películas, ganando popularidad por su enfoque único en la lucha contra la injusticia.",
            "squarePic": "images/green arrow-dc.jpg",
            "name": "Green Arrow"
        },
        {
            "id": "5d86371f233c9f2425f16916",
            "about": "Harley Quinn es una villana de DC Comics, compañera del Joker. Antes era psiquiatra. Con una personalidad excéntrica, ha ganado popularidad por su carisma. Ha protagonizado cómics, series de televisión, películas y juegos de video.",
            "squarePic": "images/Harley Quinn-dc.jpg",
            "name": "Harley Quinn"
        },
        {
            "id": "5d86371f97c29d020f1e1f6d",
            "about": "El Joker es el archienemigo de Batman en DC Comics. Conocido por su locura y su obsesión por sembrar el caos en Ciudad Gótica, es un villano icónico y extremadamente peligroso. Ha sido adaptado en películas, series de televisión y cómics, siendo uno de los personajes más reconocibles de la cultura pop.",
            "squarePic": "images/joker.jpg",
            "name": "Joker"
        },
        {
            "id": "5d86371fd55e2e2a30fe1ccb",
            "about": "Robin es el compañero de Batman en DC Comics. Varias personas han asumido el papel, incluyendo a Dick Grayson, Jason Todd y Tim Drake. Cada uno aporta habilidades únicas al papel y ayuda a Batman en su lucha contra el crimen en Ciudad Gótica. Robin es un símbolo de esperanza y unidad en la lucha contra el crimen. ",
            "squarePic": "images/robin-dc.jpg",
            "name": "Robin"
        },
        {
            "id": "5d86371fd55e2e2a30fe1ccb1",
            "about": "Supergirl es la prima de Superman en DC Comics, con poderes similares a los suyos. Kara Zor-El llegó a la Tierra desde Krypton y lucha por la justicia como Supergirl. Ha sido adaptada en cómics, series de televisión y películas, siendo un símbolo de empoderamiento femenino.",
            "squarePic": "images/superg.jpg",
            "name": "Supergirl"
        },
        {
            "id": "5d86371fd55e2e2a30fe1ccb2",
            "about": "Superman es un superhéroe de DC Comics, conocido por sus habilidades sobrehumanas como la fuerza, velocidad y vuelo. Criado como Clark Kent en Smallville, adopta la identidad de Superman para proteger al mundo, especialmente Metrópolis. Ha sido adaptado en películas, series de televisión y cómics, convirtiéndose en un símbolo cultural icónico.",
            "squarePic": "images/superman.jpg",
            "name": "Superman"
        },
        {
            "id": "5d86371fd55e2e2a30fe1cc3",
            "about": "Wonder Woman es una superheroína de DC Comics, también conocida como Diana Prince, princesa amazona de Themyscira. Tiene habilidades sobrehumanas y usa un lazo de la verdad mágico. Es un símbolo de empoderamiento femenino y ha sido adaptada en películas, series de televisión y cómics.",
            "squarePic": "images/Wonder Woman-dc.jpg",
            "name": "Wonder Woman"
        }
    ];

  // Función para crear elementos HTML para los personajes
  function crearElemento(personaje) {
    const elemento = document.createElement('div');
    elemento.innerHTML = `<img src="${personaje.squarePic || personaje.picture}" alt="${personaje.name}"><h3>${personaje.name}</h3>`;
    return elemento;
}

// Función para mostrar los héroes en la cuadrícula
function mostrarPersonajes(personajes, container) {
    personajes.forEach(function (personaje) {
        const elemento = crearElemento(personaje);
        container.appendChild(elemento);
    });
}

// Seleccionar contenedores de Marvel y DC
const marvelContainer = document.querySelector('.contenido-marvel');
const dcContainer = document.querySelector('.contenido-dc');

// Mostrar personajes en los contenedores
mostrarPersonajes(personajes_Marvel, marvelContainer);
mostrarPersonajes(personajesDC, dcContainer);

// Función para realizar la búsqueda de personajes
function buscarPersonajes() {
    let textoBusqueda = document.getElementById('iBusca').value.toLowerCase();

    let personajesMarvel = document.querySelectorAll('.contenido-marvel div');
    personajesMarvel.forEach(function (personaje) {
        let nombrePersonaje = personaje.textContent.toLowerCase();
        if (nombrePersonaje.includes(textoBusqueda)) {
            personaje.style.display = 'block';
        } else {
            personaje.style.display = 'none';
        }
    });

    let personajesDC = document.querySelectorAll('.contenido-dc div');
    personajesDC.forEach(function (personaje) {
        let nombrePersonaje = personaje.textContent.toLowerCase();
        if (nombrePersonaje.includes(textoBusqueda)) {
            personaje.style.display = 'block';
        } else {
            personaje.style.display = 'none';
        }
    });
}

// Agregar evento de clic al botón de búsqueda
let botonBuscar = document.getElementById('buscar');
botonBuscar.addEventListener('click', buscarPersonajes);


// Función para mostrar la ventana emergente con la información del héroe
function mostrarVentanaEmergente(personaje) {
    let modalImage = document.getElementById('modal-image');
    let modalName = document.getElementById('modal-name');
    let modalDescription = document.getElementById('modal-description');

    modalImage.src = personaje.picture;
    modalName.textContent = personaje.name;
    modalDescription.textContent = personaje.about;

    modal.style.display = 'block';
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    modal.style.display = 'none';
}

// Agregar evento de clic al botón "Regresar" de la ventana emergente
let modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', cerrarVentanaEmergente);

var imagenesPersonajes = document.querySelectorAll('.contenido-marvel img, .contenido-dc img');
imagenesPersonajes.forEach(function (imagen) {
    imagen.addEventListener('click', function () {
        var nombrePersonaje = imagen.nextElementSibling.textContent;

        var personaje = personajes_Marvel.find(function (p) {
            return p.name === nombrePersonaje;
        });

        if (!personaje) {
            personaje = personajesDC.find(function (p) {
                return p.name === nombrePersonaje;
            });
        }

        mostrarVentanaEmergente(personaje);
    });
});
});