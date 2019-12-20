import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('refClassToggler', {static: true}) refClassToggler: ElementRef;

  toogleSideBar() {
    const refElement = this.refClassToggler.nativeElement;
    refElement.classList.toggle('active_sidebar');
  }

}
