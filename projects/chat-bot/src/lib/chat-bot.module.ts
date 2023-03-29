import { NgModule } from '@angular/core';
import { ChatBotComponent } from './chat-bot.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [ChatBotComponent],
  imports: [ComponentsModule],
  exports: [ChatBotComponent],
})
export class ChatBotModule {}
