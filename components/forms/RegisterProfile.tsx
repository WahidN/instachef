import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { useAuth } from '../../providers/AuthProvider';
import { Input } from '../Input';
import { ProfilePicture } from '../ProfilePicture';
import { TextArea } from '../TextArea';

export const RegisterProfile = ({ onHandleStep }: { onHandleStep: () => void }) => {
  const { user } = useAuth();

  return (
    <>
      <ProfilePicture />
      <Input type="text" defaultValue={user?.displayName || ''} label="Name" />
      <TextArea label="Bio" defaultValue={user?.bio || ''} rows={5} />
      <Button onClick={onHandleStep}>
        <Icon type="arrowRight" />
      </Button>
    </>
  );
};
