import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { RulesModalComponent } from './components/rules-modal/rules-modal.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { ChoicesComponent } from './components/choices/choices.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    RulesModalComponent,
    ScoreBoardComponent,
    FooterComponent,
    ResultComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
