
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-gray-800 text-white py-4">
      <nav class="container mx-auto px-4">
        <a routerLink="/" class="text-xl font-bold">Мой блог</a>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
