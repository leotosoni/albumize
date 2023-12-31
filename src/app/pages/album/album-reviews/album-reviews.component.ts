import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/animations/animations';
import { Album, Review } from 'src/app/interfaces/interfaces';
import { CommonVariablesService } from 'src/app/services/common-variables.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-album-reviews',
  templateUrl: './album-reviews.component.html',
  styleUrls: ['./album-reviews.component.css'],
  animations: [fadeInOut]
})
export class AlbumReviewsComponent implements OnInit {

  album: Album[] = [];
  listaReviews: Review[] = [];
  listaReviewsFiltrada: Review[] = [];
  albumIntroLoaded: boolean = false;
  showButtons: boolean = false;
  showUl: boolean = false;
  originalOrder: Review[] = [];
  reversedOrder: Review[] = [];

  sortBy: string = 'opcion1'

  constructor(
    private route: ActivatedRoute,
    private reviews: ReviewsService,
    public cv: CommonVariablesService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const albumId = params.get('id');

      if (albumId) {
        await this.leer();
        this.listaReviewsFiltrada = this.listaReviews.filter(review => review.albumUrl === albumId);

        this.originalOrder = [...this.listaReviewsFiltrada]
        this.reversedOrder = [...this.listaReviewsFiltrada.reverse()]

      this.sortByMostRecent()
      }
    });

    setTimeout(() => {
      this.showButtons = true;
      this.showUl = true;
    }, 430);

    this.cv.selectedSortOption
      .subscribe((option) => {
        this.sortBy = option

        console.log(this.sortBy)
        switch (this.sortBy) {
          case 'opcion1':
            this.sortByMostRecent();
            break;
          case 'opcion2':
            this.sortByOldest();
            break;
          case 'opcion3':
            this.sortFromHighToLow();
            break;
          case 'opcion4':
            this.sortFromLowToHigh();
            break;
          default:
            this.sortByMostRecent();
            break;
        }
      }
      )
  }

  async leer() {
    this.listaReviews = await this.reviews.getReviews();
  }

  sortFromHighToLow() {
    this.listaReviewsFiltrada.sort((a, b) => b.punctuation - a.punctuation);
  }

  sortFromLowToHigh() {
    this.listaReviewsFiltrada.sort((a, b) => a.punctuation - b.punctuation);
  }

  sortByMostRecent() {
    this.listaReviewsFiltrada = this.reversedOrder;
  }
  
  sortByOldest() {
    this.listaReviewsFiltrada = this.originalOrder;
  }
  
}