import appStore from "../assets/store_app_store.svg";
import googlePlay from "../assets/store_google_play.svg";
import appGallery from "../assets/store_app_gallery.svg";
import ruStore from "../assets/store_ru_store.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__stores">
        {[
          { img: appStore, alt: "AppStore" },
          { img: googlePlay, alt: "Google Play" },
          { img: appGallery, alt: "AppGallery" },
          { img: ruStore, alt: "RuStore" },
        ].map(({ img, alt }, index) => (
          <a key={index} href="##" className="footer__appDownloadButton">
            <img src={img} alt={alt} loading="lazy" />
          </a>
        ))}
      </div>
      <div className="footer__socials">
        {[
          {
            icon: (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_21209_241504)">
                  <path
                    d="M0 15.3333C0 8.10513 0 4.49103 2.24551 2.24551C4.49103 0 8.10513 0 15.3333 0H16.6667C23.8949 0 27.509 0 29.7545 2.24551C32 4.49103 32 8.10513 32 15.3333V16.6667C32 23.8949 32 27.509 29.7545 29.7545C27.509 32 23.8949 32 16.6667 32H15.3333C8.10513 32 4.49103 32 2.24551 29.7545C0 27.509 0 23.8949 0 16.6667L0 15.3333Z"
                    fill="#E0E0E0"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.8912 12.686C21.237 13.6473 22.8852 14.213 24.6653 14.213V11.5177C23.6717 11.3062 22.792 10.7872 22.1306 10.0653C20.9985 9.35919 20.1828 8.19431 19.9436 6.83087H17.448V20.5069C17.4424 22.1013 16.1478 23.3922 14.5514 23.3922C13.6106 23.3922 12.7748 22.944 12.2456 22.2498C11.3004 21.773 10.6522 20.7941 10.6522 19.6637C10.6522 18.0648 11.9489 16.7686 13.5488 16.7686C13.8553 16.7686 14.1507 16.8163 14.4278 16.9042V14.1795C10.9922 14.2505 8.22902 17.0563 8.22902 20.5071C8.22902 22.2296 8.91713 23.7912 10.0338 24.9321C11.0413 25.6083 12.2542 26.0026 13.559 26.0026C17.0561 26.0026 19.8912 23.169 19.8912 19.6736V12.686Z"
                    fill="#595959"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.6653 11.5177L24.6653 10.7889C23.7692 10.7903 22.8908 10.5394 22.1306 10.0651C22.8036 10.8015 23.6897 11.3094 24.6653 11.5177ZM19.9436 6.83087C19.9208 6.70058 19.9033 6.56941 19.8912 6.4377V5.99731H16.4453V19.6735C16.4398 21.2677 15.1453 22.5586 13.5488 22.5586C13.08 22.5586 12.6375 22.4475 12.2456 22.2498C12.7748 22.944 13.6106 23.3922 14.5514 23.3922C16.1477 23.3922 17.4424 22.1013 17.448 20.5069V6.83087H19.9436ZM14.428 14.1795V13.4037C14.14 13.3643 13.8497 13.3446 13.5591 13.3448C10.0616 13.3448 7.22656 16.1784 7.22656 19.6735C7.22656 21.8648 8.3408 23.796 10.034 24.932C8.91728 23.7911 8.22916 22.2295 8.22916 20.5069C8.22916 17.0563 10.9922 14.2505 14.428 14.1795Z"
                    fill="#595959"
                  ></path>
                </g>
              </svg>
            ),
          },
          {
            icon: (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_21209_241507)">
                  <path
                    d="M0.000488281 15.3333C0.000488281 8.10513 0.000488281 4.49103 2.246 2.24551C4.49152 0 8.10562 0 15.3338 0H16.6672C23.8954 0 27.5095 0 29.755 2.24551C32.0005 4.49103 32.0005 8.10513 32.0005 15.3333V16.6667C32.0005 23.8949 32.0005 27.509 29.755 29.7545C27.5095 32 23.8954 32 16.6672 32H15.3338C8.10562 32 4.49152 32 2.246 29.7545C0.000488281 27.509 0.000488281 23.8949 0.000488281 16.6667L0.000488281 15.3333Z"
                    fill="#E0E0E0"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.13407 10H5.8002C5.13337 10 5 10.3139 5 10.6599C5 11.2779 5.79124 14.3432 8.68413 18.3973C10.6127 21.1659 13.3299 22.6667 15.8025 22.6667C17.2861 22.6667 17.4696 22.3333 17.4696 21.7592V19.6667C17.4696 19 17.6101 18.8669 18.0799 18.8669C18.4261 18.8669 19.0195 19.04 20.4041 20.3749C21.9866 21.9569 22.2475 22.6667 23.1375 22.6667H25.4714C26.1383 22.6667 26.4717 22.3333 26.2793 21.6755C26.0689 21.0199 25.3133 20.0687 24.3108 18.9411C23.7668 18.2984 22.9509 17.6063 22.7036 17.2601C22.3575 16.8152 22.4563 16.6174 22.7036 16.2219C22.7036 16.2219 25.5471 12.2173 25.8438 10.8577C25.9921 10.3633 25.8438 10 25.138 10H22.8041C22.2107 10 21.9371 10.3139 21.7887 10.6599C21.7887 10.6599 20.6019 13.5521 18.9206 15.4309C18.3766 15.9747 18.1293 16.1477 17.8326 16.1477C17.6843 16.1477 17.4695 15.9747 17.4695 15.4803V10.8577C17.4695 10.2644 17.2973 10 16.8027 10H13.1352C12.7644 10 12.5413 10.2753 12.5413 10.5363C12.5413 11.0987 13.382 11.2285 13.4687 12.8105V16.2467C13.4687 17 13.3325 17.1366 13.0359 17.1366C12.2447 17.1366 10.3201 14.2314 9.1786 10.9071C8.95493 10.261 8.73053 10 8.13407 10Z"
                    fill="#595959"
                  ></path>
                </g>
              </svg>
            ),
          },
          {
            icon: (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_21275_161285)">
                  <path
                    d="M0 15.3333C0 8.10513 0 4.49103 2.24551 2.24551C4.49103 0 8.10513 0 15.3333 0H16.6667C23.8949 0 27.509 0 29.7545 2.24551C32 4.49103 32 8.10513 32 15.3333V16.6667C32 23.8949 32 27.509 29.7545 29.7545C27.509 32 23.8949 32 16.6667 32H15.3333C8.10513 32 4.49103 32 2.24551 29.7545C0 27.509 0 23.8949 0 16.6667L0 15.3333Z"
                    fill="#E0E0E0"
                  ></path>
                  <path
                    d="M16.0319 16.3155C18.7013 16.3155 20.8773 14.1395 20.8773 11.4703C20.8773 8.80101 18.7013 6.625 16.0319 6.625C13.3337 6.625 11.1577 8.80101 11.1577 11.4703C11.1577 14.1395 13.3337 16.3155 16.0319 16.3155ZM16.0319 9.46832C17.1345 9.46832 18.0339 10.3677 18.0339 11.4703C18.0339 12.5728 17.1345 13.4721 16.0319 13.4721C14.9295 13.4721 14.0301 12.5728 14.0301 11.4703C14.001 10.3677 14.9005 9.46832 16.0319 9.46832Z"
                    fill="#595959"
                  ></path>
                  <path
                    d="M17.9759 20.2903C18.9623 20.0582 19.9198 19.681 20.7902 19.1298C21.4575 18.7235 21.6606 17.8242 21.2254 17.1569C20.8192 16.4895 19.9198 16.2865 19.2524 16.7217C17.2795 17.9693 14.6974 17.9693 12.7245 16.7217C12.0572 16.3155 11.1868 16.4895 10.7515 17.1569C10.3744 17.8242 10.5775 18.6946 11.2448 19.1007C12.1152 19.6521 13.0726 20.0291 14.0591 20.2613L11.3608 22.9595C10.8096 23.5109 10.8096 24.4102 11.3608 24.9615C11.651 25.2517 11.9991 25.3677 12.3763 25.3677C12.7535 25.3677 13.1016 25.2226 13.3918 24.9615L16.061 22.2922L18.7303 24.9615C19.2815 25.5127 20.181 25.5127 20.7322 24.9615C21.2834 24.4102 21.2834 23.5109 20.7322 22.9595L17.9759 20.2903Z"
                    fill="#595959"
                  ></path>
                </g>
              </svg>
            ),
          },
          {
            icon: (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_21209_241514)">
                  <path
                    d="M0 15.3333C0 8.10513 0 4.49103 2.24551 2.24551C4.49103 0 8.10513 0 15.3333 0H16.6667C23.8949 0 27.509 0 29.7545 2.24551C32 4.49103 32 8.10513 32 15.3333V16.6667C32 23.8949 32 27.509 29.7545 29.7545C27.509 32 23.8949 32 16.6667 32H15.3333C8.10513 32 4.49103 32 2.24551 29.7545C0 27.509 0 23.8949 0 16.6667L0 15.3333Z"
                    fill="#E0E0E0"
                  ></path>
                  <g clipPath="url(#clip1_21209_241514)">
                    <path
                      d="M23.6651 11.8737C23.4811 11.1362 22.939 10.5553 22.2506 10.3581C21.0029 10 15.9994 10 15.9994 10C15.9994 10 10.9962 10 9.7484 10.3581C9.05999 10.5553 8.5179 11.1362 8.33391 11.8737C7.99951 13.2107 7.99951 15.9999 7.99951 15.9999C7.99951 15.9999 7.99951 18.7893 8.33391 20.1262C8.5179 20.8636 9.05999 21.4447 9.7484 21.6417C10.9962 22 15.9994 22 15.9994 22C15.9994 22 21.0029 22 22.2506 21.6417C22.939 21.4447 23.4811 20.8636 23.6651 20.1262C23.9995 18.7893 23.9995 15.9999 23.9995 15.9999C23.9995 15.9999 23.9995 13.2107 23.6651 11.8737Z"
                      fill="#595959"
                    ></path>
                    <path
                      d="M14.3989 18.5714L18.5556 16.0001L14.3989 13.4285V18.5714Z"
                      fill="#E0E0E0"
                    ></path>
                  </g>
                </g>
              </svg>
            ),
          },
        ].map(({ icon }, index) => (
          <a key={index} href="##" className="footer__socials-icons">
            <div className="footer__socials-icons-block">{icon}</div>
          </a>
        ))}
      </div>
      <div className="footer__info">
        <span className="footer-text">Ответы на вопросы</span>
        <span className="footer-text">Контакты</span>
        <a href="##" className="footer-text">
          Работа в самокате
        </a>
        <span className="footer-text">Для поставщиков</span>
        <a href="##" className="footer-text">
          Умный импорт
        </a>
        <a href="##" className="footer-text">
          Стать курьером-партнёром
        </a>
        <span className="footer-text">Линия доверия Самоката</span>
        <a href="##" className="footer-text">
          Правила и соглашения
        </a>
        <a href="##" className="footer-text">
          Политика конфиденциальности
        </a>
      </div>
      <span className="footer-copyright">
        Зона, время, товары и предложения доставки ограничены. Организатор,
        продавец ООО «Умный ритейл» ОГРН 1177847261602, 121087, Москва,
        вн.г.тер. муниципальный округ Филёвский парк, ул. Барклая, д. 6, стр. 3,
        помещ. 8Н/4. Информационные услуги оказываются ООО «Умное пространство»
        ОГРН 1137847232852, 121087, Москва, вн.г.тер. муниципальный округ
        Филёвский парк, ул. Барклая, д. 6, стр. 3, помещ. 8Н/4
      </span>
    </footer>
  );
};

export default Footer;
