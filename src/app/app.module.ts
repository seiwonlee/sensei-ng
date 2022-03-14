import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverviewBannerComponent } from './components/widgets/overview-banner/overview-banner.component';
import { OrdersComponent } from './components/widgets/orders/orders.component';
import { RecentSalesComponent } from './components/widgets/recent-sales/recent-sales.component';
import { HttpClientModule } from '@angular/common/http';
import { BestSellersComponent } from './components/widgets/best-sellers/best-sellers.component';
import { SessionLocationsComponent } from './components/widgets/session-locations/session-locations.component';
import { SessionSocialStaticComponent } from './components/widgets/session-social-static/session-social-static.component';
import { RevenueStreamStaticComponent } from './components/widgets/revenue-stream-static/revenue-stream-static.component';
import { TasksStaticComponent } from './components/widgets/tasks-static/tasks-static.component';
import { TodoComponent } from './pages/todo/todo.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutBaseComponent,
    DashboardComponent,
    MenuComponent,
    TopbarComponent,
    FooterComponent,
    OverviewBannerComponent,
    OrdersComponent,
    RecentSalesComponent,
    BestSellersComponent,
    SessionLocationsComponent,
    SessionSocialStaticComponent,
    RevenueStreamStaticComponent,
    TasksStaticComponent,
    TodoComponent,
    DocumentationComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
