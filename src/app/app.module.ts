import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { HomeComponent } from './pages/component/home/home.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { CreateProductComponent } from './pages/component/create-product/create-product.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ViewProductsComponent } from './pages/component/view-products/view-products.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateProductComponent,
    LoginComponent,
    ViewProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ToastModule,
    TableModule,
    FileUploadModule,
    TagModule,
    RatingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextModule,
    DynamicDialogModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    RouterModule.forRoot([])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
