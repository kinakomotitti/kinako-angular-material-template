import { Component } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-turoeial-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  constructor(readonly _messageService: MessageService) {}
}
