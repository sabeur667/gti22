//  Framework Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { AmpouleComponent } from './directives/ampoule/ampoule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { UsdToBtcPipe } from './pipes/usd-to-btc.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import {LoggerService} from "./services/logger.service";
import {SayHelloService} from "./services/say-hello.service";
import { TodoComponent } from './todo/todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    NgStyleComponent,
    WordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowDirective,
    UsdToBtcPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
