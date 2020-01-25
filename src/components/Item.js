import React from 'react';
import { Card } from 'antd';

export default function Item(props) {
  const { Meta } = Card;

  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt="Not available" src={props.src} />}>
      <Meta title={props.title} description={props.kind} />
      {props.price}
    </Card>
  );
}
