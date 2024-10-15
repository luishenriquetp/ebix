import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('cameraVideo', { static: false }) cameraVideo!: ElementRef<HTMLVideoElement>;
  public selectedFilter: string = 'none'; // Default filter option
  public capturedPhotos: string[] = []; // Array to store captured photos
  public filterImageSrc: string = ''; // Source of the currently selected filter image

  constructor(public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    this.startCamera();
  }

  // Start camera feed
  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.cameraVideo.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  // Apply filter to the preview
  applyFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterImageSrc = this.getFilterImage(filter); // Update filter image source for real-time preview
  }

  // Capture the photo with the selected filter
  capturePhoto() {
    const video = this.cameraVideo.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context!.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Apply selected filter if any
    if (this.selectedFilter !== 'none') {
      const filterImage = new Image();
      filterImage.src = this.getFilterImage(this.selectedFilter);
      filterImage.onload = () => {
        context!.drawImage(filterImage, 0, 0, canvas.width, canvas.height);
        this.savePhoto(canvas);
      };
    } else {
      this.savePhoto(canvas);
    }
  }

  // Save photo and add to the collection
  savePhoto(canvas: HTMLCanvasElement) {
    const dataUrl = canvas.toDataURL('image/jpeg');
    this.capturedPhotos.unshift(dataUrl); // Add the new photo to the collection
  }

  // Get filter image based on selection
  getFilterImage(filter: string): string {
    switch (filter) {
      case 'filter1':
        return 'assets/icon/filter1.png';
      case 'filter2':
        return 'assets/icon/filter2.png';
      case 'filter3':
        return 'assets/icon/filter3.png';
      default:
        return '';
    }
  }
}
