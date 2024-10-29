import React from "react";
import styles from "./ProfileSettings.module.scss";
import { Text } from "../../Text";
import { UserSettingsSection } from "./UserSettingsSection";
import { NameSettings } from "./NameSettings";

export const ProfileSettings: React.FC = () => {
  const [showNameChange, setShowNameChange] = React.useState<boolean>(false);

  const handleNameChangeClick = () => {
    setShowNameChange(true);
  };

  return (
    <>
      {showNameChange ? (
        <NameSettings />
      ) : (
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.title}>
              <Text className="h3Bold">Профиль</Text>
            </div>
            <div className={styles.section}>
              <UserSettingsSection
                handleNameChangeClick={handleNameChangeClick}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
