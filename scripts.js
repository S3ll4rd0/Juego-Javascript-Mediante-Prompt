//////// VARIABLES ESPAÑOL \\\\\\\\ 
var contadorPuntos = 0, contadorErrores = 0, contadorPreguntas = 0, eleccion = 0, respuesta = 0, y = 0, x = 0; 
var multiplo1 = 0, multiplo2 = 0, opcionMates = 0, opcionCultura = 0;
var mensajeAcierto = "Acertaste, la respuesta correcta es: ", mensajeFallo = "Fallaste, la respuesta correcta es: ";
var mensajePuntos = "Tus puntos totales son: ", mensajeErrores = "Tus errores cometidos son: ", mensajeDatos, mensajePorcentaje; 
var mensajesDocumentWrite = [];
var preguntasMatesTexto = [
    ["¿Cuál es la representación gráfica del número nueve mil treinta y seis?\n90036, 936 o 9036."],
    ["¿A cuántas unidades equivale 10 decenas de millar?\n100000, 10000 o 1000"],
    ["Si en una carrera vas tres puestos por delante del vigésimo segundo, ¿en qué puesto vas?\n" + 
    "Escribela tal como en las opciones\nNoveno, Decimotercero o Decimonoveno"],
    ["¿Cómo se llama el polígono de siete lados?\n" + 
    "Escribela tal como en las opciones\nHeptágono, Hexágono o Septágono"],
    ["¿Cuántos metros cuadrados es una hectarea?\n100, 100000 o 10000"],
    ["¿Cuál es el nombre del triángulo que tiene dos lados iguales y uno desigual?\n" + 
    "Escribela tal como en las opciones\nIsósceles, Escaleno o Equilátero"],
    ["Expresa 7 kg y 670 g en gramos.\n70670, 7670 o 767"],
    ["¿Cuántos años es un lustro?\n1, 5 o 10"],
    ["Escribe el número ordinal trigésimo quinto en cifras.\n135, 35 o 25"],
    ["¿Qué cantidad expresa el número romano XVIII?\n118, 18 o 13"],
]
var respuestasCorrectasMates = [
    [9036],
    [100000],
    ["Decimonoveno"],
    ["Heptágono"],
    [10000],
    ["Isósceles"],
    [7670],
    [5],
    [35],
    [18],
]
var preguntasCulturaTexto = [
    ["¿Cuál es el nombre del río más largo del mundo?\n" + 
    "Escribela tal como en las opciones\nNilo, Amazonas o Danubio"],
    ["¿Cuál es el océano más grande del mundo?\n" + 
    "Escribela tal como en las opciones\nPacífico, Índico o Atlántico"],
    ["¿Cuál es el país más grande del mundo?\n" + 
    "Escribela tal como en las opciones\nChina, Rusia o India"],
    ["¿Cuál es el país más poblado de la tierra?\n" + 
    "Escribela tal como en las opciones\nEstados Unidos, China o Rusia"],
    ["¿Cuál es la ciudad de los rascacielos?\n" + 
    "Escribela tal como en las opciones\nTokio, New York o Hong Kong"],
    ["¿En qué país está ubicada la ciudad de Medellín?\n" + 
    "Escribela tal como en las opciones\nColombia, Venezuela o Perú"],
    ["¿Cuál es la nación más pequeña del mundo?\n" + 
    "Escribela tal como en las opciones\nAndorra, Mónaco o El Vaticano"],
    ["¿Cuál es la ciudad italiana conocida como “la novia del mar”?\n" + 
    "Escribela tal como en las opciones\nRoma, Florencia o Venecia"],
    ["¿Cuál es la única ciudad que está en dos continentes distintos?\n" + 
    "Escribela tal como en las opciones\nMoscú, Estambul o Berlín"],
    ["¿Cuál es la segunda montaña más alta del mundo?\n" + 
    "Escribela tal como en las opciones\nK1, K3 o K2"],
]
var respuestasCorrectasCultura = [
    ["Amazonas"],
    ["Pacífico"],
    ["China"],
    ["China"],
    ["New York"],
    ["Colombia"],
    ["El Vaticano"],
    ["Venecia"],
    ["Estambul"],
    ["K2"],
]
var opcionesMates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
opcionesMates = opcionesMates.sort(function() {return Math.random() - 0.5});
var opcionesCultura = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
opcionesCultura = opcionesCultura.sort(function() {return Math.random() - 0.5});
/////////////////////////////////////////////////////////////////////////////////////////////////////

