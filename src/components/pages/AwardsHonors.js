import hilldalepic from '../../media/hilldaleceremony.JPG';
export default function AwardsHonors (){
    return (
        <div>
            <h1>Awards and Honors</h1>

            <h2>General Awards</h2>

            <img src={hilldalepic} alt="Hilldale Award Ceremony" width='30%'/>
            
            <p>
                In anticipation of my senior honor's thesis in history, I have been awarded the prestegious Hilldale Undergraduate 
                Research Fellowship.
            </p>
            <p>
                I have also been awarded a Senior Thesis Summer Research Grant through the Honor's program at UW-Madison for my senior honor's thesis.
            </p>
            <p>
                Outside of these thesis-specific awards, I was awarded the Thomas W. Parker Scholarship in 2021 and the Jay C. Halls Scholarship in 2023.
            </p>

            <h2>History Department Awards</h2>
            <h3>Writing Prizes</h3>
            <p>
                Every year, the History Department gives out awards for the best undergraduate papers written in history courses. 
                I have been awarded with the following prizes:
                <ul>
                    <li>
                        The 2023 Civil Resistance Prize for my paper on combating Catholic hegemony in the Phillippines through Folk Catholicism, posted on 
                        The Nonviolence Project website <a href="https://thenonviolenceproject.wisc.edu/2023/05/22/deconstructing-folk-catholicism/">here.</a>
                    </li>
                    <li>
                        The 2022 William F. Allen Prize for my paper on the alleged atheism of Christopher Marlowe examined through his play <i>Doctor Faustus</i>.
                    </li>
                </ul>
            </p>

            <h3>Scholarships</h3>
            <p>
                The History Department also gives out scholarships to outstanding history majors. In 2023, I was presented with the Orson S. Morse Scholarship after 
                being nominated by Dr. Marcella Hayes. I was also awarded the Department of History Summer Internship Funding for my internship at the Dane County Historical Society.
            </p>



            <h2>Dean's List</h2>
            <p>
                To be recognized on the Dean's List, a student must have a GPA of 3.600 if the student is a freshman or sophomore, or a GPA 
                of 3.850 if the student is a junior or senior.
                I have been on the Dean's List for the College of Letters and Science for the following semesters:
                <ul>
                    <li>Spring 2023</li>
                    <li>Spring 2022</li>
                    <li>Fall 2021</li>
                    <li>Spring 2021</li>
                    <li>Fall 2020</li>
                </ul>
            </p>
        </div>
    );
}