import {type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface SwipeableItemProps {
  children: ReactNode;
  onDelete?: () => void;
}

const ACTION_WIDTH = 120;

export const SwipeableItem = ({
  children,
  onDelete,
}: SwipeableItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Actions>
        <DeleteButton
          onClick={onDelete}
          type="button"
        >
          🗑️
        </DeleteButton>
      </Actions>

      <Card
        drag="x"
        dragConstraints={{
          left: -ACTION_WIDTH,
          right: 0,
        }}
        dragElastic={0.05}
        animate={{
          x: isOpen ? -ACTION_WIDTH : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      >
        {children}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height:auto;
`;

const Actions = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;

  width: ${ACTION_WIDTH}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ef4444;
`;

const DeleteButton = styled.button`
  border: none;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

const Card = styled(motion.div)`
  height: 100%;
`;