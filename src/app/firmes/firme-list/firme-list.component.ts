/* tslint:disable:one-line no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {FirmeService} from '../../controller/service/firme.service';
import {Firme} from '../../controller/model/firme.model';

@Component({
  selector: 'app-firme-list',
  templateUrl: './firme-list.component.html',
  styleUrls: ['./firme-list.component.css']
})
export class FirmeListComponent implements OnInit {

  constructor(private firmeService: FirmeService) { }

  ngOnInit() {
   this.firmeService.findAll();
  }

  public findAffectationByReferenceFirme(firme: Firme){
    this.firmeService.findAffectationByReferenceFirme(firme);
  }
  public get firmes(){
    return this.firmeService.firmes;
  }

  public get firmeSelected(){
    return this.firmeService.firmeSelected;
  }
}
