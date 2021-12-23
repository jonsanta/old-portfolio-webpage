import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Header/Home/home.component';
import { LeftNavBarItemComponent } from './Header/NavigationBar/left-nav-bar-item/left-nav-bar-item.component';
import { LogoNavBarItemComponent } from './Header/NavigationBar/logo-nav-bar-item/logo-nav-bar-item.component';
import { RightNavBarItemComponent } from './Header/NavigationBar/right-nav-bar-item/right-nav-bar-item.component';
import { DropdownitemComponent } from './Header/dropdownitem/dropdownitem.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftNavBarItemComponent,
    LogoNavBarItemComponent,
    RightNavBarItemComponent,
    DropdownitemComponent,
    SkillComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
