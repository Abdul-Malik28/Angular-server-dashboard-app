import { Component, input, output, signal } from '@angular/core';

import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input({alias:}) ...
  // data = input.required<Ticket>({ alias: 'ticket' });
  // data = input.required<Ticket>({ transform: (value: string) => value = 'hi' });
  data = input.required<Ticket>();
  // @Output ('closeTicket) ...
  // close = output({ alias: 'closeTicket' });
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
