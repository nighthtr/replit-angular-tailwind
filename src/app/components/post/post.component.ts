
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  template: `
    <article class="prose lg:prose-xl mx-auto">
      <h1>{{post.title}}</h1>
      <div class="text-gray-500 mb-4">{{post.date}}</div>
      <div [innerHTML]="post.content"></div>
    </article>
  `
})
export class PostComponent {
  post = {
    title: 'Заголовок поста',
    date: '2024-02-20',
    content: '<p>Содержание поста...</p>'
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('Post slug:', params['slug']);
      // Здесь будет логика загрузки поста по slug
    });
  }
}
