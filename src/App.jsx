import Hero from "./Componets/2-Hero/Hero";
import Header from "./Componets/1-Header/Header";
import Main from "./Componets/4-Main/Main";
import Contact from "./Componets/3-Contact/Contact";
import Footer from "./Componets/5-Footer/Footer";
import { useEffect, useState } from "react";

function App() {
useEffect(()=>{
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY > 300){
      setShowBtn(true)
    }else
      setShowBtn(false);
  })
},
[])
const [showBtn , setShowBtn] = useState(false)
  return (
    <div className="container">
     <Header></Header> 

     <Hero></Hero>
     <div className="divider"></div>
     <Main></Main>
     <div className="divider"></div>
     <Contact></Contact>
     <div className="divider"></div>
     <Footer></Footer>

    {showBtn && (<a href="#up">
        <button onClick={()=>{
           window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>)}
    
    
    </div>
  )
}

export default App
