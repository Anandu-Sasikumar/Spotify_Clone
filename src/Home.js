import "./Home.css";
import { playList } from "./Array";

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="playlist">
          <h2>Spotify Playlist</h2>
          <div className="list">
            <div className="item">
              <img src="/Images/1.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>{playList.Name}</h4>
              <p>Your ultimate playlist for the best in Molly...</p>
            </div>

            <div className="item">
              <img src="/Images/2.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Discover Weekly</h4>
              <p>Your weekly mixtape of fresh music.</p>
            </div>

            <div className="item">
              <img src="/Images/3.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Christmas Hits</h4>
              <p>The biggest Christmas songs of all time</p>
            </div>

            <div className="item">
              <img src="/Images/4.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Sleep</h4>
              <p>Gentle Ambient piano to help you fall asleep.</p>
            </div>

            <div className="item">
              <img src="/Images/5.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Day Dreamer</h4>
              <p>Drift away with enthralling instrumentals.</p>
            </div>

            <div className="item">
              <img src="/Images/6.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Calming Acoustic</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>

            <div className="item">
              <img src="/Images/7.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Relaxing Acoustic</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>
            <div className="item">
              <img src="/Images/8.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Rainy Day</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>

            <div className="item">
              <img src="/Images/9.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Lonely Day</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>

            <div className="item">
              <img src="/Images/10.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Sunny Day</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>
            <div className="item">
              <img src="/Images/11.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Winter</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>
            <div className="item">
              <img src="/Images/12.png"></img>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Autumn Acoustics</h4>
              <p>Keep calm with instrumental acoustic tracks.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
