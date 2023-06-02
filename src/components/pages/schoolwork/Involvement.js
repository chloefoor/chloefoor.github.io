import symposium from '../../../media/patsymposium.JPG';
import program from '../../../media/patprogram.JPG';
import { Container, Row, Col } from 'react-bootstrap';

export default function Involvement() {
    return (
        <Container>
            <div>
                <h1>Involvement</h1>
                <p>
                    In additon to my coursework, I have been involved in a number of extracurricular activities during my time at UW-Madison.
                </p>

                <h2>Phi Alpha Theta</h2>
                <p>
                    Phi Alpha Theta is a national history honors society. I have been a member of the UW-Madison chapter since 2022.
                    In January of 2023, I became the Social Event Coordinator of the UW-Madison chapter. In this role, I am responsible for
                    planning and executing social events for chapter members to foster a sense of community among history enthusiasts on campus.
                </p>
                <h3>Historical Research Symposium</h3>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={program} alt='2023 Symposium Program' width='100%' />
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={symposium} alt='2023 Symposium' width='100%' />
                    </Col>
                </Row>
                <p>
                    With the support of the rest of the PAT Board, I organized the first ever Historical Research Symposium at UW-Madison, giving
                    undergraduate history students of all levels the opportunity to present their original research to their peers and professors.
                    We had a turnout of 19 presenters, who spoke on topics ranging from the history of queer students on the
                    UW-Madison campus to the history of CIA Covert Operations in Indonesia.
                </p>
                <p>
                    To prepare for the symposium, we recieved a grant from the History Department to cover the cost of food and beverages for the event.
                    The event took place on April 22, 2023 in Memorial Union. 
                    To read more about the event and its presenters, click <a href='https://phialphathetauw.wordpress.com/2023/04/09/2023-undergraduate-research-symposium/'>here.</a> I am excited for the next symposium in 2024!
                </p>

                <h3>Monthly Trivia</h3>
                <p>
                    I have organized monthly trivia nights for PAT members to get to know each other and have fun.
                    The first trivia event took place in February, and doubled as the semester kickoff event.
                    To read more about it, click <a href='https://phialphathetauw.wordpress.com/2023/02/19/spring-2023-kickoff-trivia/'>here.</a>
                </p>
                <p>
                    In March, I organized a Women's History Month themed trivia night. To read more about it, click <a href='https://phialphathetauw.wordpress.com/2023/03/28/womens-history-month-trivia/'>here.</a>
                </p>
                <h3>Weekly  Study Jams</h3>
                <p>
                    To foster academic excellence among club members, I also hosted weekly "study jams" during the Spring 2023 semester at various
                    campus libraries. These were a huge success, and we recieved great feedback on them from the members who attended.
                </p>

                <h2>Euchre Club</h2>
                <p>
                    I have been a regular member of the UW-Madison Euchre Club since 2021 as a way to meet new people after pandemic restrictions
                    lifted. Beginning in January of 2023, I have acted as the club's treasurer, keeping track of the club's finances and the members' dues.
                </p>
            </div>
        </Container>
    );
}