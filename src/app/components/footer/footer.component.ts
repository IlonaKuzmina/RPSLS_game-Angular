import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  modal: boolean | undefined;
  @Output() clearBordRequest = new EventEmitter<string>();

  openModal() {
    this.modal = !this.modal;
  }

  clearBord(): void {
    this.clearBordRequest.emit();
  }
}
