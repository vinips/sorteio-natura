import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/upload-files/upload-files.service';
import { Winner } from './winner.model';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  winners: Winner[] = []

  error: boolean = false

  constructor(
    public uploadFilesService: UploadFilesService
  ) { }

  ngOnInit(): void {
    if (this.uploadFilesService.prizes.length != this.uploadFilesService.winnersQuantity){
      this.error = true
    } else{
      this.error = false
      this.raffle()
    }
  }

  raffle(){
    for (let i = 0; i < this.uploadFilesService.winnersQuantity; i++) {
      let winner: Winner = new Winner(0, "", "")

      let min = Math.ceil(0);
      let max = Math.floor(this.uploadFilesService.participants.length);
      let randomNumber = Math.floor(Math.random() * (max - min )) + min

      winner.name = this.uploadFilesService.participants[randomNumber]

      winner.id = i + 1;
      winner.prize = this.uploadFilesService.prizes[i]

      this.winners.push(winner)

      let findName = true;

      //Retira da lista todos os nomes do sorteado para que ele não ganhe novamente.
      while (findName){
        const index: number = this.uploadFilesService.participants.indexOf(winner.name);
        if (index !== -1) {
          this.uploadFilesService.participants.splice(index, 1);
        } else {
          findName = false
        }
      }

    }


  }

}
