import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
export default (props) => {
  return (
    
    <Card className="p-0 rounded" onClick={props.onClick}>
        <CardImg top width="100%" src={props.img}/>
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{`Year: ${props.year}  Rate: ${props.rate}/10  Genre: ${props.genre1} & ${props.genre2}`} </CardSubtitle>

        </CardBody>
    </Card>
    
  )
}
