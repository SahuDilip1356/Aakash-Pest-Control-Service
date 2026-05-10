// Google Calendar API: fetch available slots and create booking events
// Uses a service account for server-side auth

export async function getAvailableSlots(date: string): Promise<string[]> {
  // TODO: implement with googleapis
  // Returns array of available time strings e.g. ["9:00 AM", "11:00 AM", "2:00 PM"]
  return ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
}

export async function createBookingEvent(booking: {
  name: string;
  mobile: string;
  pestType: string;
  scheduledAt: Date;
}): Promise<string> {
  // TODO: create event in Google Calendar, return event ID
  return "placeholder-event-id";
}
