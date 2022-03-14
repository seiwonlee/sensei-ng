import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  { path: '', component: LayoutBaseComponent, 
      children: [{ path: '', component: DashboardComponent }]
  },
  { path: 'sales', component: LayoutBaseComponent, 
      children: [{ path: '', component: DashboardComponent }]
  },
  { path: 'todo', component: LayoutBaseComponent, 
      children: [{ path: '', component: TodoComponent }]
  },
  { path: 'todo/:view', component: LayoutBaseComponent, 
      children: [{ path: '', component: TodoComponent }]
  },
  { path: 'todo/tags/:view', component: LayoutBaseComponent, 
      children: [{ path: '', component: TodoComponent }]
  },
  { path: 'documentation', component: LayoutBaseComponent, 
      children: [{ path: '', component: DocumentationComponent }]
  },

  { path: 'login', component: LoginComponent, pathMatch: "full"},
  { path: 'error', component: ErrorComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
