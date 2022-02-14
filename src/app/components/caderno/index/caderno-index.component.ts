import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caderno } from 'src/app/models/caderno.models';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-index',
  templateUrl: './caderno-index.component.html',
  styleUrls: ['./caderno-index.component.css']
})
export class CadernoIndexComponent implements OnInit {

  caderno: Caderno[]; // Array de cadernos. neste momento ele está vazio. // PORQUE PRECISSO FAZER UMA INTERPOLAÇÃO.

  constructor( private router: Router, private cadernoService: CadernoService) { 
    console.log("CadernoIndexComponent.constructor");
    this.caderno = new Array<Caderno>();
  }

  ngOnInit(): void {
    console.log("CadernoIndexComponent.ngOnInit");
  }

  goToCreate(): void {
      //document.location = "caderno-create";
      this.router.navigateByUrl("caderno-create")
  }
  
  goToEdit(id: number) {
    this.router.navigate(["caderno-edit", { idparam: id }]);
  }

  // goToEdit(id: number): void{
  //   this.cadernoService.Put(id, this.caderno)
  //   this.router.navigateByUrl("caderno-edit")
  //   console.log(this.caderno)
  //   console.log(id)
  // }

  //goToEdit(id:number):void{
    //console.log(id);
    //this.cadernoService.put(id, this.cadernos)
    //this.router.navigateByUrl("caderno-edit");
    //const endpoint: string = "https://localhost:44393/api/cadernos/"+ id;
    //console.log(endpoint);
  //} 

  getAll(): void {
    console.log("CadernoIndexComponent.getAll-start");// ai ele chama o getAll
    this.cadernoService.getAll()
    .subscribe((data) => { // ai ele preenche [...] //subscribe( inscrição no metodo get para receber seu retorno no momento apropiado) aguarda o retorno cadernos.  data(variável escolhida para "receber a lista de cadernos" que o enpoint vai responder). 
      this.caderno = data;
      console.log("RESPOSTA CHEGOU AGORA:");
      console.log(this.caderno);
    });
    console.log(this.caderno);
    console.log("CadernoIndexComponent.getAll-end");
  }

  delete(id: number): void {
    console.log("Deletar o caderno ");
    if (confirm("Deseja deletar esse caderno?")){
      this.cadernoService.delete(id).subscribe();
      this.getAll();
    }
  }
}
