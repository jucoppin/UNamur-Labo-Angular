import { APIClient } from "../../shared/common/api-client.common";
import { HttpClient } from "@angular/common/http";
import { Manager } from "../dto/manager.dto";
import { Injectable } from "@angular/core";

@Injectable()
export class ManagerService extends APIClient<Manager> {
  constructor(http: HttpClient) {
    super(http, 'managers');
  }
}
