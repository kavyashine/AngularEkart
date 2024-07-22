import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css' 
})
export class SearchComponent {

  //Create an event
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

  searchText:string='';

  updateSearchText(event: any){
   this.searchText = event.target.value
  }

}


