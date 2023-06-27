import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { TutoComponent } from './pages/tuto/tuto.component';
import { DecksComponent } from './pages/decks/decks.component';
import { CardBackgroundComponent } from './components/card-background/card-background.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HistoryComponent,
    FooterComponent,
    TutoComponent,
    DecksComponent,
    CardBackgroundComponent,
    CardTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
