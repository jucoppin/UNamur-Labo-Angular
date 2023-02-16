import { IManagerService } from "../interfaces/manager-service.interface";
import { Observable, of } from "rxjs";
import { Manager } from "../dto/manager.dto";

export class ManagerMockService implements IManagerService {

  private _managers!: Manager[]

  private get managers(): Manager[] {
    if (this._managers) {
      return this._managers;
    }

    this._managers = [
      // Managers
      {
        id: 42,
        lastName: 'UNamur',
        firstName: 'UNamur',
        isActive: true,
      } as Manager
    ];

    return this._managers;
  }

  getAll(): Observable<Manager[]> {
    return of(this.managers);
  }
}
