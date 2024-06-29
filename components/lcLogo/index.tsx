import styles from './style.module.css'
import type { ComponentProps, ReactElement } from 'react'

const Logo = (props: ComponentProps<'svg'>): ReactElement => (
  <svg viewBox="0 0 1024 1024" {...props}>
    <defs>
      <linearGradient id="ecosystem_svg__a">
        <stop stopColor="#21facf" offset={0} />
        <stop stopColor="#0970ef" offset={1} />
      </linearGradient>
      <linearGradient
        id="ecosystem_svg__d"
        x1={68.454}
        x2={198.59}
        y1={246.73}
        y2={96.35}
        gradientTransform="translate(-5.754 -56.594)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#72004e" offset={0} />
        <stop stopColor="#0015b1" offset={1} />
      </linearGradient>
      <linearGradient
        id="ecosystem_svg__b"
        x1={56.735}
        x2={155.2}
        y1={246.96}
        y2={58.575}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4f00da" offset={0} />
        <stop stopColor="#e5311b" offset={1} />
      </linearGradient>
      <linearGradient
        id="ecosystem_svg__c"
        x1={68.454}
        x2={198.59}
        y1={246.73}
        y2={96.35}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#ecosystem_svg__a"
      />
      <linearGradient
        id="#ecosystem_svg__e"
        x1={54.478}
        x2={192.1}
        y1={247.56}
        y2={9.809}
        gradientTransform="translate(-9.551 48.787) scale(.87923)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#dc180d" offset={0} />
        <stop stopColor="#f96e20" offset={0.5} />
        <stop stopColor="#f4ce41" offset={1} />
      </linearGradient>
      <linearGradient
        id="ecosystem_svg__f"
        x1={39.468}
        x2={154.99}
        y1={204.22}
        y2={124.47}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#ecosystem_svg__a"
      />
    </defs>
    <path
        d="M 48.019531 48.019531 L 336 48.019531 L 336 336 L 48.019531 336 Z M 48.019531 48.019531 "
      fill="url(#ecosystem_svg__d)"
      transform="translate(-9.798 -9.798) scale(4.946)"
    />
    <path
      transform="translate(-37.247 -293.758) scale(4.946)"
      d="M 48.019531 48.019531 L 336 48.019531 L 336 336 L 48.019531 336 Z M 48.019531 48.019531 "
      fill="url(#ecosystem_svg__f)"
    />
  </svg>
)

export default function LCLogo() {
  return (
    <div className={styles.pagelogo}>
      <Logo />
    </div>
  )
}

export function LogoTitle() {
  return <Logo />
}
