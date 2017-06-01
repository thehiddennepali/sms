import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';
import {User} from './user.component';
import {routing} from './user.routing';

@NgModule({
  declarations: [User],
  imports: [HttpModule,routing],
  //providers: [BaseService],
  //exports: [BaseComponent]
 
})
export class UserModule{
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: UserModule,
         // providers: [BaseService]
        }
  }
}
