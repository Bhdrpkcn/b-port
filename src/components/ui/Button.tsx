"use client";
import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  projectButton: (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fillOpacity="0.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  backButton: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  githubButton: (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  linkedInButton: (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  githubProjectButton: (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  youtubeProjectButton: (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="-7 -5 42 42"
    >
      <style></style>
      <path d="M7 28a.999.999 0 0 1-1-1V5a1 1 0 0 1 1.521-.854l18 11a1.001 1.001 0 0 1 0 1.708l-18 11A1 1 0 0 1 7 28zM8 6.783v18.434L23.082 16 8 6.783z" />
    </svg>
  ),
  blogProjectButton: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M99.569 192.497a5.18 5.18 0 0 0 6.846-2.599c.22-.494.449-.991.682-1.494a5.175 5.175 0 0 0-2.507-6.879 5.176 5.176 0 0 0-6.879 2.507c-.253.546-.501 1.086-.741 1.62a5.177 5.177 0 0 0 2.599 6.845zM228.711 53.746a5.178 5.178 0 0 0-4.808-1.04c-23.523 6.812-48.657 29.368-65.604 47.09-20.182 21.108-40.02 47.236-53.062 69.89a5.176 5.176 0 0 0 1.904 7.069 5.178 5.178 0 0 0 7.07-1.903c12.65-21.975 31.932-47.358 51.571-67.9 19.303-20.187 37.848-34.58 53.188-41.404-1.55 9.503-3.585 18.304-6.157 26.664l-20.86 7.413a5.176 5.176 0 0 0 .121 9.798l12.466 4.083a120.961 120.961 0 0 1-5.77 10.605l-25.299-2.55a5.176 5.176 0 0 0-4.146 8.846l13.647 13.399a80.761 80.761 0 0 1-11.466 9.014l-12.311-9.559a5.178 5.178 0 0 0-8.352 4.09v14.912c-6.971 2.055-14.481 3.287-22.378 3.667a5.18 5.18 0 0 0-4.924 5.421 5.18 5.18 0 0 0 5.421 4.923c10.213-.492 19.883-2.286 28.743-5.333a5.18 5.18 0 0 0 3.493-4.896v-8.118l6.791 5.273a5.18 5.18 0 0 0 5.79.379c7.389-4.324 14.225-9.793 20.314-16.259a5.179 5.179 0 0 0-.139-7.245l-6.86-6.733 13.821 1.393a5.177 5.177 0 0 0 4.854-2.321c3.944-6.042 7.524-12.762 10.639-19.973a5.176 5.176 0 0 0-3.14-6.974l-3.557-1.165 8.995-3.196a5.173 5.173 0 0 0 3.192-3.284c3.923-12.121 6.73-25.038 8.58-39.487a5.171 5.171 0 0 0-1.767-4.589z" />
      <path d="m122.604 211.113-.988-.539c-1.388-.757-2.561-2.802-2.561-3.686v-2.864c5.339-3.402 8.629-8.261 8.629-13.737a5.178 5.178 0 1 0-10.356 0c0 3.893-7.562 8.419-17.31 8.419-9.748 0-17.309-4.526-17.309-8.419 0-2.295 2.657-4.851 6.769-6.512a5.176 5.176 0 0 0 2.861-6.74 5.176 5.176 0 0 0-6.74-2.861c-8.293 3.351-13.245 9.375-13.245 16.113 0 5.476 3.29 10.335 8.629 13.737v2.864c0 .884-1.173 2.929-2.56 3.686l-.988.539c-4.537 2.474-7.958 8.237-7.958 13.404v11.815c0 6.157 5.011 11.167 11.167 11.167h38.749c6.157 0 11.167-5.01 11.167-11.167v-11.815c.002-5.167-3.419-10.93-7.956-13.404zm-2.398 25.219c0 .432-.38.812-.812.812H80.646a.834.834 0 0 1-.812-.812v-11.815c0-1.39 1.341-3.648 2.56-4.312l.99-.54c4.146-2.263 7.359-7.048 7.88-11.529 2.741.601 5.683.926 8.756.926 3.075 0 6.016-.325 8.757-.926.52 4.48 3.733 9.267 7.881 11.529l.988.54c1.221.665 2.561 2.922 2.561 4.312v11.815z" />
    </svg>
  ),
  liveProjectButton: (
    <svg xmlns="http://www.w3.org/2000/svg" width="47.992" height="48">
      <g fill="#1a171b">
        <path d="M44.922 5.5 42.5 3.078a10.536 10.536 0 0 0-14.884 0l-5.179 5.176a.728.728 0 0 0 .286 1.205l6.148 2.035a.723.723 0 0 0 .742-.176l2.8-2.8a3.839 3.839 0 0 1 5.279 0l1.791 1.791a3.745 3.745 0 0 1 0 5.278L29.1 25.969a3.712 3.712 0 0 1-1.665.955 3.751 3.751 0 0 1-3.614-.955L22.8 24.942a3.128 3.128 0 0 0-.078-.09.73.73 0 0 0-.519-.23.659.659 0 0 0-.525.215l-4.1 4.1a.729.729 0 0 0 0 1.03l1.443 1.441a10.4 10.4 0 0 0 3.713 2.387 10.618 10.618 0 0 0 3.734.68 10.511 10.511 0 0 0 5.966-1.852 10.349 10.349 0 0 0 1.472-1.215L44.921 20.39a10.556 10.556 0 0 0 0-14.886zM43.9 19.36 32.879 30.378a9.113 9.113 0 0 1-12.829 0l-.929-.93 3.064-3.063.615.615a5.208 5.208 0 0 0 7.334 0l10.38-10.387a5.192 5.192 0 0 0 0-7.334l-1.791-1.793a5.2 5.2 0 0 0-7.335 0L28.9 9.972l-4.6-1.523 4.342-4.342a9.08 9.08 0 0 1 12.828 0l2.425 2.424a9.1 9.1 0 0 1 0 12.829z" />
        <path d="m25.278 38.543-6.148-2.035a.724.724 0 0 0-.742.176l-2.8 2.8a3.839 3.839 0 0 1-5.279 0L8.516 37.7a3.747 3.747 0 0 1 0-5.28L18.9 22.035a3.7 3.7 0 0 1 1.664-.957 3.749 3.749 0 0 1 3.615.955l1.029 1.033.07.08a.729.729 0 0 0 .519.234.8.8 0 0 0 .528-.215l4.1-4.1a.725.725 0 0 0 0-1.027L28.98 16.6a10.381 10.381 0 0 0-3.712-2.387 10.559 10.559 0 0 0-9.7 1.17A10.27 10.27 0 0 0 14.1 16.6L3.078 27.613a10.537 10.537 0 0 0 0 14.885L5.5 44.924a10.542 10.542 0 0 0 14.885 0l5.175-5.178a.727.727 0 0 0-.284-1.2zM19.36 43.9a9.082 9.082 0 0 1-12.829 0l-2.424-2.429a9.08 9.08 0 0 1 0-12.828l11.017-11.018a8.89 8.89 0 0 1 1.269-1.047 9.119 9.119 0 0 1 8.364-1.006 8.937 8.937 0 0 1 3.2 2.053l.928.928-3.063 3.064-.612-.611a5.2 5.2 0 0 0-7.335 0L7.489 31.389a5.192 5.192 0 0 0 0 7.334l1.791 1.791a5.191 5.191 0 0 0 7.335 0L19.1 38.03l4.6 1.523z" />
      </g>
    </svg>
  ),
};

type ButtonProps = {
  variant: keyof typeof buttonVariants;
  link?: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ variant, link, className }) => {
  const buttonStyles = cn(
    "flex items-center justify-center  transition-all",
    variant === "githubButton" || variant === "linkedInButton"
      ? "hover:text-black/60 dark:hover:text-accent"
      : "w-20 h-20 rounded-full border-2 dark:text-black hover:bg-white/50 border-accent bg-white/40",
    className
  );

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      if (variant === "githubButton") {
        window.open("https://github.com/Bhdrpkcn?tab=repositories", "_blank");
      } else if (variant === "linkedInButton") {
        window.open(
          "https://www.linkedin.com/in/bahad%C4%B1r-pekcan/",
          "_blank"
        );
      }
    }
  };

  return (
    <button onClick={handleClick} className={buttonStyles} aria-label={variant}>
      {buttonVariants[variant]}
    </button>
  );
};

export default Button;
