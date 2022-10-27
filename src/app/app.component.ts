import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PostService } from './services/post.service';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  posts:any;
  subtype:any;
  dogarr:any = [];
  img:any = 'https://www.zyciepabianic.pl/imageDb/Gallery/2019/rectangle/876/66386.jpg?0424112942';
  searchStr: String;
  imgarr:any = [];
  searchValue:any;
  link:any;
  @ViewChild("test", { read: ElementRef }) test: ElementRef<HTMLInputElement>;
  @ViewChild("wikipage") wikipage: ElementRef<HTMLInputElement>;


  constructor(private service:PostService) {}
  
  ngOnInit(): void {
      this.getPosts();
      
    }
    public ngAfterViewInit(): void {
  }

  getPosts(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = Object.keys(response.message);
        this.subtype = Object.values(response.message);
        for (var i = 0; i < this.subtype.length; i++) {
          if (this.subtype[i].length <= 0) {
            this.dogarr.push(this.posts[i])
          } else if (this.subtype[i].length > 0){
            for (const d of this.subtype[i]) {
              this.dogarr.push(d + " " + this.posts[i])
            }

          }
        }
      });
  }

  showPic(): void {
    
    this.service.showPic(this.searchStr)
    .subscribe(response => {
      if (response.status === "success"){
        this.imgarr = response.message;
          let x = Math.floor(Math.random()*this.imgarr.length) 
          this.img = this.imgarr[x]
          console.log(this.searchStr);
          
        } else {
          this.img = "https://www.zyciepabianic.pl/imageDb/Gallery/2019/rectangle/876/66386.jpg?0424112942"
        }
      })
    }
    
    showtest(): void {
      this.service.showtest()
      .subscribe(response => {
        this.imgarr = response.message;
        console.log("This is showtest function");
        console.log(this.test.nativeElement);
    })
  }
}




