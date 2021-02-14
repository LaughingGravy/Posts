import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaginationSettings } from './models/PaginationSettings';

@Component({
  selector: 'app-pagination-settings',
  templateUrl: './pagination-settings.component.html',
  styleUrls: ['./pagination-settings.component.scss']
})
export class PaginationSettingsComponent implements OnInit, OnDestroy {
  @Output() paginationSettingsChanged = new EventEmitter<PaginationSettings>();

  paginationSettingsForm: FormGroup;

  paginationSettings: PaginationSettings;

  settings$: Observable<PaginationSettings>;
  unsubscribe$: Subject<void> = new Subject<void>();

  private buildForm(): void {
    this.paginationSettingsForm = this.fb.group({
      PageSize: [this.paginationSettings.PageSize],
      OrderByLatest: [ this.paginationSettings.OrderByLatest]
    });

    this.settings$ = this.paginationSettingsForm.valueChanges;

    this.settings$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((value) => {
          this.paginationSettings = value;

          this.paginationSettingsChanged.emit(this.paginationSettings);
        });
  }

  constructor(private fb: FormBuilder) {
    this.paginationSettings = new PaginationSettings();

    this.buildForm();
  }

  ngOnInit() {
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
