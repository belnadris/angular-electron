import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslatePipe, TranslateDirective, FormsModule],
  exports: [TranslatePipe, TranslateDirective, FormsModule]
})
export class SharedModule {}
