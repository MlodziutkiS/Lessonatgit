import './InfoBox.css';

function InfoBox(){

    const date=new Date()
    const spaced=[date.getHours(),date.getMinutes(),date.getSeconds()];

    return <div className="wrapper">
        {spaced.map((val,i) => { return <p key={i}> {i}. {val}</p>})}
    </div>

}
export default InfoBox;