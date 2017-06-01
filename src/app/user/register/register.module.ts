import { NgModule,ModuleWithProviders} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { Register } from './register.component';
import { routing }   from './register.routing';


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    Register
  ]
})
export class RegisterModule {}
