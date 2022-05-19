import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blog_id!: string | null;
  blogForm!: FormGroup;
  blog!: Blog;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private nzMessage: NzNotificationService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blog_id = this.route.snapshot.paramMap.get('id')
    console.log(this.blog_id)

    this.findBlog();
  }

  findBlog() {
    this.blogService.findBlog(this.blog_id).subscribe(data => {
      this.blog = data
      this.blogForm = this.fb.group({
        title: [data.title, [Validators.required]],
        content: [data.content, [Validators.required]],
      });
    })
  }

  update() {
    let blogModel = Object.assign({}, this.blogForm.value)
    console.log(blogModel)
    this.blogService.updateBlog(this.blog_id, blogModel).subscribe(data => {
      this.router.navigate(['/welcome/blog'])
    })
  }
}
