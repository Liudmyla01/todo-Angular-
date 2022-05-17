import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
// import {MatButtonModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoInformComponent } from './components/todo-inform/todo-inform.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SwiperModule } from "swiper/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TodoInformComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
