import { MessageService } from 'src/app/message.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }

}
