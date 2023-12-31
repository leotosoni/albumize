import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Album, Review } from 'src/app/interfaces/interfaces';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ServicioMusicaService } from 'src/app/services/servicio-musica.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  img: string[] = []
  new_releases: Album[] = []

  new_releases2: Album[] = []

  reviewsArray:Review[] = []
  score:number | string = 0

  idArtist = {} as number
  busqueda = {} as string

  active: boolean = false

  formulario: FormGroup = this.fb.group({
    nombre: ''
  })


  constructor(private api:ServicioMusicaService,
    private fb: FormBuilder,
    private reviewsDB:ReviewsService) { }

  async ngOnInit() {
    const data = await this.api.getNewReleases()
    this.new_releases = await data['albums']['items'].slice(0,4)
    this.getAlbumYear(this.new_releases)
    this.getDottedName(this.new_releases)



    this.new_releases2 = await data['albums']['items'].slice(4,8)
    this.getAlbumYear(this.new_releases2)
    this.getDottedName(this.new_releases2)


    this.reviewsArray = await this.reviewsDB.getReviews()

  }

  //Funcion que calcula la puntuacion de cada album

  calcularScore(albumUrl: string): number | string {
    const filteredReviews = this.reviewsArray.filter(review => review.albumUrl === albumUrl);
  
    if (filteredReviews.length === 0) {
      return -1;
    } 
  
    const totalScore = filteredReviews.reduce((accumulator, review) => accumulator + review.punctuation, 0);
    const averageScore = totalScore / filteredReviews.length;
  
    return parseFloat(averageScore.toFixed(1));
   
  }

  //Funcion que formatea el anio del album
  
  getAlbumYear(array: Album[]) {
    array.forEach((item) => {
      item.release_date = item.release_date.split("-")[0]
    })
  }

  // Funcion que trunca el nombre del album 
  getDottedName(array: Album[]) {
    array.forEach((item: Album) => {
      if (item.name.length > 12) {
        item.name = item.name.slice(0, 12) + '...'
      }
    })

  }
}
