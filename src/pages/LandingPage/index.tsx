import './styles.less';

import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Row className="landing-page__container" justify="center" align="middle">
      <Col>
        <h1>{t('helloWorld')}</h1>
      </Col>
    </Row>
  );
};

export default LandingPage;
