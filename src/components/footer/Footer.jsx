import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer bd-grid">
                <h5 className="footerTitle">The Tiger King</h5>
                <p className="footerDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem aliquid laudantium quam, eum fugiat ad rem veritatis distinctio fugit minus animi! Iste provident magnam eos, illo culpa laborum nostrum!</p>
                <div className="footerSocial">
                    <a href="https://www.linkedin.com/in/mingzhuwan/" target="_blank" rel="noopener noreferrer" className="footerSocialLink"><i className='bx bxl-linkedin' ></i></a>
                    <a href="https://github.com/Mingzhu666/mz_project_one" target="_blank" rel="noopener noreferrer" className="footerSocialLink"><i className='bx bxl-github' ></i></a>
                    <a href="https://www.youtube.com/channel/UClSAVwwl15qFnuz9A2YZzLw" target="_blank" rel="noopener noreferrer" className="footerSocialLink"><i className='bx bxl-youtube' ></i></a>
                </div>
                <p className="footerCopy">All right reserved by Mingzhu Wan - 2021</p>
            </div>
        </div>
    )
}
