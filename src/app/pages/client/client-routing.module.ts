import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VerCapacitacionPageComponent } from './pages/ver-capacitacion-page/ver-capacitacion-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'details/:id', component: VerCapacitacionPageComponent },
      { path: 'quiz/:id', component: QuizPageComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
