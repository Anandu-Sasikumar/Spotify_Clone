import './Playbar.css';

export default function Playbar(){
    return(
        <>
        
        <div className="music-player">
            <div className="song-bar">
                <div className="song-infos">
                    <div className="image-container">
                        <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg" alt="" />
                    </div>
                    <div className="song-description">
                        <p className="title-song">
                            Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
                        </p>
                        <p className="artist">Masaru Yokoyama</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-compress"></i>
                </div>
            </div>
            <div className="progress-controller">
                <div className="control-buttons">
                    <i className="fas fa-random"></i>
                    <i className="fas fa-step-backward"></i>
                    <i className="play-pause fas fa-play"></i>
                    <i className="fas fa-step-forward"></i>
                    <i className="fas fa-undo-alt"></i>
                </div>
                <div className="progress-container">
                    <span>0:49</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <span>3:15</span>
                </div>
            </div>
            <div className="other-features">
                <i className="fas fa-list-ul"></i>
                <i className="fas fa-desktop"></i>
                <div className="volume-bar">
                    <i className="fas fa-volume-down"></i>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}