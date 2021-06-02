import { Component } from '@angular/core';
import { Article } from 'src/app/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   articles:Article[];

  constructor() {
    this.articles = [
      new Article('Angular','http://angular.io',10),
      new Article('Asp.net core','https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0',14),
      new Article('Javascript','https://www.javascript.com/',11)
    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value ='';
    link.value ='';
    return false;
  }
}
