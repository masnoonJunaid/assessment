import { HeadingComponent } from "../components/HeadingComponent";
import { EventCard } from "../components/EventCard";
import { DynamicButton } from "../components/Button";


export const HomePage = () => {
  return <div>
    <HeadingComponent />
    <EventCard />
    <DynamicButton />
  </div>
}