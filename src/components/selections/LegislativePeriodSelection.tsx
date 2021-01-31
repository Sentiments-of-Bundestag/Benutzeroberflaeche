import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Skeleton } from 'antd';

export interface LegislativePeriodSelectionProps {
  legislativePeriods: number[];
  label: string;
  loading?: boolean;
  // there is only one period currently
  onSelect?: (legislativePeriod: number) => void;
}

const LegislativePeriodSelection: React.FC<LegislativePeriodSelectionProps> = ({
  legislativePeriods,
  label,
  loading,
}) => {
  const disabled = legislativePeriods.length === 0 || loading;
  return (
    <>
      <h1>
        <Dropdown>
          {disabled ? (
            <Skeleton.Button active size="large" />
          ) : (
            <DropdownButton
              title={legislativePeriods.length ? legislativePeriods[0] : '11'}
            >
              {legislativePeriods.map((item) => (
                <Dropdown.Item key={item}>{item}</Dropdown.Item>
              ))}
            </DropdownButton>
          )}
        </Dropdown>
        {label}
      </h1>
    </>
  );
};

export default LegislativePeriodSelection;
