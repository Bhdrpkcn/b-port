export type ButtonVariantTypes =
  | "githubProjectButton"
  | "youtubeProjectButton"
  | "liveProjectButton"
  | "blogProjectButton"
  | "projectButton"
  | "backButton"
  | "leftButton"
  | "rightButton"
  | "githubButton"
  | "linkedInButton";

export type ButtonProps = {
  variant: ButtonVariantTypes;
  link?: string;
  onClick?: () => void;
  className?: string;
};
