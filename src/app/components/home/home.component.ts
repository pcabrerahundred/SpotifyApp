import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(
    private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe(data => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errService) => {
        this.error = true;
        console.log(errService);
        this.loading = false;
        this.mensajeError = errService.error.error.message;
      })
  }

  ngOnInit(): void {

  }

}
