import { Consumidor } from "./consumidor";

export class Demanda {
    id_demanda: number;
    nombre_producto: string;
    cantidad_producto: number;
    ubicacion_producto: string;
    cedula_consumidor: Consumidor;
}
