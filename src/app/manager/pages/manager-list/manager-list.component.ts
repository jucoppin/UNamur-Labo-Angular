import { Component, Inject, OnInit } from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { Manager } from "../../dto/manager.dto";
import { logMessages } from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import { ManagerMockService } from "../../services/manager-mock.service";
import { IManagerService } from "../../interfaces/manager-service.interface";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  managers!: Manager[];

  constructor(
    private readonly service: ManagerService,
    private readonly managerMockService: ManagerMockService,
    @Inject('IManagerService')
    private readonly globalManagerService: IManagerService,
  ) {
  }

  ngOnInit(): void {
    // this.service.getTest().subscribe({
    //   next: x => console.log('OK', x),
    //   error: e => console.warn(e),
    //   complete: () => console.log("DONE")
    // });
    // this.service.getManagers().subscribe();
    this._refreshManagers();
  }

  delete(id: number): void {
    if (confirm(`Supprimer gestionnaire ${ id }`)) {
      this.service.delete(id).subscribe(() => {
        this._refreshManagers();
      });
    }
  }

  private _refreshManagers(): void {
    // this.managerMockService.getAll().subscribe(s => {
    // this.service.getAll().subscribe(s => {
    this.globalManagerService.getAll().subscribe(s => {
      this.managers = s;
    });
  }
}
