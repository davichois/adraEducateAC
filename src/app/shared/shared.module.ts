import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [ButtonComponent, InputTextComponent],
  exports: [ButtonComponent, InputTextComponent],
  imports: [CommonModule],
})
export class SharedModule {}
