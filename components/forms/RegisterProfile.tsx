import React from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { Container } from '../Container';
import { Input } from '../Input';

export const RegisterProfile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Input type="text" defaultValue={user?.displayName || undefined} label="Name" />
    </Container>
  );
};
