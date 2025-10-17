import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../model/event.model';
import { EventService } from '../../../Services/event.service';

@Component({
  selector: 'app-events-conferences',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './events-conferences.component.html',
  styleUrls: ['./events-conferences.component.css']
})
export class EventsConferencesComponent implements OnInit {
  events: Event[] = [];
  conferences: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.conferences = this.eventService.getConferences();
  }
}
