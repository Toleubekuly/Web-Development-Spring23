import { Component } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album : Album;
  loaded : boolean;
  editableAlbum : Album;
  edit : boolean;

  constructor(private postService : AlbumService, private route : ActivatedRoute) {
    this.album = {} as Album;
    this.loaded = true;
    this.edit = false;
    this.editableAlbum = {} as Album;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.loaded = false;

      this.postService.getAlbum(id).subscribe((album) =>{
        this.album = album;
        this.loaded = true;
      })
    })
  }

  saveChanges(){
    this.editableAlbum.userId = this.album.userId;

    this.postService.updateAlbum(this.album.id, this.editableAlbum).subscribe((alb) =>{
      this.album = alb;
    })

    this.edit = !this.edit;

    this.editableAlbum = {} as Album;
  }


}
