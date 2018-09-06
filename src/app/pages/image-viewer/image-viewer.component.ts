import { Component, OnInit, ViewChild } from '@angular/core';
import { LiquiImage } from './liqui-image';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  images: Array<LiquiImage> = new Array<LiquiImage>();

  ngOnInit() {
    this.loadImages();
    this.slideRight();
  }

  loadImages(): void {

    const image1 = new LiquiImage();
    image1.url = '../../assets/images/front-pic-8-2.jpg';

    const image2 = new LiquiImage();
    image2.url = '../../assets/images/front-pic-5-2.jpg';

    const image3 = new LiquiImage();
    image3.url = '../../assets/images/front-pic-3-2.jpg';

    const image4 = new LiquiImage();
    image4.url = '../../assets/images/front-pic-4-2.jpg';

    const image5 = new LiquiImage();
    image5.isActive = true;
    image5.url = '../../assets/images/front-pic-1-2.jpg';

    this.images.push(image1);
    this.images.push(image2);
    this.images.push(image3);
    this.images.push(image4);
    this.images.push(image5);
  }

  get imageTotal(): number {
    return this.images.length - 1;
  }

  get imagePreviousIndex(): number {
    const imageCurrentIndex = this.imageCurrentIndex;
    if (imageCurrentIndex > 0) {
      return imageCurrentIndex - 1;
    } else {
      return this.imageTotal;
    }
  }

  get imageCurrentIndex(): number {
    const index = this.images.findIndex(i => i.isActive);
    return index;
  }

  get imageNextIndex(): number {
    const imageCurrentIndex = this.imageCurrentIndex;
    if (imageCurrentIndex < this.imageTotal) {
      return imageCurrentIndex + 1;
    } else {
      return 0;
    }
  }

  private getImageAtIndex(index: number): LiquiImage {
    const image = this.images[index];
    return image;
  }

  get imageCurrent(): LiquiImage {
    const image = this.images[this.imageCurrentIndex];
    return image;
  }

  get imagePrevious(): LiquiImage {
    const image = this.images[this.imagePreviousIndex];
    return image;
  }

  get imageNext(): LiquiImage {
    const image = this.images[this.imageNextIndex];
    return image;
  }

  slideLeft(): void {
    console.log('Sliding Left');
    const nextImageIndex = this.imageNextIndex;
    this.clearImageSettings();
    const newCurrentImage = this.getImageAtIndex(nextImageIndex);
    newCurrentImage.wasNext = true;
    newCurrentImage.isActive = true;
    this.imagePrevious.isPrevious = true;
    this.imageNext.isNext = true;
  }

  slideRight(): void {
    console.log('Sliding Right');
    const previousImageIndex = this.imagePreviousIndex;
    this.clearImageSettings();
    const newCurrentImage = this.getImageAtIndex(previousImageIndex);
    newCurrentImage.wasPrevious = true;
    newCurrentImage.isActive = true;
    this.imagePrevious.isPrevious = true;
    this.imageNext.isNext = true;
  }

  private clearImageSettings(): void {
    this.images.forEach(image => {
      image.isActive = false
      image.isPrevious = false;
      image.isNext = false;
      image.wasNext = false;
      image.wasPrevious = false;
    });
  }
}
