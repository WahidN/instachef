import Image from 'next/image';
import { useAuth } from '../providers/AuthProvider';
import styles from './ProfilePicture.module.css';

interface Properties {
  onProfilePictureChange?: () => void;
}

export const ProfilePicture = ({ onProfilePictureChange }: Properties) => {
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {user?.photoUrl ? <Image alt={user?.displayName || ''} src={user?.photoUrl} loading="lazy" /> : null}
      </div>
      <div className={styles.profilePictureInput}>
        <label htmlFor="profilePicture">Choose profile picture</label>
        <input id="profilePicture" type="file" onChange={onProfilePictureChange} placeholder="Choose profile picture" />
      </div>
    </div>
  );
};
