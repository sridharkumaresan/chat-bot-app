import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WidgetComponent,
  AvatarComponent,
  InputComponent,
  StatusComponent,
  MessageComponent,
} from '.';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WidgetComponent,
    InputComponent,
    StatusComponent,
    AvatarComponent,
    MessageComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [WidgetComponent],
})
export class ComponentsModule {}
