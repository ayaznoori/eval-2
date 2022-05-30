import React, { useState } from "react";
import axios from "axios";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel, Grid, Flex } from '@chakra-ui/react';
import {GridItem} from '@chakra-ui/react';
import { useEffect } from "react";
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  const [arrdata,setarrdata]=useState([]);
   useEffect(()=>{
        axios.get('http://localhost:8080/products?_page=1&&_limit=3').then((e)=> setarrdata(e.data));
      
   },[])
   console.log(arrdata)
  return (
   
  
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {arrdata.map((ele)=><GridItem>
      <Stack data-cy="product" textAlign={'center'}>
      <Image data-cy="product-image" src={ele.imageSrc} />
      <Flex justifyContent={'space-between'}>
      <Text data-cy="product-category" >{ele.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{ele.gender}</TagLabel>
      </Tag>
      </Flex>
      <Heading data-cy="product-title" size={'md'} color={'blueviolet'}>{ele.title}</Heading>
      <Box data-cy="product-price" alignItems={'center'}>{ele.price}/unit</Box>
    </Stack>
    </GridItem>)}
    </Grid>

  )
};

export default Product;
