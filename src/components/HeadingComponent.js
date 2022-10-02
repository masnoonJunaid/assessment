import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/HeadingStyles.module.scss';

export const HeadingComponent = () => {
  const socialSites =[
    "Snapchat",
    "Instagram",
    "Facebook",
    "Watsapp",
    "Discord",
    "Twitter",
    "Messenger",
    "Group chats",
  ]

  const [activeSocilaMedia, setActiveSocialMedia] = useState(socialSites[0])


  // experimental implementation of dynamic social media Text, (after assessment time over)
 useEffect(() => {
  setInterval(() => {
    setActiveSocialMedia(socialSites[Math.floor(Math.random() * (8 - 0) + 0)])
  }, 10000)
 })


  return (
    <div>
      <h1 className={styles.headingText}>
        Imagine if
        <br />
        <span className={styles.activeSocialText}>{activeSocilaMedia}</span>
        <br />
        had events.
      </h1>
      <p className={styles.detailsParagraph}>Easily host and share events with your friends across any social media.</p>
    </div>
  )
}