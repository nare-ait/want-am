import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='footer'>
                <button className='install'>Բեռնել Ավելին</button>

                <div className='des'>
                    <div className='beauty'>
                        <img src="https://want.am/banner/1.png" alt="" />
                        <p>Красиво упакуем подарок</p>
                    </div>
                    <div className='beauty'>
                        <img src="https://want.am/banner/2.png" alt="" />
                        <p>Красиво упакуем подарок</p>
                    </div>
                    <div className='beauty'>
                        <img src="https://want.am/banner/3.png" alt="" />
                        <p>Красиво упакуем подарок</p>
                    </div>
                    <div className='beauty'>
                        <img src="https://want.am/banner/4.png" alt="" />
                        <p>Красиво упакуем подарок</p>
                    </div>
                    <div className='beauty'>
                        <img src="https://want.am/banner/5.png" alt="" />
                        <p>Красиво упакуем подарок</p>
                    </div>
                </div>

                <p className='p3' >ԱՄԵՆԱՑԱՆԿԱԼԻ</p>
                <div className='rated'>
                    <div className='rateds'>
                        <img className='rated-img' src="https://want.am/images/thumbnails/400/400/detailed/2/HTB15qwGHFXXXXXqXFXXq6xXFXXXU.jpg.jpg" alt="image" />
                        <p className='rated-p'>USB ֆլեշ կրիչ կիթառի տեսքով<br />3900դ</p>
                    </div>
                    <div className='rateds'>
                        <img className='rated-img' src="https://want.am/images/thumbnails/600/600/detailed/3/HTB1Hv5KmFmWBuNjSspdq6zugXXan.jpg.jpg" alt="image" />
                        <p className='rated-p'>Նոթատետր՝ կոդային փականով<br />10900դ</p>
                    </div>
                    <div className='rateds'>
                        <img className='rated-img' src="https://want.am/images/thumbnails/400/400/detailed/6/p3.png.jpg" alt="image" />
                        <p className='rated-p'>Լուսարձակվող քարտեզ<br />9900դ</p>
                    </div>
                    <div className='rateds'>
                        <img className='rated-img' src="https://want.am/images/thumbnails/600/600/detailed/6/%D0%9A%D0%BE%D0%BF%D0%B8%D1%8F_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-03_%D0%B2_18.jpeg.jpg" alt="image" />
                        <p className='rated-p'>Սմարթ թերմոս<br />6500դ</p>
                    </div>
                </div>
            </div>


            <footer className="site-footer">
                <div className="footer-row subscribe">
                    <p>ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ ԶԵՂՉԵՐԻ</p>
                    <div>
                       <input type="email" placeholder="Էլ. փոստ" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer-row contact">
                    <p className='can'>Կարող եք վճարել սուրհանդակին</p>
                    <a href="https://want.am/" className="footer-logo">
                    <   img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDIgTyR2ky_LySKWU_hyaUrnj4DOKfj24cxIm5-WvP0lyZP1CIHkxhW7hP0ZvDlfOxcw&usqp=CAU" alt="Want.am Logo" />
                    </a>
                    <p>phone`<br />
                        094-092-092</p>
                </div>
                <div className="footer-row info">
                    <p>Աշխատում ենք 10:00-ից մինչեւ 18:00</p>
                    <p>© 2017-2024 Want.am</p>
                </div>
            </footer>

        </>
    )
}
export default Footer;
