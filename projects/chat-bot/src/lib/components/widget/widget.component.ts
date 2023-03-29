import { Component, Input, OnInit } from '@angular/core';
import { ChatBotService } from '../../chat-bot.service';

@Component({
  selector: 'oui-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  @Input() public url: string = 'http://localhost:3000';

  private chatBotService: ChatBotService;
  newMessage!: string;
  messageList: string[] = [];

  constructor(private readonly _chatBotService: ChatBotService) {
    this.chatBotService = _chatBotService;
    this.chatBotService.connect(this.url);
  }

  ngOnInit(): void {
    this.chatBotService.getMessages().subscribe(message => {
      this.addMessage(message);
    });
  }
  public addMessage(message: string) {
    this.messageList.unshift(message);
  }
  public sendMessage(message: any) {
    this.addMessage(message);
    this.chatBotService.sendMessage(message);
  }
}
