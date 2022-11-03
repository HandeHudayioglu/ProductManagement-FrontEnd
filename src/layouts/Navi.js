import React,{useState} from "react";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary"
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

function Navi() {
  const [isAuthenticated, setIsAuthendicated] = useState(true);


  function handleSignOut(){
    setIsAuthendicated(false);
  }

  function handleSignIn(){
    setIsAuthendicated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>   {/** containerın içine aldığın alanlar sayfada birbirine biraz daha yaklaşıyor mesela burda navbar da yazan home message CartSummary dediğimiz "sepet" kısmı ve signup yazan yerler sayfaya çok yayılmaması,sınırlandırma için containerin içine aldık */}
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>  {/** sepet kısmı */}   
            {isAuthenticated? <SignedIn  signOut={handleSignOut}/> :  <SignedOut  signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
