import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestApiService } from './providers/rest-api-service/rest-api.service';
import { LoadingProvider } from './providers/loading/loading';
import { ParamsService } from './providers/params/params.service';
import { ChatService } from './providers/chat-service/chat.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios', scrollPadding: 'false' }), HttpClientModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    RestApiService,
    LoadingProvider,
    ParamsService,
    ChatService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
