import styled from "styled-components";

export const UserIconContainer = styled.div`
  margin-top: 8px;
  margin-right: 10px;
  height: 60px;
  width: 250px;
  display: flex;
  align-items: center;
`;
export const UserPhotoContainer = styled.div`
  height: 55px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid gray;
  overflow: hidden;
  z-index: 2;
`;
export const UserNameContainer = styled.div`
  margin-left: -30px;
  z-index: 1;
  height: 60%;
  width: 100%;
  border-radius: 20px;
  background-color: #626767;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const Name = styled.h4`
  margin-left: 30px;
  padding: 0;
  font-size: 25px;
  color: whitesmoke;
  text-align: center;
`;
export const ButtonContainer = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
