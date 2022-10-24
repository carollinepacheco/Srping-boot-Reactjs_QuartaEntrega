import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header id ="header">
                <nav className="navbar navbar-expand-lg">
                    <div className ="container-fluid">
                        <a href="https://abre.ai/ctour" target="_blank" rel="noopener noreferrer" className="navbar-brand">
                            Ctour Viagens
                        </a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent