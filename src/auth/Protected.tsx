import { withAuthenticationRequired } from '@auth0/auth0-react';

export const Protected = ({
  component,
  ...args
}: {
  component: React.ComponentType;
}) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};
