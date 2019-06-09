/**
 * Interface  which defines an event
 */
export interface  Event {
    id: string; // event identifier
    title: string; // event title
    location: string; // event location
    date: Date; // event date
    description: string; // event description
    addedBy: string; // event user
  }
