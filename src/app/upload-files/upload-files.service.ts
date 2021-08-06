import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  winnersQuantity: number = 1

  prizes: string[] = []

  participants: string[] = []

  constructor() { }

}
