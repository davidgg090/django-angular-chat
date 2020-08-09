import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'; // for routing
import { HttpClientModule } from '@angular/common/http'; // for the http client
import { FormsModule } from '@angular/forms'; // to handle forms

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ChatComponent },
      { path: 'join', component: JoinComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}