import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isMenuOpen: boolean = false; // Variabile per tenere traccia dello stato del menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle dello stato del menu
  }

}
