import './ButtonComponent.css';

export default function ButtonComponent({ text }) {
    return (
        <button className='botones-header'>{text}</button>
    );
}