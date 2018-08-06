import { Component, OnInit } from '@angular/core';


export interface House {
  street: string;
  number: string;
}
@Component({
  selector: 'app-house-selector',
  templateUrl: './house-selector.component.html',
  styleUrls: ['./house-selector.component.css']
})


export class HouseSelectorComponent implements OnInit {

  houses: House[] = [
    {street: 'Новикова', number: '12б'},
    {street: 'Преображенская', number: '16'},
    {street: 'Атамана Головатого', number: '1'}
  ];
  constructor() { }

  ngOnInit() {
  }
}
