import Profilepic from './assets/Profile.jpg'

function Card() {
 return(
  <div className="Container">
  <img className="pic" src={Profilepic} alt="Profile picture"></img>
  <h2 className="title">Navitha</h2>
  <p className="text">Myself Navitha, i'm working on javascript and  react for now exploring on these topics</p>
  </div>
 );
}

export default Card
