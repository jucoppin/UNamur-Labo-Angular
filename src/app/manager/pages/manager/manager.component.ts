import { Component, OnInit } from '@angular/core';
import { ManagerService } from "../../services/manager.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Manager } from "../../dto/manager.dto";
import { Observable, tap } from "rxjs";
import * as os from "os";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  entity!: Manager;
  form!: FormGroup;

  constructor(
    private readonly service: ManagerService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

      if (isNaN(id)) {
        this.router.navigate(['/managers']).then();
        return;
      }

      this._load(id);
    }
    else {
      this._createForm();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    const data = this.form.value;

    let observable: Observable<Manager>;

    if (this.entity) {
      observable = this.service.patch(this.entity.id, data);
    } else {
      observable = this.service.create(data);
    }

    observable.subscribe(() => {
      this.router.navigate(['/managers']).then();
    });
  }

  private _createForm(): void {
    this.form = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      isActive: [false],
    })
  }

  private _load(id: number): void {
    this.service.get(id).subscribe({
      next: s => {
        this.entity = s;

        this._createForm();

        this.form.patchValue(this.entity);
      },
      error: () => this.router.navigate(['/managers']).then(),
    })
  }
}
