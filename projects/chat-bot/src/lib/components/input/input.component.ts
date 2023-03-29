import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'oui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() userUtterance: EventEmitter<string> = new EventEmitter();
  @ViewChild('userUtterance') userUtteranceElement!: ElementRef;
  public buttonText: string = 'Send';
  public textAreaForm: FormGroup;
  constructor(private renderer: Renderer2) {
    this.textAreaForm = new FormGroup({
      userUtterance: new FormControl(''),
    });
  }
  private clear() {
    this.textAreaForm.reset();
  }
  private focus() {
    this.userUtteranceElement.nativeElement.focus();
  }
  public onSubmit() {
    this.userUtterance.emit(this.textAreaForm.get('userUtterance')?.value);
    this.clear();
    this.focus();
  }
}
