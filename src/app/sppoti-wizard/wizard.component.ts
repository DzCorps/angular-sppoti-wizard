import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {SppotiWizardStepComponent} from './wizard-step.component';

@Component({
  selector: 'sppoti-wizard',
  template:
  `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified">
        <li class="nav-item" *ngFor="let step of steps" [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}">
          <a (click)="goToStep(step)">{{step.title}}</a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
    <div class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-success sp-btn pull-left float-left" (click)="previous()" [class.hidden]="!hasPrevStep || !activeStep.showPrev">Previous</button>
        <button type="button" class="btn btn-success sp-btn pull-right float-right" (click)="next()" [disabled]="!activeStep.isValid" [class.hidden]="!hasNextStep || !activeStep.showNext">Next</button>
        <button type="button" class="btn btn-success sp-btn pull-right float-right" (click)="complete()" [disabled]="!activeStep.isValid" [class.hidden]="hasNextStep">Done</button>
    </div>
  </div>`
  ,
  styleUrls: ['./wizard.component.css']
})
export class SppotiWizardComponent implements AfterContentInit {
  @ContentChildren(SppotiWizardStepComponent)
  wizardSteps: QueryList<SppotiWizardStepComponent>;

  private _steps: Array<SppotiWizardStepComponent> = [];
  private _isCompleted = false;

  @Output()
  onStepChanged: EventEmitter<SppotiWizardStepComponent> = new EventEmitter<SppotiWizardStepComponent>();

  constructor() {
  }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
  }

  get steps(): Array<SppotiWizardStepComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): SppotiWizardStepComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: SppotiWizardStepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(step: SppotiWizardStepComponent): void {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  public next(): void {
    if (this.hasNextStep) {
      const nextStep: SppotiWizardStepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      const prevStep: SppotiWizardStepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this._isCompleted = true;
  }

}
