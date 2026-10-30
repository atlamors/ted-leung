import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./site-header";
import { ContactPanel, SiteFooter } from "./site-sections";
import styles from "./page.module.css";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className={styles.eyebrow}>
      <span className={styles.accent} aria-hidden="true" />
      {children}
    </p>
  );
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      className={down ? styles.arrowDown : styles.arrow}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div id="top" tabIndex={-1} className={styles.page}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <div className={styles.frame}>
        <SiteHeader />

        <main id="main" tabIndex={-1} className={styles.main}>
          <section className={styles.hero} aria-labelledby="introduction">
            <div className={styles.introduction}>
              <div className={styles.identity}>
                <Eyebrow>Ted Leung</Eyebrow>
                <p>Principal Partner, Group 7 Insurance Brokers</p>
                <p>Life &amp; Wealth Division</p>
              </div>
              <h1 id="introduction" className={styles.title}>
                Insurance<br />as Hope.
              </h1>
            </div>

            <div className={styles.portraitColumn}>
              <div className={styles.portrait}>
                <Image src="/images/ted-leung-portrait.jpg"
                  alt="Ted Leung in a light grey suit, smiling beside a window."
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 640px"
                  preload className={styles.portraitImage} />
              </div>
            </div>

            <div className={styles.heroSupporting}>
              <p className={styles.heroDescription}>
                For the family you care for, the business you’ve built,
                and the people who count on you.
              </p>
              <a className={styles.primaryLink} href="#outlook">
                My approach <Arrow down />
              </a>
            </div>
          </section>

          <section id="outlook" tabIndex={-1} className={styles.outlook}
            aria-labelledby="outlook-heading">
            <div className={styles.outlookMotif} aria-hidden="true">
              <Image src="/images/pocket-square-fan.png" alt=""
                width={1254} height={1254}
                sizes="(max-width: 700px) 112px, (max-width: 900px) 144px, 156px"
                className={styles.outlookMotifImage} />
            </div>
            <div className={styles.outlookCopy}>
              <Eyebrow>My approach</Eyebrow>
              <h2 id="outlook-heading">
                A conversation<br />comes first.
              </h2>
              <div className={styles.outlookBody}>
                <p>
                  A family home. A small business. A contractor’s livelihood.
                  Each carries a different set of responsibilities.
                </p>
                <p>
                  Before we talk about insurance, I want to understand what
                  you’re building, who depends on you, and what you want
                  to protect. That’s where “Insurance as Hope” begins for me.
                </p>
              </div>
            </div>
            <div className={styles.conversationColumn}>
              <figure className={styles.conversation}>
                <Image src="/images/ted-leung-conversation.jpg"
                  alt="Ted Leung talking over coffee with two people."
                  width={1600} height={1067}
                  sizes="(max-width: 700px) calc(100vw - 88px), (max-width: 900px) 85vw, 540px"
                  className={styles.conversationImage} />
              </figure>
            </div>
          </section>

          <section id="about-me" tabIndex={-1} className={styles.about}
            aria-labelledby="about-heading">
            <div className={styles.sectionHeading}>
              <Eyebrow>About me</Eyebrow>
              <h2 id="about-heading" className={styles.aboutTitle}>I’m Ted.</h2>
            </div>
            <div className={styles.sectionCopy}>
              <p className={styles.biographyLead}>
                I’m Ted Leung, Principal Partner at Group 7 Insurance Brokers,
                Life &amp; Wealth Division.
              </p>
              <p>
                I value being easy to talk to. If you have a question or would
                like to introduce yourself, get in touch.
              </p>
              <Link href="/about-me" className={styles.textLink}>More about me <Arrow /></Link>
            </div>
          </section>

          <section id="my-work" tabIndex={-1} className={styles.work}
            aria-labelledby="work-heading">
            <div className={styles.workIntroduction}>
              <div className={styles.sectionHeading}>
                <Eyebrow>My work</Eyebrow>
                <h2 id="work-heading" className={styles.sectionTitle}>
                  Who I work with.
                </h2>
              </div>
              <div className={styles.sectionCopy}>
                <p>
                  I welcome questions from individuals and families, business
                  owners, and contractors.
                </p>
                <Link href="/my-work" className={styles.textLink}>Explore my work <Arrow /></Link>
              </div>
            </div>
            <div className={styles.audienceList}>
              {[
                {
                  title: "Individuals and families",
                  icon: "families-home",
                  copy: "A change at home can raise new questions about insurance. Tell me what’s changed and who you’re looking after.",
                  contactLink: "Let’s talk about your future",
                },
                {
                  title: "Business owners",
                  icon: "business-briefcase",
                  copy: "Your business and personal plans are often closely connected. I’d like to hear how yours fit together.",
                  contactLink: "Let’s talk about your business",
                },
                {
                  title: "Contractors",
                  icon: "contractors-hard-hat",
                  copy: "Every contractor’s working year looks different. Tell me about your projects and the people who rely on you.",
                  contactLink: "Let’s talk about your work",
                },
              ].map((audience, index) => (
                <div key={audience.title} className={styles.audience} data-audience={index}>
                  <div className={styles.audienceHeading}>
                    <div className={styles.audienceIcon} aria-hidden="true">
                      <Image src={`/images/card-icons/${audience.icon}.png`} alt=""
                        fill sizes="(max-width: 900px) 76px, 87px" />
                    </div>
                    <h3>{audience.title}</h3>
                  </div>
                  <div className={styles.audienceCopy}>
                    <p>{audience.copy}</p>
                    <a href="#contact" className={styles.audienceLink}>
                      <span>{audience.contactLink}</span>
                      <Arrow />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="connections" tabIndex={-1} className={styles.connections}
            aria-labelledby="connections-heading">
            <div className={styles.sectionHeading}>
              <Eyebrow>Connections</Eyebrow>
              <h2 id="connections-heading" className={styles.sectionTitle}>
                I’d like to hear what you’re working on.
              </h2>
            </div>
            <div className={styles.sectionCopy}>
              <p>
                I welcome introductions to business owners, contractors, and
                fellow professionals.
              </p>
              <p>
                Tell me a little about your work and what prompted you to get in touch.
              </p>
              <a href="#contact" className={styles.textLink}>
                Let’s connect <Arrow down />
              </a>
            </div>
          </section>

          <ContactPanel />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
