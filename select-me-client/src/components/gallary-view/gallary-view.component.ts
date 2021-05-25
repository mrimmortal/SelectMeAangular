import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
declare var $: any;
@Component({
  selector: 'app-gallary-view',
  templateUrl: './gallary-view.component.html',
  styleUrls: ['./gallary-view.component.css']
})
export class GallaryViewComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {

    $('.tooltipped').tooltip({delay: 50});
    var elems = document.querySelectorAll('#selected_image_carousel');
    var instances = M.Carousel.init(elems, {
      indicators: true,
      padding: 100,
      fullWidth: true,
      noWrap:true
    });
    var elems = document.querySelectorAll('#all_image_carousel');
    var instances = M.Carousel.init(elems, {
      indicators: true,
      padding: 100,

    });
  }

}
