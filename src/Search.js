
import './Search.css';

export default function Search(){
    return(
        <>

    
    <div className="header">
        <div className="header-bg"></div>
        <div className="header-actions">
        <div className='prevNext'>
                <button type='button' className='fa fas fa-chevron-left'></button>
                <button type='button' className='fa fas fa-chevron-right'></button>
            </div>
            <div className="header--search input-group has-left-icon ">
                <span className="left-icon lni lni-search"></span>
                <input type="text" id="search" name="search" className="input" placeholder="What do you want to listen to?"/>
               
            </div>
        </div>
        <div className="user">
            <button className="user-button">
                <span className="user-icon"><i class="lni-user"></i></span>
                </button>
        </div>
    </div>
    <main>

        <div className="section">
            <h2 className="title">Browse all</h2>
            <div className="section--body">
                <div className="section--body--item category--item"  style={{backgroundColor:'fuchsia'}}>
                    <a href="#">
                        <h3>Music</h3>
                        <img src="/Images/2.png"/>
                    </a>
                </div>

                <div className="section--body--item category--item" style={{backgroundColor:'green'}}>
                    <a href="#">
                        <h3>Podcast</h3>
                        <img src="/Images/4.png" />
                    </a>
                </div>

                <div className="section--body--item category--item" style={{backgroundColor:'blueviolet'}}>
                    <a href="#">
                        <h3>Live Events</h3>
                        <img src="/Images/5.png" />
                    </a>
                </div>
                <div className="section--body--item category--item" style={{backgroundColor:'darkslateblue'}}>
                    <a href="#">
                        <h3>Made for you</h3>
                        <img src="/Images/6.png" />
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'deeppink'}}>
                    <a href="#">
                        <h3>New Releases</h3>
                        <img src="/Images/7.png" />
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'darkorange'}}>
                    <a href="#">
                        <h3>2023 in Music</h3>
                        <img src="/Images/8.png" />
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'greenyellow'}}>
                    <a href="#">
                        <h3>Student</h3>
                        <img src="/Images/9.png" />
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'lightsalmon'}}>
                    <a href="#">
                        <h3>Hindi</h3>
                        <img src="/Images/10.png" />
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'red'}}>
                    <a href="#">
                        <h3>Punjabi</h3>
                        <img src="/Images/11.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'maroon'}}>
                    <a href="#">
                        <h3>Tamil</h3>
                        <img src="/Images/12.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'royalblue'}}>
                    <a href="#">
                        <h3>Charts</h3>
                        <img src="/Images/1.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'yellow'}}>
                    <a href="#">
                        <h3>Podcast</h3>
                        <img src="/Images/4.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'aqua'}}>
                    <a href="#">
                        <h3>Pop</h3>
                        <img src="/Images/6.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'lime'}}>
                    <a href="#">
                        <h3>Trending</h3>
                        <img src="/Images/8.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'teal'}}>
                    <a href="#">
                        <h3>Podcast</h3>
                        <img src="/Images/9.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'olive'}}>
                    <a href="#">
                        <h3>Love</h3>
                        <img src="/Images/10.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item"  style={{backgroundColor:'purple'}}>
                    <a href="#">
                        <h3>Discover</h3>
                        <img src="/Images/12.png"/>
                    </a>
                </div>
                <div className="section--body--item category--item">
                    <a href="#">
                        <h3>Party</h3>
                        <img src="/Images/8.png" alt=""/>
                    </a>
                </div>
                </div>
        
        </div>
    </main>

   
       

        </>
    );

}