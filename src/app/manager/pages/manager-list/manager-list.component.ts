import { Component, OnInit } from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { Manager } from "../../dto/manager.dto";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  managers!: Manager[];

  constructor(
    private readonly service: ManagerService,
  ) {
  }

  ngOnInit(): void {
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
    this.service.getAll().subscribe(s => {
      this.managers = s;
    });
  }
}
