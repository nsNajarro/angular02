import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IMAGE_CLOUDINARY, VIDEO_YOTUBE } from '@modules/directivas/constants/directivas.consts';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIFComponent {

  isError:boolean = true;
  msg: string = 'Resultado';
  dato: String = 'video';
  image: string = IMAGE_CLOUDINARY;
  resultado:boolean = true;

  constructor(private sanitizer: DomSanitizer) {}
  get video(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_YOTUBE);
  }

}
