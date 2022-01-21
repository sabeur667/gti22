import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MES_ROUTES} from "../../config/routing.config";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.toaster.info(`A la prochaine`);
    this.router.navigate([MES_ROUTES.login]);
  }

}
