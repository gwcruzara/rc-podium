import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadComponent } from './squad.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SquadFormComponent } from './components/squad-form/squad-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SquadComponent,
    SquadFormComponent
  ],
  imports: [
    CommonModule,
    SquadRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ], 
  exports: [
    SharedModule
  ]
})
export class SquadModule { }
