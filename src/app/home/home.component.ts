import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink, TranslatePipe]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}
