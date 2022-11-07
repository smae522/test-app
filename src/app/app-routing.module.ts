import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListWriterComponent } from './container/list-writer/list-writer.component';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'post-list', component: ListWriterComponent },
  // {
  //   path: '', component: ProtectedComponent,
  //   children: [
  //     { path: 'post-list', component: ListWriterComponent, canActivate: [AuthGuard] },
  //   ]
  // },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
