import React from "react";
import styles from "./ProfileDetails.module.scss";
import { Text } from "@/components/Text";
import { ButtonM } from "@/components/Buttons/ButtonM";

export const ProfileDetails: React.FC = () => {
  const email = localStorage.getItem("email")?.toUpperCase();

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <Text className="h3Bold">{email}</Text>
      </div>
      <div className={styles.innerLinks}>
        <a className={styles.innerLink} href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
          >
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M36.822 14.912c0 1.206-.026 2.428-.08 2.996-.097 1.055-.676 2.033-1.691 2.428-.903.347-1.859.189-2.696-.25-.838-.44-1.798-1.688-2.38-2.796-1.114 0-1.915-.836-2.033-1.914a1.42 1.42 0 0 1 .277-1.076M36.824 11.893v1.8"
            ></path>
            <path
              fill="#404040"
              d="M28.202 14.25a74 74 0 0 1-.394-3.42 2.24 2.24 0 0 1 1.004-2.095 2.79 2.79 0 0 1 2.595-.204c.346-.831.952-1.553 1.9-1.543.908 0 1.512.52 1.878 1.336a2.03 2.03 0 0 1 1.617.012 1.73 1.73 0 0 1 .931 1.484c.063.753-.488 1.493-.854 2.125v-.028a1.42 1.42 0 0 1-.956-.63l-.034-.04a2.05 2.05 0 0 1-1.424.57 2.08 2.08 0 0 1-1.452-.528 1.87 1.87 0 0 1-1.102 1.081 3.2 3.2 0 0 1-1.57.149l-.06.037v2.301c-.167-.61-.814-1.136-1.463-.943-.233.065-.442.2-.597.386"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.202 14.25a74 74 0 0 1-.394-3.42 2.24 2.24 0 0 1 1.004-2.095 2.79 2.79 0 0 1 2.595-.204c.346-.831.952-1.553 1.9-1.543.908 0 1.512.52 1.878 1.336a2.03 2.03 0 0 1 1.617.012 1.73 1.73 0 0 1 .931 1.484c.063.753-.488 1.493-.854 2.125v-.028a1.42 1.42 0 0 1-.956-.63l-.034-.04a2.05 2.05 0 0 1-1.424.57 2.08 2.08 0 0 1-1.452-.528 1.87 1.87 0 0 1-1.102 1.081 3.2 3.2 0 0 1-1.57.149l-.06.037v2.301c-.167-.61-.814-1.136-1.463-.943-.233.065-.442.2-.597.386"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M33.087 15.61a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M36.985 14.3a1.23 1.23 0 1 1-1.23-1.23 1.22 1.22 0 0 1 1.23 1.23M35.051 20.336l.002 1.54-1.964 4.007-3.303-4.403v-4.067"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M27.796 39.54c-1.06.843-2.56 1.986-3.679 2.755-.931.638-1.745 1.232-2.93 1.116-1.881-.18-2.985-2.064-3.05-3.809-.06-1.793 2.255-7.804 2.735-9.121.658-1.568 1.1-3.612 2.29-4.869.872-.906 2.116-1.663 3.21-2.26l3.416-1.874"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M29.493 34.96c.3.313.503.704.586 1.129.262 1.338-.36 3.05-1.806 3.385-1.445.336-3.078-.628-3.253-2.14a3.01 3.01 0 0 1 1.372-2.799 2.48 2.48 0 0 1 3.101.425M19.715 39l5.968-3.816"
            ></path>
            <path
              fill="#404040"
              d="M28.23 34.24a2.35 2.35 0 0 0-1.83.301l-.028-11.19 1.86-1.017v11.841"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.23 34.24a2.35 2.35 0 0 0-1.83.301l-.028-11.19 1.86-1.017v11.841"
            ></path>
            <path
              fill="#404040"
              d="M27.796 39.54c-1.06.843-2.56 1.986-3.679 2.755-.931.638-1.745 1.232-2.93 1.116-1.881-.18-2.985-2.064-3.05-3.808v18.545H32.41V39.542h-4.502"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M27.796 39.54c-1.06.843-2.56 1.986-3.679 2.755-.931.638-1.745 1.232-2.93 1.116-1.881-.18-2.985-2.064-3.05-3.808v18.545H32.41V39.542h-4.502"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M31.856 49.05h8.063l-.581-20.687"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M47.906 52.804c-.437-1.845-3.816-17.236-5.61-22.903-.571-1.806-1.346-3.693-2.847-4.923a44 44 0 0 0-4.39-3.101M47.906 52.804h-6.084M18.362 38.106l-3.253-9.38a1.962 1.962 0 1 1 3.707-1.29l1.543 4.456M38.174 49.05l3.648 10.604M43.581 52.822a3.19 3.19 0 0 0 .242 3.05 2.44 2.44 0 0 0 3.555.582c.97-.745 1.017-2.575.496-3.596M41.822 59.654l1.483-5.138M47.707 56.112l1.104 3.46"
            ></path>
          </svg>
          <Text className="h4SemiBold">Заказы</Text>
        </a>
        <a className={styles.innerLink} href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
          >
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M38.01 13.615c-1.125-.039-2.338-.068-3.366.444a6.24 6.24 0 0 1-5.412 0c-1.019-.512-2.242-.483-3.365-.444l-.018-.117c0-3.59 2.725-6.498 6.088-6.498s6.09 2.909 6.09 6.499"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.063 19.17c-.335-1.8-.548-3.621-.636-5.45M36.088 18.755a21 21 0 0 1-.375 1.645c-.418 1.527-1.996 2.962-3.68 2.962s-3.261-1.427-3.669-2.962q-.168-.61-.293-1.223M36.644 13.72a44 44 0 0 1-.552 5.035"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.063 19.17a6.93 6.93 0 0 1 3.587-1.554c1.562-.165 3.284.767 4.41 1.366"
            ></path>
            <path
              fill="#404040"
              d="M30.922 16.35a.37.37 0 0 1-.291.27.39.39 0 0 1-.357-.162c-.187-.252-.173-1.339.345-1.223a.45.45 0 0 1 .301.316c.078.26.078.537 0 .797M33.774 16.35a.37.37 0 0 1-.291.27.39.39 0 0 1-.357-.162c-.188-.252-.173-1.339.344-1.223a.45.45 0 0 1 .302.316c.078.26.078.537 0 .797"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.03 19.182c-1.472.473-2.308-1.372-1.861-2.558.234-.622.797-.816 1.4-.575M36.165 18.82c1.472.474 2.308-1.373 1.861-2.56-.234-.611-.797-.815-1.402-.572"
            ></path>
            <path
              fill="#404040"
              d="m28.552 13.802-.983 2.24-1.702-2.427"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m28.552 13.802-.983 2.24-1.702-2.427"
            ></path>
            <path
              fill="#1D1D1B"
              d="m35.43 13.955 1.194 1.733 1.386-2.073"
            ></path>
            <path
              fill="#404040"
              d="m35.43 13.955 1.194 1.733 1.386-2.073"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m35.43 13.955 1.194 1.733 1.386-2.073M29.033 24.95c-1.751.494-4.524 1.02-6.116 1.916-1.426.816-2.507 2.2-3.239 3.647M41.537 36.253a3.133 3.133 0 0 1-3.133 3.133c-1.442 0-2.66-1.086-3.058-2.446a3.3 3.3 0 0 1 .687-3.019c.876-.941 2.538-1.072 3.702-.713 1.263.391 1.801 1.82 1.801 3.045M41.526 35.552l4.122 9.648M23.164 35.552v21.67M40.915 48.908v8.529"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M14.705 30.418a2.89 2.89 0 0 0-.508 3.573c.722 1.304 2.369 1.688 3.72 1.243a2.95 2.95 0 0 0 1.602-1.202c.781-1.266.498-3.782-1.274-4.238.045-.985.235-2.1.28-3.084.022-.492.236-1.766-.386-2-1.48-.556-1.388 2.193-1.445 3l-.128 1.809c-.275-.973-.496-1.967-.777-2.897a5.2 5.2 0 0 0-.522-1.337.67.67 0 0 0-1.096-.116c-.477.534-.061 1.685.075 2.28l.646 2.801"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m19.676 31.616-2.627-.557a1.16 1.16 0 0 0-.612.037.773.773 0 0 0-.49 1.04c.22.648.97.721 1.554.864.744.181 1.499.338 2.255.448M14.197 33.99c.012 1.32.022 3.046.033 4.365.012 1.574-.053 3.147 0 4.719.055 1.47.116 3.15.815 4.456.942 1.781 2.55 2.797 4.623 2.446 1.63-.275 2.72-1.555 3.496-3.178M19.756 33.453v11.394"
            ></path>
            <path
              fill="#404040"
              d="m22.783 27.113.357 14.31a27.6 27.6 0 0 0 1.716-8.52c.104-2.253.318-4.656.255-6.915"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m22.783 27.113.357 14.31a27.6 27.6 0 0 0 1.716-8.52c.104-2.253.318-4.656.255-6.915"
            ></path>
            <path
              fill="#404040"
              d="m38.934 26.22-.908 6.805v.018a4.5 4.5 0 0 1 1.696.165c.303.093.582.253.816.467l-.02-.224.845-6.342"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m38.934 26.22-.908 6.805v.018a4.5 4.5 0 0 1 1.696.165c.303.093.582.253.816.467l-.02-.224.845-6.342"
            ></path>
            <path
              fill="#1D1D1B"
              d="M27.834 9.097q-.037 1.171-.012 2.343c.469-.922.752-2.253.852-3.282"
            ></path>
            <path
              fill="#404040"
              d="M27.834 9.097q-.037 1.171-.012 2.343c.469-.922.752-2.253.852-3.282"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M27.834 9.097q-.037 1.171-.012 2.343c.469-.922.752-2.253.852-3.282"
            ></path>
            <path
              fill="#1D1D1B"
              d="M32.653 7.275a13.3 13.3 0 0 1-.734 3.225h-.081a13.2 13.2 0 0 1-.734-3.225"
            ></path>
            <path
              fill="#404040"
              d="M32.653 7.275a13.3 13.3 0 0 1-.734 3.225h-.081a13.2 13.2 0 0 1-.734-3.225"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M32.653 7.275a13.3 13.3 0 0 1-.734 3.225h-.081a13.2 13.2 0 0 1-.734-3.225"
            ></path>
            <path
              fill="#1D1D1B"
              d="M35.9 8.894q.038 1.17.015 2.342c-.47-.922-.753-2.253-.852-3.282"
            ></path>
            <path
              fill="#404040"
              d="M35.9 8.894q.038 1.17.015 2.342c-.47-.922-.753-2.253-.852-3.282"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M35.9 8.894q.038 1.17.015 2.342c-.47-.922-.753-2.253-.852-3.282"
            ></path>
            <path
              fill="#404040"
              d="M33.79 17.863q.623.187 1.191.503c.314.176.638.408.713.763.033.223.01.452-.069.664a18 18 0 0 1-.552 1.6c-.138.38-.322.742-.549 1.077-.917 1.28-2.884 1.58-4.227.754a3.96 3.96 0 0 1-1.386-1.63c-.28-.555-.653-1.153-.7-1.795s.482-1.131.94-1.49c1.062-.831 2.65-.844 3.926-.611q.367.063.724.169"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M35.116 24.95c1.75.494 4.47 1.02 6.058 1.916 2.083 1.189 3.102 3.372 3.873 5.54.954 2.686 2.05 5.335 2.892 8.083.763 2.49 2.271 5.588.891 8.136-.836 1.54-2.493 2.696-4.295 2.55-2.02-.165-3.337-1.519-4.193-3.262-1.125-2.273-3.086-6.788-3.901-9.193M29.033 21.842v3.108c.95 1.743 4.39 2.524 6.082 0l-.049-3.557"
            ></path>
            <path
              fill="#404040"
              d="M29.033 24.95c-1.751.494-4.524 1.02-6.116 1.916a7 7 0 0 0-1.65 1.33L20.17 29.64v-7.787l8.859-.012"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M29.033 24.95c-1.751.494-4.524 1.02-6.116 1.916a7 7 0 0 0-1.65 1.33L20.17 29.64v-7.787l8.859-.012"
            ></path>
            <path
              fill="#404040"
              d="M35.116 24.95c1.75.494 4.47 1.02 6.058 1.916a9.2 9.2 0 0 1 2.016 1.597l1.186 2.05-.016-8.671h-9.297"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M35.116 24.95c1.75.494 4.47 1.02 6.058 1.916a9.2 9.2 0 0 1 2.016 1.597l1.186 2.05-.016-8.671h-9.297"
            ></path>
          </svg>
          <Text className="h4SemiBold">Адреса</Text>
        </a>
        <a className={styles.innerLink} href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
          >
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M25.61 13.624c1.3 2.905 3.384 8.055 7.013 6.294a3.57 3.57 0 0 0 1.605-1.628"
            ></path>
            <path
              fill="#404040"
              d="M25.61 13.624a3.8 3.8 0 0 1-.3-1.418c-.088-1.666.777-3.16 2.114-4.148 1.61-1.19 4.007-1.39 5.81-.53 2.167 1.037 2.734 3.764 3.58 5.819l-.057-.072c.362.822.658 1.643.956 2.465.193.537.793.73 1.041 1.219.27.53-.026 1.136.089 1.689s.663.752 1.027 1.107c.643.617.226 1.135.082 1.87-.11.57.452.884.785 1.233a1.6 1.6 0 0 1 .206 1.85c-.362.7-1.439.616-2.012.266-.573-.349-.682-1.216-.59-1.828.056-.358.111-.495-.164-.804-.218-.244-.738-.458-.85-.772-.225-.635.497-1.305-.062-1.965-.3-.353-.947-.31-1.028-.89-.06-.466.206-.893.066-1.407-.205-.709-.974-.842-1.41-1.379v-.086c.987-.263 1.496-1.385 1.303-2.347-.255-1.27-1.839-2.054-2.465-.577a3.9 3.9 0 0 0-.284 1.184l-.08-.142-2.692-4.34c-.939 1.352-3.329 3.126-4.85 3.752"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M25.61 13.624a3.8 3.8 0 0 1-.3-1.418c-.088-1.666.777-3.16 2.114-4.148 1.61-1.19 4.007-1.39 5.81-.53 2.167 1.037 2.734 3.764 3.58 5.819l-.057-.072c.362.822.658 1.643.956 2.465.193.537.793.73 1.041 1.219.27.53-.026 1.136.089 1.689s.663.752 1.027 1.107c.643.617.226 1.135.082 1.87-.11.57.452.884.785 1.233a1.6 1.6 0 0 1 .206 1.85c-.362.7-1.439.616-2.012.266-.573-.349-.682-1.216-.59-1.828.056-.358.111-.495-.164-.804-.218-.244-.738-.458-.85-.772-.225-.635.497-1.305-.062-1.965-.3-.353-.947-.31-1.028-.89-.06-.466.206-.893.066-1.407-.205-.709-.974-.842-1.41-1.379v-.086c.987-.263 1.496-1.385 1.303-2.347-.255-1.27-1.839-2.054-2.465-.577a3.9 3.9 0 0 0-.284 1.184l-.08-.142-2.692-4.34c-.939 1.352-3.329 3.126-4.85 3.752"
            ></path>
            <path
              fill="#404040"
              d="M27.955 14.927a.38.38 0 0 1-.117.382.39.39 0 0 1-.395.041c-.29-.125-.822-1.077-.32-1.233a.46.46 0 0 1 .423.121c.201.187.344.428.41.695M30.657 13.98a.38.38 0 0 1-.115.382.4.4 0 0 1-.395.04c-.292-.125-.832-1.076-.322-1.232a.46.46 0 0 1 .423.121c.201.187.344.428.41.695"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m24.162 33.754-10.313-5.036c-1.126-.549-2.709-.87-3.699.128-1.498 1.516-.399 4.121 1.668 4.224a3.06 3.06 0 0 0 2.974-1.777"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M29.919 20.396h-.559a5.4 5.4 0 0 0-4.171 1.889c-.787.961-.99 2.188-1.027 3.398-.074 2.702 0 5.365 0 8.078M40.949 35.332l2.657 2.145c1.57 1.268 4.07 3.613 6.174 2.13 1.728-1.217.553-3.61-.084-5.107l-3.082-7.233c-.923-2.163-2.026-5.178-4.294-6.27-1.028-.5-2.17-.59-3.31-.58"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M39.447 33.652c-.54-.892-.323-2.373.353-3.128a2.76 2.76 0 0 1 1.776-.822c1.915-.184 3.193 1.944 2.687 3.637a2.71 2.71 0 0 1-3.86 1.704M43.608 30.543l6.606 5.18M11.827 33.072c1.077 3.61 2.016 7.262 3.125 10.864.98 3.18 1.956 6.82 4.332 9.273 2.823 2.914 7.124 3.417 10.857 2.155"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M41.154 32.045q-1.103 4.02-2.202 8.04c-.5 1.819-.95 3.658-1.496 5.462-1.124 3.698-2.526 6.986-5.795 9.246"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="m41.155 32.045-5.569 5.486c-1.964 1.936-3.99 3.886-6.407 5.254-3.634 2.055-7.53 1.819-10.654-.91-2.683-2.347-4.273-5.684-5.726-8.904M29.919 20.396c1.401 3.549 5.858 4.073 9.09.243M44.376 38.098l.07 7.985"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M28.154 26.567a18 18 0 0 0 .629 5.753 31.9 31.9 0 0 1 1.136 9.832"
            ></path>
            <path
              fill="#404040"
              d="M37.345 54.041c0 2.125-1.656 3.847-3.699 3.847-2.042 0-3.698-1.722-3.698-3.847s1.656-3.846 3.698-3.846c2.043 0 3.699 1.722 3.699 3.846"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M33.642 57.888c2.045 0 3.703-1.722 3.703-3.847s-1.658-3.846-3.703-3.846-3.703 1.722-3.703 3.846 1.658 3.847 3.703 3.847M52.723 46.137H39.889v8.866h12.834z"
            ></path>
            <path
              fill="#404040"
              d="M14.294 32.36c1.09.95 2.26 1.966 2.877 3.306.557 1.212.442 2.985-.865 3.686l-.033.024a15 15 0 0 0 2.26 2.499c2.99 2.612 6.69 2.942 10.192 1.159l-.025-.045-13.9-11.696"
            ></path>
            <path
              stroke="#404040"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.8"
              d="M14.294 32.36c1.09.95 2.26 1.966 2.877 3.306.557 1.212.442 2.985-.865 3.686l-.033.024a15 15 0 0 0 2.26 2.499c2.99 2.612 6.69 2.942 10.192 1.159l-.025-.045-13.9-11.696M28.95 14.99c.24.617.205 1.326.182 1.969.469 0 .908.333 1.26.643"
            ></path>
          </svg>
          <Text className="h4SemiBold">Настройки</Text>
        </a>
      </div>
      <div className={styles.buttons}>
        <ButtonM className={styles.button} onClick={handleClick}>
          Выйти
        </ButtonM>
      </div>
    </div>
  );
};