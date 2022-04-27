import './Card.css'

function Card(props) {
    if (props.qnt != 0 && props.name != "" && props.name != "Choose a cake"){
        return ( 
            <div className="container">
                <p>{props.time}</p>
                <p>{props.name}</p>
                <p>Quantidade: {props.qnt}</p>
            </div>
        );
}
}
 
export default Card;
