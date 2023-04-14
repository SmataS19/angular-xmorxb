import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnEditionComponent } from './on-edition/on-edition.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: 'on-edition', component: OnEditionComponent }, // Nueva ruta para OnEditionComponent
];

@NgModule({
  declarations: [
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
    OnEditionComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
