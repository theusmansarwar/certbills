import React from "react";
import "./HowItWorks2.css";

const HowItWorks2 = () => {
  return (
    <div className="how-it-works2">
      <h2>How it Works</h2>

      <div className="steps-container">
        {/* STEP 1 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Consultation"
            className="step-icon"
          />
          <p className="step-number">STEP 1</p>
          <h3 className="step-title">Consultation</h3>
          <p className="step-desc">
            We'll discuss your goals, preferences, and areas you want to improve
          </p>
          <img className="step-arrow1" src="/step1.svg" alt="arrow" />
        </div>
        <img className="rotate-arrow" src="/rotate-arrow.png" alt="arrow" />
        {/* STEP 2 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Trainer Match"
            className="step-icon"
          />
          <p className="step-number">STEP 2</p>
          <h3 className="step-title">Trainer Match</h3>
          <p className="step-desc">
            Based on your needs, we'll match you with a qualified trainer.
          </p>
          <img className="step-arrow2" src="/step2.svg" alt="arrow" />
        </div>
        <img className="rotate-arrow" src="/rotate-arrow.png" alt="arrow" />
        {/* STEP 3 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Tailored Curriculum"
            className="step-icon"
          />
          <p className="step-number">STEP 3</p>
          <h3 className="step-title">Tailored Curriculum</h3>
          <p className="step-desc">
            Your trainer will create a customized plan to guide your journey.
          </p>
          <img className="step-arrow3" src="/step3.svg" alt="arrow" />
        </div>
        <img className="rotate-arrow" src="/rotate-arrow.png" alt="arrow" />
        {/* STEP 6 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Progress And Growth"
            className="step-icon"
          />
          <p className="step-number">STEP 6</p>
          <h3 className="step-title">Progress And Growth</h3>
          <p className="step-desc">
            Watch your skills improve as you work closely with your dedicated
            trainer
          </p>
          <img className="step-arrow4" src="/step5.svg" alt="arrow" />
        </div>

        {/* STEP 5 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Feedback And Adjustments"
            className="step-icon"
          />
          <p className="step-number">STEP 5</p>
          <h3 className="step-title">Feedback And Adjustments</h3>
          <p className="step-desc">
            Your trainer will provide feedback and adjust the curriculum as
            needed.
          </p>

          <img className="step-arrow5" src="/step4.svg" alt="arrow" />
        </div>
         <img className="rotate-arrow" src="/rotate-arrow.png" alt="arrow" />
        {/* STEP 4 */}
        <div className="step-card">
          <img
            src="/cyber-security.svg"
            alt="Training Sessions"
            className="step-icon"
          />
          <p className="step-number">STEP 4</p>
          <h3 className="step-title">Training Sessions</h3>
          <p className="step-desc">
            Enjoy personalized training sessions, online or in person.
          </p>
        </div>
        <img className="rotate-arrow" src="/rotate-arrow.png" alt="arrow" />
      </div>
    </div>
  );
};

export default HowItWorks2;
