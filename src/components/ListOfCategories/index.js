import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import axios from 'axios';
import { Spinner } from '../Spinner/styles';

export const ListOfCategories = () => {
  const useCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const getCategories = async () => {
        await axios
          .get('https://newgram-9wz45ql74-barbasmarcosi.vercel.app/categories')
          .then((res) => {
            setCategories(res.data);
            setLoading(false);
          })
          .catch((e) => console.error(e));
      };
      getCategories();
    }, []);
    return { categories, loading };
  };

  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed != newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading && <Spinner />}
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
