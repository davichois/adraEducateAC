import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getBCLoad } from '../../../../state/actions/bancosComunal.actions';
import { selectBancosComunalReport } from '../../../../state/selectors/bancosComunal.selectors';

@Component({
  selector: 'app-banco-comunal-page',
  templateUrl: './banco-comunal-page.component.html',
  styleUrls: ['./banco-comunal-page.component.css'],
})
export class BancoComunalPageComponent implements OnInit {
  stateForm: boolean = false;
  header: string[] = [
    '#',
    'nombre',
    'distrito',
    'provincia',
    'departamento',
    'acciones',
  ];
  bancoComunalList$: Observable<any[]> = new Observable();

  constructor(private bancoComunalEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.bancoComunalEffect.dispatch(getBCLoad());
    this.bancoComunalList$ =
      this.bancoComunalEffect.select(selectBancosComunalReport);
  }

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
  }
}
