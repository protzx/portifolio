import { useEffect } from 'react'
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import imgBarbearia from './assets/Captura de pantalla 2026-07-13 225505.png'
import imgRoupas from './assets/Captura de pantalla 2026-07-13 225637.png'
import imgLendas from './assets/Captura de pantalla 2026-07-13 233509.png'
import imgAgro from './assets/Captura de pantalla 2026-07-13 233556.png'
export default function App() {
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 800,
    })
    AOS.refresh()
  }, [])
  return (
    <>
      <header>
        <div style={{
          paddingTop: '70px',
          width: "100%",
          maxWidth: "100%",
          fontFamily: "roboto",
          paddingLeft: 'min(90px, 5%)',
          paddingRight: 'min(90px, 5%)',
          boxSizing: 'border-box',
          left: 0
        }}>
          <div style={{
            display: 'flex',
            border: "solid 0.1px #8B5CF6",
            borderRadius: "10px",
            width: '100%',
            maxWidth: '358px',
            height: '60px',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'
          }}>
            <h3 style={{
              color: "white",
              fontSize: '14px',
              margin: 0
            }}>🥉Medalhista de Bronze - Maratona Tech</h3>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            alignItems: 'flex-start'
          }}>

            <h1 style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "clamp(45px, 8vw, 90px)"
            }} data-aos="fade-up" data-aos-duration="800">PROTZ DEV
            </h1>
            <h2 style={{
              color: "#8B5CF6",
              fontSize: "clamp(20px, 4vw, 28px)",
            }} data-aos="fade-up" data-aos-duration="800">
                Suloções Digitais & Sites para Negócios Locais</h2>
          </div>
        </div>
      </header>
      
    <div style={{
      color: 'white',
      fontFamily: 'roboto',
      paddingLeft: 'min(90px, 5%)',
      paddingRight: 'min(90px, 5%)',
      boxSizing: 'border-box'
    }}>
<p data-aos="fade-up" data-aos-duration="800" style={{
  padding: '60px 0px',
  fontSize: '20px',
  fontWeight: 'bold'
}}>Olá sou o Davi Protz, desenvolvedor focado em criar soluções digitais para seu comércio, como por exemplo sites, apps e sistemas automatizados para alavancar suas vendas.</p>
<a href='https://wa.me/5542999936768?text=Quero%20impulsionar%20meu%20neg%C3%B3cio!' target='_blank' rel='noopener noreferrer'>
<button data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" style={{
 backgroundColor: "#6C37E4",
 border: 'transparent',
 width: '100%',
 maxWidth: '292px',
 height: '60px',
 borderRadius: '12px',
 fontSize: '18px',
 color: 'white',
 padding: '10px',
 fontWeight: 'bold'
}}>
  IMPULSIONAR MEU NEGÓCIO
</button>
</a>
<div>
  <h2 data-aos="fade-right" data-aos-duration="600" style={{
    paddingTop: '108px',
    paddingBottom: "30px",
    fontSize: '36px',
    fontWeight: 'bold'
  }}>PROJETOS EM DESTAQUE</h2>
  </div>
    </div>

    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      color: 'white',
      fontFamily: 'roboto',
      boxSizing: 'border-box'
    }}>
   <div data-aos="fade-up" data-aos-delay="100" style={{
    justifyContent: 'flex-start',
    paddingLeft: 'min(90px, 5%)',
    flex: '1 1 500px',
    maxWidth: '100%'
   }}>
  <a href='https://sistema-agendamento-opal.vercel.app/' target='_blank' rel='noopener noreferrer'>
  <img src={imgBarbearia} style={{
    width: '100%',
    maxWidth: '500px',
    height: 'auto'
  }}></img>
  </a>
  <h4 style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>Site de Barbearia</h4>
  <p style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#8B5CF6' ,
    fontWeight: 'bold',
    paddingBottom: '30px',
    textAlign: 'center'
  }}>Sistema de Agendamento com react native e google sheets.</p>
  </div>
  <div  data-aos="fade-up" data-aos-delay="300" style={{
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    paddingRight: 'min(90px, 5%)',
    flex: '1 1 500px',
    maxWidth: '100%'
  }}>
  <a href='https://vitrine-virtual-eight.vercel.app/' target='_blank' rel='noopener noreferrer'>
  <img src={imgRoupas} style={{
    width: '100%',
    maxWidth: '500px',
    height: 'auto'
  }}></img>
  </a>
  <h4 style={{
   display: 'flex',
   justifyContent: 'center',
   color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>Catálogo de Roupas</h4>
  <p style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#8B5CF6' ,
    fontWeight: 'bold',
    textAlign: 'center'
  }}>Vitrine Digital com react e google sheets.</p></div>
</div>

<div style={{
  display: 'flex',
  flexWrap: 'wrap',
  color: 'white',
  fontFamily: 'roboto',
  boxSizing: 'border-box',
  marginTop: '40px'
}}>
<div  style={{
    justifyContent: 'flex-start',
    paddingLeft: 'min(90px, 5%)',
    flex: '1 1 500px',
    maxWidth: '100%'
   }}>
  <a data-aos="fade-up" data-aos-delay="100" href='https://lendas-de-palmeira.vercel.app/' target='_blank' rel='noopener noreferrer'>
  <img src={imgLendas} style={{
    width: '100%',
    maxWidth: '500px',
    height: 'auto'
  }}></img>
  </a>
  <h4 style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>Lendas Palmeira</h4>
  <p style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#8B5CF6' ,
    fontWeight: 'bold',
    paddingBottom: '30px',
    textAlign: 'center'
  }}>App de Lendas de Palmeira com react native.</p>
  </div>
  <div data-aos="fade-up" data-aos-delay="300" style={{
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    paddingRight: 'min(90px, 5%)',
    flex: '1 1 500px',
    maxWidth: '100%'
  }}>
    <div>
  <a href='https://agrinho-beige-pi.vercel.app/' target='_blank' rel='noopener noreferrer'>
  <img src={imgAgro} style={{
    width: '100%',
    maxWidth: '500px',
    height: 'auto'
  }}></img>
  </a>
  <h4 style={{
   display: 'flex',
   justifyContent: 'center',
   color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>AgroNext</h4>
  <p style={{
    fontSize: '18px',
    color: '#8B5CF6' ,
    fontWeight: 'bold',
    textAlign: 'center'
  }}>Site produzido para o agrinho 2026, passou para a segunda fase.</p></div>
  </div>
</div>

<div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" style={{
  paddingTop: '70px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px'
}}>
  <a href='https://wa.me/5542999936768' target='_blank' rel='noopener noreferrer'>
  <FaWhatsapp  color= 'white' size={40}/>
  </a>
  <a href='' target='_blank' rel='noopener noreferrer'>
  <FaInstagram color='white' size={40}/>
  </a>
  <a href='https://github.com/protzx' target='_blank' rel='noopener noreferrer'>
  <FaGithub color='white' size={40}/>
  </a>
  <a href='mailto:protzdavi@gmail.com' target='_blank' rel='noopener noreferrer'>
  <MdEmail size={40} color='white'/>
  </a>
</div>
<footer style={{
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'roboto',
  fontSize: '8px',
  paddingTop: '20px'
}}>
© 2026 Protz Dev.
</footer>
    </>
  )
}