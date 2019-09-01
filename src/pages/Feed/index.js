import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Feed() {

  const [feed, setFeed] = useState([])

  useEffect(() => {
    async function loadFeed(){
      const response = await fetch('http://localhost:3000/feed?_expand=author&_limit=5&_page=1')
    
      const data = await response.json()
      setFeed(data)
    }   
  },[])

  return (
    <View><Text>Teste</Text></View>
  );
}
