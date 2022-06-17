import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  slider: any;

  slideOptions11 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,

  };

  constructor() { }

  slidesDidLoad11(slides: IonSlides): void {
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
