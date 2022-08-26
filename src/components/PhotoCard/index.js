import React, { useState } from 'react';
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

export const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
}) => {
  const [actualLikes, setActualLikes] = useState(likes);
  const [liked, setLikes] = useState(false);
  const onClickLike = () => {
    liked ? setActualLikes(actualLikes - 1) : setActualLikes(actualLikes + 1);
    setLikes(!liked);
  };

  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt="image" />
        </ImgWrapper>
      </a>
      <Button type="button">
        <MdFavoriteBorder  fill={liked ? '#ec0d0d' : 'inherit'}  onClick={onClickLike} size="32px" /> {actualLikes}{' '}
        likes!
      </Button>
    </article>
  );
};
