import styled from "styled-components";
export const Nav = styled.nav`
  padding: 8px 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 15px;
`;
export const NavInner = styled.ul`
  display: flex;
  justify-content: end;
  gap: 30px;
  margin: 0;
`;
export const NavItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 5px;
  transition: 0.5s ease;
  &:hover {
    background-color: white;
  }
`;

// cards styles
export const AddBtn = styled.button`
  appearance: none;
  background-color: #ffffff;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: end;
  margin: 20px;
  margin-left: 80vw;
  font-family: Clarkson, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: #ebebeb;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #ffffff;
  }

  & span {
    z-index: 1;
    position: relative;
  }
`;
export const Cards = styled.div`
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;
export const Buttons = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  gap: 10px;
  opacity: 1;
  visibility: visible;
  transition: 0.7s ease;
  z-index: 999;
  svg {
    color: #28666e;
    font-size: 30px;
  }
`;
export const Card = styled.div`
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  &:has(:hover, :focus) {
    --img-scale: 1.1;
    --title-color: #28666e;
    --link-icon-translate: 0;
    --link-icon-opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  &:not(:hover) ${Buttons} {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
`;
export const Image = styled.img`
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
`;

export const EditBtn = styled.div`
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
export const DeleteBtn = styled.div`
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
export const CardBody = styled.div`
  padding: 24px;
`;
export const Header2 = styled.h2`
  margin: 0 0 18px 0;
  font-family: "Bebas Neue", cursive;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: var(--title-color);
  transition: color 0.3s ease-out;
`;
export const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
  cursor: pointer;
  &:focus {
    outline: 1px dotted #28666e;
  }
  &:after {
    position: absolute;
    inset-block: 0;
    inset-inline: 0;
    cursor: default;
    content: "";
  }
`;

export const Icon = styled.svg`
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
`;
export const Span = styled.span`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const AddModal = styled.div`
  /* position: relative; */
`;
export const AddModalInner = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 60%;
  min-height: 200px;
  max-width: 800px;
  background-color: #fff;
  z-index: 4;
  margin: auto;
  border-radius: 5px;
  padding: 10px;
`;
export const BlackScreen = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;
export const CloseModal = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  cursor: pointer;
  svg {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
`;
export const FormGroup = styled.div`
  display: block;
  width: 70%;
  margin-top: 30px;
`;
export const Label = styled.label`
  margin: 4px 0;
  display: block;
  font-size: 14px;
`;
export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  height: 30px;
  outline: none;
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: end;
  margin: auto;
  margin-right: 10px;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  background-color: gray;
`;
export const ImageUpload = styled.div``;
export const ImageUploadInput = styled.input`
  display: none;
`;

export const ImageUploadBtn = styled.button`
  border: none;
  padding: 10px 20px;
  width: 100%;
  display: block;
  cursor: pointer;
  background-color: gray;
  color: white;
`;
