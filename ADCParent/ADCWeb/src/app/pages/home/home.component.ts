import { Component, OnInit } from '@angular/core';
import {
  faScrewdriverWrench,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faScrewdriverWrench = faScrewdriverWrench;
  faPaintRoller = faPaintRoller;

  constructor() {}

  ngOnInit(): void {}
}
