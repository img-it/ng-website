import { SafeUrl } from "@angular/platform-browser";

export interface IVideos {
  height: number;
  width: number;
  src: SafeUrl;
  title: string;
  photo: string
}
