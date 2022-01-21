import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {WordComponent} from "./directives/word/word.component";
import {FirstComponent} from "./components/first/first.component";
import {ColorComponent} from "./components/color/color.component";
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {BackComponent} from "./components/back/back.component";
import {SecondComponent} from "./components/second/second.component";
import {FrontComponent} from "./components/front/front.component";
import {NF404Component} from "./components/nf404/nf404.component";
import {LoginComponent} from "./auth/login/login.component";
import {AddCvComponent} from "./cv/add-cv/add-cv.component";

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddCvComponent},
      {path: ':id', component: DetailCvComponent},
  ]},
  {path: 'admin', component: BackComponent, children: [
      {path: 'second', component: SecondComponent}
  ]},
  {path: '', component: FrontComponent, children: [
      {path: 'todo', component: TodoComponent},
      {path: 'word', component: WordComponent},
      {path: 'color/:couleur', component: ColorComponent},
  ]},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
