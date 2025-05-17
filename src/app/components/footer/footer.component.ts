
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white py-4 mt-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Мой блог</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
