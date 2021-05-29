import { useHistory } from "react-router";
import styled from "styled-components";

const NotFound = () => {
  const history = useHistory();
  return (
    <DrinkDetails>
      <h2>Oops! This page is empty</h2>
      <p>Just like your glass.</p>
      <p>Go back and fill it with a great recipe!</p>
      <img src="/img/404notfound.jpg" alt="404 page not found"></img>
      <button onClick={() => history.push("./")}>Back Home</button>
    </DrinkDetails>
  );
};

const DrinkDetails = styled.div`
  h2 {
    font-size: 20px;
    color: #f1356d;
    padding: 5px;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }

  img {
    width: 150px;
    height: 300px;
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 50px;
  }

  button {
    background-color: #f1356d;
    color: #fff;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    display: block;
    margin: auto;
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
    transition: all ease-out 0.1s;
    &:hover {
      filter: brightness(1.2);
      transform: translateY(2px);
      font-weight: 600;
    }
  }
`;

export default NotFound;
