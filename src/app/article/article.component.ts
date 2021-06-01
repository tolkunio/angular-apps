import { Component, HostBinding, OnInit,Input } from '@angular/core';
import { Article } from 'src/app/article/article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article ;

  constructor() { 
  }

  ngOnInit(): void {
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }
  voteDown():boolean{
    this.article.voteDown();
    return false;
  }

}
