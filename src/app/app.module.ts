import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {NavComponent} from './component/nav/nav.component';
import {FooterComponent} from './component/footer/footer.component';
import {IndexComponent} from './component/index/index.component';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './component/list/list.component';
import {DetailComponent} from './component/detail/detail.component';
import {LoginRegComponent} from './component/login-reg/login-reg.component';
import {CreateComponent} from './component/create/create.component';
import {ContactComponent} from './component/contact/contact.component';
import {UserProfileComponent} from './component/user-profile/user-profile.component';
import {UserHouseComponent} from './component/user-house/user-house.component';
import {ChangePassComponent} from './component/change-pass/change-pass.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {LoginGoogleComponent} from "./component/login-google/login-google.component";
import {RentListComponent} from './component/rent-list/rent-list.component';
import {RentedHistoryComponent} from './component/rented-history/rented-history.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TotalIncomeComponent} from './component/total-income/total-income.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RatingComponent} from "./component/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    LoginRegComponent,
    CreateComponent,
    ContactComponent,
    UserProfileComponent,
    UserHouseComponent,
    ChangePassComponent,
    LoginGoogleComponent,
    RentListComponent,
    RentedHistoryComponent,
    TotalIncomeComponent,
    RatingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        NgxPaginationModule,
        MDBBootstrapModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
