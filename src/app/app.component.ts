import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {  

    public account = {  
      password: null  
    };  
  
    public barLabel: string = "Password strength Check:";

    constructor() { }  
    ngOnInit() {  
  
    }  
}
