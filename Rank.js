import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './SciDec.css' 

class Rank extends Component {
    render() {
        return (
            
                <div className="container">
                <h1> </h1>

                        {
                            this.props.record.map(row => (
                                <ListGroup>
                                    <ListGroupItem className="list-rank col-md-10 container mt-3"> <h3>Department of {row.departmentof} </h3> <div className="container"> Factory of {row.name} <h5>Views : {row.views}</h5> </div> </ListGroupItem>
                                </ListGroup>

                            ))
                        }
                        
                    
                        
                        
                        
                        
                        
                        
                    
                
                
                
                
            
                
            </div>
        );
    }
}

export default Rank;