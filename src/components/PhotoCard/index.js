import React, { useEffect, useRef, useState } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

export const PhotoCard = ({ id, likes = 0, src }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [actualLikes, setActualLikes] = useState(likes);
  const [liked, setLikes] = useState(false);
  const onClickLike = () => {
    liked ? setActualLikes(actualLikes - 1) : setActualLikes(actualLikes + 1);
    setLikes(!liked);
  };

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    });
  }, [ref]);

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="image" />
            </ImgWrapper>
          </a>
          <Button type="button">
            <MdFavoriteBorder
              fill={liked ? '#ec0d0d' : 'inherit'}
              onClick={onClickLike}
              size="32px"
            />{' '}
            {actualLikes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
