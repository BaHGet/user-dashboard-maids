import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user-details/user-details.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: '', component: UserListComponent },
            { path: 'user/:id', component: UserComponent },
        ]),
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }