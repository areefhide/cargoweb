import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import {LoginUser} from '../../login/login-user.model';
import {Error} from '../../class/error';
import {ErrorHeader} from '../../class/error-header';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginUser = new LoginUser('','');
  message: String ="Sign in to start your session";
  error : ErrorHeader = new ErrorHeader();
  success: Boolean = true;
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
            this.error = error as ErrorHeader;
            this.success = this.error.error.success;
            this.message = this.error.error.msg;   
            console.log(this.success);         
        });
  }

  

}
