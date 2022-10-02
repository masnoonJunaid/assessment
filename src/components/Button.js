import  { Link } from 'react-router-dom'

export const DynamicButton = (props) => {

  const {
    styles,
    ButtonIcon,
    buttonText,
    buttonLink
  } = props;

  return( 
    <Link to={buttonLink}>
      <button className={styles.buttonStyle}>
      <ButtonIcon />
      <p className={styles.buttonText}>{buttonText}</p>
    </button>
    </Link>
  )
}