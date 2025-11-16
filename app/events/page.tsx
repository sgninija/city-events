import Link from "next/link";

export const metadata = {
  title: "Events - City Events",
};

// Sample events data
const events = [
  {
    name: "Summer Music Festival",
    location: "Central Park",
    date: "Saturday, July 15, 2024",
    time: "2:00 PM - 10:00 PM",
  },
  {
    name: "Art Walk Downtown",
    location: "Downtown Arts District",
    date: "Friday, July 20, 2024",
    time: "6:00 PM - 9:00 PM",
  },
  {
    name: "Food Truck Rally",
    location: "Riverside Park",
    date: "Sunday, July 22, 2024",
    time: "12:00 PM - 6:00 PM",
  },
  {
    name: "Tech Meetup",
    location: "Innovation Hub",
    date: "Wednesday, July 25, 2024",
    time: "7:00 PM - 9:00 PM",
  },
  {
    name: "Farmers Market",
    location: "Main Street Square",
    date: "Saturday, July 28, 2024",
    time: "8:00 AM - 2:00 PM",
  },
  {
    name: "Jazz Night",
    location: "The Blue Note",
    date: "Friday, August 3, 2024",
    time: "8:00 PM - 11:00 PM",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Next.js Supabase Starter</Link>
              <Link href={"/about"} className="hover:underline">
                About
              </Link>
              <Link href={"/events"} className="hover:underline">
                Events
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-8 max-w-5xl p-5 w-full">
          <div className="flex flex-col gap-6 px-4">
            <h1 className="text-4xl font-bold">Upcoming Events</h1>
            <p className="text-lg text-muted-foreground">
              Discover exciting events happening in your city
            </p>
            <div className="mt-6 space-y-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-colors"
                >
                  <h2 className="text-2xl font-semibold mb-3">{event.name}</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Location:</span>
                      {event.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Date:</span>
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium">Time:</span>
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="text-primary hover:underline font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

