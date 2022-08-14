import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { ProfilePicture } from 'components/ProfilePicture';
import { TextArea } from 'components/TextArea';
import { DocumentReference, updateDoc } from 'firebase/firestore';
import { useAuth } from 'providers/AuthProvider';
import { ChangeEvent, useCallback, useState } from 'react';
import styles from './Register.module.css';

export const RegisterProfile = ({ onHandleStep }: { onHandleStep: () => void }) => {
  const { user, userReference, fillUser } = useAuth();
  const [username, setUserName] = useState<string | null>(null);
  const [bio, setBio] = useState<string | null>(null);

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

  return (
    <>
      <ProfilePicture />
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
