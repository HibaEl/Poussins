/* tslint:disable:max-line-length semicolon whitespace no-trailing-whitespace one-line null null null null align comment-format typedef-whitespace null null null no-inferrable-types quotemark variable-name */
import { Injectable } from '@angular/core';
import {Firme} from '../model/firme.model';
import {reference} from '@angular/core/src/render3';
import {Affectation} from '../model/affectation.model';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirmeService {

  private _url:string="http://localhost:8099/firme-api/firmes/"
  private _firmeCreate: Firme = new Firme('', '', 0, 0, 0, 0, 0);
  private _affectationCreate: Affectation = new Affectation();
  private _firmes:Array<Firme>;
  constructor(private http:HttpClient) { }

  public addAffectation(){
  this.firmeCreate.nbrPoussinFemale += this.affectationCreate.nbrFemale;
  this.firmeCreate.nbrPoussinMale += this.affectationCreate.nbrMale;
  this.firmeCreate.totalPoussin = this.firmeCreate.nbrPoussinMale + this.firmeCreate.nbrPoussinFemale;
  this.firmeCreate.placeRestant = this.firmeCreate.capacite - this.firmeCreate.totalPoussin;

    //const affectationClone= new Affectation(this.affectationCreate.nbrMale,this.affectationCreate.nbrFemale,this.affectationCreate.dateAffectation,this.affectationCreate.refe,this.affectationCreate.referenceImport);
    const affectationClone = this.cloneParam();
    this.firmeCreate.affectationVo.push(affectationClone);
    this.affectationCreate = new Affectation();
  }
  public cloneParam(){
    // @ts-ignore
    const affectationClone = new Affectation();
    affectationClone.dateAffectation=this.affectationCreate.dateAffectation;
    affectationClone.nbrMale=this.affectationCreate.nbrMale;
    affectationClone.nbrFemale= this.affectationCreate.nbrFemale;
    affectationClone.refe=this.affectationCreate.refe;
    affectationClone.referenceImport=this.affectationCreate.referenceImport;
    return affectationClone;
    }

    public save(){
    this.http.post<Firme>(this.url,this.firmeCreate).subscribe(
      data=>{
        console.log("ok");
        this.firmeCreate = new Firme('','',0,0,0,0,0);
        this.affectationCreate = new Affectation();
      },error=> {console.log("error");
      }
      );
    }

  get firmes(): Array<Firme> {
    if(this._firmes == null){
      // @ts-ignore
      this.http.get<Array<Firme>>(this._url).subscribe(
        data => {
          this._firmes = data;
      },error =>{
       console.log("error while loading firmes !!")
        }
      );
    }
    return this._firmes;
  }

  set firmes(value: Array<Firme>) {
    this._firmes = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get firmeCreate(): Firme {
    return this._firmeCreate;
  }

  set firmeCreate(value: Firme) {
    this._firmeCreate = value;
  }

  get affectationCreate(): Affectation {
    return this._affectationCreate;
  }

  set affectationCreate(value: Affectation) {
    this._affectationCreate = value;
  }


}
