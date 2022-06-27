import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() userSelected: string = '';
  @Input() compSelected: string = '';
  @Input() action?: string = '';
  @Input() status?: string = '';
}
