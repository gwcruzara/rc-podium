import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ramp } from 'src/app/domain/ramp/ramp.models';

@Component({
  selector: 'app-ramp',
  templateUrl: './ramp.component.html',
  styleUrls: ['./ramp.component.scss']
})
export class RampComponent implements OnInit {

  @Input() entity!: Ramp;
  @Input() id!: number;
  @Input() rampForm!: FormGroup;
  
  ngOnInit(): void {
    this.createFormGroup(); 
    this.applyValues()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['entity'] && changes['entity'].currentValue) {
      console.log(this.entity)
      this.applyValues();      
    }
  }

  getScore() : string | undefined {
    return this.entity !== null && this.entity?.score !== null ? this.entity?.score.toString() : 'Sem nota.'
  }

  getRank() : string | undefined {
    return this.entity !== null && this.entity?.ranking !== null ? this.entity?.ranking.toString() : 'Sem rank.'
  }

  applyValues() {
    
    if(!this.entity || !this.id) {
        return;
    }

    this.rampForm.patchValue({
      "idSquad": this.id,
      "distance": this.entity.distance
    });    
  }

  private createFormGroup() {
    this.rampForm.addControl("idSquad", new FormControl(this.id, []));
    this.rampForm.addControl("distance", new FormControl('', []));
  }
}
