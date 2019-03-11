/* tslint:disable:max-line-length */
import {Affectation} from './affectation.model';
export class Firme {
  public affectationVo = Array<Affectation>();
    constructor(public reference: string, public nom: string, public capacite: number, public nbrPoussinMale: number, public nbrPoussinFemale: number, public totalPoussin: number, public placeRestant: number ) {}
}
