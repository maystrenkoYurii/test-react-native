import lodash, { template } from 'lodash';

import { curlyBracesReg } from '@functions/regular';
import { links } from '@core/constants/links';

lodash.templateSettings = { interpolate: curlyBracesReg };

export const templates = {
  usersLink: template(links.USERS),
  followersLink: template(links.FOLLOWERS),
} as const;
