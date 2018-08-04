import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/modules/shared.module';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {Error404Component} from './error404/error404.component';
import {ProgressBarService} from './shared/progress-bar.service';
import {LoggerService} from './shared/logger.service';
import {throwIfAlreadyLoaded} from './module-import-guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports : [
    NavComponent,
    FooterComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    Error404Component
  ],
  providers: [
    LoggerService,
    ProgressBarService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
