import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurservicesComponent } from './Pages/ourservices/ourservices.component';
import { SubgstComponent } from './Pages/subgst/subgst.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ourservices', component: OurservicesComponent},
  {path: 'ourservices/gst', component: SubgstComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
