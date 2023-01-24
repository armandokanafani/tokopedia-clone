import '../assets/scss/components/navbar.scss'

const Navbar = () => {
    return (
        <>
            <div className='navbar-wrapper'>
                <nav className='navbar-container'>
                    <div className=''>
                        <img className='navbar-logo' alt='tokopedia-logo' src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"/>
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
                        <div className='navbar-icon-mobile'>
                            <i>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
                                    <path d="M20 4.25H4A1.76 1.76 0 0 0 2.25 6v12A1.76 1.76 0 0 0 4 19.75h16A1.76 1.76 0 0 0 21.75 18V6A1.76 1.76 0 0 0 20 4.25Zm-1 1.5-6.09 4.63a1.32 1.32 0 0 1-1.51 0L5.16 5.75H19Zm1 12.5H4a.25.25 0 0 1-.25-.25V6.57l6.71 5a2.86 2.86 0 0 0 3.29 0l6.5-4.94V18a.25.25 0 0 1-.25.25Z"></path>
                                </svg>
                            </i>
                            <i>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
                                    <path d="M21 17.25h-1.25V11a7.76 7.76 0 0 0-6.06-7.56 2.12 2.12 0 0 0 .06-.44 1.75 1.75 0 0 0-3.5 0c.005.148.025.296.06.44A7.76 7.76 0 0 0 4.25 11v6.25H3a.75.75 0 1 0 0 1.5h5.25V19a3.75 3.75 0 0 0 7.5 0v-.25H21a.75.75 0 1 0 0-1.5ZM14.25 19a2.25 2.25 0 0 1-4.5 0v-.25h4.5V19Zm.75-1.75H5.75V11a6.25 6.25 0 0 1 12.5 0v6.25H15Z"></path>
                                </svg>
                            </i>
                            <i>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
                                    <path d="M21.68 7.56a1.908 1.908 0 0 0-.35-.66 1.71 1.71 0 0 0-.58-.46 1.85 1.85 0 0 0-.75-.19H6.17a1.82 1.82 0 0 0-.57.13l-.06-.3a1.91 1.91 0 0 0-2-1.83h-1a.75.75 0 0 0 0 1.5h1c.42 0 .49.07.57.59l1.09 5.54.54 2.78A3.86 3.86 0 0 0 7 16.89a3.76 3.76 0 0 0 1.54.75A2 2 0 0 0 8 19a2 2 0 0 0 4 0 2 2 0 0 0-.46-1.25h2.88a2 2 0 1 0 3.06-.12 3.8 3.8 0 0 0 1.46-.7 3.71 3.71 0 0 0 1.32-2.1l1.47-6.46V8.3a1.68 1.68 0 0 0-.05-.74Zm-2.89 6.93a2.24 2.24 0 0 1-2.2 1.76H9.38a2.25 2.25 0 0 1-2.19-1.82L6 8.1A.62.62 0 0 1 6 8v-.14a.39.39 0 0 1 .1-.08H20a.28.28 0 0 1 .13 0 .389.389 0 0 1 .1.08c.03.03.05.069.06.11a.405.405 0 0 1 0 .11l-1.5 6.41Z"></path>
                                </svg>
                            </i>
                            <i>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.75h14a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5Zm14 4.5H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-14 6h14a.75.75 0 1 1 0 1.5H5a.75.75 0 1 1 0-1.5Z"></path>
                                </svg>
                            </i>
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