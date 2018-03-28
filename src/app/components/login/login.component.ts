import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../../auth/auth.service';
import {LoginUser} from '../../login/login-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginUser = new LoginUser('','');
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authservice.logout();
  }
  login(){       
    this.authservice.login(this.model.username, this.model.password)
        .subscribe(
          data=> {            
            this.router.navigate(['/']);
          },error => {
            console.log(error);
        });
  }

}
