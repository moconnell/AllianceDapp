import React from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

interface ModalComponentProps {
  showModal?: boolean,
  closeModal(): void,
  maxWidth?: string | number
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  showModal = false,
  closeModal,
  maxWidth = "710px",
  children
}) =>  (
    <Modal isOpen={showModal} isCentered onClose={closeModal}>
      <ModalOverlay />
      <ModalContent maxW={maxWidth}>{children}</ModalContent>
    </Modal>
  );

  export default ModalComponent;
