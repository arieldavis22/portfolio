import React from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'

const Social = () => {
    return (  
        <div className='container'>
            Social Media
            <div>
                <Menu text>
                    <Menu.Item link as='a' href='https://github.com/arieldavis22' target="_blank">
                        <Header as='h2'>
                            <Icon.Group size='large'>
                            <Icon link name='github' />
                            </Icon.Group>
                            Visit My Github
                        </Header>
                    </Menu.Item>
                    <Menu.Item link as='a' href='https://www.linkedin.com/in/arieladavis/' target="_blank">
                        <Header as='h2'>
                            <Icon.Group size='large'>
                            <Icon link name='linkedin' />
                            </Icon.Group>
                            Connect With Me On Linkedin
                        </Header>
                    </Menu.Item>
                    <Menu.Item link as='a' href='https://twitter.com/RelDvs' target="_blank">
                        <Header as='h2'>
                            <Icon.Group size='large'>
                            <Icon link name='twitter' />
                            </Icon.Group>
                            Follow Me On Twitter
                        </Header>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}
//github
//linkedin
//twitter

export default Social;