import React from 'react';
import  MenuItem  from "../Menu-item/Menu-item";
import "./Directory.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import selectSections from '../Redux/directory/directorySelector';
  
const Directory = ({sections}) => { 
        return ( 
            <div className="directory-menu">
            {
                sections.map(({id,...rest}) => (
                    <MenuItem key={id} {...rest}/>
                ))
            }
            </div> 
         );
    }
 const mapStateToProps = createStructuredSelector({
   sections : selectSections,
 })
export default connect(mapStateToProps)(Directory);