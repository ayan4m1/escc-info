import Spline from 'cubic-spline';
import React, { useCallback, useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const tcrs = [
  200,
  185,
  170,
  155,
  145,
  138,
  130,
  120,
  110,
  100,
  85,
  70,
  50,
  25,
  5
];
const resistances = [
  0.4,
  0.45,
  0.5,
  0.55,
  0.6,
  0.65,
  0.7,
  0.75,
  0.8,
  0.85,
  0.9,
  0.95,
  1,
  1.05,
  1.1
];

const spline = new Spline(resistances, tcrs);

export default function TcrCalculator() {
  const [resistance, setResistance] = useState(1);

  const handleResistanceChange = useCallback((event) => {
    const { value: rawValue } = event.target;

    const value = parseFloat(rawValue);

    if (!isNaN(value)) {
      setResistance(value);
    }
  });

  const tcr = Math.round(spline.at(resistance));

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Label>Resistance (&#8486;)</Form.Label>
            <Form.Control
              type="number"
              name="resistance"
              min="0.1"
              max="2"
              step="0.05"
              onChange={handleResistanceChange}
              value={resistance}
            />
          </Form.Row>
          <Form.Row>
            <h4>TCR {tcr}</h4>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
