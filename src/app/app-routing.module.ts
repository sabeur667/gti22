import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {WordComponent} from "./directives/word/word.component";
import {FirstComponent} from "./components/first/first.component";
import {ColorComponent} from "./components/color/color.component";

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: WordComponent},
  {path: 'color/:couleur', component: ColorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
