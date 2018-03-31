import { Component, OnInit } from '@angular/core';
import {ItemContent} from '../../../class/item-content';

@Component({
  selector: 'app-pengiriman',
  templateUrl: './pengiriman.component.html',
  styleUrls: ['./pengiriman.component.css']
})
export class PengirimanComponent implements OnInit {

  item : ItemContent;
  constructor() { 
    this.item = new ItemContent();
  }

  ngOnInit() {
  }

}
