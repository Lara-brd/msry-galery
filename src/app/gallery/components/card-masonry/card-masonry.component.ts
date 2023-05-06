import { Component, Input } from '@angular/core';
import { Result } from 'src/app/shared/interfaces/apiResonse.interface';


@Component({
  selector: 'app-card-masonry',
  templateUrl: './card-masonry.component.html',
  styleUrls: ['./card-masonry.component.scss']
})
export class CardMasonryComponent {

  @Input() photo:any;
  selection:string='';

}
