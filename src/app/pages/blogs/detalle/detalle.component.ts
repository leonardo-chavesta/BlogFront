import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalleBlog!: any
  id!: number
  formData!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private blogSvc: BlogsService,
    private readonly fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.obtenerDetalle();
  }
  obtenerDetalle(): void {
    this.router.params.pipe(take(1)).subscribe((params) => {
      this.id = params['id'];
      this.blogSvc.getDetalleBLog(this.id).subscribe(response => {
        this.detalleBlog = response
      })
    });
    this.formData = this.initForm();
  }
  onSubmit(): void {
    this.blogSvc.postComentarPost(this.id, this.formData.value).subscribe(() => this.obtenerDetalle())
  }

  initForm(): FormGroup {
    return this.fb.group({
      comentario: ['']
    })
  }


}
