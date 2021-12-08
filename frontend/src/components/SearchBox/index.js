import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

export const SearchBox = ({history}) => {
    const [keyword, setKeyWord] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }else{
            history.push('/')
        }
    }

  return(
    <Form onSubmit={submitHandler} inline>
        <Row>
            <Col>
            <Form.Control type='text' name='q' onChange={(e) => setKeyWord(e.target.value)}
            placeholder='Search Products' clasName='mr-sm-2 ml-sm-5'>
            </Form.Control>
            </Col>
            <Col>
            <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
            </Col>
        </Row>
    </Form>
   )

 }