export class Article{
    
    constructor(public title:string,
                public link:string,
                public votes:number|null){
    votes = votes ||0;
    }

    voteUp():void{
        if(this.votes !== null){
            this.votes +=1;
        }
    }

    voteDown():void{
        if(this.votes !== null){
            this.votes -=1;
        }
    }
}