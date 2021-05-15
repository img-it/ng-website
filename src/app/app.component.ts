import { IframeComponent } from './iframe/iframe.component';
import { IVideos } from './iframe/iframe.model';
import { Component, OnInit } from '@angular/core';
import { IframeService } from './iframe/iframe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  videos: IVideos[] = []

  constructor(
    private iframeService: IframeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.videos = this.iframeService.getAllVideos()
    console.log(this.videos)
  }

  openVideo(video: IVideos) {
    const dialogRef = this.dialog.open(IframeComponent, {
		data: {video: video},
	});

  }

}
