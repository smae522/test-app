import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CreateWriterComponent } from './container/create-writer/create-writer.component';
import { UpdateWriterComponent } from './container/update-writer/update-writer.component';
import { DeleteWriterComponent } from './container/delete-writer/delete-writer.component';
import { ListWriterComponent } from './container/list-writer/list-writer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './interceptors/interceptor.service';
// import { HeaderComponent } from './protected/header/header.component';
// import { ProtectedComponent } from './protected/protected.component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateWriterComponent,
    UpdateWriterComponent,
    DeleteWriterComponent,
    ListWriterComponent,
    // HeaderComponent,
    // ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  entryComponents:[
    CreateWriterComponent,
    UpdateWriterComponent,
    DeleteWriterComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
