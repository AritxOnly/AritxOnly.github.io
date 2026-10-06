// Adapted from Apple Hello Effect by Chánh Đại (MIT).
// https://chanhdai.com/components/apple-hello-effect
// The supplied component draws “hello”; these centerline paths draw “Deadliner”.
import { useEffect } from 'react'
import type { ComponentProps } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { TargetAndTransition } from 'motion/react'

const initialProps: TargetAndTransition = { pathLength: 0, opacity: 0 }
const animateProps: TargetAndTransition = { pathLength: 1, opacity: 1 }

type HelloEffectProps = Omit<ComponentProps<typeof motion.svg>, 'onAnimationComplete'> & {
  durationScale?: number
  onAnimationComplete?: () => void
}

export function AppleHelloEffectDeadliner({
  durationScale = 1,
  onAnimationComplete,
  ...props
}: HelloEffectProps) {
  const reducedMotion = useReducedMotion()
  const calc = (value: number) => (reducedMotion ? 0 : value * durationScale)
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1120 215"
      fill="none"
      stroke="url(#deadliner-hello-gradient)"
      strokeWidth="14.8883"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Deadliner</title>
      <defs>
        <linearGradient
          id="deadliner-hello-gradient"
          x1="0"
          y1="40"
          x2="1120"
          y2="215"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--accent, #1976d2)" />
          <stop offset=".2" stopColor="#65c9f4" />
          <stop offset=".4" stopColor="#a394e8" />
          <stop offset=".58" stopColor="#eaa0bb" />
          <stop offset=".73" stopColor="#ebc58d" />
          <stop offset=".88" stopColor="#86ceb7" />
          <stop offset="1" stopColor="var(--accent, #1976d2)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M24 176 C40 139 58 77 77 25 C94 6 145 6 168 30 C221 88 176 174 93 190 C62 196 34 191 24 176 M77 25 C70 60 52 148 44 190"
        initial={reducedMotion ? animateProps : initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          opacity: { duration: 0.4 },
        }}
      />
      <motion.path
        d="M93 190 C135 190 166 171 190 148 C210 135 235 115 235 102 C235 88 216 92 203 109 C185 132 184 161 199 179 C221 207 259 190 291 158 C308 137 320 103 341 101 C363 96 378 112 373 138 C365 171 345 194 323 191 C302 188 302 163 310 138 C320 109 348 92 373 109 L361 167 C356 188 367 199 389 187 C412 175 430 146 441 123 C451 103 470 98 484 105 C502 117 497 146 483 167 C463 199 436 198 428 179 C419 155 430 119 451 108 C468 96 483 103 490 114 C509 85 538 40 537 19 C536 4 522 4 512 18 C490 48 482 105 480 150 C478 177 482 193 498 192 C523 189 551 155 574 114 C601 69 619 29 611 13 C605 1 592 8 585 21 C565 57 555 108 556 148 C556 178 566 193 585 192 C610 190 636 155 651 108 L638 168 C634 188 646 199 666 185 C684 174 698 147 705 120 L694 188 C705 151 724 104 746 102 C766 99 776 115 772 135 L766 166 C762 188 774 197 793 186 C817 173 840 140 850 115 C859 93 842 90 829 104 C805 128 806 164 821 180 C845 206 889 187 918 146 C929 131 936 117 941 103 L929 185 C938 156 948 128 962 111 C973 97 987 98 992 108 C999 124 987 138 975 132 C1000 151 1027 144 1049 121 C1060 111 1067 104 1071 100"
        initial={reducedMotion ? animateProps : initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.8),
          ease: 'easeInOut',
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
      <motion.path
        d="M658 74 L659 73"
        initial={reducedMotion ? animateProps : initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.14),
          ease: 'easeInOut',
          delay: calc(2.45),
          opacity: { duration: 0.14, delay: calc(2.45) },
        }}
      />
    </motion.svg>
  )
}

const finishIntro = () => {
  document.documentElement.classList.remove('deadliner-intro')
  document.documentElement.classList.add('deadliner-entered')
}

export default function DeadlinerHelloEffect() {
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    const positionLettering = () => {
      const stage = document.querySelector('.product-stage')?.getBoundingClientRect()
      if (!stage) return
      const offset = window.innerHeight / 2 - (stage.top + stage.height / 2)
      document.documentElement.style.setProperty('--welcome-offset-y', `${offset}px`)
    }
    positionLettering()
    window.addEventListener('resize', positionLettering)
    if (reducedMotion) finishIntro()
    return () => window.removeEventListener('resize', positionLettering)
  }, [reducedMotion])
  return (
    <AppleHelloEffectDeadliner onAnimationComplete={finishIntro} aria-hidden="true" />
  )
}
