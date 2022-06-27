import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent {
  @Input() userScore: number | undefined;
  @Input() compScore: number | undefined;
  @Input() userSelected: string = '';
  @Input() compSelected: string = '';
}
