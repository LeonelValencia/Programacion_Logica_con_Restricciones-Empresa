// Definir los nombres de los trabajadores
const nombres = [
    "Juan",
    "María",
    "Pedro",
    "Laura",
    "Carlos",
    "Ana",
    "Luis",
    "Elena",
    "Miguel",
    "Isabel",
    "Roberto",
    "Sofía",
    "David",
    "Lucía",
    "Javier",
    "Carmen",
    "Francisco",
    "Rosa",
    "Alejandro",
    "Patricia",
];

// Definir los horarios
const horarios = [
    { nombre: "Matutino", horaInicio: 8, horaFin: 14 },
    { nombre: "Vespertino", horaInicio: 14, horaFin: 20 },
];

// Definir los días de la semana
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Definir las actividades y sus tiempos
const actividades = [
    { nombre: "Limpieza de oficinas", duracion: 1 },
    { nombre: "Limpieza de espacios exteriores", duracion: 1 },
    { nombre: "Registro y archivo de correspondencia", duracion: 1 },
    { nombre: "Podar jardines", duracion: 2 },
    { nombre: "Podar árboles", duracion: 2 },
    { nombre: "Regar áreas verdes", duracion: 2 },
    { nombre: "Limpieza de sanitarios", duracion: 3 },
    { nombre: "Compras", duracion: 3 },
    { nombre: "Mantenimiento de vehículos", duracion: 4 },
    { nombre: "Mantenimiento eléctrico", duracion: 4 },
    { nombre: "Mantenimiento hidráulico", duracion: 5 },
    { nombre: "Mantenimiento de inmuebles", duracion: 5 },
    { nombre: "Mantenimiento de mobiliario", duracion: 5 },
    { nombre: "Control y registro", duracion: 6 },
];

// Definir el programa semanal de actividades
const programa = {};

// Inicializar el programa con los horarios y días de la semana
for (const dia of diasSemana) {
    programa[dia] = {};
    for (const horario of horarios) {
        programa[dia][horario.nombre] = [];
    }
}

// Obtener la lista de trabajadores disponibles para un día y horario específico
const obtenerTrabajadoresDisponibles = (dia, horario) => {
    const trabajadoresDisponibles = nombres.slice(); // Hacer una copia de los nombres de los trabajadores
    const actividadesDia = programa[dia]; // Obtener las actividades asignadas para el día

    for (const horarioKey in actividadesDia) {
        if (horarioKey !== horario.nombre) {
            const actividadesHorario = actividadesDia[horarioKey];
            for (const actividad of actividadesHorario) {
                const { trabajador } = actividad;
                const index = trabajadoresDisponibles.indexOf(trabajador);
                if (index !== -1) {
                    trabajadoresDisponibles.splice(index, 1); // Remover al trabajador de la lista de disponibles
                }
            }
        }
    }

    return trabajadoresDisponibles;
};

// Obtener la lista de actividades disponibles para un día y horario específico
const obtenerActividadesDisponibles = (dia, horario) => {
    const actividadesDisponibles = actividades.slice(); // Hacer una copia de las actividades

    // Si es horario de riego, filtrar las actividades y permitir solo "Regar áreas verdes"
    if ((horario.horaInicio === 8) || (horario.horaInicio === 18)) {
        return actividadesDisponibles.filter((actividad) => actividad.nombre === "Regar áreas verdes");
    }

    const actividadesDia = programa[dia]; // Obtener las actividades asignadas para el día

    // Filtrar las actividades ya asignadas para el horario actual
    if (actividadesDia[horario.nombre]) {
        const actividadesHorario = actividadesDia[horario.nombre];
        for (const actividad of actividadesHorario) {
            const index = actividadesDisponibles.findIndex((a) => a.nombre === actividad.actividad);
            if (index !== -1) {
                actividadesDisponibles.splice(index, 1); // Remover la actividad de la lista de disponibles
            }
        }
    }

    return actividadesDisponibles;
};

// Seleccionar un trabajador aleatorio de la lista de trabajadores disponibles
const seleccionarTrabajadorAleatorio = (trabajadoresDisponibles) => {
    const index = Math.floor(Math.random() * trabajadoresDisponibles.length);
    return trabajadoresDisponibles[index];
};

// Seleccionar una actividad aleatoria de la lista de actividades disponibles
const seleccionarActividadAleatoria = (actividadesDisponibles) => {
    const index = Math.floor(Math.random() * actividadesDisponibles.length);
    return actividadesDisponibles[index];
};

// Validar si el horario actual cumple con el horario de riego para la actividad "Regar áreas verdes"
const validarHorarioRiego = (inicio, fin) => {
    return (inicio === 8 && fin === 10) || (inicio === 18 && fin === 20);
};

// Función para asignar actividades a los trabajadores hasta que se complete el horario
let inicio = 0
let fin = 0
const asignarActividades = () => {
    for (const dia of diasSemana) {
        for (const horario of horarios) {
            inicio = horario.horaInicio
            const trabajadoresDisponibles = obtenerTrabajadoresDisponibles(dia, horario);
            const actividadesDisponibles = obtenerActividadesDisponibles(dia, horario);
            
            while (trabajadoresDisponibles.length > 0 && actividadesDisponibles.length > 0) {
                const trabajador = seleccionarTrabajadorAleatorio(trabajadoresDisponibles);
                const actividad = seleccionarActividadAleatoria(actividadesDisponibles);
                
                fin = inicio + actividad.duracion
                if (horario.nombre === "Matutino" || horario.nombre === "Vespertino") {
                    console.log(actividad.nombre);
                    console.log(dia);
                    console.log(horario);
                    console.log(validarHorarioRiego(inicio,fin));
                    if (actividad.nombre === "Regar áreas verdes" && !validarHorarioRiego(inicio, fin)) {
                        continue; // Si la actividad es "Regar áreas verdes" y no cumple con el horario de riego, continuar con la siguiente iteración
                    }

                    if (actividad.nombre === "Control y registro") {
                        // Si la actividad es "Control y registro", asignarla a todos los trabajadores disponibles en el horario actual
                        for (const trabajadorDisponible of trabajadoresDisponibles) {
                            programa[dia][horario.nombre].push({ trabajador: trabajadorDisponible, actividad: actividad.nombre, inicio, fin });
                        }
                    } else {
                        programa[dia][horario.nombre].push({ trabajador, actividad: actividad.nombre, inicio, fin });
                    }
                    
                    const indexTrabajador = trabajadoresDisponibles.indexOf(trabajador);
                    const indexActividad = actividadesDisponibles.indexOf(actividad);
                    trabajadoresDisponibles.splice(indexTrabajador, 1); // Remover al trabajador de la lista de disponibles
                    actividadesDisponibles.splice(indexActividad, 1); // Remover la actividad de la lista de disponibles
                    console.log(programa);
                    console.log(trabajadoresDisponibles);
                    console.log(actividadesDisponibles);
                }
            }
            inicio = fin
        }
    }
};

// Generar el programa de actividades
asignarActividades();