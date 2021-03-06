import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptFormsModule, NativeScriptCommonModule } from '@nativescript/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '@src/app/app-routing.module.tns';
import { AppComponent } from '@src/app/app.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { ItemComponent } from '@src/app/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent,
    ItemComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
