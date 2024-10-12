import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'b';

  numero1 : number = 0;
  numero2 : number = 0;
  resultado : number = 0;

  //Método para realizar la operación según la opción seleccionada
  operar(operacion : string) {
    switch (operacion) {
      case 'suma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'resta':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacion':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'division':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          this.resultado = NaN; //Manejar división por cero
        }
        break;
      case 'potencia':
        this.resultado = Math.pow(this.numero1, this.numero2);
        break;      
      default:
        this.resultado = 0;
        break;
    }
  }
}
