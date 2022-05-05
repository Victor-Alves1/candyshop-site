import Strawberry from './img/strawberry-cake.jpg';
import Chocolate from './img/chocolate-cake.jpg';
import Wedding from './img/white-cake-flower.jpg';
import Lemon from './img/lemon-cake.jpg';

import './candyimg.css'


function Candyimg(props) {
    if (props.qnt != 0 && props.name != "" && props.name != "Choose a cake"){
        switch (props.name){
            case 'Strawberry cake': 
                return (
                    <div className='inline'>
                        <img className='candy-img' src={Strawberry} alt="" />
                        <p>{props.qnt}</p>
                    </div>
                );
            case 'Chocolate cake':
                return (
                    <div className='inline'>
                        <img className='candy-img' src={Chocolate} alt="" />
                        <p>{props.qnt}</p>
                    </div>
                );
            case 'Wedding cake':
                return (
                    <div className='inline'>
                        <img className='candy-img' src={Wedding} alt="" />
                        <p>{props.qnt}</p>
                    </div>
                );
                case 'Lemon cake': 
                return (
                    <div className='inline'>
                        <img className='candy-img' src={Lemon} alt="" />
                        <p>{props.qnt}</p>
                    </div>
                );
            default:
                return (
                    <p>Imagem não encontrada</p>
                )
    }
}
}
 
export default Candyimg;