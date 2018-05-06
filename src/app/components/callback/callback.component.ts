import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/instalaciones']);
    }, 1000);
  }

  ngOnInit() {

  }
}
