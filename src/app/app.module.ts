import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftNavBarItemComponent } from './nav-bar/navbar-sections/left-nav-bar-item/left-nav-bar-item.component';
import { LogoNavBarItemComponent } from './nav-bar/navbar-sections/logo-nav-bar-item/logo-nav-bar-item.component';
import { RightNavBarItemComponent } from './nav-bar/navbar-sections/right-nav-bar-item/right-nav-bar-item.component';
import { DropdownitemComponent } from './nav-bar/dropdownitem/dropdownitem.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavBarItemComponent,
    LogoNavBarItemComponent,
    RightNavBarItemComponent,
    DropdownitemComponent,
    SkillComponent,
    ContactComponent,
    ProjectComponent,
    SkillsContainerComponent,
    NavBarComponent
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
