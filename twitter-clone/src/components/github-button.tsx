import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import styled from "styled-components"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function GitHubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return <Button onClick={onClick}>
    <Logo src="/github-logo.svg" /> Continue with GitHub
  </Button>
}

const Button = styled.button`
  margin-top: 50px;
  background-color: #fff;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 100%;
  cursor: pointer;
`

const Logo = styled.img`
  height: 25px;
`