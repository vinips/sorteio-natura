import { OnInit } from '@angular/core';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UploadFilesService } from './upload-files.service';
import * as XLSX from 'xlsx';

@Directive({
  selector: '[appUploadFiles]',
  exportAs: 'readExcel',
})
export class UploadFilesDirective implements OnInit {

  excelObservable?: Observable<any>;
  @Output() eventEmitter = new EventEmitter();

  message: string = "";
  fileName: string = "";

  error = false

  constructor(
    public uploadFilesService: UploadFilesService
  ){ }

  ngOnInit() {
    this.uploadFilesService.participants.length = 0
  }

  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement) {
   const file = target.files![0];

   this.error = false
   this.fileName = target.files![0].name;

   if(this.fileName.search(".xlsx") == -1 ){
     this.message = 'Arquivo não suportado. Favor enviar uma tabela excel com 1 coluna: ';
     this.fileName = "";
     this.error = true
   }

   if (!this.error){
     this.excelObservable = new Observable((subscriber: Subscriber<any>) => {
       this.uploadFilesService.participants.length = 0
       this.readFile(file, subscriber);
     });

     this.excelObservable.subscribe((d) => {
       for (let entry of d) {
         //É um Json, e a chave que defini para o valor é a coluna nome.
         //Quando a library le o XLS, ele coloca a 1º row como chave e o restante como valor.
         //Não consegui contornar de outro jeito.
         if(entry.nome){
           this.uploadFilesService.participants.push(entry.nome);
         } else {
           this.error = true
         }
       }
       //Se o 1º registro não for a palavra "nome" então eu acuso erro para não ter problema na hora do sorteio.
       if (this.error){
         this.message = "Primeiro registro precisa ser a palavra 'nome'";
       } else {
         this.message = "Arquivo enviado com sucesso: " + this.fileName;
       }
       //Remove o valor para poder mandar o mesmo arquivo novamente com o evento "change"
       target.value = "";
     });
   }
  }

  readFile(file: File, subscriber: Subscriber<any>) {
   const fileReader = new FileReader();
   fileReader.readAsArrayBuffer(file);

   fileReader.onload = (e) => {
     const bufferArray = e.target!.result;

     const wb: XLSX.WorkBook = XLSX.read(bufferArray, { type: 'buffer' });

     const wsname: string = wb.SheetNames[0];

     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

     const data = XLSX.utils.sheet_to_json(ws);

     subscriber.next(data);
     subscriber.complete();
   };
  }

}
