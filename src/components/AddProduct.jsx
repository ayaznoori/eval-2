import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { Select, Input, Radio, RadioGroup} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cat,setcat]=useState("");
  const [tit,settit]=useState("");
  const [pri,setpri]=useState(0);
  const [gen,setgen]=useState("");
  const savefun=()=>{
      axios.post('http://localhost:8080/products?_page=1&&_limit=3',{
        title:tit,
        category:cat,
        gender:gen,
        price:pri
      }).then((ele=>{}));
  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} >Add New Product</Button>
      
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} size={'lg'} >
        <ModalBody pb={6}>
          <label>Title</label>
          <Input data-cy="add-product-title" onChange={(e)=>settit(e.target.value)}/>
          <Select data-cy="add-product-category" onChange={(e)=>setcat(e.target.value)}>
            <option data-cy="add-product-category-shirt" value="Shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="Pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="Jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={(e)=>setgen(e.target.value)}>
            <label>Gender</label>
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" onChange={(e)=>setpri(e.target.value)}/>
          <Button data-cy="add-product-submit-button" onClick={savefun} >Create</Button>
        </ModalBody>
      </Modal>
     
    </>
  );
};

export default AddProduct;
