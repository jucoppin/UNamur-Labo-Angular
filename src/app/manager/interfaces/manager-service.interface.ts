import { Observable } from "rxjs";
import { Manager } from "../dto/manager.dto";

export interface IManagerService {
  getAll(): Observable<Manager[]>;
}
