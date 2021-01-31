import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface ToolTipWrapperProps {
  children: React.ReactNode;
  text: string;
}

const ToolTipWrapper: React.FC<ToolTipWrapperProps> = ({ children, text }) => {
  return (
    <OverlayTrigger
      placement="top-start"
      overlay={<Tooltip id="tooltip">{text}</Tooltip>}
    >
      <div>{children}</div>
    </OverlayTrigger>
  );
};

export default ToolTipWrapper;
