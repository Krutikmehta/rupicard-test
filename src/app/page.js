import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landingWrapper}>
        <video loop autoPlay muted>
          <source src="/videos/bg_1.mp4" type="video/mp4" />
        </video>
        <div className={styles.header}>
          <div className={styles.uniLogo}>
            <img src={"icons/logo.svg"} alt="Uni Cards"></img>
          </div>
          <div className={styles.payCheck}>Uni Paycheck</div>
          <div className={styles.burgerMenu}>
            <img src={"icons/hamburger-menu.svg"}></img>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.leftSection}>
            <div className={styles.mainText}>
              <strong>NX Wave.</strong>The next-gen credit card for those who
              love rewards.
            </div>
            <div className={styles.rewardsText}>
              <span>1% Cashback</span>
              <span>
                <img src="/icons/plus.svg" />
              </span>
              <span>5x Rewards</span>
              <span>
                <img src="/icons/plus.svg" />
              </span>
              <span>Zero Forex Markup</span>
            </div>
            <div className={styles.form}>
              <div className={styles.inputField}>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
              <div className={styles.applyNow}>Apply Now</div>
            </div>
            <div className={styles.disclaimerSection}>
              <input type="checkbox" checked />
              <div className={styles.disclaimer}>
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </div>
            </div>
            <div className={styles.applyNowMobile}>
              <div className={styles.applyNowContainer}>
                <div className={styles.applyNowText}>Apply Now</div>
                <div className={styles.rightArrow}>
                  <img src="/icons/arrow.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.uniImage}>
              <img src={"/images/uni_cards.png"} alt="Uni Cards"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
