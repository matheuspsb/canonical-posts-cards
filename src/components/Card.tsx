import '../style.scss';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ title, author, image, date, type }) => {
    return (
        <div className="col-4">
            <hr className="p-rule--highlight"/>
            <div className="p-card--highlighted">
                <div className="p-card__content">
                    <h5 style={{ color: 'black', fontWeight: 'normal'}}>CLOUD AND SERVER</h5>
                    <hr className="u-sv2" />  
                    <img className="p-card__image" alt={`${title}`} src={image} />
                    
                        <h3 style={{ fontWeight: 'initial', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <a href="#">{title}</a>
                        </h3>
                    <div>
                        By <a href="#">{author}</a> on {date}
                    </div>
                    <hr className="u-sv2" />
                    <p>{type}</p>
                </div>
            </div>
        </div>
    )
}