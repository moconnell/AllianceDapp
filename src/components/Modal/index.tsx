import React from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

export function ModalComponent({
  showModal,
  closeModal,
  maxWidth = "710px",
  children
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Modal isOpen={showModal} isCentered onClose={closeModal}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalOverlay />
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ModalContent maxW={maxWidth}>{children}</ModalContent>
    </Modal>
  );
}
