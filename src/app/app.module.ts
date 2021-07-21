import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import { ImagineComponentComponent } from './imagine-component/imagine-component.component';
import { ReusableLineComponent } from './reusable-line/reusable-line.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    ImagineComponentComponent,
    ReusableLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
