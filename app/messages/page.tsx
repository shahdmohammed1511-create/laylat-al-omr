"use client";

import { ArrowRight, Heart, Printer, Sparkles } from "lucide-react";
import styles from "./messages.module.css";

const messages = [
  {
    id: 1,
    name: "خالد العتيبي",
    message: "بارك الله لكما وبارك عليكما وجمع بينكما في خير. ألف مبروك!",
    time: "منذ يومين",
  },
  {
    id: 2,
    name: "نورة وأهلها",
    message: "فرحتنا بفرحتكم كبيرة، الله يجعل أيامكم كلها سعادة ومودة.",
    time: "منذ ٣ أيام",
  },
  {
    id: 3,
    name: "سارة محمد",
    message: "أجمل التهاني للعروسين، ربي يكتب لكم حياة مليئة بالحب والهناء.",
    time: "منذ أسبوع",
  },
];

export default function MessagesPage() {
  return (
    <main className={styles.messagesPage}>
      <div className={styles.actions}>
        <a className={styles.backLink} href="/">
          <ArrowRight aria-hidden="true" />
          العودة للدعوة
        </a>
        <button className={styles.printButton} type="button" onClick={() => window.print()}>
          <Printer aria-hidden="true" />
          طباعة الرسائل
        </button>
      </div>

      <article className={styles.letter}>
        <header className={styles.letterHeader}>
          <span className={styles.ornament} aria-hidden="true"><Sparkles /></span>
          <p className={styles.eyebrow}>ذكرى من ليلة العمر</p>
          <h1>رسائل المحبة</h1>
          <p className={styles.couple}>إلى مريم وأحمد</p>
          <span className={styles.rule} aria-hidden="true"><i /><Heart /><i /></span>
          <p className={styles.intro}>كلمات من أهلنا وأحبابنا، نحتفظ بها بكل امتنان ومحبة</p>
        </header>

        <section className={styles.messageList} aria-label="رسائل الأهل والأصدقاء">
          {messages.map((message, index) => (
            <article className={styles.message} key={message.id}>
              <span className={styles.messageNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.messageContent}>
                <div className={styles.messageMeta}>
                  <h2>{message.name}</h2>
                  <time>{message.time}</time>
                </div>
                <p>{message.message}</p>
              </div>
              <span className={styles.messageHeart} aria-hidden="true"><Heart /></span>
            </article>
          ))}
        </section>

        <footer className={styles.letterFooter}>
          <span className={styles.rule} aria-hidden="true"><i /><Sparkles /><i /></span>
          <p>اللهم بارك لهما وبارك عليهما واجمع بينهما في خير</p>
          <small>بكل الحب والامتنان — مريم وأحمد</small>
        </footer>
      </article>
    </main>
  );
}
