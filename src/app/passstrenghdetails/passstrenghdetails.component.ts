import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passstrenghdetails',
  templateUrl: './passstrenghdetails.component.html',
  styleUrl: './passstrenghdetails.component.css',
})
export class PassstrenghdetailsComponent {
  @Input() passwordStrength: string;
}
