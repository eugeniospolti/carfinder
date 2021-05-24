import { CardList } from "../../../components/Card";
import { ICar } from "../../../core/models/car.model";
import { getRandomInt } from '../../../core/helpers';

const imageUrls = [
    'https://www.revistafullpower.com.br/wp-content/uploads/2019/03/fe01.jpg',
    'https://imagens.publico.pt/imagens.aspx/78109?tp=EI&db=IMAGES&w=960',
    'https://1.bp.blogspot.com/-P9rC1xvhfEQ/XacT8OWSDyI/AAAAAAAADYM/8PlJ4po3yqYzzjMWnGHAsKvTBpKPvNXAQCLcBGAsYHQ/s1600/64037-toyota-g1-hero-2-rgb.jpg',
    'https://www.razaoautomovel.com/wp-content/uploads/2020/09/Lamborghini-Aventador-S-1_925x520_acf_cropped.jpg',
    'https://www.bmw.pt/content/dam/bmw/common/all-models/m-series/x6m/2019/inspire/bmw-x6-m-inspire-mg-competition-desktop-02.jpg'
];


export default function Listing(props) {
    
    const cards = props.cars.map((car:ICar) => {  return { name: car.model_name, imageURL: imageUrls[getRandomInt(0,4)], price: car.monthlyPrice, isNew: car.availableDate , rating: getRandomInt(0,5) , numReviews: getRandomInt(0,100) }});
    return (
        <CardList cards={cards}></CardList>
    )
}
