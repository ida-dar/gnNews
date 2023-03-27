import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from 'src/redux/utils/hooks';
import { changeDisplayType } from 'src/redux/news/newsActions';
import { selectDisplayType } from 'src/redux/news/newsSelector';
import { DisplayType } from 'src/interfaces/news.interface';

import Modal from 'src/components/common/Modal/Modal';
import Button from 'src/components/common/Button/Button';
import { Component, Icon, Logo, Btn } from './HeaderCSS';

const Header = () => {
  const dispatch = useAppDispatch();
  const displayType = useAppSelector(selectDisplayType);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const onDisplayChange = (type: string) => {
    dispatch(changeDisplayType(type));
  };

  const modalText = '';

  return (
    <Component>
      <Row className="align-items-center justify-content-center">
        <Col lg={7} sm={12}>
          <NavLink to={`${process.env.PUBLIC_URL}/`}>
            <Logo>gnNews</Logo>
          </NavLink>
        </Col>
        <Col lg={1} sm={12}>
          <Btn isActive={displayType === DisplayType.GRID}>
            <Icon icon={faGrip} onClick={() => onDisplayChange(DisplayType.GRID)} />
          </Btn>
          <Btn isActive={displayType === DisplayType.LIST}>
            <Icon icon={faList} onClick={() => onDisplayChange(DisplayType.LIST)} />
          </Btn>
        </Col>
        <Col lg={3} sm={12}>
          <Button onClick={onOpenModal} text={'Open modal'} />
        </Col>
      </Row>
      <Modal title={'PopUp'} content={modalText} isOpen={openModal} onRequestClose={closeModal} />
    </Component>
  );
};

Header.propTypes = {};

export default Header;
