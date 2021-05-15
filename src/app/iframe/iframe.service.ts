import { IVideos } from './iframe.model';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IframeService {
  autoplay: string = '?autoplay=1'
  videos: IVideos[] = [
    {
      src: 'https://www.youtube.com/embed/X-COen_FfuY' + this.autoplay,
      title: 'position',
      photo: 'assets/photo1.jpg'
    },

	{
		src: 'https://www.youtube.com/embed/hEgeYelU6rQ' + this.autoplay,
		title: 'name',
    photo: 'assets/photo2.jpg'
	  }
  ]

  constructor(
	  private sanitizer: DomSanitizer
  ) { }

  getAllVideos() {
	this.videos.map(video => {
    const _video = video.src.toString()
		video.src = this.sanitizer.bypassSecurityTrustResourceUrl(_video)
	})
	return this.videos;
  }
}
