import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Delicious Handrawn', cursive;
}
`;

export const Card = styled.div`
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc4e765d-760d-45dc-9f31-58d1bd0eb872/dc4z89w-641684e2-15ca-497b-b5ca-c331e7e055b6.png/v1/fill/w_1024,h_1024,strp/rick_and_morty_portal_1___free_download_by_loaf_of_muffin_dc4z89w-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZjNGU3NjVkLTc2MGQtNDVkYy05ZjMxLTU4ZDFiZDBlYjg3MlwvZGM0ejg5dy02NDE2ODRlMi0xNWNhLTQ5N2ItYjVjYS1jMzMxZTdlMDU1YjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5PeSWIoX1cFhDXi8nbPstLGpqjyYC0D9r5rBPrjKbh0");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 100%;

  img {
    width: 23vw;
    height: 38vh;
    border-radius: 100%;
  }
  p {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    opacity: 60%;
    transition: 1.2s;
    transform: scale(110%);
  }
`;

export const main = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
`;

export const title = styled.h1`
  color: whitesmoke;
  display: flex;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80");
`;
