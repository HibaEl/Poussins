/* tslint:disable:one-line no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {FirmeService} from '../../controller/service/firme.service';

@Component({
  selector: 'app-firme-list',
  templateUrl: './firme-list.component.html',
  styleUrls: ['./firme-list.component.css']
})
export class FirmeListComponent implements OnInit {

  constructor(firmeService: FirmeService) { }

  ngOnInit() {

    // @ts-ignore
    this.firmeService.findAll();
  }
public get firmes(){
// @ts-ignore
  return this.firmeService.firmes;
}
}
