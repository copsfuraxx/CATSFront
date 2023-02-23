import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Appel} from "../model/appel";

@Injectable({
  providedIn: 'root'
})
export class ValeursService {
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Attributs ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  private source = new BehaviorSubject({
    nombreAppels: 0,
    tempsAttenteMoyen: 0,
    tempsCommunicationMoyen: 0,
    gtAppeleId: [""],
    gtAppele: [""],
    labelsStatut: [""],
    valuesStatut: [0],
    nbTransfert: 0,
    moyenneTransfertTentatives: 0,
    labelsMotifFinAppel: [""],
    valeursMotifFinAppel: [0],
    nbDebordement: 0,
    nbSupSeuil: 0
  });

  current = this.source.asObservable();

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Constructeurs ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  constructor() { }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Setters //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  setValues(data: Appel) {
    this.source.next({
      nombreAppels: data.nbrAppel,
      tempsAttenteMoyen: data.moyenneTempsAttente,
      tempsCommunicationMoyen: data.moyenneTempsTravail,
      gtAppeleId: data.gtAppeleId,
      gtAppele: data.gtAppele,
      labelsStatut: data.labelsStatut,
      valuesStatut: data.valuesStatut,
      nbTransfert: data.nbTransfert,
      moyenneTransfertTentatives: data.moyenneTransfertTentatives,
      labelsMotifFinAppel: data.labelsCauseFin,
      valeursMotifFinAppel: data.valuesCauseFin,
      nbDebordement: data.nbDebordement,
      nbSupSeuil: data.nbSupSeuil
    });
  }
}