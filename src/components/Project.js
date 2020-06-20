import React from 'react'
import { Card, Image } from 'semantic-ui-react'
const Project = () => {
    return (  
        <div>
            <Card>
                <Image src={require('../img/dl_logo.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Dev Learning</Card.Header>
                    <Card.Meta>May 2020</Card.Meta>
                    <Card.Description>
                        An educational coding platform geared and structured for high school students.
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Image src={require('../img/gt_logo.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Gem Trader</Card.Header>
                    <Card.Meta>March 2020</Card.Meta>
                    <Card.Description>
                        An interactive game that mimics the concept of cryptocurrency.
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Image src={require('../img/fp_logo.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Forcast Planner</Card.Header>
                    <Card.Meta>April 2020</Card.Meta>
                    <Card.Description>
                        A calendar application for planning based off of weather reports.
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
}

export default Project;