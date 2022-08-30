import React, { useRef, useState } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import useLocalStorage from '../../hooks/useLocalStorage';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export const PhotoCard = ({ id, likes = 0, src }) => {
  const ref = useRef(null);
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, setShow] = useIntersectionObserver(ref, false);
  const [actualLikes, setActualLikes] = useState(liked ? likes + 1 : likes);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const handleLikeButton = (value) => {
    setActualLikes(value ? actualLikes + 1 : actualLikes - 1);
    setLiked(value);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="image" />
            </ImgWrapper>
          </a>
          <Button type="button" onClick={() => handleLikeButton(!liked)}>
            <Icon size="32px" color={liked ? 'crimson' : ''} /> {actualLikes}{' '}
            likes!
          </Button>
        </>
      )}
    </Article>
  );
};
