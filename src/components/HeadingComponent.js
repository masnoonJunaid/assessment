import React, { useState } from 'react';

export const HeadingComponent = () => {
  const socialSites =[
    "Snapchat",
    "Instagram",
    "Facebook",
    "Watsapp",
    "Discord",
    "Twitter",
    "Messenges",
    "Group chats",
  ]

  const [activeSocilaMedia, setActiveSocialMedia] = useState(socialSites[0])


  return (
    <head>
      <h1 className="headingText">
        Imagine if
        <span className='activeSocialText'>{activeSocilaMedia}</span>
        had events.
      </h1>
      <p className='detailsParagraph'>Easily host and share events with your friends across any social media.</p>
    </head>
  )
}