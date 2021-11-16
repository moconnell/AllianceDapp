import React from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

export function ModalComponent({
  showModal,
  closeModal,
  maxWidth = "710px",
  children,
}) {
  return (
    <Modal isOpen={showModal} isCentered onClose={closeModal}>
      <ModalOverlay />
      <ModalContent maxW={maxWidth}>{children}</ModalContent>
    </Modal>
  );
}
