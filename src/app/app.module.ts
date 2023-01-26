import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { ManagerMockService } from "./manager/services/manager-mock.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => AuthService.getToken(),
    //     allowedDomains: ["localhost:3010"],
    //     disallowedRoutes: ["http://localhost:3010/login"],
    //   },
    // }),
  ],
  providers: [
    {
      provide: 'IManagerService',
      useClass: ManagerMockService
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
