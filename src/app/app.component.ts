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

  showMenu() {
    let menu = document.getElementById('menu');
    menu.style.display = 'block'
    
    menu.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';
    let name = document.getElementsByClassName('name')[0];
    name['style']['display'] = 'none'
  }

  closeMenu() {
    console.log('I am working')
    let menu = document.getElementById('menu');
    if (menu.style.display == 'block') {
      menu.style.display = 'none'
    } 
  }
}
