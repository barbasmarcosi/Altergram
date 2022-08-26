import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import json from '../../../api/api/db.json';

export const ListOfCategories = () => {
  return (
    <List>
      {json.categories.map(category => {
        console.log(category);
        return (
          <Item key={category}>
            <Category {...category}/>
          </Item>
        );
      })}
    </List>
  );
};
