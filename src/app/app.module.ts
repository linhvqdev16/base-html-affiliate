import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page/home-page.component';
import { TopHeaderPageComponent } from './views/default/header-page/top-header-page/top-header-page.component';
import { HeaderPageComponent } from './views/default/header-page/header-page/header-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopHeaderPageComponent,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
