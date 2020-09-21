import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';


fieldArray: Array<any> = [
    {
      'title': '',
      'comment':''
    }
  ];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = '';
  isEditItems: boolean;

  // candidates: any[] = [
  //   {
  //     'name': 'Default Name',
  //     'title': 'Job Title',
  //   },
  //   {
  //     'name': 'Default Name 2',
  //     'title': 'Job Title',
  //   }
  // ];

  addFieldValue(index) {
    if (this.fieldArray.length <= 10) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  deleteFieldValue(index: number) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
}
