import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teme_Angular';

  class = ["Twhite","Tblack"]

  btnName = ["White","Black"];

  i: number = 0;

  teme(){
    if(this.i == 0){
      this.i++;
    }else if(this.i == 1){
      this.i--;
    }
    
  }

}
