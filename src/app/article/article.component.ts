import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from 'src/app/article/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  articles:Article[];

  constructor() {
    this.articles = [
      new Article('Angular','http://angular.io',10),
      new Article('Asp.net core','https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0',14),
      new Article('Javascript','https://www.javascript.com/',11)
    ];
  }
  voteUp(){
   //this.article.voteUp();
    return false;
  }
  voteDown(){
   // this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
