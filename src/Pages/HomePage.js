import { HeadingComponent } from "../components/HeadingComponent";
import { EventCard } from "../components/EventCard";
import { DynamicButton } from "../components/Button";
import buttonStyles from '../assets/styles/homeButton.module.scss'
import { GiPartyPopper } from 'react-icons/gi'
import homePageStyle from '../assets/styles/Homepage.module.css';


export const HomePage = () => {
  return(
    <div className={ homePageStyle.homeContainer }>
      <HeadingComponent />
      <div className={homePageStyle.eventContainer}>
        <EventCard />
      </div>
      <div className={homePageStyle.buttonContainer}>
        <DynamicButton
          styles={buttonStyles}
          ButtonIcon = {GiPartyPopper}
          buttonText={"Create my event"}
          buttonLink="/create-new-event"
        />
      </div>
    </div>
)
}