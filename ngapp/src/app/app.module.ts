import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ToggleBoxComponent } from './toggle-box/toggle-box.component';
import { PaletteComponent } from './palette/palette.component';
import { SlideComponent } from './slide/slide.component';
import { ButtonDirective } from './directives/button.directive';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';
import { ChuckquoteComponent } from './chuckquote/chuckquote.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ToggleBoxComponent,
    PaletteComponent,
    SlideComponent,
    ButtonDirective,
    TwoWayDatabindingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    DemoComponent,
    ChuckquoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
