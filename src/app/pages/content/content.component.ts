import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input()
  categorie: string = '';
  @Input()
  title: string = '';
  @Input()
  content: string = '';
  @Input()
  coverPhoto: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.id = result.id
    this.categorie = result.categorie
    this.title = result.title
    this.content = result.description
    this.coverPhoto = result.photoCover
  }
}
