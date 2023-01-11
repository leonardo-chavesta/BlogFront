import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public blogs: any = [];
  private query!: string ;
 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private readonly blogSvc: BlogsService
 ){}
 ngOnInit(): void {
   this.getListado();
 }


 private getListado(): void{
  this.blogSvc.getListado().subscribe((result: any) => {
    if (result.length) {
      this.blogs = result;
    } else {
      this.blogs = [];
    }
  })
 } 

}
