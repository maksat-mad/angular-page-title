import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeModule } from './feature/home/home.module';
import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategyService } from './custom-title-strategy.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [
    { provide: TitleStrategy, useClass: CustomTitleStrategyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
