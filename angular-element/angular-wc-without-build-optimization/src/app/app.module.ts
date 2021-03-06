import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloWorldComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);    
  }

  // ngDoBootstrap() {
  // }
}
