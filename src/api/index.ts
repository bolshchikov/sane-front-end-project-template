import require from './request';

export const whoAmI = async (): Promise<{
  firstName: string;
  lastName: string;
}> => {
  const { data } = await require.get('/me');
  return data;
};
