import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnswers]',
})
export class AnswersDirective {
  @Input() correctAnswer: number = 1;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onAnswered() {
    if (this.correctAnswer ==1)
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'green'
      );
    else
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'red'
      );
  }
}
