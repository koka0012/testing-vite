import './styles.less';

import { LeftOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';

import { ReactComponent as NotFoundSVG } from '@/assets/svg/404.svg';

const NotFound: React.FC = () => {
  return (
    <Row className="not-found__container" justify="center" align="middle">
      <Col className="not-found__col">
        <NotFoundSVG className="not-found__svg" />
        <Button className="not-found__button" type="primary" icon={<LeftOutlined />}>
          Go back!
        </Button>
      </Col>
    </Row>
  );
};

export default NotFound;
