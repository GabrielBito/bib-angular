import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caderno } from 'src/app/models/caderno.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadernoService {

  constructor(private request: HttpClient) { //Injeção de Dependência. para requisitar a API.
    console.log("CadernoService.constructor");
  }

  getAll():Observable<Caderno[]>{ // metodo server.
    console.log("CadernoService.getAll")
    const endpoint: string ="https://localhost:44393/api/cadernos";
    return this.request.get<Caderno[]>(endpoint);
  }

  post(caderno: Caderno):Observable<Caderno>{
    console.log("CadernoService.post");
    const endpoint: string = "https://localhost:44393/api/cadernos";
    return this.request.post<Caderno>(endpoint, caderno);

  }

   delete(id: number):Observable<Caderno>{
    console.log("CadernoService.delete");
    const endpoint: string = "https://localhost:44393/api/cadernos/" + id;
    return this.request.delete<Caderno>(endpoint);

   }

   put(id: number):Observable<Caderno>{
    console.log("CadernoService.put");
    const endpoint: string = "https://localhost:44393/api/cadernos/" + id;
    return this.request.put<Caderno>(endpoint, id);

  }
  
   Put(id: number, caderno: Caderno): Observable<Caderno>{
    const endpoint: string = "https://localhost:44393/api/cadernos/" + id
    console.log(endpoint)
    return this.request.put<Caderno>((endpoint + (id)), caderno)
  }

}