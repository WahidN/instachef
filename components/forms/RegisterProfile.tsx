import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { ProfilePicture } from 'components/ProfilePicture';
import { TextArea } from 'components/TextArea';
import { storage } from 'firebase.config';
import { DocumentReference, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useAuth } from 'providers/AuthProvider';
import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';
import styles from './Register.module.css';

export const RegisterProfile = ({ onHandleStep }: { onHandleStep: () => void }) => {
  const { user, userReference, fillUser } = useAuth();
  const [username, setUserName] = useState<string | null>(null);
  const [bio, setBio] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onUserNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }, []);

  const onBioChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  }, []);

  const saveForm = useCallback(async () => {
    user?.updateUserProfile(username || '');
    await updateDoc(userReference as DocumentReference, {
      bio: bio,
    });
    if (user) {
      fillUser(user.authUser);
    }
    onHandleStep();
  }, [bio, fillUser, onHandleStep, user, userReference, username]);

  const setProfilePicture: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      if (!input.files?.length) {
        return;
      }

      const file = input.files[0];
      const pictureReference = ref(storage, `${user?.id}/${file.name}_${new Date()}.png`);
      const uploadTask = uploadBytesResumable(pictureReference, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            user?.updateUserProfile(undefined, downloadURL);
          });
        }
      );
    },
    [user]
  );

  return (
    <>
      <ProfilePicture onChange={setProfilePicture} imageUrl={imageUrl || ''} alt={user?.authUser.displayName || ''} />
      <Input type="text" defaultValue={user?.authUser?.displayName || ''} label="Name" onChange={onUserNameChange} />
      <TextArea label="Bio" defaultValue={user?.bio || ''} onChange={onBioChange} />
      <div className={styles.buttonWrap}>
        <Button onClick={saveForm}>
          <Icon type="arrowRight" />
        </Button>
      </div>
    </>
  );
};
