import '../assets/scss/components/mobileNavbar.scss'

const MobileNavbar = () => {
    return (
        <>
            <div className="mobile-navbar-wrapper">
                <nav className="mobile-navbar-container">
                    <div className="mobile-navbar-icon-container">
                        <div>
                            <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/20f068ca.svg" alt="home"/>
                        </div>
                        <span>Home</span>
                    </div>
                    <div className="mobile-navbar-icon-container">
                        <div>
                            <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/66eb4811.svg" alt="feed"/>
                        </div>
                        <span>Feed</span>
                    </div>
                    <div className="mobile-navbar-icon-container">
                        <div>
                            <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/6a81d896.svg" alt="os"/>
                        </div>
                        <span>Official Store</span>
                    </div>
                    <div className="mobile-navbar-icon-container">
                        <div>
                            <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/eb6fad37.svg" alt="wishlist"/>
                        </div>
                        <span>Wishlist</span>
                    </div>
                    <div className="mobile-navbar-icon-container">
                        <div>
                            <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/18f3fc93.svg" alt="transaksi"/>
                        </div>
                        <span>Transaksi</span>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MobileNavbar