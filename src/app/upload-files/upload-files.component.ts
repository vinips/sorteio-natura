import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFilesService } from './upload-files.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit{

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  message: string[] = [];

  previews: string[] = [];

  jpg = ".jpg"
  png = ".png"

  constructor(
    public uploadFilesService: UploadFilesService
  ){ }

  ngOnInit() {
    this.uploadFilesService.prizes.length = 0
  }

  selectFiles(event: any): void {
    this.message = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    this.previews = [];


    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        if(this.selectedFiles[i].name.search(this.jpg) == -1 && this.selectedFiles[i].name.search(this.png) == -1 ){
          const msg = 'Arquivo não suportado. Favor usar .jpg ou .png: ' + this.selectedFiles[i].name;
          this.message.push(msg);
          continue
        }

        reader.onload = (e: any) => {
          //console.log(e.target.result);
          this.previews.push(e.target.result);
          this.uploadFilesService.prizes.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);

        const msg = 'Imagem salva com sucesso: ' + this.selectedFiles[i].name;
        this.message.push(msg);
      }

    }

    console.log(this.selectedFiles)
    console.log(this.previews)
  }



}
