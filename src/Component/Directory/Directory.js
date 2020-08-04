import React from 'react';
import  MenuItem  from "../Menu-item/Menu-item";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import selectSections from '../Redux/directory/directorySelector';
import { DirectoryMenuContainer } from './Directory.style';
  
const Directory = ({sections}) => { 
        return ( 
            <DirectoryMenuContainer>
            {
                sections.map(({id,...rest}) => (
                    <MenuItem key={id} {...rest}/>
                ))
            }
            </DirectoryMenuContainer> 
         );
    }
 const mapStateToProps = createStructuredSelector({
   sections : selectSections,
 })
export default connect(mapStateToProps)(Directory);