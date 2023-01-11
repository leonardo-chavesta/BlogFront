import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Blog } from 'src/app/components/interfaces/blog.interface';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalleBlog!: any

  blog!: {}
  constructor(
    private router: ActivatedRoute,
    private blogSvc: BlogsService,
  ){}

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.blogSvc.getDetalleBLog(id).subscribe(response => {
        this.detalleBlog = response
        console.log(this.detalleBlog)
      })});

  }


}
