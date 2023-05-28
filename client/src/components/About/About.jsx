import style from './About.module.css'



export default function About () {
    return (
      
         <div className={style.about}>
       <img className={style.img} src="https://ca.slack-edge.com/TPRS7H4PN-U04BDM4A0KG-4cba38947c55-512" alt="no"/>
          <div>
         <span className={style.texto}>Welcome!This is my web app created during the Henry bootcamp,<br /> 
         where I applied and put to the test all the knowledge I acquired. <br /> My name is Cristian Peralta,
          I'm 30 years old, and I live in Argentina.</span>
        </div>
    </div>
    )
}
