import master from '../components/assets/yoda.svg'
const Footer =()=>{

    return (
        <div className="section__footer">
            <div className="footer__info">
                <a href='https://github.com/PZhukovski' target="_blank" className='text-decoration link' rel="noopener noreferrer" > Coded by Polina Zhukovski</a>
                <img src={master} alt='master'/>
            </div>
        </div>
    )
}
export default Footer