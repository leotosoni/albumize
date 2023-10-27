import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Review } from 'src/app/interfaces/interfaces';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ServicioMusicaService } from 'src/app/services/servicio-musica.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent implements OnInit{

  album: Album | undefined

  constructor(private route:ActivatedRoute,private servicio:ServicioMusicaService,private reviews:ReviewsService){}

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const albumId = params.get('id');

      if(albumId){
        this.album = await this.servicio.getAlbumByID(albumId)
      }
    });
  }
}
