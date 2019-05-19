import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OneangularSharedLibsModule, OneangularSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OneangularSharedLibsModule, OneangularSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OneangularSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OneangularSharedModule {
  static forRoot() {
    return {
      ngModule: OneangularSharedModule
    };
  }
}
