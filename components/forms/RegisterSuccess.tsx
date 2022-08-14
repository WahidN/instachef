import { Button } from 'components/Button';
import { stagger, timeline } from 'motion';
import { useEffect } from 'react';
import styles from './Register.module.css';

const animationSequence = [
  [
    '#circleScale',
    {
      transform: ['scale(0)', 'scale(1)'],
    },
    { duration: 0.3, easing: 'ease-in-out' },
  ],
  [
    '#circleScaleSmall',
    {
      transform: ['scale(0)', 'scale(1)'],
    },
    { delay: stagger(0.1), at: 0.2, easing: 'ease-in-out' },
  ],
  [
    '#checkMark',
    {
      transform: ['scale(0)', 'scale(1)'],
    },
    { delay: stagger(0.1), at: 0.2, easing: 'ease-in-out' },
  ],
  [
    '#circleSmallWhite',
    {
      transform: ['scale(0)', 'scale(1)'],
    },
    { delay: stagger(0.1), at: 0.3, easing: 'ease-in-out' },
  ],
];

export const RegisterSuccess = ({ onHandleStep }: { onHandleStep: () => void }) => {
  useEffect(() => {
    timeline([...animationSequence]);
  }, []);

  return (
    <div className={styles.successWrap}>
      <svg width="172" height="162" viewBox="0 0 172 162" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="85"
          cy="93"
          r="67"
          fill="url(#paint0_linear_23_154)"
          id="circleScale"
          className={styles.svgElement}
        />
        <circle cx="165.5" cy="32.5" r="6.5" fill="#B9D7D5" id="circleScaleSmall" className={styles.svgElement} />
        <ellipse
          cx="10.5"
          cy="10"
          rx="10.5"
          ry="10"
          fill="#B9D7D5"
          id="circleScaleSmall"
          className={styles.svgElement}
        />
        <ellipse cx="5" cy="136.5" rx="5" ry="5.5" fill="#B9D7D5" id="circleScaleSmall" className={styles.svgElement} />
        <ellipse
          cx="153.5"
          cy="160"
          rx="2.5"
          ry="2"
          fill="url(#paint1_linear_23_154)"
          id="circleScaleSmall"
          className={styles.svgElement}
        />
        <path
          d="M80.0226 111.118C78.6017 111.118 77.1809 110.509 76.3689 109.291L65.002 94.6763C63.3781 92.6465 63.7841 89.8048 65.8139 88.1809C67.8437 86.557 70.6855 86.963 72.3094 88.9928L80.0226 98.939L97.0732 76.8139C98.6971 74.7841 101.539 74.3781 103.569 76.002C105.598 77.6259 106.004 80.4676 104.381 82.4974L83.6763 109.291C82.6614 110.306 81.4436 111.118 80.0226 111.118Z"
          fill="white"
          id="checkMark"
          className={styles.svgElement}
        />
        <circle cx="113.5" cy="103.5" r="2.5" fill="white" className={styles.svgElement} id="circleSmallWhite" />
        <circle cx="48" cy="76" r="4" fill="white" className={styles.svgElement} id="circleSmallWhite" />
        <circle cx="106.5" cy="54.5" r="1.5" fill="white" className={styles.svgElement} id="circleSmallWhite" />
        <circle cx="65" cy="125" r="2" fill="white" className={styles.svgElement} id="circleSmallWhite" />
        <circle cx="87" cy="77" r="1" fill="white" className={styles.svgElement} id="circleSmallWhite" />
        <defs>
          <linearGradient
            id="paint0_linear_23_154"
            x1="18"
            y1="17.7719"
            x2="172.69"
            y2="41.7389"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-green)" />
            <stop offset="1" stopColor="var(--color-green)" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_23_154"
            x1="151"
            y1="157.754"
            x2="156.697"
            y2="158.858"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-green-light)" />
            <stop offset="1" stopColor="var(--color-green-light)" />
          </linearGradient>
        </defs>
      </svg>

      <h1>Congrats!</h1>
      <p>Your profile is ready to use</p>
      <Button onClick={onHandleStep}>Start</Button>
    </div>
  );
};
