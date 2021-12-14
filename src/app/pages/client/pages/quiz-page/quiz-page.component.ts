import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.state';
import { Pregunta } from '../../../../interfaces/pregunta.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {
  getPreguntaRecursoLoad,
} from '../../../../state/actions/pregunta.actions';
import { selectPreguntas } from '../../../../state/selectors/pregunta.selectors';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';
import { getCapacitacionById } from '../../../../state/selectors/capacitacion.selectors';
import { Capacitacion } from '../../../../interfaces/capacitacion.interface';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  idRecurso: number = 0;
  currentQuizz: number = 0;

  incorrectAlternativa = 0;
  correctAlternativa = 0;

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

  quizz$: Observable<Pregunta[]> = new Observable();
  quizzes: Pregunta[] = [];

  constructor(
    private quizzEfeect: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.idRecurso = params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnInit(): void {
    this.quizzEfeect.dispatch(getCapacitacionLoad());
    this.quizzEfeect.dispatch(getPreguntaRecursoLoad({ id: this.idRecurso }));

    this.quizz$ = this.quizzEfeect.select(selectPreguntas);
    this.quizz$.subscribe((data) => {
      this.quizzes = data;
    });

    this.capacitacionById$ = this.quizzEfeect.select(
      getCapacitacionById(1)
    );
    this.capacitacionById$.subscribe((data) => {
      this.capacitacionDetails = data;
    });

    setTimeout(() => {
      console.log(this.capacitacionDetails);
      console.log(this.quizzes);
    }, 400);
  }

  onAlternativa(alternativa: string) {
    setTimeout(() => {
      this.currentQuizz++;
    }, 1000);

    if (alternativa === '1') {
      this.correctAlternativa++;
    } else {
      this.incorrectAlternativa++;
    }
  }

  onVolverSesion(){
    this.router.navigate(["../"])
    console.log("hola");

  }
}
