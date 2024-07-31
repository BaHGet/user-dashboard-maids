import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MatToolbarModule,
    MatFormFieldModule
  ],
  standalone: true
})
export class AppComponent {
  title = 'user-dashboard';
  onSearch(value: string | null): void {
    console.log('Search ID:', value);
    // Implement your search logic here
  }
}
