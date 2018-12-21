import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs';
import { score} from '../module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
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
  topScores: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getJSON().
    subscribe(data => {
                console.log(data.imageUrl);
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
                this.topScores=data.topScores;
console.log(this.topScores);
            });

  }

}
