function generarProgramaSemanal() {
    let libro = SpreadsheetApp.openById("1qEPPaUIhzQ6TuqZKhueFicCug4dUX99wkZLqn0kxK_o");
    let hoja1 = libro.getSheetByName("Hoja 1");
    let hoja2 = libro.getSheetByName("Hoja 2");
    let arregloNombres = hoja1.getRange("A2:A21").getValues();
    let arregloDatos = hoja1.getRange("B2:D15").getValues();
  
    let rows = arregloDatos.length;
    let uf = hoja2.getLastRow();
    hoja2.getRange(3, 2, uf, 19).clearContent();
    let fil = 3;
    let count = 1;
  
    arregloNombres.forEach(fila => {
      let nombre = fila[0];
      var genero = count % 2 == 0 ? "Femenino" : "Masculino";
      // let turno = count < 11 ? "Matutino" : "Vespertino";
  
      hoja2.getRange(fil, 2).setValue(nombre);
      hoja2.getRange(fil + 1, 2).setValue(count);
      let col = 3;
  
      for (let i = 0; i <= 5; i++) {
        let hrs = 0;
        let arregloActs = [];
        let actividadesAsignadas = [];
        let horarioInicio = count < 11 ? 8 : 14;
        let horaFin = horarioInicio;
  
        do {
          let aleatorio = arregloDatos[Math.floor(Math.random() * rows)];
          let actividad = aleatorio[0];
          let tiempo = aleatorio[1];
          let horarioDia = "";
  
          if (!actividadesAsignadas.includes(actividad) && (hrs + tiempo) <= 6) {
            if (actividad === "Mantenimiento de vehículos" || actividad === "Mantenimiento eléctrico" || actividad === "Mantenimiento hidráulico" || actividad === "Mantenimiento de inmuebles" || actividad === "Mantenimiento de mobiliario") {
              if(genero === "Masculino"){
                horaFin += tiempo;
                horarioDia = horarioInicio + "-" + horaFin;
                aleatorio[2] = horarioDia;
                arregloActs.push(aleatorio);
                actividadesAsignadas.push(actividad);
                hrs += tiempo;
              }
            } else if (actividad === "Regar áreas verdes") {
              if (
                (horarioInicio === 8 || horarioInicio === 18) &&
                horaFin + tiempo <= 20
              ) {
                horaFin += tiempo;
                horarioDia = horarioInicio + "-" + horaFin;
                aleatorio[2] = horarioDia;
                arregloActs.push(aleatorio);
                actividadesAsignadas.push(actividad);
                hrs += tiempo;
              }
            } else if (actividad === "Control y registro") {
              if (hrs + tiempo <= 6) {
                horaFin += tiempo;
                horarioDia = horarioInicio + "-" + horaFin;
                aleatorio[2] = horarioDia;
                arregloActs.push(aleatorio);
                actividadesAsignadas.push(actividad);
                hrs += tiempo;
              }
            } else {
              horaFin += tiempo;
              horarioDia = horarioInicio + "-" + horaFin;
              aleatorio[2] = horarioDia;
              arregloActs.push(aleatorio);
              actividadesAsignadas.push(actividad);
              hrs += tiempo;
            }
          }
          horarioInicio = horaFin;
        } while (hrs < 6);
  
        hoja2.getRange(fil, col, arregloActs.length, 3).setValues(arregloActs);
        col = col + 3;
      }
      fil += 6;
      count += 1;
    });
  }