//////// VARIABLES ENGLISH \\\\\\\\
var counterPoints = 0, counterErrors = 0, counterQuestions = 0, choice = 0, answer = 0, x = 0, y = 0; 
var multiple1 = 0, multiple2 = 0, choiceMath = 0, choiceCulture = 0;
var succesMessage = "You have succeeded, the correct answer is: ", failMessage = "You have failed, the correct answer is: ";
var messagePoints = "Your total points are: ", messageErrors = "Your total errors made are: ", messageData, messagePercentage;
var messagesDocumentWrite = [];
var questionsMathsText = [
    ["What is the graphical representation of the number nine thousand thirty-six?\n936, 936 or 9036,"], 
    ["How many units do 10 tens of thousands equal to?\n100000, 10000 or 1000?"],
    ["If you are three places before 22nd in a race, where are you?\n" +
    "Write it as in the options\nNinth, Thirteenth or Nineteenth"],
    ["What is the name of the seven-sided polygon?\n" + 
    "Write it as in the options\nHeptagon, Hexagon or Septagon"], 
    ["How many square meters is a hectare?\n100, 100000, or 10000"],
    ["What is the name of the triangle that has two equal sides and one unequal side?" +
    "Write it as in the options\nIsosceles, Scalene or Equilateral."],
    ["Express in grams 7 kg and 670 g.\n70670, 7670 or 767."],
    ["How many years is a lustrum?\n1, 5 or 10"],
    ["Write the 35th ordinal number in digits.\n135, 25 or 35"],
    ["What quantity does the Roman numeral XVIII express?\n118, 18 or 13,"]
]
var answersCorrectMaths = [
    [9036],
    [100000],
    ["Nineteenth"],
    ["Heptagon"],
    [10000],
    ["Isosceles"],
    [7670],
    [5],
    [35],
    [18],
]
var questionsCultureText = [
    ["What is the name of the longest river in the world?\n" +
    "Write it as in the options\nNile, Amazon or Danubi"],
    ["What is the largest ocean in the world?\n" +
    "Write it as in the options\nPacific, Indian or Atlantic"],
    ["What is the largest country in the world?\n" +
    "Write it as in the options\nChina, Russia or India"],
    ["What is the most crowded country on earth?\n" +
    "Write it as in the options\nUnited States, China or Russia"],
    ["What is the city of the \"skyscrapers\"?\n" +
    "Write it as in the options\nTokyo, New York or Hong Kong"],
    ["In which country is the city of Medellin located?\n" +
    "Write it as in the options\nColombia, Venezuela or Peru"],
    ["What is the smallest nation in the world?\n" +
    "Write it as in the options\nAndorra, Monaco or The Vatican"],
    ["What is the Italian city known as “the bride of the sea”?\n" +
    "Write it as in the options\nRome, Florence or Venice"],
    ["What is the only city that is on two different continents?\n" +
    "Write it as in options\nMoscow, Istanbul or Berlin"],
    ["What is the second highest mountain in the world?\n" +
    "Write it as in options\nK1, K3 or K2"],
]
var answersCorrectCulture = [
    ["Amazon"],
    ["Pacific"],
    ["China"],
    ["China"],
    ["New York"],
    ["Colombia"],
    ["The Vatican"],
    ["Venice"],
    ["Istanbul"],
    ["K2"],
]
var optionsMaths = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
optionsMaths = optionsMaths.sort(function() {return Math.random() - 0.5});
var optionsCulture = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
optionsCulture = optionsCulture.sort(function() {return Math.random() - 0.5});
/////////////////////////////////////////////////////////////////////////////////////////////////////



////////// EJECUCIÓN DEL JUEGO \\\\\\\\\\\\
main();
////////// FIN DE LA EJECUCIÓN \\\\\\\\\\\\



function main() {
    escogeIdioma();
}

