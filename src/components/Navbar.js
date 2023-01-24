import '../assets/scss/components/navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className='navbar-wrapper'>
                <nav className='navbar-container'>
                    <div className=''>
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"/>
                    </div>
                    <div className='kategori-button-container'>
                        <div className='button-kategori'>
                            <div className='kategori'>Kategori</div>
                        </div>
                    </div>
                    <div className='search-bar-container'>
                        <div className='search-bar-container-2'>
                            <input type='text' placeholder='Cari di Tokopedia'/>
                            <button className='button-search'></button>
                        </div>
                    </div>
                    <div className='navbar-icon-container'>
                        <div className='navbar-icon'>
                            <i className='navbar-icon-1'></i>
                        </div>
                    </div>
                    <div className='navbar-break-line'></div>
                    <div className='navbar-login-container'>
                        <button className='button-login-1'>Masuk</button>
                        <button className='button-register-1'>Daftar</button>
                    </div>
                </nav>
                <div className='recommendation-bar-container'>
                    <p>Rog Phone</p>
                    <p>Ps Vita</p>
                    <p>Iphone 12 Pro Ibox</p>
                    <p>Asus Vivobook</p>
                    <p>Iphone 14 Pro Max Ibox</p>
                    <p>Meja Komputer</p>
                </div>
                <div className='direction-container'>
                    <svg  viewBox="0 0 24 24" width="14" height="14">
                        <path  d="M9.02 2.809A7.67 7.67 0 0112 2.24 7.67 7.67 0 0119.75 10c0 7.264-6.896 11.372-7.365 11.65a.81.81 0 01-.755.01l-.015-.01C11.146 21.373 4.25 17.265 4.25 10a7.67 7.67 0 014.77-7.191zM5.75 10c0 5.58 4.85 9.18 6.25 10.11 1.4-.93 6.25-4.55 6.25-10.11A6.188 6.188 0 0012 3.74 6.19 6.19 0 005.75 10zm4.168-3.129A3.75 3.75 0 0112 6.24 3.76 3.76 0 0115.75 10a3.75 3.75 0 11-5.832-3.129zm.83 4.99a2.25 2.25 0 102.503-3.74 2.25 2.25 0 00-2.502 3.74z"></path>
                    </svg>
                    <div className='direction-text-container'>
                        <p>Dikirim ke</p>
                        <p><b>Jakarta Pusat</b></p>
                        <svg  viewBox="0 0 24 24" width="14" height="14">
                            <path d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar