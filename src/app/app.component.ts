import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'queen-game';

  constructor(){}

  chess : Array<Array<number>> = []
  ngOnInit(): void {
    
    let widthEle = document.getElementById("width00") 
    console.log(widthEle)
    for(let i=0;i<8;i++){
      let x = new Array(8)
      this.chess.push(x)
    }
    this.refresh()
  }
  
  refresh(){
    for(let i=0;i<8;i++){
      for(let j=0;j<8;j++)
        this.chess[i][j]=0
    }
  }

  game(i:number, j:number){
    this.refresh();
    for(let x = 0; x<8; x++){
      for(let y=0; y<8;y++){
        if(x==i || y==j ||Math.abs(x-i)==Math.abs(y-j))
          this.chess[x][y]=1
      }
    } 
    this.chess[i][j] = 2;
  }
  
}
