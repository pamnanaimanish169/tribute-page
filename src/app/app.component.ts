import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tribute-page';

  constructor(private myElement: ElementRef) {}

  gotoSection() {
    let el = this.myElement.nativeElement.querySelector("#quick_stats");
    console.log(el)
    el.scrollIntoView()
  }
}
