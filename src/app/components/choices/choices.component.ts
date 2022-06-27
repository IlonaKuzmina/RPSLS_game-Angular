import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent {
  @Input() wait: boolean = false;
  @Output() userPickRequest = new EventEmitter<string>();

  userPick(userWeapon: string): void {
    this.userPickRequest.emit(userWeapon);
  }
}
