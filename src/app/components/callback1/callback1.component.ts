import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback1',
  templateUrl: './callback1.component.html',
  styleUrls: ['./callback1.component.css']
})
export class Callback1Component implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/home-clientes']);
    }, 1000);
  }

  ngOnInit() {

  }
}
