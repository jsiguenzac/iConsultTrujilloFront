const theme = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '992px',
    xl: '1280px'
  },
  colors: {
    primary: {
      10: 'var(--primary-10)',
      20: 'var(--primary-20)',
      30: 'var(--primary-30)',
      40: 'var(--primary-40)',
      50: 'var(--primary-50)',
      60: 'var(--primary-60)',
      70: 'var(--primary-70)',
      80: 'var(--primary-80)',
      90: 'var(--primary-90)',
      default: 'var(--primary)',
      dark: 'var(--primary-dark)',
      inteaccionDetalle: 'var(--inteaccionDetalle)'
    },
    secondary: {
      10: 'var(--secondary-10)',
      20: 'var(--secondary-20)',
      30: 'var(--secondary-30)',
      40: 'var(--secondary-40)',
      50: 'var(--secondary-50)',
      60: 'var(--secondary-60)',
      70: 'var(--secondary-70)',
      80: 'var(--secondary-80)',
      90: 'var(--secondary-90)',
      default: 'var(--secondary)',
      dark: 'var(--secondary-dark)'
    },
    neutral: {
      '01': 'var(--neutral-01)',
      '02': 'var(--neutral-02)',
      '03': 'var(--neutral-03)',
      '04': 'var(--neutral-04)'
    },
    success: 'var(--success)',
    error: 'var(--error)',
    alert: 'var(--alert)'
  },
  backgroundColor: {
    primary: {
      10: 'var(--primary-10)',
      20: 'var(--primary-20)',
      30: 'var(--primary-30)',
      40: 'var(--primary-40)',
      50: 'var(--primary-50)',
      60: 'var(--primary-60)',
      70: 'var(--primary-70)',
      80: 'var(--primary-80)',
      90: 'var(--primary-90)',
      default: 'var(--primary)',
      dark: 'var(--primary-dark)',
      'fondo01': 'var(--fondo01)',
      alert: 'var(--support-alert)',
    },
    secondary: {
      10: 'var(--secondary-10)',
      20: 'var(--secondary-20)',
      30: 'var(--secondary-30)',
      40: 'var(--secondary-40)',
      50: 'var(--secondary-50)',
      60: 'var(--secondary-60)',
      70: 'var(--secondary-70)',
      80: 'var(--secondary-80)',
      90: 'var(--secondary-90)',
      default: 'var(--secondary)',
      dark: 'var(--secondary-dark)'
    },
    neutral: {
      '01': 'var(--neutral-01)',
      '02': 'var(--neutral-02)',
      '03': 'var(--neutral-03)',
      '04': 'var(--neutral-04)'
    },
    success: 'var(--success)',
    error: 'var(--error)',
    alert: 'var(--alert)',
    '01': 'var(--background-01)',
    '02': 'var(--background-02)',
    '03': 'var(--background-03)',
    '04': 'var(--background-04)',
    '05': 'var(--background-05)',
    disabled: 'var(--disabled-background)'
  },
  textColor: {
    primary: {
      10: 'var(--primary-10)',
      20: 'var(--primary-20)',
      30: 'var(--primary-30)',
      40: 'var(--primary-40)',
      50: 'var(--primary-50)',
      60: 'var(--primary-60)',
      70: 'var(--primary-70)',
      80: 'var(--primary-80)',
      90: 'var(--primary-90)',
      default: 'var(--primary)',
      dark: 'var(--primary-dark)'
    },
    secondary: {
      10: 'var(--secondary-10)',
      20: 'var(--secondary-20)',
      30: 'var(--secondary-30)',
      40: 'var(--secondary-40)',
      50: 'var(--secondary-50)',
      60: 'var(--secondary-60)',
      70: 'var(--secondary-70)',
      80: 'var(--secondary-80)',
      90: 'var(--secondary-90)',
      default: 'var(--secondary)',
      dark: 'var(--secondary-dark)'
    },
    neutral: {
      '01': 'var(--neutral-01)',
      '02': 'var(--neutral-02)',
      '03': 'var(--neutral-03)',
      '04': 'var(--neutral-04)'
    },
    success: 'var(--success)',
    error: 'var(--error)',
    alert: 'var(--alert)',
    disabled: 'var(--disabled-text)'
  },
  borderColor: {
    primary: {
      10: 'var(--primary-10)',
      20: 'var(--primary-20)',
      30: 'var(--primary-30)',
      40: 'var(--primary-40)',
      50: 'var(--primary-50)',
      60: 'var(--primary-60)',
      70: 'var(--primary-70)',
      80: 'var(--primary-80)',
      90: 'var(--primary-90)',
      default: 'var(--primary)',
      dark: 'var(--primary-dark)'
    },
    secondary: {
      10: 'var(--secondary-10)',
      20: 'var(--secondary-20)',
      30: 'var(--secondary-30)',
      40: 'var(--secondary-40)',
      50: 'var(--secondary-50)',
      60: 'var(--secondary-60)',
      70: 'var(--secondary-70)',
      80: 'var(--secondary-80)',
      90: 'var(--secondary-90)',
      default: 'var(--secondary)',
      dark: 'var(--secondary-dark)'
    },
    neutral: {
      '01': 'var(--neutral-01)',
      '02': 'var(--neutral-02)',
      '03': 'var(--neutral-03)',
      '04': 'var(--neutral-04)'
    },
    success: 'var(--success)',
    error: 'var(--error)',
    alert: 'var(--alert)',
    disabled: 'var(--disabled-background)'
  },
  spacing: {
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem'
  },
  borderRadius: {
    sm: '0.4rem',
    default: '0.8rem',
    lg: '2.4rem',
    full: '9999px'
  },
  fontFamily: {
    sans: [
      'Lato',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ],
    serif: ['Georgia', 'Cambria', 'Times', 'serif'],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace'
    ]
  },
  fontSize: {
    'heading-01': '2.4rem',
    'heading-02': '2rem',
    'subheading-01': '1.8rem',
    'subheading-02': '1.6rem',
    body: '1.4rem',
    'body-02': '1.6rem',
    'small-01': '1.1rem',
    'small-02': '1.2rem',
    'small-03': '1rem',
    'display-01': '4.8rem',
    'display-02': '4rem'
  },
  fontWeight: {
    light: '300',
    regular: '400',
    bold: '700',
    black: '900'
  },
  backgroundPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top'
  },
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  },
  borderWidth: {
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
    default: '1px'
  },
  boxShadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none'
  },
  container: {},
  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed'
  },
  fill: {
    current: 'currentColor'
  },
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none'
  },
  flexGrow: {
    0: '0',
    default: '1'
  },
  flexShrink: {
    0: '0',
    default: '1'
  },
  height: {
    auto: 'auto',
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem',
    full: '100%',
    screen: '100vh'
  },
  inset: {
    0: '0',
    auto: 'auto'
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  lineHeight: {
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal'
  },
  margin: {
    auto: 'auto',
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem',
    '-xsm': '-0.4rem',
    '-sm': '-0.8rem',
    '-md': '-1.2rem',
    '-lg': '-1.6rem',
    '-xlg': '-2rem',
    '-xxlg': '-2.4rem'
  },
  maxHeight: {
    full: '100%',
    screen: '100vh'
  },
  maxWidth: {
    none: 'none',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    full: '100%',
    'screen-sm': '640px',
    'screen-md': '768px',
    'screen-lg': '992px',
    'screen-xl': '1280px'
  },
  minHeight: {
    0: '0',
    full: '100%',
    screen: '100vh'
  },
  minWidth: {
    0: '0',
    full: '100%'
  },
  objectPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top'
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1'
  },
  order: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    first: '-9999',
    last: '9999',
    none: '0'
  },
  padding: {
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem'
  },
  placeholderColor: {
    primary: {
      10: 'var(--primary-10)',
      20: 'var(--primary-20)',
      30: 'var(--primary-30)',
      40: 'var(--primary-40)',
      50: 'var(--primary-50)',
      60: 'var(--primary-60)',
      70: 'var(--primary-70)',
      80: 'var(--primary-80)',
      90: 'var(--primary-90)',
      default: 'var(--primary)',
      dark: 'var(--primary-dark)'
    },
    secondary: {
      10: 'var(--secondary-10)',
      20: 'var(--secondary-20)',
      30: 'var(--secondary-30)',
      40: 'var(--secondary-40)',
      50: 'var(--secondary-50)',
      60: 'var(--secondary-60)',
      70: 'var(--secondary-70)',
      80: 'var(--secondary-80)',
      90: 'var(--secondary-90)',
      default: 'var(--secondary)',
      dark: 'var(--secondary-dark)'
    },
    neutral: {
      '01': 'var(--neutral-01)',
      '02': 'var(--neutral-02)',
      '03': 'var(--neutral-03)',
      '04': 'var(--neutral-04)'
    },
    success: 'var(--success)',
    error: 'var(--error)',
    alert: 'var(--alert)'
  },
  stroke: {
    current: 'currentColor'
  },
  strokeWidth: {
    0: '0',
    1: '1',
    2: '2'
  },
  width: {
    auto: 'auto',
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screen: '100vw'
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto'
  },
  gap: {
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem',
    8: '32px',
    4: '16px'
  },
  gridTemplateColumns: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))',
    none: 'none'
  },
  gridColumn: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12'
  },
  gridColumnStart: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    auto: 'auto'
  },
  gridColumnEnd: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    auto: 'auto'
  },
  gridTemplateRows: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    none: 'none'
  },
  gridRow: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6'
  },
  gridRowStart: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    auto: 'auto'
  },
  gridRowEnd: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    auto: 'auto'
  },
  transformOrigin: {
    center: 'center',
    top: 'top',
    'top-right': 'top right',
    right: 'right',
    'bottom-right': 'bottom right',
    bottom: 'bottom',
    'bottom-left': 'bottom left',
    left: 'left',
    'top-left': 'top left'
  },
  scale: {
    0: '0',
    50: '.5',
    75: '.75',
    90: '.9',
    95: '.95',
    100: '1',
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5'
  },
  rotate: {
    0: '0',
    45: '45deg',
    90: '90deg',
    180: '180deg',
    '-180': '-180deg',
    '-90': '-90deg',
    '-45': '-45deg'
  },
  translate: {
    xsm: '0.4rem',
    sm: '0.8rem',
    md: '1.2rem',
    lg: '1.6rem',
    xlg: '2rem',
    xxlg: '2.4rem',
    '-xsm': '-0.4rem',
    '-sm': '-0.8rem',
    '-md': '-1.2rem',
    '-lg': '-1.6rem',
    '-xlg': '-2rem',
    '-xxlg': '-2.4rem',
    '-full': '-100%',
    '-1/2': '-50%',
    '1/2': '50%',
    full: '100%'
  },
  skew: {
    0: '0',
    3: '3deg',
    6: '6deg',
    12: '12deg',
    '-12': '-12deg',
    '-6': '-6deg',
    '-3': '-3deg'
  },
  transitionProperty: {
    none: 'none',
    all: 'all',
    default:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  transitionDuration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  }
};

export default theme;