function escogeIdioma() {
    var idioma = prompt("Escoja en que idioma desea que sean las preguntas: \n" + "1 para Español o 2 para Inglés.\n\n" + 
                        "Choose in which language you want the questions to be: \n" + "1 to Spanish or 2 to English.\n");
    if (idioma == 1) {ejecutaJuego(); }
    if (idioma == 2) {runGame(); }
    while (idioma != 1 && idioma != 2) {
        var idioma = prompt("Por favor, no haga el tonto, la pregunta es facil. Escoja de nuevo. \n" + 
                            "Escoja en que idioma desea que sean las preguntas: \n" + "1 para Español o 2 para Inglés.\n\n" + 
                            "Please don't be stupid, the question is easy. Pick again." +
                            "Choose in which language you want the questions to be: \n" + "1 to Spanish or 2 to English.\n");
        if (idioma == 1) {ejecutaJuego(); }
        if (idioma == 2) {runGame(); }
    }
}



///////////// EJECUCIÓN DEL JUEGO EN ESPAÑOL \\\\\\\\\\\\\\
function ejecutaJuego() {
    do {
        if (contadorPuntos == 10) { finalJuegoGanado(); break; } 
        if (contadorErrores == 10) { finalJuegoPerdido(); break; } 
        eleccion = parseInt(prompt ("Escoja que desea responder: \n" + ".- 1 para pregunta de cultura.\n" + 
        ".- 2 para pregunta de matemáticas.\n" + ".- 3 para acertar el resultado de la multiplicación.\n" + ".- 4 para salir."));
        
        if (eleccion == 1) {
            contadorPreguntas++;
            generaPreguntasCultura();
        }
    
        if (eleccion == 2) {
            contadorPreguntas++;
            generaPreguntasMates();
        }
    
        if (eleccion == 3) {
            contadorPreguntas++;
            generaPreguntasMultiplicar();
        }
    
        if (eleccion == 4) {
            finalJuegoPerdido();
            break;
        }
    } while (eleccion != 4);
}

function finalJuegoGanado() {
    var imageWin = 'giphywin.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >');
    var imageWin = 'giphywinner.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >' + "<br><br>");
    mensajePorcentaje = "El porcentaje de acierto ha sido de: " + ((contadorPuntos * 100) / contadorPreguntas) + " %." +
    "<br>Basado en un total de " + contadorPuntos + " preguntas acertadas sobre un total de " + contadorPreguntas + " preguntas totales respondidas.<br><br>";
    document.write(mensajePorcentaje);
    for (var i = 0; i < mensajesDocumentWrite.length; i++)
    document.write(mensajesDocumentWrite[i]);
}

function finalJuegoPerdido() {
    var imageEnd = 'giphyend.gif';
    document.write('<img src=' + imageEnd + ' width="650" height="500" align="center" >');
    var imageWin = 'giphyover.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >' + "<br><br>");
    mensajePorcentaje = "El porcentaje de acierto ha sido de: " + ((contadorPuntos * 100) / contadorPreguntas) + " %." +
    "<br>Basado en un total de " + contadorPuntos + " preguntas acertadas sobre un total de " + contadorPreguntas + " preguntas totales respondidas.<br><br>";
    document.write(mensajePorcentaje);
    for (var i = 0; i < mensajesDocumentWrite.length; i++)
    document.write(mensajesDocumentWrite[i]);
}

