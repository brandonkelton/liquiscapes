import { Component, OnInit } from '@angular/core';
import { GalleryImage } from './gallery-image';
import { ImageGroup } from './image-group';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private readonly imageGroupMap = new Map<ImageGroup, Array<GalleryImage>>();

  get imageGroups(): Array<ImageGroup> {
    const groups = Array.from(this.imageGroupMap.keys());
    return groups;
  }

  getGroupImages(imageGroup: ImageGroup): Array<GalleryImage> {
    const groupImages = this.imageGroupMap.get(imageGroup);
    return groupImages;
  }

  private _imageGroupIndex: number;
  get imageGroupIndex(): number {
    return this._imageGroupIndex;
  }
  set imageGroupIndex(i: number) {
    this._imageGroupIndex = i;
  }

  get currentImageGroup(): ImageGroup {
    return this.imageGroups[this.imageGroupIndex];
  }

  private _imageIndex: number = 0;
  get imageIndex(): number {
    return this._imageIndex;
  }
  set imageIndex(i: number) {
    this._imageIndex = i;
  }

  private resetImageIndex(): void {
    this.imageIndex = this.currentImageCount == 1 ? 0 : Math.floor(this.currentImageCount / 2) - 1;
  }

  get currentImage(): GalleryImage {
    const images = this.imageGroupMap.get(this.currentImageGroup);
    return images[this.imageIndex];
  }

  get currentImages(): Array<GalleryImage> {
    const images = this.imageGroupMap.get(this.currentImageGroup);
    return images;
  }

  private maxImageRangeCount = 5;
  private imageRangeCount: number;

  private resetImageRangeCount(): void {
    this.imageRangeCount = this.currentImageCount > this.maxImageRangeCount ? this.maxImageRangeCount : this.currentImageCount;
  }

  get imageRange(): Array<GalleryImage> {

    const images = new Array<GalleryImage>(this.imageRangeCount);
    const outerRange = Math.floor((this.imageRangeCount / 2));
    const midIndex = Math.round((this.imageRangeCount / 2)) - 1;

    images[midIndex] = this.currentImages[this.imageIndex];

    if (outerRange > 0) {
      for(let i=1;i<=outerRange;i++) {
        const beforeIndex = this.getAdjustedIndex(this.imageIndex - i);
        if ((midIndex - i) >= 0) {
          images[midIndex - i] = this.currentImages[beforeIndex];
        }
        const afterIndex = this.getAdjustedIndex(this.imageIndex + i);
        if ((midIndex + i) <= (this.currentImageCount - 1)) {
          images[midIndex + i] = this.currentImages[afterIndex];
        }
      }
    }
    
    return images;
  }

  setImageActive(index: number): void {
    this.imageIndex = index;
  }

  get currentImageCount(): number {
    const imageCount = this.imageGroupMap.get(this.currentImageGroup).length;
    return imageCount;
  }

  monthForward(): void {
    if (this.imageGroupIndex < (this.imageGroups.length - 1)) {
      this.imageGroupIndex++;
      this.resetImageIndex();
      this.resetImageRangeCount();
    }
  }

  monthBackward(): void {
    if (this.imageGroupIndex > 0) {
      this.imageGroupIndex--;
      this.resetImageIndex();
      this.resetImageRangeCount();
    }
  }

  imageForward(): void {
    this.imageIndex = this.getAfterIndex(this.imageIndex);
  }

  imageBackward(): void {
    this.imageIndex = this.getBeforeIndex(this.imageIndex);
  }

  private getAdjustedIndex(index: number): number {
    if (index < 0) return (this.currentImageCount + index); // index is negagtive
    if (index > (this.currentImageCount - 1)) return (index - this.currentImageCount);
    return index;
  }

  private getBeforeIndex(index: number): number {
    let newIndex = index;
    if (index === 0) {
      newIndex = this.currentImageCount - 1;
    } else {
      newIndex = index - 1;
    }
    console.log(newIndex);
    return newIndex;
  }

  private getAfterIndex(index: number): number {
    let newIndex = index;
    if (index === this.currentImageCount - 1) {
      newIndex = 0;
    } else {
      newIndex = index + 1;
    }
    console.log(newIndex);
    return newIndex;
  }

  ngOnInit() {
    this.fillImages();
  }

  private fillImages() {
    this.imageGroupMap.set(new ImageGroup(9, 2017), [new GalleryImage(0, '../../assets/image1.jpg')]);
    this.imageGroupMap.set(new ImageGroup(10, 2017), [new GalleryImage(0, '../../assets/image2.jpg')]);
    this.imageGroupMap.set(new ImageGroup(11, 2017), [new GalleryImage(0, '../../assets/image3.jpg')]);
    this.imageGroupMap.set(new ImageGroup(12, 2017), [new GalleryImage(0, '../../assets/image4.jpg')]);
    this.imageGroupMap.set(new ImageGroup(1, 2018), [new GalleryImage(0, '../../assets/image5.jpg')]);
    this.imageGroupMap.set(new ImageGroup(2, 2018), [new GalleryImage(0, '../../assets/image6.jpg')]);
    this.imageGroupMap.set(new ImageGroup(3, 2018), [new GalleryImage(0, '../../assets/image7.jpg')]);
    this.imageGroupMap.set(new ImageGroup(4, 2018), [new GalleryImage(0, '../../assets/image8.jpg')]);
    this.imageGroupMap.set(new ImageGroup(5, 2018), [
      new GalleryImage(0, '../../assets/image9.jpg'),
      new GalleryImage(1, '../../assets/image4.jpg')
    ]);
    this.imageGroupMap.set(new ImageGroup(6, 2018), [
      new GalleryImage(0, '../../assets/image10.jpg'),
      new GalleryImage(1, '../../assets/image1.jpg'),
      new GalleryImage(2, '../../assets/image5.jpg')
    ]);
    this.imageGroupMap.set(new ImageGroup(7, 2018), [
      new GalleryImage(0, '../../assets/image11.jpg'),
      new GalleryImage(1, '../../assets/image14.jpg'),
      new GalleryImage(2, '../../assets/image5.jpg'),
      new GalleryImage(3, '../../assets/image7.jpg')
    ]);
    this.imageGroupMap.set(new ImageGroup(8, 2018), [
      new GalleryImage(0, '../../assets/image12.jpg'),
      new GalleryImage(1, '../../assets/image13.jpg'),
      new GalleryImage(2, '../../assets/image1.jpg'),
      new GalleryImage(3, '../../assets/image2.jpg'),
      new GalleryImage(4, '../../assets/image3.jpg'),
      new GalleryImage(5, '../../assets/image4.jpg'),
      new GalleryImage(6, '../../assets/image5.jpg')
    ]);

    this.imageGroupIndex = this.imageGroups.length - 1;
    this.resetImageIndex();
    this.resetImageRangeCount();
  }

}
