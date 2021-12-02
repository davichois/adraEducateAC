import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  archivos: any[] = [];
  stateButtonEnviar: boolean = false;

  @Input() name: string = 'Panel';
  @Input() icon: string = '';
  @Input() fontSize: number = 20;
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() paddingTB: number = 10;
  @Input() paddingRL: number = 30;

  @Input() type: string = 'button';

  @ViewChild('inputFile') inputFile: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  openFileSelect() {
    const inputFile = this.inputFile?.nativeElement;
    inputFile.click();
  }

  capturaArchive(event: any) {
    const archivoCapturado = event.target.files[0];
    console.log(event.target.files[0]);
    this.archivos.push(archivoCapturado);
    if (this.archivos.length > 0) {
      this.stateButtonEnviar = true;
    }
  }
}
