import { Component, OnInit } from '@angular/core';
import {
  faScrewdriverWrench,
  faPaintRoller,
} from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models';
import { ProjectService } from '../../services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  faScrewdriverWrench = faScrewdriverWrench;
  faPaintRoller = faPaintRoller;
  projects!: Project[];

  constructor(private projectService: ProjectService) {
    this.loadData();
  }

  ngOnInit(): void {}

  private loadData(): void {
    this.projectService.getAll().subscribe({
      next: (response) => {
        this.projects = response;
      },
    });
  }
}
