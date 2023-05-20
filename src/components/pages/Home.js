import {Container, Row, Col} from 'react-bootstrap';
import lakechloe from '../../media/lakechloe.jpg';

export default function Home() {
    return (
        <Container>
            <div className='main'>
            <Row>
                <h1>Hi everyone, my name is Chloe Foor</h1>
            </Row>

            <Row>
                <Col xs={12} md={3}>
                    <img src={lakechloe} alt="Chloe Foor" height="300" />
                </Col>
                <Col xs={12} md={9}>

                    <p>
                        I am a current senior attending UW-Madison where I am majoring in History, Computer Science, and Information Science.
                        I will be graduating in May of 2024. After graduation, I hope to pursue a career in the emerging field of digital history.
                        I am passionate about ensuring the accessibility of historical information, whether this be online or in person.
                    </p>
                    <p>
                        My historical interests include precolonial and colonial Latin America. I will be furthering this interest through my
                        Senior Honor's Thesis on the roles of gender, race, caste, and religion during the Inquisition in colonial Nueva Granada,
                        or modern-day Colombia. For my thesis, I have been awarded the competitive Hilldale Undergraduate Research Fellowship, as 
                        well as a Senior Thesis Summer Research Grant through the Honor's program at UW.
                    </p>
                    
                    <p>
                        Throughout my time at UW-Madison, I have been involved in a variety of organizations, both in the field of computer science, 
                        and the field of history. These are highlighted under the "School Work" and "Career History" tabs above. 
                        I have also been recognized for my acadmic achievements through multiple awards and honors, also highlighted above.           
                    </p>
                </Col>
            </Row>

            <Row>

                <p>
                    Feel free to take a look around my website :)
                </p>
            </Row>
            </div>

            <Row className="footer">
                <p> © 2023 Chloe Foor </p>
            </Row>
        </Container>
    );
}