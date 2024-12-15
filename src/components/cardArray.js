import Card from './card';


const cardArray = ({robots}) => {
   const cardComponent = robots.map((user, i) => {
      return (
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        )
      }
    )
  return (
    <div>
      {cardComponent}
    </div>
  ) 
}
  
export default cardArray;