import React from "react";
import "./CounterCards.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    const animation = animate(count1, 420, { duration: 3 });
    return animation.stop;
  }, [count1]);
  useEffect(() => {
    const animation = animate(count2, 18, { duration: 3 });
    return animation.stop;
  }, [count2]);
  useEffect(() => {
    const animation = animate(count3, 5, { duration: 3 });
    return animation.stop;
  }, [count3]);
  useEffect(() => {
    const animation = animate(count4, 69, { duration: 3 });
    return animation.stop;
  }, [count4]);

  return (
    <>
      <section id="animated-box">
        <div className="crow">
          <div className="ccolumn">
            <div className="ccard">
              <p>
                <i className="fa fa-user fa-lg"></i>
              </p>
              <div className="ctext">
                <motion.h1>{rounded1}</motion.h1>
                <p>+</p>
              </div>
              <p className="ccard-name">Participants</p>
            </div>
          </div>

          <div className="ccolumn">
            <div className="ccard">
              <p>
                <i className="fa fa-check fa-lg"></i>
              </p>
              <div className="ctext">
                <motion.h1>{rounded2}</motion.h1>
                <p>+</p>
              </div>
              <p className="ccard-name">Events</p>
            </div>
          </div>

          <div className="ccolumn">
            <div className="ccard">
              <p>
                <i className="fa-solid fa-store fa-lg"></i>
              </p>
              <div className="ctext">
                <motion.h1>{rounded3}</motion.h1>
                <p>+</p>
              </div>
              <p className="ccard-name">Sponsors</p>
            </div>
          </div>

          <div className="ccolumn">
            <div className="ccard">
              <p>
                <i className="fa-solid fa-face-smile fa-lg"></i>
              </p>
              <div className="ctext">
                <motion.h1>{rounded4}</motion.h1>
                <p className="cspace">K </p>
                <p>+</p>
              </div>
              <p className="ccard-name">Prize Pool </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
