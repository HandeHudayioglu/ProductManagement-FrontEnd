import React from 'react'
import { Menu,Image, Dropdown } from 'semantic-ui-react'

function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.webtech360.com%2Fdetail%2Fen-iyi-avatar-olarak-sevimli-avatar-resimleri-koleksiyonu-130160.html&psig=AOvVaw0yi_Y8VR96HUopoYEzvF2T&ust=1667589102183000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDEw9XbkvsCFQAAAAAdAAAAABAD"/>
            <Dropdown pointing="top left" text="Hande">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick = {props.signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}

export default SignedIn