import Styled from "styled-components";

export const DropDown = Styled.div`
   height:fit-content;
   width:20rem;
   
   display:flex;
   flex-direction:column;
   position:fixed;
 
   left:83%;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 background-color:white;
   z-index:2000;
   text-align:center;
 p:hover {
  color: #002651;
  cursor:pointer;
  font-weight:bold;
}
a{
     color: #002651;
}
}
`;
export const SearchBar = Styled.input`

width:40vw;
padding:1.5%;
border:2px solid grey;
border-radius:5px;

`