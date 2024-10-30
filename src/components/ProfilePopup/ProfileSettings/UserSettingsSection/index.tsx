import React from "react";
import styles from "./UserSettingsSection.module.scss";
import { Text } from "@/components/Text";
import axios from "axios";

type User = {
  name: string;
};

type UserSettingsSectionProps = {
  handleNameChangeClick: () => void;
};

export const UserSettingsSection: React.FC<UserSettingsSectionProps> = ({
  handleNameChangeClick,
}) => {
  const [user, setUser] = React.useState<User>();

  const email = localStorage.getItem("email");

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios
          .get("http://localhost:4000/api/settings/name", {
            params: { email: email },
          })
          .then((res) => setUser(res.data))
          .catch((err) => console.error(err));
      } catch {}
    };
    fetchUser();
  }, [email]);

  return (
    <div className={styles.root} onClick={handleNameChangeClick}>
      <div className={styles.leftBlock}>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M22.565 18.527c-.861-.35-1.822-.074-2.566.482-1.132.845-2.494 1.427-3.999 1.427s-2.867-.582-3.999-1.427c-.744-.556-1.705-.833-2.566-.482C7.553 19.293 6 20.264 6 21.382 6 24.218 9 28 16 28s10-3.782 10-6.618c0-1.118-1.553-2.089-3.435-2.855"
              clip-rule="evenodd"
            ></path>
            <path
              fill="currentColor"
              d="M22 10.125C22 13.991 19 18 16 18s-6-4.009-6-7.875S12.686 4 16 4s6 2.259 6 6.125"
            ></path>
          </svg>
        </div>
        <div className={styles.label}>
          <Text className="p1SemiBold" style={{ color: "#404040" }}>
            {user?.name?.toUpperCase() || "ВАШЕ ИМЯ"}
          </Text>
        </div>
      </div>
      <div className={styles.chevron} style={{ color: "#a6a6a6" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};
