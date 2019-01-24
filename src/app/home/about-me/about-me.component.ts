import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  resumeLink=''  
  
  constructor(private af: AngularFireDatabase) { 
    this.af.object('resume').valueChanges().subscribe(res=>{
        this.resumeLink =''+res
    })
  }
  
  ngOnInit() {
  
  }

}
