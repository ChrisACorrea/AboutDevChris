import { Component, OnInit } from '@angular/core';
import {
  faScrewdriverWrench,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  faScrewdriverWrench = faScrewdriverWrench;
  faPaintRoller = faPaintRoller;

  constructor() {}

  ngOnInit(): void {}
}
