# Programacion_Logica_con_Restricciones-Empresa

Generar el programa, en javaScript, que resuelva la siguiente situación:
En una empresa se tiene una plantilla de 20 personas adscritas al área de servicios
generales, 10 en el horario matutino (8:00 a 14:00 Hrs) y 10 en el horario vespertino
(14:00 a 20:00 Hrs), los cuales cubren una jornada de trabajo de 6 horas diarias de
lunes a sábado.
Del personal del horario matutino cinco son hombres y cinco son mujeres, igual que en
el turno vespertino. Generar los nombres de todos los trabajadores.
Las actividades y sus tiempos que debe realizar el área son:

1. Limpieza de oficinas (1 Hrs.)
2. Limpieza de espacios exteriores (1 Hrs.)
3. Registro y archivo de correspondencia (1 Hr.)
4. Podar jardines (2 Hrs.)
5. Podar árboles (2 Hrs.)
6. Regar áreas verdes (2 Hrs.)
7. Limpieza de sanitarios (3 Hrs.)
8. Compras (3 Hrs.)
9. Mantenimiento de vehículos (4 Hrs.)
10. Mantenimiento eléctrico (4 Hrs.)
11. Mantenimiento hidráulico (5 Hrs.)
12. Mantenimiento de inmuebles (5 Hrs.)
13. Mantenimiento de mobiliario (5 Hrs.)
14. Control y registro (6 Hrs.)


Se desea generar un programa de actividades semanal, en el que se describan las
actividades y el personal designado para atenderlas, bajo las siguientes restricciones:

- Todos los trabajadores deben tener actividades que cubran su horario de trabajo
- Las actividades se realizarán en forma individual
- Un trabajador no puede repetir una actividad el mismo día
- Las actividades no pueden exceder el tiempo definido
- Ninguna actividad puede repetirse durante el mismo turno (excepto la actividad de control y registro)
- Las actividades de mantenimiento son exclusivas para el personal varonil
- La actividad de regar áreas verdes solo se hace de 8:00 a 10:00 Hrs y de 18:00 a 20:00 Hrs.
- La actividad de control y registro debe realizarse de forma continua durante toda la jornada de trabajo.

Generar dos tipos de tablas (una en general y una para el personal) como la que se muestra a continuación, el programa genenal se describan las actividades y el personal designado para atenderlas para cada dia

Enlace del sheet: https://docs.google.com/spreadsheets/d/1qEPPaUIhzQ6TuqZKhueFicCug4dUX99wkZLqn0kxK_o/edit?usp=sharing

                                   Programa general semanal                                         
|    Horario    |  Actividad  |   Lunes   |  Martes  | Miércoles |  Jueves  | Viernes   | Sábado     |
| ------------- | ----------- | --------- | -------- | --------- | -------- | --------- | ---------- |
|  8:00-10:00   | Act. 1      | Trab. x   | Trab. y  |  Trab. z  | Trab. x  |  Trab. y  |  Trab.z    |
|      ...      |      ...    |   ...     |    ...   |   ...     |    ...   |    ...    |    ...     |
|  18:00-20:00  |  Act. n     |  Trab. x  | Trab. y  | Trab. z   | Trab. x  |   Trab. y |   Trab.z   |


                                 Programa semanal del trabajador x
|    Horario    |   Lunes   |  Martes  | Miércoles |  Jueves  | Viernes   | Sábado     |
| ------------- | --------- | -------- | --------- | -------- | --------- | ---------- |
|  8:00-10:00   |  Act. 1   |  Act. 2  |   Act. 3  |  Act. 4  |   Act. 5  |   Act. 6   |
|      ...      |   ...     |    ...   |   ...     |    ...   |    ...    |    ...     |
|  18:00-20:00  |   Act. n  |  Act. n  |  Act. n   |  Act. n  |    Act. n |    Act. n   |
