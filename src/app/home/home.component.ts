import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import  {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  img: any;
  price: any;
  latestReviewDate: any;
  domain: any;
  name: any;
  title: any;
  sourceCategory: any;
  product_id: any;
  createdAt: any;
  reviewCount: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getJSON().
    subscribe(data => {
                // console.log(data.imageUrl);
                this.img=data.imageUrl;
                this.price=data.price;
                this.latestReviewDate=data.latestReviewDate;
                this.domain= data.domain;
                this.name= data.name;
                this.title= data.title;
                this.sourceCategory=data.sourceCategory;
                this.product_id = data.product_id;
                this.createdAt= data.createdAt;
                this.reviewCount=data.reviewCount;
            });

  }

}
