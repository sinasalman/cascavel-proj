import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore,{Navigation , Pagination , Scrollbar , A11y} from 'swiper';
SwiperCore.use([Navigation , Pagination , A11y , Scrollbar]);
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'cascavel-proj';
}
