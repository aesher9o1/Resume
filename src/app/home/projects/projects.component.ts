import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private fetched: boolean = false;
  images: GalleryItem[]=[];
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('projects').valueChanges().subscribe(res=>{
      for(var i=0;i<res.length;i++)
        this.images.push(new ImageItem({src: res[i]["image"], title: res[i]["desc"] }))

      this.fetched= true;  
  })
  }

}
