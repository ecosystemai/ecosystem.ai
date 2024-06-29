import Link from 'next/link'
import styles from './hero.module.css'

export function Hero() {
  const heroMap = {
    headlineOne: 'ecosystem.Ai',
    headlineTwo: 'Accelerated AI Capabilities',
    headlineThree: 'Interaction Science Implemented',
    subtitleOne:
      'ecosystem.Ai is an AI behavioral prediction platform. The first low-code environment to combine behavioral social science with real-time machine learning. Make data-driven decisions powered by continuous learning. Letting you innovate, excite, and create richer human experiences through automated predictive interactions.',
    // subtitleTwo: '',
    // subtitleThree: '',
    // subtitleFour: '',
    cta: 'Get Started',
  }

  return (
    <div className={styles.root}>
      <div className="overlay">
        <div className={styles.grid}>
          <div className={styles.gridfade}></div>
          <div className={styles.gridlines}></div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <p className={styles.head}>
            <span></span>
            <span>
              <span className={styles.headlineOne}>{heroMap.headlineOne}</span>
              <br className="max-md:_hidden" />
              <span className={styles.headlineTwo}>{heroMap.headlineTwo}</span>
              <span className={styles.headlineThree}>{heroMap.headlineThree}</span>
              <br className="max-md:_hidden" />
              <span className={styles.pops}>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
              </span>
            </span>
            <span></span>
          </p>
        </h1>
        <p className={styles.subtitle}>
          {heroMap.subtitleOne}
          <br className="max-md:_hidden" />
          {/* {heroMap.subtitleTwo}
          <br className="max-md:_hidden" />
          {heroMap.subtitleThree}
          {heroMap.subtitleFour} */}
        </p>
        <br className="max-md:_hidden" />
        <div className={styles.actions}>
          <Link className={styles.cta} href={`/docs`}>
            {heroMap.cta} <span>→</span>
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://github.com/ecosystemai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
