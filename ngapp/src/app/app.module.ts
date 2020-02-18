import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ToggleBoxComponent } from './toggle-box/toggle-box.component';
import { PaletteComponent } from './palette/palette.component';
import { SlideComponent } from './slide/slide.component';
import { ButtonDirective } from './directives/button.directive';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ToggleBoxComponent,
    PaletteComponent,
    SlideComponent,
    ButtonDirective,
    TwoWayDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
