export const links = {
  API_HOST: 'https://api.github.com',

  USERS: '/users?per_page={count}&since={userId}',
  FOLLOWERS: '/users/{login}/followers?per_page={count}&since={userId}',
} as const;
