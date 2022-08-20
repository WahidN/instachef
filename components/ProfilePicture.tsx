import Image from 'next/image';
import styles from './ProfilePicture.module.css';

interface Properties {
  onChange?: (event: Event) => void;
  imageUrl: string;
  alt?: string;
  hideInput?: boolean;
}

export const ProfilePicture = ({ imageUrl, onChange, alt, hideInput }: Properties) => (
  <div className={styles.wrapper}>
    <div className={styles.avatar}>
      {imageUrl ? <Image alt={alt || ''} src={imageUrl} layout="fill" objectFit="cover" loading="lazy" /> : null}
    </div>
    {!hideInput && (
      <div className={styles.profilePictureInput}>
        <label htmlFor="profilePicture">Choose profile picture</label>
        <input id="profilePicture" type="file" onChange={onChange} placeholder="Choose profile picture" />
      </div>
    )}
  </div>
);
