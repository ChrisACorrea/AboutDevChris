import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNg modules */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';

/* Own components */
import { NavbarComponent } from './components/navbar/navbar.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

/* Others */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    PortfolioComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    DividerModule,
    FontAwesomeModule,
    ImageModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
