import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId = '';

  constructor(private activatedRoute: ActivatedRoute) {};

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        this.userId = paramMap.get('userId');
      });
  }



}
