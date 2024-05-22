import { BaseEntity } from "../base-entity.models";
import { Squad } from "../squad/squad-model";

export class RampDto extends BaseEntity {
    distance: number = 0;
    idSquad: number = 0;
}