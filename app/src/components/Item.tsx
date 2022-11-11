import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../context';

const ItemElement = styled.div`
  
`

type ItemProps = {
  todo: Todo
}


const Item: React.FC<ItemProps> = ({todo}) => {
  return <ItemElement>
    
  </ItemElement>
}

export default Item;