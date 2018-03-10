import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SppotiWizardStepComponent} from './wizard-step.component';
import { SppotiWizardComponent } from './wizard.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SppotiWizardComponent,
    SppotiWizardStepComponent
  ],
  exports: [
    SppotiWizardComponent,
    SppotiWizardStepComponent
  ]
})
export class SppotiWizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SppotiWizardModule
    };
  }
}
