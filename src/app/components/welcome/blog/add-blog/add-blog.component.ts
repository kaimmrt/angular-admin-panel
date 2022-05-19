import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private nzMessage: NzNotificationService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.createBlogForm();
  }

  createBlogForm = () => {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  addBlog() {
    if (this.blogForm.valid) {

      let blogModel = Object.assign({}, this.blogForm.value)
      this.blogService.add(blogModel).subscribe(data => {
        this.nzMessage.create('success', 'Success', "blog has been successfully added")
        this.createBlogForm()
      }, dataErr => {
        this.nzMessage.create('error', 'Error', dataErr.error.message)
      })
    }
  }
}
