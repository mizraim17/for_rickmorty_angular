export class Studend {
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  calificacion: number;
  imagen: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    sexo: string,
    calificacion: number,
    imagen: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.calificacion = calificacion;
    this.imagen = imagen;
  }
}
