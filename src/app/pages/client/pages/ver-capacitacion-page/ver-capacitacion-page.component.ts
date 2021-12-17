import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getCapacitacionById } from '../../../../state/selectors/capacitacion.selectors';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';
import { Capacitacion } from '../../../../interfaces/capacitacion.interface';
import { getRecursoSesionLoad } from '../../../../state/actions/recurso.actions';
import { Recurso } from '../../../../interfaces/recurso.interface';
import { selectRecursos } from '../../../../state/selectors/recurso.selectors';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-capacitacion-page',
  templateUrl: './ver-capacitacion-page.component.html',
  styleUrls: ['./ver-capacitacion-page.component.css'],
})
export class VerCapacitacionPageComponent implements OnInit {
  id: number = 0;
  documentosEmbeber: Recurso[] = [];
  quizz: Recurso[] = [];
  salas: Recurso[] = [];

  url: string =
    'https://docs.google.com/gview?url=https://s3.amazonaws.com/';
  urlSafe: SafeResourceUrl | undefined;

  capacitacionById$: Observable<any> = new Observable();
  capacitacionDetails: Capacitacion = {
    idCapacitacion: 0,
    noCapacitacion: '',
    deCapacitacion: '',
    feInicioCapacitacion: new Date(),
    feFinCapacitacion: new Date(),
    tiCapacitacion: '',
    idCapCategoria: 0,
    totalRecCapacitacion: '',
    esCapacitacion: '',
    fiImageURL: '',
    sesions: [],
  };

  recursos$: Observable<Recurso[]> = new Observable();
  recursoSelects: Recurso[] = [];

  constructor(
    private detailsEffect: Store<AppState>,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    this.detailsEffect.dispatch(getCapacitacionLoad());

    this.capacitacionById$ = this.detailsEffect.select(
      getCapacitacionById(this.id)
    );
    this.recursos$ = this.detailsEffect.select(selectRecursos);

    this.capacitacionById$.subscribe((data) => {
      this.capacitacionDetails = data;
    });
    this.recursos$.subscribe((data) => {
      this.recursoSelects = data;
    });
  }

  onIdSesion(idSesion: any) {
    this.detailsEffect.dispatch(getRecursoSesionLoad({ id: idSesion }));
    setTimeout(() => {
      this.recursoSelects.forEach((element) => {
        switch (element.idRecTipoDoc) {
          case 1 || 2:
            this.documentosEmbeber = [];
            this.documentosEmbeber.push(element);
            break;

          case 3:
            this.quizz = [];
            this.quizz.push(element);
            break;

          case 5:
            this.salas = [];
            this.salas.push(element);
            break;

          default:
            console.log('no hay');
            break;
        }
      });
    }, 200);
  }

  onChageDocumet(urlDOC: any) {
    this.url = `https://docs.google.com/gview?url=${urlDOC}&embedded=true`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
