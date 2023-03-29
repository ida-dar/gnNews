import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { DisplayType, News } from 'src/interfaces/news.interface';
import { selectDisplayType } from 'src/redux/news/newsSelector';
import { useAppSelector } from 'src/redux/utils/hooks';
import Modal from 'src/components/common/Modal/Modal';
import { Article, Img, ImgContainer, Title } from './NewsItemsCSS';

type ModalProps = {
  title: string;
  data: {
    content: string | null;
    url: string;
    author: string;
  };
};

const NewsItems = ({ news }: any) => {
  const displayType = useAppSelector(selectDisplayType);

  let modalData: ModalProps = {
    title: '',
    data: {
      content: '',
      url: '',
      author: '',
    },
  };

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalProps>(modalData);
  const isDisplayedAsList = displayType === DisplayType.LIST;

  const onOpenModal = (el: News) => {
    const { author, url, title, content } = el;
    modalData.title = title;
    modalData.data = {
      content: content,
      url: url,
      author: author,
    };

    setModalInfo(modalData);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {news.length &&
        news?.map((el: News, i: string) => (
          <Col key={i} lg={isDisplayedAsList ? 12 : 4} md={isDisplayedAsList ? 12 : 6} sm={12}>
            <Article isDisplayedAsList={isDisplayedAsList} onClick={() => onOpenModal(el)}>
              {!isDisplayedAsList && el.urlToImage && (
                <ImgContainer>
                  <Img src={el.urlToImage} />
                </ImgContainer>
              )}
              <Row>
                <Title>{el.title}</Title>
                <p>
                  {el.publishedAt.replace('T', ' ').replace('Z', '')} - {el.author}
                </p>
                <p>Source: {el.source.name}</p>
                {!isDisplayedAsList && <p>{el.description}</p>}
              </Row>
            </Article>
          </Col>
        ))}
      <Modal title={modalInfo.title} content={modalInfo.data} isOpen={openModal} onRequestClose={closeModal} />
    </>
  );
};

export default NewsItems;
