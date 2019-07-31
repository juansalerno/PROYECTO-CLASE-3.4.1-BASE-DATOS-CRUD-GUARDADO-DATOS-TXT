import RegistroVehiculos from './registroVehiculos';
import Vehiculo from './vehiculo';
import Moto from './moto';
import Camion from './camion';
import Auto from './auto';
import * as readlineSync from './node_modules/readline-sync';


let miRegistro = new RegistroVehiculos();

console.log('Bienvenido al Registro Vehicular \n');

console.log('Seccion Ingresos y Reemplazos de vehiculos \n');

let tipoVehiculoAgregarOReemplazar: string = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
while (tipoVehiculoAgregarOReemplazar != '') {
    switch (tipoVehiculoAgregarOReemplazar.toLowerCase()) {
        case 'auto':
            let arregloDatosAuto: string[] = new Array(7);
            arregloDatosAuto[0] = '1';
            arregloDatosAuto[1] = readlineSync.question('Ingrese marca: ');
            arregloDatosAuto[2] = readlineSync.question('Ingrese modelo: ');
            arregloDatosAuto[3] = readlineSync.question('Ingrese año: ');
            arregloDatosAuto[4] = readlineSync.question('Ingrese color: ');
            arregloDatosAuto[5] = readlineSync.question('Ingrese patente: ');
            arregloDatosAuto[6] = readlineSync.question('Ingrese precio: ');

            let auto: Vehiculo = new Auto(parseInt(arregloDatosAuto[0]), arregloDatosAuto[1], arregloDatosAuto[2], parseInt(arregloDatosAuto[3]), arregloDatosAuto[4], arregloDatosAuto[5], parseInt(arregloDatosAuto[6]));

            let eleccionAuto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionAuto == 1) {
                miRegistro.addVehiculo(auto);
            }
            else if (eleccionAuto == 2) {
                let posicionAuto = readlineSync.questionInt('En qué posicion de la lista se encuentra el auto que desea reemplazar?: \n')
                miRegistro.updateVehiculoPorIndice(auto, posicionAuto);
            }
            break;

        case 'moto':
            let arregloDatosMoto: string[] = new Array(7);
            arregloDatosMoto[0] = '2';
            arregloDatosMoto[1] = readlineSync.question('Ingrese marca: ');
            arregloDatosMoto[2] = readlineSync.question('Ingrese modelo: ');
            arregloDatosMoto[3] = readlineSync.question('Ingrese año: ');
            arregloDatosMoto[4] = readlineSync.question('Ingrese color: ');
            arregloDatosMoto[5] = readlineSync.question('Ingrese patente: ');
            arregloDatosMoto[6] = readlineSync.question('Ingrese precio: ');


            let moto: Vehiculo = new Moto(parseInt(arregloDatosMoto[0]), arregloDatosMoto[1], arregloDatosMoto[2], parseInt(arregloDatosMoto[3]), arregloDatosMoto[4], arregloDatosMoto[5], parseInt(arregloDatosMoto[6]))

            let eleccionMoto = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionMoto == 1) {
                miRegistro.addVehiculo(moto);
            }
            else if (eleccionMoto == 2) {
                let posicionMoto = readlineSync.questionInt('En qué posicion de la lista se encuentra la moto que desea reemplazar?: \n')
                miRegistro.updateVehiculoPorIndice(moto, posicionMoto);
            }
            break;

        case 'camion':
            let arregloDatosCamion: string[] = new Array(7);
            arregloDatosCamion[0] = '3';
            arregloDatosCamion[1] = readlineSync.question('Ingrese marca: ')
            arregloDatosCamion[2] = readlineSync.question('Ingrese modelo: ')
            arregloDatosCamion[3] = readlineSync.question('Ingrese año: ')
            arregloDatosCamion[4] = readlineSync.question('Ingrese color: ')
            arregloDatosCamion[5] = readlineSync.question('Ingrese patente: ')
            arregloDatosCamion[6] = readlineSync.question('Ingrese precio: ')


            let camion: Vehiculo = new Camion(parseInt(arregloDatosCamion[0]), arregloDatosCamion[1], arregloDatosCamion[2], parseInt(arregloDatosCamion[3]), arregloDatosCamion[4], arregloDatosCamion[5], parseInt(arregloDatosCamion[6]));

            let eleccionCamion = readlineSync.questionInt('Presione 1 para agregarlo al listado o presione 2 para reemplazarlo por otro: \n');

            if (eleccionCamion == 1) {
                miRegistro.addVehiculo(camion);
            }
            else if (eleccionCamion == 2) {
                let posicionCamion = readlineSync.questionInt('En qué posicion de la lista se encuentra el camion que desea reemplazar?: \n');
                miRegistro.updateVehiculoPorIndice(camion, posicionCamion)
            }
            break;

        default: console.log('Ha ingresado un dato erróneo.\n');
    }

    tipoVehiculoAgregarOReemplazar = readlineSync.question('Ingrese el tipo de vehiculo que desea agregar o reemplazar (auto, moto o camion) o presione "ENTER" para salir: \n');
}

console.log('Seccion Busqueda, impresión y eliminacion de vehiculos \n');

let vehiculoBuscado: string = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n');
while (vehiculoBuscado != '') {
    switch (vehiculoBuscado) {
        case '1':
            let numeroListaBuscado: number = readlineSync.questionInt('Ingrese el numero en la lista del vehiculo buscado: \n');
            let eleccionUsuario1: number = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n');
            if (eleccionUsuario1 == 1) {
                console.log(miRegistro.getVehiculoPorIndice(numeroListaBuscado));
            }
            else if (eleccionUsuario1 == 2) {
                miRegistro.deleteVehiculoPorIndice(numeroListaBuscado);
                console.log('Vehiculo eliminado.\n');
            }
            break;
        case '2':
            let patenteBuscada: string = readlineSync.question('Ingrese la patente del vehiculo buscado: \n');
            let eleccionUsuario2: number = readlineSync.questionInt('Presione 1 para mostrarlo en pantalla o presiones 2 para eliminarlo: \n')
            if (eleccionUsuario2 == 1) {
                console.log(miRegistro.getVehiculoPorPatente(patenteBuscada));
            }
            else if (eleccionUsuario2 == 2) {
                miRegistro.deleteVehiculoPorPatente(patenteBuscada);
                console.log('Vehiculo eliminado.\n');
            }
            break;
        default:
            console.log('Ha ingresado un dato erróneo.\n');
    }
    vehiculoBuscado = readlineSync.question('Presione 1 para buscar un vehículo por numero de lista, presione 2 para buscar por patente o presione "ENTER" para salir: \n')
}

// impresion del listado total a los fines de control:
console.log('Impresion del listado actualizado con las modificaciones realizadas: \n');

miRegistro.imprimirTodosLosVehiculos();
console.log('\n');
miRegistro.imprimirListadoAutos();
console.log('\n');
miRegistro.imprimirListadoMotos()
console.log('\n');
miRegistro.imprimirListadoCamiones();

