import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api-services/user-api.service';
import { UserApi } from '../user-api-model/user-api.model';

@Component({
  selector: 'app-user-api-detail',
  templateUrl: './user-api-detail.component.html',
  styleUrls: ['./user-api-detail.component.css']
})
export class UserApiDetailComponent implements OnInit {
  userId!: number;
  userApi!: UserApi;

  constructor(
    private route: ActivatedRoute,
    private userApiService: UserApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = +(params.get('id') ?? 0);
      this.getUserDetail(this.userId);
    });
  }

  getUserDetail(id: number): void {
    this.userApiService.getUserById(id).subscribe((user) => {
      this.userApi = user;
    });
  }

  goBack() {
    this.router.navigate(['/users-api']);
  }
}

