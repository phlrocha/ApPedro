import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { EducationalComponent } from './views/educational/educational.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

const routes: Routes = [ //Define as rotas das páginas
  {path:'',component:HomeComponent},
  {path:'educational',component:EducationalComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'portfolio',component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
