import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='am'>
                    <p>Am ^ </p>
                </div>
                <div className='araqum'>
                    <p>Առաքում և Կոնտակտներ</p>
                </div>
                <div className='search'>
                    <p>Ապրանքի որոնում </p>
                </div>
            </div>
            <div className='logo-row'>
                <a href="https://want.am/" className="wa-new-logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDIgTyR2ky_LySKWU_hyaUrnj4DOKfj24cxIm5-WvP0lyZP1CIHkxhW7hP0ZvDlfOxcw&usqp=CAU" alt="Want.am Logo" />
                </a>
            </div>
            <div className='purple'>
                <p className='games'>ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ</p>
                <a href="https://hobby.am/product-category/boardgames/" className='games'><p>Սեղանի խաղեր</p></a>
                <a href="https://want.am/hobbi/optika/" className='games'><p>ՕՊՏԻԿԱ</p></a>
                <a href="https://want.am/for-woman/50/" className='games'><p>ԿԱՆԱՆՑ ԹՈՓ 50</p></a>
                <a href="https://want.am/for-man/50/" className='games'><p>ՏՂԱՄԱՐԴԿԱՆՑ ԹՈՓ 50</p></a>
                <a href="https://want.am/office/" className='games'><p>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p></a>
            </div>
            <div className='ouradress'>
                <div className='text-container'>
                    <p className='title'>Մեր Հասցեն</p>
                    <p className='description'>Մեննք ունենք խանութ-սրահ Երևանի կենտրոնում։Հրավիրում ենք <br></br> գնումների Հյուսիսային պողոտա 6/2 հասցում <br></br>
                        գտնվող Տաշիր Սթրիթ առրտրի կենտրոն՝-1 հարկ</p>
                </div>
                <img src="https://want.am/images/promo/14/111.jpeg" alt="image" className='img-adress'/>
            </div>
            <div className='keter'>
                <p className='ket'>.</p>
                <p className='ket'>.</p>
                <p className='ket'>.</p>
                <p className='ket'>.</p>
            </div>
        </>
    );
}

export default Header;
