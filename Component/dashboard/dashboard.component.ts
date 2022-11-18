import { Component, OnInit } from '@angular/core';
import { UrlResponse } from 'src/app/Models/UrlResponse';
import { ShortenerService } from 'src/app/Service/shortener.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlResponse!: UrlResponse;
  shortCode!: string;
  shortCodeArray: any[] = [];
  url!: string;
  button1 = true;
  button2 = false;
  constructor(private shortenerService: ShortenerService, private notification: NzNotificationService,) {}

  ngOnInit(): void {}

  getShortenedUrl(url: string) {
    this.button1 = false;
    this.button2 = true;
    this.shortenerService
      .getShortUrl(url)
      .subscribe((response: UrlResponse) => {
        this.urlResponse = response;
        if (this.urlResponse.ok) {
          this.shortCode = this.urlResponse.result.short_link;
          //then push to an array
          this.shortCodeArray.push(this.shortCode);
          this.url = '';
          this.notification.success('Success', 'Enjoy!!!');
        }
        this.button2 = false;
        this.button1 = true;
      },
      error => {
        this.notification.error('Error', 'Please enter a valid URL');
        this.button2 = false;
        this.button1 = true;
      });
  }

}
