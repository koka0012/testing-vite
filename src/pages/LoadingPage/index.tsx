import './styles.less';

import { Col, Row, Spin } from 'antd';
import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <Row className="loadin-page__container" align="middle" justify="center">
      <Col>
        <Spin />
      </Col>
    </Row>
  );
};
