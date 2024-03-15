import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
const UpdateDatas = ({ id, onUpdate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [code, setCode] = useState("");
  const [pelajaran, setPelajaran] = useState("");

  const saveData = (e) => {
    e.preventDefault();
    onUpdate({ id, code, pelajaran });
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>Update</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form onSubmit={saveData}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Mapel</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Code</FormLabel>
                <Input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ex : MTK"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pelajaran</FormLabel>
                <Input
                  value={pelajaran}
                  onChange={(e) => setPelajaran(e.target.value)}
                  placeholder="Ex : Matematika"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default UpdateDatas;
