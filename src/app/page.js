import Image from "next/image";
import styles from "./page.module.css";
import Reward from "@/components/Reward";
import {
  ADDED_BENEFITS_DATA,
  ADVANTAGES_DATA,
  REWARDS_DATA,
} from "@/utils/constants";
import Advantages from "@/components/Advantages";
import Bubbles from "@/components/Bubbles";

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
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <strong>Earn 1% assured cashback</strong> on your spends. Get{" "}
          <strong>5X more value than cashback</strong> at the Uni Store. Enjoy
          round the clock<strong> Whatsapp support.</strong> And it's{" "}
          <strong>lifetime free</strong>; no joining fee, no annual charges.
        </div>
        <div className={styles.downArrowContainer}>
          <div className={styles.downArrow}>
            <img src="/icons/arrow.svg" />
          </div>
        </div>
      </div>
      <div className={styles.rewardsContainer}>
        {REWARDS_DATA.map((data, index) => (
          <Reward
            text={data.text}
            isReversed={index & 1}
            img={data.img}
            key={index}
          />
        ))}
        <div className={styles.rewardsTextWrapper}>
          <div className={styles.rewardsText1}>
            Lifetime <span>free.</span> No joining fee. No annual charges.
          </div>
        </div>
      </div>
      <div className={styles.advantagesWrapper}>
        <div className={styles.cicleContainer}>
          <img src="images/circle.png" />
        </div>
        {ADVANTAGES_DATA.map((data, index) => (
          <Advantages text={data.text} img={data.img} key={index} />
        ))}
      </div>
      <div className={styles.addedBenefitsContainer}>
        {ADDED_BENEFITS_DATA.map((data, index) => (
          <Bubbles text={data.text} img={data.img} key={index} />
        ))}
      </div>
      <div className={styles.commitmentContainer}>
        <div className={styles.commitmentText}>
          At Uni, we're committed to{" "}
          <span>delivering an unmatched credit experience </span>
          for millions of Indians.
        </div>
        <div className={styles.bankPartnerText}>
          On this mission, we've partnered with some of the best in the
          business.
        </div>
        <img src="images/SBM.svg"></img>
      </div>
      <div className={styles.disclaimerContainer}>
        <div className={styles.disclaimerText}>
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
      </div>
      <div className={styles.downloadContainer}>
        <div>Download now to get started</div>
        <div className={styles.downloadLinksContainer}>
          <div className={styles.downloadLink}>Google Play</div>
          <div className={styles.downloadLink}>App Store</div>
        </div>
      </div>
      <div className={styles.securityContainer}>
        Uni maintains the highest level of security standards
        <img src="/images/pcidss_cert.svg" />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerInnerWrapper}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogo}>UNI</div>
            <div>
              Indiqube Sigma No.3/B, Nexus {"\n"}
              Koramangala 3rd Block SBI Colony,{"\n"}
              Koramangala, Bengaluru, Karnataka 560034
            </div>
            <div>
              Contact Us: 080 68216821 {"\n"}
              Email: care@uni.club
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.socialLinks}>
          {["Instagram", "LinkedIn", "Twitter", "Facebook", "Careers"].map(
            (item) => (
              <div>{item}</div>
            )
          )}
        </div>
        <div>
          Credit Card KFS | Credit Card T&Cs | Uni T&Cs | Lending Partner TnCs
        </div>
      </div>
    </main>
  );
}
