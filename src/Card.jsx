import mypic from './assets/images.jpg'

function Card(props){
  return(
    <div className="card">

      <img src={mypic} alt="my image" />
      <h2>Name: {props.name}</h2>
      <p>Age : {props.age}</p>
      <p>Enrolled: {props.isEnrolled ? 'yes': 'no'}</p>
    </div>

  );
}
Card.defaultprops={
  name:'hawi',
  age:'21',
  enrolled:'yes'
}
export default Card