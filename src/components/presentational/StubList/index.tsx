import React, { memo } from 'react';

import type { FunctionComponent } from 'react';

import { Stub } from '@presentational/Common/Stub';

import type { Props as StubProps } from '@presentational/Common/Stub';

interface Props extends Partial<StubProps> {
  loading?: boolean;
}

const StubList: FunctionComponent<Props> = (props) => {
  const { loading, ...other } = props;

  const message = loading ? 'Загрузка ...' : 'Список пуст';

  return <Stub {...other} message={message} />;
};

export default memo(StubList);
