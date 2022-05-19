import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

import { routedComponents, WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, DemoNgZorroAntdModule,
  ],
  declarations: [routedComponents],
  exports: [WelcomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class WelcomeModule { }