function aciertoMates(pregunta, respuesta, numero) {
    contadorPuntos = contadorPuntos + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeAcierto + respuestasCorrectasMates[numero] + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function aciertoCultura(pregunta, respuesta, numero) {
    contadorPuntos = contadorPuntos + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeAcierto + respuestasCorrectasCultura[numero] + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function aciertoMultiplicacion(numero1, numero2, pregunta, respuesta) {
    contadorPuntos = contadorPuntos + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeAcierto + (numero1 * numero2) + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function errorMates(pregunta, respuesta, numero) {
    contadorErrores = contadorErrores + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeFallo + respuestasCorrectasMates[numero] + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function errorCultura(pregunta, respuesta, numero) {
    contadorErrores = contadorErrores + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeFallo + respuestasCorrectasCultura[numero] + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function errorMultiplicacion(numero1, numero2, pregunta, respuesta) {
    contadorErrores = contadorErrores + 1;
    mensajeDatos = "\nHas respondido " + contadorPreguntas + " preguntas." + "\nRespuestas correctas: " + contadorPuntos + "\nRespuestas erroneas: " + contadorErrores;
    alert(mensajeFallo + (numero1 * numero2) + mensajeDatos);
    mensajesDocumentWrite.push("La pregunta nº" + contadorPreguntas + " ha sido :" + "<br>" + pregunta + "<br>" + 
    "Y tu has respondido: " + "<br>" + respuesta + "<br>" + mensajePuntos + contadorPuntos + "<br>" + mensajeErrores + contadorErrores + "<br>"+ "<br>");
}

function generaPreguntasMultiplicar() {
    preguntasMultiplicar();
}

function generaPreguntasCultura() {
    preguntasCultura(randomCultura());
}

function generaPreguntasMates() {
    preguntasMates(randomMates());
}

function randomMates() {
    opcionMates = opcionesMates[x];
    x++;
    return opcionMates;
}

function randomCultura() {
    opcionCultura = opcionesCultura[y];
    y++;
    return opcionCultura;
}

function preguntasMates(opcionMates) {
    switch (opcionMates) {
        case 0:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 1:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 2:
            respuesta = prompt(preguntasMatesTexto[opcionMates]);
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 3:
            respuesta = prompt(preguntasMatesTexto[opcionMates]);
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 4:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 5:
            respuesta = prompt(preguntasMatesTexto[opcionMates]);
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 6:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 7:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 8:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        case 9:
            respuesta = parseInt(prompt(preguntasMatesTexto[opcionMates]));
            if (respuesta == respuestasCorrectasMates[opcionMates]) {
                aciertoMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            } else {
                errorMates(preguntasMatesTexto[opcionMates], respuestasCorrectasMates[opcionMates], opcionMates);
                break;
            }
        default:
          break;
      }
}

function preguntasCultura(opcionCultura) {
    switch (opcionCultura) {
        case 0:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 1:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 2:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 3:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 4:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 5:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 6:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 7:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 8:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        case 9:
            respuesta = prompt(preguntasCulturaTexto[opcionCultura]);
            if (respuesta == respuestasCorrectasCultura[opcionCultura]) {
                aciertoCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            } else {
                errorCultura(preguntasCulturaTexto[opcionCultura], respuestasCorrectasCultura[opcionCultura], opcionCultura);
                break;
            }
        default:
          break;
      }
}

function preguntasMultiplicar() {
    multiplo1 = parseInt(Math.random() * (40 - 10) + 10);
    multiplo2 = parseInt(Math.random() * (40 - 10) + 10);
    mensajeMultiplicar = "Introduzca el resultado de multiplicar " + multiplo1 + " x " + multiplo2 + " = ";
    respuesta = prompt("Introduzca el resultado de multiplicar " + multiplo1 + " x " + multiplo2 + " = ");
    if (respuesta == (multiplo1 * multiplo2)) {
        aciertoMultiplicacion(multiplo1, multiplo2, mensajeMultiplicar, respuesta);
    } else {
        errorMultiplicacion(multiplo1, multiplo2, mensajeMultiplicar, respuesta);
    }
}


///////////// ENGLISH EXECUTION OF GAME \\\\\\\\\\\\\\
function runGame() {
    do {
        if (counterPoints == 10) { finalGameWin(); break; } 
        if (counterErrors == 10) { finalGameLose(); break; } 
        choice = parseInt(prompt ("Choose what you want to answer: \n" + ".- 1 for culture question.\n" + 
        ".- 2 for math question.\n" + ".- 3 to gess the result of the multiplication right.\n" + ".- 4 for exit."));
        
        if (choice == 1) {
            counterQuestions++;
            cultureQuiz();
        }
    
        if (choice == 2) {
            counterQuestions++;
            mathsQuiz();
        }
    
        if (choice == 3) {
            counterQuestions++;
            multiplicationQuiz();
        }
    
        if (choice == 4) {
            finalGameLose();
            break;
        }
    } while (choice != 4);
}

function finalGameWin() {
    var imageWin = 'giphywin.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >');
    var imageWin = 'giphywinner.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >' + "<br><br>");
    messagePercentage = "The percentage of accuracy has been: " + ((counterPoints * 100) / counterQuestions) + " %." +
    "<br>Based on a total of " + counterPoints + " questions answered out of a total of " + counterQuestions + " total questions answered.<br><br>";
    document.write(messagePercentage);
    for (var i = 0; i < messagesDocumentWrite.length; i++)
    document.write(messagesDocumentWrite[i]);
}

function finalGameLose() {
    var imageEnd = 'giphyend.gif';
    document.write('<img src=' + imageEnd + ' width="650" height="500" align="center" >');
    var imageWin = 'giphyover.gif';
    document.write('<img src=' + imageWin + ' width="500" height="500" align="center" >' + "<br><br>");
    messagePercentage = "The percentage of accuracy has been: " + ((counterPoints * 100) / counterQuestions) + " %." +
    "<br>Based on a total of " + counterPoints + " questions answered out of a total of " + counterQuestions + " total questions answered.<br><br>";
    document.write(messagePercentage);
    for (var i = 0; i < messagesDocumentWrite.length; i++)
    document.write(messagesDocumentWrite[i]);
}

function mathsSuccess(question, answer, number) {
    counterPoints = counterPoints + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(succesMessage + answersCorrectMaths[number] + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function cultureSuccess(question, answer, number) {
    counterPoints = counterPoints + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(succesMessage + answersCorrectCulture[number] + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function multiplicationSuccess(number1, number2, question, answer) {
    counterPoints = counterPoints + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(succesMessage + (number1 * number2) + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function mathsFail(question, answer, number) {
    counterErrors = counterErrors + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(failMessage + answersCorrectMaths[number] + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function cultureFail(question, answer, number) {
    counterErrors = counterErrors + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(failMessage + answersCorrectCulture[number] + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function multiplicationFail(number1, number2, question, answer) {
    counterErrors = counterErrors + 1;
    messageData = "\nYou have answered: " + counterQuestions + " questions." + "\nCorrect answers: " + counterPoints + "\nWrong answers: " + counterErrors;
    alert(failMessage + (number1 * number2) + messageData);
    messagesDocumentWrite.push("The question nº" + counterQuestions + " has been :" + "<br>" + question + "<br>" + 
    "And you have answered: " + "<br>" + answer + "<br>" + messagePoints + counterPoints + "<br>" + messageErrors + counterErrors + "<br>"+ "<br>");
}

function multiplicationQuiz() {
    multiplicationQuestions();
}

function cultureQuiz() {
    cultureQuestions(randomCulture());
}

function mathsQuiz() {
    mathsQuestions(randomMaths());
}

function randomMaths() {
    choiceMath = optionsMaths[x];
    x++;
    return choiceMath;
}

function randomCulture() {
    choiceCulture = optionsCulture[y];
    y++;
    return choiceCulture;
}

function mathsQuestions(choiceMath) {
    switch (choiceMath) {
        case 0:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 1:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 2:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 3:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 4:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 5:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 6:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 7:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 8:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        case 9:
            answer = prompt(questionsMathsText[choiceMath]);
            if (answer == answersCorrectMaths[choiceMath]) {
                mathsSuccess(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            } else {
                mathsFail(questionsMathsText[choiceMath], answersCorrectMaths[choiceMath], choiceMath);
                break;
            }
        default:
            break;
      }
}

function cultureQuestions(choiceCulture) {
    switch (choiceCulture) {
        case 0:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 1:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 2:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 3:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 4:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 5:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 6:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 7:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 8:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        case 9:
            answer = prompt(questionsCultureText[choiceCulture]);
            if (answer == answersCorrectCulture[choiceCulture]) {
                cultureSuccess(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            } else {
                cultureFail(questionsCultureText[choiceCulture], answersCorrectCulture[choiceCulture], choiceCulture);
                break;
            }
        default:
            break;
      }
}

function multiplicationQuestions() {
    multiple1 = parseInt(Math.random() * (40 - 10) + 10);
    multiple2 = parseInt(Math.random() * (40 - 10) + 10);
    multiplicateMessage = "Enter the result of multiplying " + multiple1 + " x " + multiple2 + " = ";
    answer = prompt("Enter the result of multiplying " + multiple1 + " x " + multiple2 + " = ");
    if (answer == (multiple1 * multiple2)) {
        multiplicationSuccess(multiple1, multiple2, multiplicateMessage, answer);
    } else {
        multiplicationFail(multiple1, multiple2, multiplicateMessage, answer);
    }
}
