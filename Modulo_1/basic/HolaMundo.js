console.log("Hola mundo");

//Consultar las funciones de Console.*

console.assert()             // Registra un mensaje y envía una traza de error a la consola si el primer argumento es false.
console.clear();             // Limpia todo lo que se haya hecho antes en consola.
console.count();             // Registra el numero de veces que esta línea ha sido llamada con etiqueta dada.
console.countReset();        // Restablece el recuento de esa etiqueta a 0. Si se omite, countReset()restablece el contador predeterminado a 0.
console.debug();             // Registra un mensaje con el nivel de"debug".
console.dir();               // Muestra un listado interactivo de las propiedades de un objeto JavaScript específico. Esta lista le permite examinar el contenido de los objetos hijos.
console.dirxml();            // Muestra una representación en forma de árbol de un elemento XML/HTML si es posible o la vista del objeto JavaScript si no es posible.
console.error();             // Muestra un mensaje de error. Se pueden utilizar sustituciones de cadena y argumentos adicionales con este método.
console.exception();         // Es un alias de error().
console.group();             // Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. Para retroceder un nivel, se utiliza groupEnd().
console.groupCollapsed();    // Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. A diferencia de group(), inicia con la línea de grupo colapsada, requiriendo el uso de un botón de apertura para expandir el grupo. Para retroceder un nivel, se utiliza groupEnd().
console.groupEnd();          // Finaliza el grupo actual.
console.info();              // Muestra un mensaje de información en la Consola Web. Se puede utilizar sustitución de cadena y argumentos adicionales con este método.
console.table();             // Muestra datos tabulares en forma de una tabla.
console.time();              // Inicia un temporizador con un nombre específico como parámetro. Hasta 10.000 temporizadores simultáneos pueden ejecutarse en una página determinada.
console.timeEnd();           // Detiene el temporizador especificado y registra el tiempo transcurrido, en segundos, desde su inicio.
console.timeLog();           // Registra el valor actual de un temporizador que se inició previamente llamando console.time()a la consola.
console.timeStamp();         // Adiciona una marca a las herramientas Timeline o Waterfall del navegador.
console.trace();             // Muestra una traza de error.
console.warn();              // Muestra un mensaje de advertencia. Se puede utilizar sustitución de cadena y argumentos adicionales con este método.                 