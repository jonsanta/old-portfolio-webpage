import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { LeftNavBarItemComponent } from './navbar/navbar-sections/left-nav-bar-item/left-nav-bar-item.component';
import { LogoNavBarItemComponent } from './navbar/navbar-sections/logo-nav-bar-item/logo-nav-bar-item.component';
import { RightNavBarItemComponent } from './navbar/navbar-sections/right-nav-bar-item/right-nav-bar-item.component';
import { DropdownitemComponent } from './navbar/dropdownitem/dropdownitem.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    HomeComponent,
    LeftNavBarItemComponent,
    LogoNavBarItemComponent,
    RightNavBarItemComponent,
    DropdownitemComponent,
    SkillComponent,
    ContactComponent,
    ProjectComponent,
    SkillsContainerComponent
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
