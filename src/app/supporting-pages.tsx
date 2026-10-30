import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactDetails, ContactPanel, Eyebrow, PageShell } from "./site-sections";
import { contactDetails } from "./site-content";
import styles from "./page.module.css";
import inner from "./supporting-pages.module.css";

export function AboutPage() {
  return <PageShell>
    <section className={inner.portraitIntro} aria-labelledby="about-title">
      <div className={inner.introCopy}><Eyebrow>About me</Eyebrow>
        <h1 id="about-title" className={inner.title}>I’m Ted.<br />Let’s start there.</h1>
        <p className={inner.lead}>I’m Ted Leung, Principal Partner at Group 7 Insurance Brokers, Life &amp; Wealth Division.</p>
        <p>I value being easy to talk to. If you have a question or would like to introduce yourself, get in touch.</p>
        <a href="#my-approach" className={styles.textLink}>My approach <Arrow down /></a>
      </div>
      <figure className={inner.portrait}><Image src="/images/ted-leung-seated.jpg" alt="Ted Leung seated in a light grey suit." width={1067} height={1600} sizes="(max-width: 900px) 85vw, 550px" preload /></figure>
    </section>
    <section id="my-approach" tabIndex={-1} className={inner.editorial} aria-labelledby="approach-title">
      <div><Eyebrow>My approach</Eyebrow><h2 id="approach-title" className={inner.heading}>A conversation<br />comes first.</h2></div>
      <div className={inner.prose}><p className={inner.lead}>I want to hear what brought you here.</p>
        <p>It might be a change at home, a question about your business, or something you’ve been meaning to ask about insurance. You don’t need to arrive with everything worked out.</p>
        <p>That’s what “Insurance as Hope” means to me: looking after the people and plans that matter to you.</p>
        <Link href="/my-work" className={styles.textLink}>Explore my work <Arrow /></Link>
      </div>
    </section><ContactPanel />
  </PageShell>;
}

const audiences = [
  { id: "individuals-and-families", title: "Individuals and families", icon: "families-home", copy: "Tell me about your family and any changes that have raised questions about insurance.", questions: ["Who depends on you, and in what ways?", "What changes at home are prompting questions?", "Which plans or responsibilities would you like to talk through?"] },
  { id: "business-owners", title: "Business owners", icon: "business-briefcase", copy: "I’d like to understand your business and the people who rely on it.", questions: ["How do your business and personal responsibilities fit together?", "Who relies on the business day to day?", "What changes or next steps are on your mind?"] },
  { id: "contractors", title: "Contractors", icon: "contractors-hard-hat", copy: "Tell me how your work changes through the year and who depends on your income.", questions: ["What does a typical working year look like for you?", "Who works alongside you or depends on your income?", "What commitments would you like to understand more clearly?"] },
];

export function WorkPage() {
  return <PageShell>
    <section className={inner.wideIntro} aria-labelledby="work-title"><Eyebrow>My work</Eyebrow>
      <h1 id="work-title" className={inner.title}>Who I work with.</h1>
      <p className={inner.lead}>These are some of the questions we can talk through.</p>
      <nav className={inner.sectionLinks} aria-label="Explore my work">{audiences.map(a => <a key={a.id} href={`#${a.id}`}>{a.title}</a>)}</nav>
    </section>
    <div className={`${styles.audienceList} ${inner.workList}`}>{audiences.map((a, index) => <section key={a.id} id={a.id} tabIndex={-1} aria-labelledby={`${a.id}-title`} className={styles.audience} data-audience={index}>
      <div className={styles.audienceHeading}><div className={styles.audienceIcon} aria-hidden="true"><Image src={`/images/card-icons/${a.icon}.png`} alt="" fill sizes="(max-width: 900px) 76px, 87px" /></div><h2 id={`${a.id}-title`} className={inner.audienceTitle}>{a.title}</h2></div>
      <div className={styles.audienceCopy}><p>{a.copy}</p><h3 className={inner.questionLabel}>Questions we might start with</h3><ul className={inner.questions}>{a.questions.map(q => <li key={q}>{q}</li>)}</ul><Link href="/contact" className={styles.audienceLink}><span>Let’s start a conversation</span><Arrow /></Link></div>
    </section>)}</div><ContactPanel />
  </PageShell>;
}

export function ConnectionsPage() {
  return <PageShell>
    <section className={inner.wideIntro} aria-labelledby="connections-title"><Eyebrow>Connections</Eyebrow><h1 id="connections-title" className={`${inner.title} ${inner.connectionsTitle}`}>I’d like to hear what you’re working on.</h1><p className={inner.lead}>I welcome introductions to business owners, contractors, and fellow professionals.</p></section>
    <figure className={inner.groupPhoto}><Image src="/images/ted-leung-connections.jpg" alt="Ted Leung with a group of five other people in a bright indoor space." width={1600} height={1067} sizes="(max-width: 900px) 85vw, 1200px" preload /></figure>
    <section className={inner.editorial} aria-labelledby="relationship-title"><div><Eyebrow>Relationships first</Eyebrow><h2 id="relationship-title" className={inner.heading}>Let’s compare notes.</h2></div><div className={inner.prose}><p>Tell me a little about your work and what prompted you to get in touch.</p><h3>Exchange ideas</h3><p>What are you working on or thinking about? I’d like to hear your perspective.</p><h3>Make an introduction</h3><p>Know someone I should meet? Tell me a little about them and why you thought of connecting us.</p><h3>Explore working together</h3><p>Have an idea for working together? Send me a short outline.</p></div></section><ContactPanel />
  </PageShell>;
}

export function ContactPage() {
  return <PageShell>
    <section className={inner.contactIntro} aria-labelledby="contact-title">
      <div className={inner.contactCopy}>
        <Eyebrow>Let’s connect</Eyebrow>
        <h1 id="contact-title" className={inner.title}>Let’s get<br />in touch.</h1>
        <p className={inner.lead}>For insurance questions or business introductions, you can reach me directly.</p>
        <a href={contactDetails.emailHref} className={styles.primaryLink}>Email me <Arrow /></a>
        <ContactDetails />
        <p className={inner.contactHelper}>Tell me a little about yourself and what you’d like to discuss.</p>
      </div>
      <figure className={inner.contactPortrait}>
        <Image src="/images/ted-leung-portrait.jpg" alt="Ted Leung smiling beside a window." width={1067} height={1600} sizes="(max-width: 700px) 85vw, 400px" preload />
      </figure>
    </section>
  </PageShell>;
}
