import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction } from 'ngx-gallery-9';

import * as M from "materialize-css/dist/js/materialize";
declare var $: any;
@Component({
  selector: 'app-gallary-view',
  templateUrl: './gallary-view.component.html',
  styleUrls: ['./gallary-view.component.css']
})
export class GallaryViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  SelectedOptions: NgxGalleryOptions[];
  SelectedImage: NgxGalleryImage[] = [];
  galleryImages: NgxGalleryImage[];
  galleryAction: { icon: string; onClick: any; }[];
  handleClick: any;

  constructor() { }

  ngOnInit(): void {

  const seletedImage = new NgxGalleryAction({ disabled: false, icon: 'fa fa-check', titleText: 'Remove image', 
  onClick: (event,index) => { 
    // console.log(this.galleryImages[index].big)
    this.SelectedImage.push(this.galleryImages[index])
    
    this.galleryImages.splice(index,1)
    console.log(this.SelectedImage.length)
    
    console.log(this.galleryImages.length)
  } });

  const deleteImage = new NgxGalleryAction({ disabled: false, icon: 'fa fa-remove', titleText: 'Remove image', 
  onClick: (event,index) => { 
    // console.log(this.galleryImages[index].big)
    this.galleryImages.push(this.SelectedImage[index])
    
    this.SelectedImage.splice(index,1)
  } });
  

  this.SelectedOptions = [
    {
        width: '100%',
        height: '200px',
        fullWidth:false,
        imageArrows:true,
        imageSwipe:true,
        thumbnailsArrows:true,
        thumbnailsColumns: 5,
        thumbnailActions: [ deleteImage ],
        thumbnailsRemainingCount: true,
        imageSize: "contain",
        preview: false,
        image:false,
        previewFullscreen:false,
        previewForceFullscreen:false,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '200px',
        imagePercent: 80,
        preview: false,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];

  

    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          fullWidth:false,
          imageArrows:true,
          imageSwipe:true,
          thumbnailsArrows:true,
          thumbnailsColumns: 5,
          thumbnailActions: [ seletedImage ],
          thumbnailsRemainingCount: true,
          imageSize: "contain",
          preview: false,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '500px',
          imagePercent: 80,
          preview: false,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: './../../assets/1.JPG',
          medium: './../../assets/1.JPG',
          big: './../../assets/1.JPG'
      },
      {
          small: './../../assets/2.jpg',
          medium: './../../assets/2.jpg',
          big: './../../assets/2.jpg'
      },
      {
          small: './../../assets/3.jpg',
          medium: './../../assets/3.jpg',
          big: './../../assets/3.jpg'
      }, {
        small: './../../assets/1.JPG',
        medium: './../../assets/1.JPG',
        big: './../../assets/1.JPG'
    },
    {
        small: './../../assets/2.jpg',
        medium: './../../assets/2.jpg',
        big: './../../assets/2.jpg'
    },
    {
        small: './../../assets/3.jpg',
        medium: './../../assets/3.jpg',
        big: './../../assets/3.jpg'
    }, {
      small: './../../assets/1.JPG',
      medium: './../../assets/1.JPG',
      big: './../../assets/1.JPG'
  },
  {
      small: './../../assets/2.jpg',
      medium: './../../assets/2.jpg',
      big: './../../assets/2.jpg'
  },
  {
      small: './../../assets/3.jpg',
      medium: './../../assets/3.jpg',
      big: './../../assets/3.jpg'
  }, {
    small: './../../assets/1.JPG',
    medium: './../../assets/1.JPG',
    big: './../../assets/1.JPG'
},
{
    small: './../../assets/2.jpg',
    medium: './../../assets/2.jpg',
    big: './../../assets/2.jpg'
},
{
    small: './../../assets/3.jpg',
    medium: './../../assets/3.jpg',
    big: './../../assets/3.jpg'
}, {
  small: './../../assets/1.JPG',
  medium: './../../assets/1.JPG',
  big: './../../assets/1.JPG'
},
{
  small: './../../assets/2.jpg',
  medium: './../../assets/2.jpg',
  big: './../../assets/2.jpg'
},
{
  small: './../../assets/3.jpg',
  medium: './../../assets/3.jpg',
  big: './../../assets/3.jpg'
}
  ];

  

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
  show(index: number){}
showNext(){}
showPrev()
{}


}
