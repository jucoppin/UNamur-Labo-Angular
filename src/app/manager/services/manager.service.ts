import { APIClient } from "../../shared/common/api-client.common";
import { HttpClient } from "@angular/common/http";
import { Manager } from "../dto/manager.dto";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class ManagerService extends APIClient<Manager> {
  constructor(http: HttpClient) {
    super(http, 'managers');
  }

  getManagers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:60000/api/v1/managers');
  }

  getTest(): Observable<any> {
    console.log(1);
    console.log(2);
    const obs = this.getManagers().pipe(
      tap(x => console.error(x))
    );
    console.log(3);
    console.log(obs);
    return obs;
  }
}
