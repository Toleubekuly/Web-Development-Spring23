import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album, Photo} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  albumID: number;
  loaded : boolean;
  photos: Photo[];
  constructor(private route: ActivatedRoute, private postService : AlbumService) {
    this.albumID = 0;
    this.photos = [];
    this.loaded = true;
  }

  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      this.albumID = Number(params.get('id'));
    });

    this.loaded = false;

    this.postService.getPhotos(this.albumID).subscribe((photos) =>{
      this.photos = photos;
    })

    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPhotos()
  }

}
