const icons = {
  google: (
    <path
      d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
      fill="currentColor"
    />
  ),
  arrowRight: (
    <path
      d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
      fill="currentColor"
    />
  ),
};

export type IconType = keyof typeof icons;

interface Properties {
  type: IconType;
  classes?: string;
}

export const Icon = ({ type, classes }: Properties) => (
  <svg className={classes} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {icons[type]}
  </svg>
);