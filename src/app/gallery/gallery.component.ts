import { Component, OnInit } from '@angular/core';
import { GalleryImage } from './gallery-image';
import { MonthYear } from './month-year';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  private readonly monthImages = new Map<MonthYear, Array<GalleryImage>>();

  get monthYearList(): Array<MonthYear> {
    const groups = Array.from(this.monthImages.keys());
    return groups;
  }

  getImages(monthYear: MonthYear): Array<GalleryImage> {
    const monthImages = this.monthImages.get(monthYear);
    return monthImages;
  }

  private _monthYearIndex: number;
  get monthYearIndex(): number {
    return this._monthYearIndex;
  }
  set monthYearIndex(i: number) {
    this._monthYearIndex = i;
  }

  get currentMonthYear(): MonthYear {
    return this.monthYearList[this.monthYearIndex];
  }

  private _galleryImageIndex: number = 0;
  get galleryImageIndex(): number {
    return this._galleryImageIndex;
  }
  set galleryImageIndex(i: number) {
    this._galleryImageIndex = i;
  }

  get currentGalleryImage(): GalleryImage {
    const images = this.monthImages.get(this.currentMonthYear);
    return images[this.galleryImageIndex];
  }

  get currentGalleryImageCount(): number {
    const imageCount = this.monthImages.get(this.currentMonthYear).length;
    return imageCount;
  }

  private fillImages() {
    this.monthImages.set(new MonthYear(9, 2017), [new GalleryImage('../../assets/image1.jpg')]);
    this.monthImages.set(new MonthYear(10, 2017), [new GalleryImage('../../assets/image2.jpg')]);
    this.monthImages.set(new MonthYear(11, 2017), [new GalleryImage('../../assets/image3.jpg')]);
    this.monthImages.set(new MonthYear(12, 2017), [new GalleryImage('../../assets/image4.jpg')]);
    this.monthImages.set(new MonthYear(1, 2018), [new GalleryImage('../../assets/image5.jpg')]);
    this.monthImages.set(new MonthYear(2, 2018), [new GalleryImage('../../assets/image6.jpg')]);
    this.monthImages.set(new MonthYear(3, 2018), [new GalleryImage('../../assets/image7.jpg')]);
    this.monthImages.set(new MonthYear(4, 2018), [new GalleryImage('../../assets/image8.jpg')]);
    this.monthImages.set(new MonthYear(5, 2018), [new GalleryImage('../../assets/image9.jpg')]);
    this.monthImages.set(new MonthYear(6, 2018), [new GalleryImage('../../assets/image10.jpg')]);
    this.monthImages.set(new MonthYear(7, 2018), [
      new GalleryImage('../../assets/image11.jpg'),
      new GalleryImage('../../assets/image14.jpg')
    ]);
    this.monthImages.set(new MonthYear(8, 2018), [
      new GalleryImage('../../assets/image12.jpg'),
      new GalleryImage('../../assets/image13.jpg')
    ]);

    this.monthYearIndex = this.monthYearList.length - 1;
  }

  monthForward(): void {
    if (this.monthYearIndex < (this.monthYearList.length - 1)) {
      this.monthYearIndex++;
    }
  }

  monthBackward(): void {
    if (this.monthYearIndex > 0) {
      this.monthYearIndex--;
    }
  }

  imageForward(): void {
    if (this.galleryImageIndex < (this.currentGalleryImageCount - 1)) {
      this.galleryImageIndex++;
    }
  }

  imageBackward(): void {
    if (this.galleryImageIndex > 0) {
      this.galleryImageIndex--;
    }
  }

  ngOnInit() {
    this.fillImages();
  }

}
