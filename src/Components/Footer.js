import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer_container'>
                    <div className="footer_top">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '95%' }}>
                            <ul className='footer_list-item'>
                                <a href="" className='footer_list_link'> Company </a>
                            </ul>
                            <ul className='footer_list-item'>
                                <a href="" className='footer_list_link'> About us </a>
                            </ul>
                            <ul className='footer_list-item'>
                                <a href="" className='footer_list_link'> Contact us </a>
                            </ul>
                            <ul className='footer_list-item'>
                                <a href="" className='footer_list_link'> Products </a>
                            </ul>
                        </div>

                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer