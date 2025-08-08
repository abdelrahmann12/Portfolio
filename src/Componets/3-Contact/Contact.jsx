import React from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/Done.json"
import EmailAnimation from "../../animation/Email Sent.json"

import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("movlnpll");
  return (
    <section className="contact">
      <div className="header">
        <h2>
          <span className="icon-envelope"></span>
          Contact us
        </h2>
        <p>
          Contact us for more information and Get notified when I publish
          something new.
        </p>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
            autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded&& (

            <h1 style={{marginTop:20 , display:"flex" , alignItems:"center"}}>
              <Lottie loop={false} style={{width:70 , marginTop:8}} animationData={doneAnimation}>
  
              </Lottie>
              Your message has been sent successfully
            </h1>
          )}
        </form>
        <div className="animation">
          <Lottie 
          style={{width:400 , marginBottom:60}}
           animationData={EmailAnimation}>

          </Lottie>
        </div>
      </div>
    </section>
  );
}
