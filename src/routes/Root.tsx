import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '../store';

export const Root = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const setAccessToken = useStore((state) => state.setAccessToken);
  const whoAmI = useStore((state) => state.whoAmI);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then(setAccessToken).then(whoAmI);
    }
  }, [getAccessTokenSilently, isAuthenticated, setAccessToken, whoAmI]);

  return (
    <>
      <Outlet />
    </>
  );
};
