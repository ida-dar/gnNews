import Modal from 'react-modal';
import styled from 'styled-components';

interface ContentProps {
  content: string | null;
  url: string;
  author: string;
}

type ModalProps = {
  title: string;
  content: any | ContentProps;
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

const Header = styled.h3`
  margin: 24px;
`;

const Content = styled.div`
  padding: 24px;
`;

const ModalComp = ({ title, content, isOpen, onRequestClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
      <Header>{title}</Header>
      {typeof content !== 'string' ? (
        <Content>
          <p>{content?.author}</p>
          <a href={content?.url} target="_blank">
            Link to original article
          </a>
          <p>{content?.content}</p>
        </Content>
      ) : (
        <p>{content}</p>
      )}
    </Modal>
  );
};

export default ModalComp;
