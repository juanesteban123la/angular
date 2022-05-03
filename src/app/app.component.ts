import { Component } from '@angular/core';
import { Curso } from './curso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ruta_imagen: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  dato_input: string = "hola mundo";
  

  //se pueden definir public y private

  array_cursos : Curso[] = [
    {
      nombre: "angular",
      horas_duracion: 2
    },
    {
      nombre: "react",
      horas_duracion: 3
    }
  ];

  cambiar_curso_nombre(event: Event){
    const elemento = event.target as HTMLInputElement;
    console.log(elemento.value);
    this.array_cursos[0].nombre = elemento.value;
  }

  mostrar_dato_input(){
    const datos = (<HTMLInputElement>document.getElementById("input")).value;
    console.log(datos);
    this.dato_input = datos;

  }

}
