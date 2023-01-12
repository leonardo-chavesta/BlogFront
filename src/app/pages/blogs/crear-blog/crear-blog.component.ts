import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogsService } from '../../../services/blogs.service'


@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrls: ['./crear-blog.component.scss']
})
export class CrearBlogComponent implements OnInit {

  forDataNew!:FormGroup 
  
  constructor(
    private blogSvc: BlogsService,
    private fb : FormBuilder,
    private router: Router, 
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.forDataNew = this.initForm()
  }

  onSubmit(): void{
    // this.forDataNew = this.initForm()
    this.blogSvc.postCrearPost(this.forDataNew.value).subscribe(()=> this.router.navigate(['list-blog']))
     
  }
  initForm(): FormGroup{
    return this.fb.group({
      titulo:[''],
      descripcion:[''],
    })
  }

  
}