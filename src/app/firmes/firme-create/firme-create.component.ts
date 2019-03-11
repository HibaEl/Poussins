/* tslint:disable:no-trailing-whitespace null null one-line */
import { Component, OnInit } from '@angular/core';
import {FirmeService} from '../../controller/service/firme.service';

@Component({
  selector: 'app-firme-create',
  templateUrl: './firme-create.component.html',
  styleUrls: ['./firme-create.component.css']
})
export class FirmeCreateComponent implements OnInit {

  constructor(private firmeService: FirmeService) {

  }

  ngOnInit() {
  }

  public get firme() {
    return this.firmeService.firmeCreate;
  }

  public get affectation() {
    return this.firmeService.affectationCreate;
  }

  public get affectations() {
    return this.firmeService.firmeCreate.affectationVo;
  }


  public addAffectation() {
    this.firmeService.addAffectation();
  }

  public save(){
    this.firmeService.save();
  }


}
