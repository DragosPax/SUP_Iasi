import { Component } from '@angular/core';
import { TitleComponent } from '../../partials/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TitleComponent, MatButtonModule, RouterLink],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {}
