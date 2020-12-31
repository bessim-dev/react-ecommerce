import React, { useState } from "react";
import { connect } from "react-redux";
import {
  UserPhotoContainer,
  UserIconContainer,
  UserNameContainer,
  ButtonContainer,
  Name,
} from "./userIcon.style";
import { selectCurrentUser } from "../Redux/User/userSelector";
import { createStructuredSelector } from "reselect";
import { SignOutStart } from "../Redux/User/UserAction";
import { toggleUserDropDown } from "../Redux/User/UserAction";
const UserIcon = ({ currentUser, signOutStart, toggleUserDropDown }) => {
  if (currentUser) {
    return (
      <UserIconContainer>
        <UserPhotoContainer>
          <img
            src={currentUser.photoURL}
            alt="user photo"
            style={{ width: "100%", height: "100%" }}
          />
        </UserPhotoContainer>
        <UserNameContainer>
          <Name>{currentUser.displayName}</Name>
          <ButtonContainer onClick={toggleUserDropDown}>
            <svg
              width="45"
              height="22"
              viewBox="0 0 45 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="8.66272"
                y1="7.25113"
                x2="23.6401"
                y2="20.5055"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="22.2929"
                y1="20.5061"
                x2="36.435"
                y2="6.36395"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </ButtonContainer>
        </UserNameContainer>
      </UserIconContainer>
    );
  } else {
    return null;
  }
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(SignOutStart()),
  toggleUserDropDown: () => dispatch(toggleUserDropDown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
