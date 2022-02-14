import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caderno } from 'src/app/models/caderno.models';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-create',
  templateUrl: './caderno-create.component.html',
  styleUrls: ['./caderno-create.component.css']
})
export class CadernoCreateComponent implements OnInit {

  caderno: Caderno = new Caderno();

  constructor(private router: Router, private cadernoService: CadernoService) { 
    console.log("CadernoCreateComponent-construtor")
  }

  ngOnInit(): void {
    console.log("CadernoCreateComponent-ngOnInit")
  }

  goToIndex(): void {
    this.router.navigateByUrl("caderno-index");
  }

  post(): void{
    console.log("CadernoCreateComponent-post");
    this.cadernoService.post(this.caderno)
    console.log(this.caderno);
  }

}
