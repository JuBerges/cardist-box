import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { HistoryComponent } from './pages/history/history.component';
import { DecksComponent } from './pages/decks/decks.component';
import { TutoComponent } from './pages/tuto/tuto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },{path: 'history', component: HistoryComponent}, {path: 'cards', component: DecksComponent}, {path: 'tuto', component: TutoComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


