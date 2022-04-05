function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00 AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
// Las 12:00:00 PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 


// if(time.length === 10){
//     if(time[0] > "1" || time[3] > "6" || time[6] > "6"){
//        return false
//     }
//   }else if(time === ""){
//       return false
//   }else if(time.length <= 7){
//       return false
//   }
//   if(time[time.length-2] === "A"){
//   if(time[0] === "0" && time[1] <= "9"){
//       var coc = time.slice(0,-2)
//       return coc
//   }else if(time[0] === "1" && time[1] <= "1"){
//            coc = time.slice(0,-2)
//            return coc
//       }else if(time[0] === "1" && time[1] === "2"){
//            coc = time.slice(2,-2)
//           return "0" + "0" + coc
//       }
//   }else if(time[time.length-2] === "P"){
//       if(time[0] === "0" && time[1] <= "7"){
//           var cocc = Number(time[1])
//           var cooo = 2;
//           var cbv = cocc + cooo
//           var coc = time.slice(2,-2)
//           return  "1" + cbv + coc
//       }else if(time[0] === "0" && time[1] > "7"){
//           cocc = Number(time[1])
//           cooo = 12;
//           cbv = cocc + cooo
//           coc = time.slice(2,-2)
//          return cbv + coc
//       }else if(time[0] === "1" && time[1] <= "1"){
//           cocc = Number(time[1])
//           cooo = 22;
//           cbv = cocc + cooo
//           coc = time.slice(2,-2)
//          return cbv + coc
//       }else if(time[0] === "1" && time[1] === "2"){
//           var dos = time.slice(0,-2)
//           return dos
//       }
//   }
// }

// var PM = time.match('PM') ? true : false

//time = time.split(':')
//var min = time[1]

// if(PM) {
 
 //var hour = 12 + parseInt(time[0],10)  
// var sec = time[2].replace('PM', '')

//  } else {
//var hour = time[0];  //  var sec = time[2].replace('AM','')
//}

//return hour + ':' + min + ':' + sec ;

    let AmPm = time.slice(8,10);
    let hora = time.slice(0,2);
    let minutos = time.slice(3,5);
    let segundos = time.slice(6,8);
    if ( hora > 12 || minutos > 59 || segundos > 59 || time.length == 0 || !time.length == 8) {
        return false;
    }
    if (AmPm == "AM") {
        if (hora == "12") {
            let newHora = parseInt(hora)-12;
            return `${newHora}0:${minutos}:${segundos}`
        }
        return `${hora}:${minutos}:${segundos}`
    }
    if (AmPm == "PM") {
        if (hora=="12") {
            return `${hora}:${minutos}:${segundos}`
        }
        let newHora=parseInt(hora)+12;
        return `${newHora}:${minutos}:${segundos}`
    }
}













module.exports = {
    timeConversion
}