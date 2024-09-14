import { Component } from '@angular/core';
import { ChatHeaderComponent } from "../chat-header/chat-header.component";
import { ChatConversationComponent } from "../chat-conversation/chat-conversation.component";
import { ChatMessagesComponent } from "../chat-messages/chat-messages.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatHeaderComponent, ChatConversationComponent, ChatMessagesComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
