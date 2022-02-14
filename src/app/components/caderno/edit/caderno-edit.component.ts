import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caderno } from 'src/app/models/caderno.models';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-edit',
  templateUrl: './caderno-edit.component.html',
  styleUrls: ['./caderno-edit.component.css']
})
export class CadernoEditComponent implements OnInit {
   
  caderno: Caderno;

  constructor(private router: ActivatedRoute, private cadernoService: CadernoService) { 
    console.log("CadernoEditComponent-construtor")
    this.caderno= new Caderno();
  }

  ngOnInit(): void {
    const id: number = Number(this.router.snapshot.paramMap.get("idparam"));
    console.log(id);

    //service getById

    //carregar os dados do caderno no objetivo this.caderno

    //utilizar o ngModel para o databind de mão dupla com o objeto caderno
  }
  
  goToIndex(): void {
    
  }

  put(id: number): void{
    console.log();
    this.cadernoService.put(id).subscribe();
    console.log();

    // service put

    //redirecionar para index

  }

}