import '../../scss/main.scss'

const COVERTURA = "Cancun - Tulum - Isla Mujeres - Cozumel";
const TELEFONO = "(998) 2 18 46 16"; 

const Header = () => (

	<header className="header" >
		<div className="bg-video">
			<video className="bg-video__content" autoPlay muted loop>
				<source src="../static/media/Major-Tom.mp4" type="video/mp4"></source>
				<source src="../static/media/Major-Tom.webm" type="video/webm"></source>
				Your browser is not supported!
      </video>
		</div>

		<div className='header__text-box' >
			<h1 className="heading-primary">
				<img src="../static/images/slogan-transparent.png" className="header__logo" alt="Interaudio Logo"></img>
				<span className="heading-primary--sub">
					{COVERTURA}
					<br></br>
					{TELEFONO}
				</span>
			</h1>
			<a href="#section-tours"  className="header__socialIcon">
				<img className="header__socialIcon--whatsApp"src='../static/icons/whatsapp-480px.png' 					
						alt="Contacto WhatsApp"></img>
			</a>
		</div>
	</header>
)
export default Header;