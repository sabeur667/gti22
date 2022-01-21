import { Component, OnInit } from '@angular/core';
import {CredentialsDto} from "../../dtos/auth/credentials.dto";
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MES_ROUTES} from "../../config/routing.config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.id);
        this.toaster.success('Bienvenu vous êtes connecté à votre compte');
        this.router.navigate([MES_ROUTES.cvList]);
      },
      (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    )
  }
}
