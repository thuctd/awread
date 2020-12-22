import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage implements OnInit {
  constructor(
    private http: HttpClient,
  ) {
    this.http.get('/graphql/api').subscribe(c => console.log('api here', c))
  }

  ngOnInit(): void { }
}
