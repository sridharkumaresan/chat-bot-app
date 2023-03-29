import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'oui-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }

}
