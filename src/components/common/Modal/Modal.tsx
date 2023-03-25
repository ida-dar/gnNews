import Modal from 'react-modal';
import styled from 'styled-components';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '24px',
    transform: 'translate(-50%, -50%)',
    height: '50vh',
    width: '45vw',
    'text-align': 'center',
  },
};

const ModalComp = ({ title, isOpen, onRequestClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero, excepturi asperiores voluptatibus dolorum nulla fuga
        neque soluta, repudiandae dolor suscipit quisquam ex? Expedita, veniam?
      </p>
    </Modal>
  );
};

export default ModalComp;
