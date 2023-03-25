import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Modal from 'src/components/common/Modal/Modal';
import Button from 'src/components/common/Button/Button';
import { Component, Logo } from './HeaderCSS';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Component>
      <Col>
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <Logo>gnNews</Logo>
        </NavLink>
      </Col>
      <Col>
        <Button onClick={onOpenModal} text={'Open modal'} />
      </Col>
      <Modal title={'PopUp'} isOpen={openModal} onRequestClose={closeModal} />
    </Component>
  );
};

Header.propTypes = {};

export default Header;
