import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneService } from '../app/personne.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'insert', loadChildren: './insert/insert.module#InsertPageModule' },
  { path: 'liste-personne', loadChildren: './liste-personne/liste-personne.module#ListePersonnePageModule' },
  { path: '**', component: PersonneService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
