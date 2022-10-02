// import React, { useState } from 'react'
import landingPage from  '../assets/images/landingPage.svg'
import styles from '../assets/styles/eventCard.module.scss'

export const EventCard = () => {

  // const [hosterName, sethosterName] = useState("Elysia"); currently statics landing page
  // const [eventName, setEventName] = useState("Movie night");

  return (
    <div className={styles.eventCardContainer}>
      {/* <div>
        <img />
      </div>
      <div>
        <h2>{eventName}</h2>
        <p><span></span>Hosted by {hosterName}</p>
      </div> */}

      {/* <div className="landingPageContainer"> */}
        <img
          src={landingPage}
          alt="Invitation Card"
          className={styles.eventCard}
        />
      {/* </div>s */}
    </div>
  )
}