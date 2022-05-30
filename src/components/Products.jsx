import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import {Flex, Grid} from '@chakra-ui/react'
import Pagination from "./Pagination";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra


  return (
    <Flex flexDirection={'column'}  alignItems={'center'}>
      {<AddProduct/>}
      
      <Grid>{<Product/>}</Grid>
      {<Pagination/>}
    </Flex>
  );
};

export default Products;
