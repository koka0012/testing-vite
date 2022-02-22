import './styles.less';

import React, { Suspense } from 'react';

import { LoadingPage } from '@/pages/LoadingPage';
import MainRoute from '@/routes/MainRoute';

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <MainRoute />
    </Suspense>
  );
};

export default App;
