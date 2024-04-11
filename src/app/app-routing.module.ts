import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { MigliorinotizieComponent } from './migliorinotizie/migliorinotizie.component';
import { TopnotizieComponent } from './topnotizie/topnotizie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'chisiamo', component: ChisiamoComponent},
  { path: 'migliorinotizie', component: MigliorinotizieComponent},
  { path: 'topnotizie', component: TopnotizieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

