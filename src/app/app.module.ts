import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user-details/user-details.component";


@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: UserListComponent },
            { path: 'user/:id', component: UserComponent },
        ]),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }