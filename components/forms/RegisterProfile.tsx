import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { ProfilePicture } from 'components/ProfilePicture';
import { TextArea } from 'components/TextArea';
import { useAuth } from 'providers/AuthProvider';
import { ChangeEvent, useCallback, useState } from 'react';

export const RegisterProfile = ({ onHandleStep }: { onHandleStep: () => void }) => {
  const { user } = useAuth();
  const [username, setUserName] = useState<string | null>(null);
  const [bio, setBio] = useState<string | null>(null);

  const onUserNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }, []);

  const onBioChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  }, []);

  const saveForm = useCallback(() => {
    if (!user) {
      onHandleStep();
      return;
    }
    user.updateUserProfile(username || '');
    onHandleStep();
  }, [onHandleStep, user, username]);

  return (
    <>
      <ProfilePicture />
      <Input type="text" defaultValue={user?.authUser?.displayName || ''} label="Name" onChange={onUserNameChange} />
      <TextArea label="Bio" defaultValue={user?.bio || ''} onChange={onBioChange} />
      <Button onClick={saveForm}>
        <Icon type="arrowRight" />
      </Button>
    </>
  );
};
