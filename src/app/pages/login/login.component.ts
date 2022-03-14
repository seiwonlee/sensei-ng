import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string="demo";
  password:string="demo";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn(e){
    this.router.navigate(['/']);
  }
}
