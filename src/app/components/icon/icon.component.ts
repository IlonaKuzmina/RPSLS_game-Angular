import { Component } from '@angular/core';
import { loseResults, winResults } from '../../../app/data/winLoseResults';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  userScore = 0;
  compScore = 0;
  userSelected: string = '';
  compSelected: string = '';
  action?: string = '';
  status?: string = '';
  compWeapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  winResults = winResults;
  loseResults = loseResults;
  together?: string;
  selected: boolean = false;
  wait: boolean = false;

  userPick(userWeapon: string) {
    this.userSelected = userWeapon;
    this.selected = true;
    this.wait = true;
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 5);
      this.compSelected = this.compWeapons[randomNum];
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
      this.selected = false;
      this.wait = false;
    }, 3000);
  }

  clearBord() {
    this.userScore = 0;
    this.compScore = 0;
  }

  win() {
    this.userScore++;
    this.action = 'beats';
    this.status = ' You win! ';
    this.clearField();
    this.selected = false;
  }

  lose() {
    this.compScore++;
    this.action = 'loses to';
    this.status = ' You lose! ';
    this.clearField();
    this.selected = false;
  }

  draw() {
    this.action = 'and';
    this.status = ` It's a tie! `;
    this.clearField();
    this.selected = false;
  }

  checkResult() {
    const together = this.userSelected + this.compSelected;
    const winCase = this.winResults.filter((win) => win === together);
    const loseCase = this.loseResults.filter((lose) => lose === together);
    switch (together) {
      case winCase.toString():
        this.win();
        break;
      case loseCase.toString():
        this.lose();
        break;
      default:
        this.draw();
        break;
    }
  }
}
