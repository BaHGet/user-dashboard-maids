import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from './services/Search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  searchInput: string = '';
  constructor(private searchService: SearchService) {}
  
  onSearch(event:any) {
    this.searchInput = event.target.value;
    this.searchService.updateSearchTerm(this.searchInput);
  }
}
