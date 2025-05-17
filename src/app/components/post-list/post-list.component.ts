
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="grid gap-6">
      @for (post of posts; track post.id) {
        <article class="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 class="text-2xl font-bold mb-2">
            <a [routerLink]="['/post', post.slug]" class="hover:text-blue-600">
              {{post.title}}
            </a>
          </h2>
          <p class="text-gray-600 mb-4">{{post.excerpt}}</p>
          <div class="text-sm text-gray-500">{{post.date}}</div>
        </article>
      }
    </div>
  `
})
export class PostListComponent {
  posts = [
    {
      id: 1,
      title: 'Первый пост',
      slug: 'first-post',
      excerpt: 'Краткое описание первого поста...',
      date: '2024-02-20'
    },
    {
      id: 2,
      title: 'Второй пост',
      slug: 'second-post',
      excerpt: 'Краткое описание второго поста...',
      date: '2024-02-21'
    }
  ];
}
