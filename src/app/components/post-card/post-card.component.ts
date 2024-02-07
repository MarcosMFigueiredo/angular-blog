import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input()
  categorie: string = ''
  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  cardDescription: string = ''
  @Input()
  id: string = '0';
}
