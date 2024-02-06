import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css', './featured-card.responsive.component.css']
})
export class FeaturedCardComponent {
  @Input()
  categorie: string = ''
  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  cardDescription: string = ''
}
