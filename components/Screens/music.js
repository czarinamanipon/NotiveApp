import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Media Player</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
        <main>
          <h1>Media Player</h1>
          <img src="Screen Shot 2021-12-13 at 6.48.07 PM.png" className="logo" />
          <h2>Tabs</h2>
          <div className="container">
            <div className="tab shadow">
              {/* <img src="home.png"> */}
              <svg role="img" height={24} width={24} className="Svg-sc-1bi12j5-0 gSLhUO home-icon" viewBox="0 0 24 24"><path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" /></svg>
              {/* active <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 gSLhUO home-active-icon" viewBox="0 0 24 24"><path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path></svg> */}
              <p>Notes</p>
            </div>
            <div className="tab shadow">
              {/* <img src="search.png"> */}
              <svg role="img" height={24} width={24} className="Svg-sc-1bi12j5-0 gSLhUO search-icon" viewBox="0 0 24 24"><path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z" /></svg>
              {/* active <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 gSLhUO search-active-icon" viewBox="0 0 24 24"><path d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z"></path></svg> */}
              <p>Pomodoro</p>
            </div>
            <div className="tab shadow">
              {/* <img src="library.png"> */}
              <svg role="img" height={24} width={24} className="Svg-sc-1bi12j5-0 gSLhUO collection-icon" viewBox="0 0 24 24"><path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" /></svg>
              {/* acive <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 gSLhUO collection-active-icon" viewBox="0 0 24 24"><path d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path></svg> */}
              <p>Calendar</p>
            </div>
            <div className="tab shadow">
              <div className="create-playlist-button">
                <div>
                  <svg role="img" height={12} width={12} aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO"><path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" /><path fill="none" d="M0 0h16v16H0z" /></svg>
                </div>
              </div>
              <p>Media Player</p>
            </div>
            <div className="tab shadow">
              <div className="liked-songs-button">
                <div>
                  <svg role="img" height={12} width={12} aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
                </div>
              </div>
              <p>Profile</p>
            </div>
          </div>
          <h2>Play</h2>
          <div className="play-button button shadow">
            <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO"><path d="M4.018 14L14.41 8 4.018 2z" /></svg>
          </div>
          <h2>Like</h2>
          <div className="heart-button button shadow">
            <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="heart"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
          </div>
          <h2>More</h2>
          <div className="dots button shadow">
            <svg role="img" height={32} width={32} viewBox="0 0 32 32" className="Svg-sc-1bi12j5-0 gSLhUO"><path d="M5.998 13.999A2 2 0 105.999 18a2 2 0 00-.001-4zm10.001 0A2 2 0 1016 18a2 2 0 000-4zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z" /></svg>
          </div>	
          <h2>Media</h2>
          <div className="nav button shadow">
            <div className="nav-item active shadow"><p>Playlists</p></div>
            <div className="nav-item shadow"><p>Songs</p></div>
            <div className="nav-item shadow"><p>Videos</p></div>
            <div className="nav-item shadow"><p>Albums</p></div>
          </div>
          <h2>Navigation buttons</h2>
          <div className="container horizontal">
            <div className="navigation-button shadow">
              <svg role="img" focusable="false" height={24} width={24} viewBox="0 0 24 24" className="backward"><polyline points="16 4 7 12 16 20" fill="none" stroke="#fff" /></svg>
              {/* <img src="navigation.png" class="backward"> */}
            </div>
            <div className="navigation-button shadow">
              <svg role="img" focusable="false" height={24} width={24} viewBox="0 0 24 24" className="Svg-ytk21e-0 bevrDs b_XV78m0oH1cQkBxrHza forward"><polyline points="8 4 17 12 8 20" fill="none" stroke="#fff" /></svg>
              {/* <img src="navigation.png" class="forward"> */}
            </div>
          </div>
          <h2>Follow</h2>
          <div className="container">
            <div className="follow shadow">
              <p>FOLLOW</p>
            </div>
          </div>
          <h2>Account</h2>
          <div className="container">
            <div className="account shadow">
              <img src="pfp.png" className="profile-picture" />
              <p>Bookie0</p>
              <svg role="img" height={16} width={16} className="Svg-sc-1bi12j5-0 gSLhUO _kBqVtNa6io1mPbycO8V" viewBox="0 0 16 16"><path d="M3 6l5 5.794L13 6z" /></svg>
            </div>
          </div>
          <h2>Recently played</h2>
          <div className="container horizontal">
            <div className="card shadow">
              <div className="image-container">
                <img src="Screen Shot 2021-12-13 at 6.01.15 PM.png" />
                <div className="play-button shadow">
                  <span>►</span>
                </div>
              </div>
              <h4>ASMR</h4>
              <p>Gibi ASMR on Youtube</p>
            </div>	
            <div className="card shadow">
              <div className="image-container">
                <img src="https://i.redd.it/u9egsghiqmq01.jpg" />
                <div className="play-button shadow">
                  <span>►</span>
                </div>
              </div>
              <h4>Blonde</h4>
              <p>17 songs</p>
            </div>	
          </div>
          <h2>Up Next<p />
            <div className="container songs">
              <div className="song shadow">
                <div className="left">
                  <svg height={32} role="img" width={32} viewBox="0 0 24 24" className="YetgE1VONGunFTGer0iQ play-small shadow"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" /></svg>
                  <p className="number">1</p>
                  <img src="Screen Shot 2021-12-13 at 6.18.58 PM.png" />
                  <div className="info">
                    <p className="title">Venom</p>
                    <div className="more-bottom">
                      <div className="explicit">E</div>
                      <p className="author">Little Simz</p>
                    </div>
                  </div>
                </div>
                <p className="plays">2,383,661,975</p>
                <p className="date">3 days ago</p>
                <div className="right">
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO heart shadow"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
                  <p className="duration">3:29</p>
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO dots shadow"><path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z" /></svg>
                </div>
              </div>
              <div className="song shadow">
                <div className="left">
                  <svg height={32} role="img" width={32} viewBox="0 0 24 24" className="YetgE1VONGunFTGer0iQ play-small shadow"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" /></svg>
                  <p className="number">2</p>
                  <img src="IMG_5414.JPG" />
                  <div className="info">
                    <p className="title">Rainy Day</p>
                    <div className="more-bottom">
                    </div>
                  </div>
                </div>
                <p className="plays middle">1,783,253,003</p>
                <p className="date middle">2 days ago</p>
                <div className="right">
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO heart shadow"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
                  <p className="duration">4:02</p>
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO dots shadow"><path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z" /></svg>
                </div>
              </div>
              <div className="song shadow">
                <div className="left">
                  <svg height={32} role="img" width={32} viewBox="0 0 24 24" className="YetgE1VONGunFTGer0iQ play-small shadow"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" /></svg>
                  <p className="number">3</p>
                  <img src="elma.jpg" />
                  <div className="info">
                    <p className="title">Elma (エルマ)</p>
                    <div className="more-bottom">
                      {/* <div class="explicit">E</div> */}
                      <p className="author">Yorushika</p>
                    </div>
                  </div>
                </div>
                <p className="plays last">405,779,994</p>
                <p className="date last">4 days ago</p>
                <div className="right">
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO heart shadow"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
                  <p className="duration">3:35</p>
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO dots shadow"><path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z" /></svg>
                </div>
              </div>
            </div>
          </h2></main>
        <div className="bottom">
          <div className="left">
            <img src="cover.jpg" className="shadow" />
            <div className="text">
              <h4>Dance Monkey</h4>
              <p>Tones And I</p>
            </div>
            {/* <img src="heart.png" class="heart"> */}
            <div className="icon-container shadow">
              <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="heart"><path fill="none" d="M0 0h16v16H0z" /><path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" /></svg>
            </div>
          </div>
          <div className="center">
            <div className="controls">
              {/* <img src="shuffle.png"> */}
              <div className="icon-container shadow">
                <svg role="img" height={16} width={16} viewBox="0 0 16 16" className=" "><path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" /></svg>
              </div>
              {/* <img src="previous.png"> */}
              <div className="icon-container shadow">
                <svg role="img" height={16} width={16} viewBox="0 0 16 16" className=" "><path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" /></svg>
              </div>
              <div className="play-container shadow">
                <div className="play shadow">
                  {/* <span>&#9658;</span>						 */}
                  <svg role="img" height={16} width={16} viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 gSLhUO"><path d="M4.018 14L14.41 8 4.018 2z" /></svg>
                </div>
              </div>
              {/* <img src="next.png"> */}
              <div className="icon-container shadow">
                <svg role="img" height={16} width={16} viewBox="0 0 16 16" className=" "><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" /></svg>
              </div>
              {/* <img src="repeat.png"> */}
              <div className="icon-container shadow">
                <svg role="img" height={16} width={16} viewBox="0 0 16 16" className=" "><path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" /></svg>
              </div>
            </div>
            <div className="slider">
              <span>0:00</span>
              {/* <div class="range-container"> */}
              {/* <input type="range" id="myinput"> */}
              <div className="chrome">
                <input id="myinput" min={0} max={60} type="range" defaultValue={30} />
              </div>
              {/* </div> */}
              <span>3:29<span>
                </span></span></div>
          </div>
          <div className="right">
            {/* <img src="queue.png"> */}
            <div className="icon-container shadow">
              <svg role="img" height={16} width={16} viewBox="0 0 16 16" className=" "><path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z" /></svg>
            </div>
            {/* <img src="devices.png"> */}
            <div className="icon-container shadow">
              <svg role="presentation" height={16} width={16} aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16" className=" "><path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z" /></svg>
            </div>
            {/* <input type="range"> */}
            <div className="chrome">
              <input id="myinput2" min={0} max={60} type="range" defaultValue={30} />
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n@font-face {\n\tfont-family: Gotham;\n\tsrc: url(\"Gotham-Light.otf\") format(\"opentype\");\n}\n\n@font-face {\n\tfont-family: Circular;\n\tsrc: url(\"circular.otf\") format(\"opentype\");\n}\n\n@font-face {\n\tfont-family: Circular Light;\n\tsrc: url(\"circular-light.otf\") format(\"opentype\");\n}\n\nmain {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 70%;\t\n}\n\n.logo {\n\twidth: 20%;\n}\n\n.bottom {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbackground: #181818;\n\theight: 90px;\n\twidth: 98.2%;\n\tposition: absolute;\n\tbottom: 0;\n\tposition: sticky;\n\tleft: 0;\n\tpadding: 0 16px;\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232;\n\tbackground: #262626;\n}\n\n.bottom .icon-container {\n\tborder-radius: 50%;\n\twidth: 40px;\n\theight: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.bottom svg {\n\tfill: #b3b3b3;\n\t/* border-radius: 50%; */\n\tpadding: 5px;\n\ttransition: 0.3s;\n\t/* cursor: pointer; */\n}\n\n.bottom > * {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.bottom .left {\n\tgap: 8px;\n}\n\n.bottom .left img {\n\twidth: 56px;\n\theight: 56px;\n}\n\n.bottom .left .text > * {\n\tmargin: 0;\n}\n\n.bottom .left .text h4 {\n\tfont-size: 14px;\n\tmargin-bottom: 5px;\n\tfont-family: Circular Light;\n}\n\n.bottom .left .text p {\n\tfont-size: 11px;\n\tcolor: #b3b3b3;\n}\n\n.bottom .left .heart {\n\t/* width: 30px; */\n\tfill: #1db954;\n\t/* height: 25px; */\n}\n\n.bottom .center {\n\tflex-direction: column;\n\twidth: 300px;\n\tpadding: 8px;\n}\n\n.bottom .center .controls {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 8px;\n\tmargin-bottom: 4px;\n}\n\n.bottom .center .controls .play-container {\n\tborder-radius: 50%;\n\tcursor: pointer;\n}\n\n.bottom .center .controls .play {\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tmargin: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.bottom .center .controls .play svg {\n\tbackground: #fff;\n\tborder-radius: 50%;\n\tfill: #000;\n\tpadding: 8px;\n\twidth: 40px;\n\theight: 25px;\n\ttransition: 0.3s;\n}\n\n.bottom .center .controls .play svg:active {\n\ttransform: scale(0.9);\n}\n\n.bottom .center .slider {\n\tdisplay: flex;\n\tgap: 8px;\n\tfont-size: 11px;\n\tcolor: linear-gradient(145deg, #21c65b, #1ca74d);\n}\n\n\n.bottom .center .slider input {\n\twidth: 600px;\n}\n\n.bottom .right {\n\tgap: 8px;\n}\n\n.bottom .right input {\n\twidth: 90px;\n}\n\n\n* {\n\t/* box-sizin\tg: border-box; */\n}\n\n*:focus {\n\toutline: none;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\t/* align-items: center; */\n\t/* background: linear-gradient(0deg, rgba(33,33,33,1) 24%, rgba(18,18,18,1) 59%); */\n\tbackground-color: linear-gradient(145deg, #21c65b, #1ca74d);\n\tcolor: blue;\n\tmargin: 0;\n\tfont-family: Helvetica;\n\tfont-family: Gotham;\n\tfont-family: Circular;\n}\n\nbody > *:not(.bottom) {\n\t/* margin-left: 50px; */\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tmargin-bottom: 40px;\n\t/* margin-top: 100px; */\n}\n\n.container.horizontal {\n\tflex-direction: row;\n}\n\n.shadow {\n\t/* box-shadow: -5px -5px 20px #212121,  5px 5px 20px #141414; */\n\t/* box-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #323232; */\n\n\tbox-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #323232, inset 0 0 0px #1b1a1a, inset 0 0 0px #323232;\n\ttransition: 0.3s;\n\n}\n\n.shadow:active {\n\t/* box-shadow: inset 3px 3px 2px #141414, inset -3px -3px 2px #212121; */\n\t/* box-shadow: inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232; */\n\n\t/* box-shadow: inset 0.2rem 0.2rem 0.5rem #323232, inset -0.2rem -0.2rem 0.5rem #000000; */\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232;\n\tbackground: #262626;\n}\n\n.shadow > * {\n\ttransition: 0.3s;\n}\n\n.shadow:active > * {\n\ttransform: scale(0.95);\n}\n\n.tab {\n\theight: 40px;\n\twidth: 200px;\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: blue;\n\tcursor: pointer;\n\tborder-radius: 4px;\n\tgap: 16px;\n\t/* background: #282828; */\n\tbackground-color: #212121;\n\tpadding: 0 6px;\n}\n\n.tab svg {\n\twidth: 24px;\n\theight: 24px;\n\tfill: #b3b3b3;\n}\n\n.tab:hover, .tab:hover svg, .tab:hover .liked-songs-button svg {\n\tcolor: #fff;\n\tfill: #fff;\n}\n\n.tab .create-playlist-button {\n\t/* background: #b8bdc9; */\n\tcolor: #fff;\n\tborder-radius: 1px;\n\tdisplay: flex;\n\t/* justify-content: center; */\n\talign-items: center;\n}\n\n\n.tab .create-playlist-button div {\n\tbackground: #b2b2b2;\n\tborder-radius: 1px;\n\t/* padding: 5px; */\n\twidth: 24px;\n\theight: 24px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: 0.2s;\n}\n\n.tab:hover .create-playlist-button div {\n\tbackground: #fff;\n}\n\n.tab .create-playlist-button div svg {\n\tfill: #000;\n\twidth: 12px;\n\theight: 12px;\n}\n\n.tab .liked-songs-button {\n\tdisplay: flex;\n\t/* justify-content: center; */\n\talign-items: center;\n}\n\n.tab .liked-songs-button div {\n\tbackground: linear-gradient(135deg, #450af5, #c4efd9);\n\tborder-radius: 1px;\n\twidth: 24px;\n\theight: 24px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: 0.2s;\n}\n\n.tab:hover .liked-songs-button div {\n\tbackground: linear-gradient(135deg, #5629f2, #b3cedf);\n}\n\n.tab .liked-songs-button div svg {\n\twidth: 12px;\n\theight: 12px;\n\tfill: #b2b2b2;\n\ttransition: 0.2s;\n}\n\n.nav {\n\tdisplay: flex;\n\tgap: 20px;\n\twidth: 435px;\t\n\tpadding: 5px;\n\tborder-radius: 4px !important;\n}\n\n.nav:active {\n\tbox-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #323232, inset 0 0 0px #1b1a1a, inset 0 0 0px #323232;\n\tbackground: inherit;\n\ttransform: scale(1);\n}\n\n.nav .nav-item:not(:active) {\n\ttransform: scale(1);\n}\n\n.nav .nav-item {\n\tborder-radius: 4px;\n\tcolor: orange;\n\tpadding: 8px 16px;\n\tcursor: pointer;\n\theight: 30px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.nav .nav-item:active > * {\n\t/* transform: scale(0.95); */\n}\n\n.nav .nav-item:active, .nav .nav-item.active:active > * {\n\ttransform: scale(1);\n\tbackground: inherit;\n}\n\n.nav .nav-item.active {\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232;\n\ttransform: scale(1);\n}\n\n.navigation-button {\n\twidth: 32px;\n\theight: 32px;\n\tborder-radius: 50%;\n\t/* background: rgba(0 0 0 / 70%); */\n\tbackground-color: #212121;\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.follow {\n\twidth: 100px;\n\theight: 32px;\n\tletter-spacing: 1.6px;\n\tfont-size: 12px;\n\tfont-weight: 700;\n\ttext-align: center;\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tborder: 1px solid rgba(255,255,255,.3);\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.follow p {\n\tmargin: 0;\n}\n\n.account {\n\tdisplay: flex;\n\tgap: 5px;\n\twidth: 130px;\n\tpadding-right: 10px;\n\theight: 32px;\n\talign-items: center;\n\tjustify-content: space-between;\n\tborder-radius: 20px;\n\tfont-size: 14px;\n\tcursor: pointer;\n}\n\n.account .profile-picture {\n\t/* border: 1px solid rgba(255,255,255,.3); */\n\twidth: 28px;\n\theight: 28px;\n\tborder-radius: 50%;\t\n}\n\n.account svg {\n\tfill: orange;\n}\n\n.card {\n\tborder-radius: 4px;\n\twidth: 190px;\n\theight: 290px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* align-items: center; */\n\tcursor: pointer;\n}\n\n.card:active {\n\tbox-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #323232, inset 0 0 0px #1b1a1a, inset 0 0 0px #323232;\n\tbackground: inherit;\n}\n\n.card:active > * {\n\ttransform: scale(1);\n}\n\n.card:active .card img {\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232 !important;\n}\n\n.card .image-container {\n\tdisplay: block;\n}\n\n.card img {\n\twidth: 100%;\n}\n\n.card:hover .play-button {\n\topacity: 1;\n\tbottom: 3px;\n}\n\n.card .play-button {\n\tborder-radius: 50%;\n\tbackground: #1fb955;\n\twidth: 40px;\n\theight: 40px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\t\n\tcolor: yellow;\n\tposition: relative;\n\tbottom: -400px;\n\topacity: 0;\n\ttransition: 0.4s;\n\tmargin-top: -50px;\n\t/* top: -3px; */\n\tbottom: -8px;\n\tleft: 140px;\n\t/* background: linear-gradient(145deg, #21c65b, #1ca74d);\n\tbox-shadow:  20px 20px 60px #323232, -20px -20px 60px #323232; */\n}\n\n.card .play-button:active {\n\t/* box-shadow: none !important; */\n\t/* background: linear-gradient(145deg, #1ca74d, #21c65b); */\n\t/* box-shadow:  20px 20px 60px #1a9d48, -20px -20px 60px #24d562; */\n}\n\n.card .play-button span {\n\tposition: relative;\n\ttop: 2px;\n\tleft: 1px;\n}\n\n.card h4 {\n\tmargin: 20px 0 5px 0;\n\tmargin-right: auto;\n}\n\n.card p {\n\tcolor: purple;\n\tfont-size: 14px;\n\tfont-family: Circular Light;\n}\n/* <!-- \ninput[type=\"range\"] {\n\t-webkit-appearance: none; \n\tbackground: transparent;\n\tposition: relative;\n\toverflow: hidden;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: #fdfdfd;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tposition: relative;\n\ttop: -3px;\n\tdisplay: none;\n}\n\n.range-container:hover input[type=\"range\"]::-webkit-slider-thumb {\n\tdisplay: block;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb:active {\n}\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n\tbackground: #535353;\n\twidth: 300px;\n\theight: 4px;\n\tborder-radius: 20px;\n} --> */\n\n#myinput, #myinput2 {\n  background: linear-gradient(to right, #b3b3b3 0%, #b3b3b3 50%, #535353 50%, #535353 100%);\n\n  /* border: solid 1px #82CFD0; */\n  border-radius: 8px;\n  height: 4px;\n  width: 600px;\n  outline: none;\n  transition: background 450ms ease-in;\n  -webkit-appearance: none;\n\t/* position: relative; */\n\t/* background: transparent; */\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 1px 1px 2px #1b1a1a, inset -1px -1px 2px #323232;\n}\n\n#myinput2 {\n\twidth: 95px;\n}\n\n#myinput:hover, #myinput2:hover {\n  background: linear-gradient(to right, #1db954 0%, #1db954 50%, #535353 50%, #535353 100%);\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: #fdfdfd;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tdisplay: none;\n\tbox-shadow: 1px 1px 2px #1b1a1a, -1px -1px 2px #323232, inset 0 0 0px #1b1a1a, inset 0 0 0px #323232;\n\t/* border: 5px solid #181818; */\n} \n\ninput[type=\"range\"]::-webkit-slider-thumb:active {\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 1px 1px 2px #1b1a1a, inset -1px -1px 2px #323232;\n}\n\n.chrome:hover input[type=\"range\"]::-webkit-slider-thumb { \n\tdisplay: block;\n}\n\n.button {\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tdisplay: flex;;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.button svg {\n\tfill: #fff;\n}\n\n.play-button {\n\tbackground: #1db954;\n\twidth: 56px;\n\theight: 56px;\n}\n\n.play-button:active {\n\tbackground: #1db954;\n}\n\n.play-button svg {\n\twidth: 28px;\n\theight: 28px;\n}\n\n.heart-button {\n\tpadding: 5px;\n\twidth: 40px;\n\theight: 40px;\n}\n\n.heart-button svg {\n\twidth: 32px;\n\theight: 32px;\n\tfill: #1db954 !important;\n}\n\n.dots {\n\twidth: 40px;\n\theight: 40px;\n\tpadding: 5px;\n}\n\n.container.songs {\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232;\n\tborder-radius: 4px;\n\tpadding: 10px;\n\twidth: 100%;\n\tgap: 10px;\n}\n\n.container.songs .song {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tborder-radius: 4px;\n\tpadding: 10px;\n\tcursor: pointer;\n\ttransition: 0.3s;\n}\n\n.container.songs .song:active {\n\tbox-shadow: 3px 3px 5px #1b1a1a, -3px -3px 5px #323232, inset 0 0 0px #1b1a1a, inset 0 0 0px #323232;\n\tbackground: #212121;\n}\n\n.container.songs .plays.middle {\n\tposition: relative;\n\tleft: 48px;\n}\n\n.container.songs .date.middle {\n\tposition: relative;\n\tleft: 25px;\n}\n\n.container.songs .plays.last {\n\tposition: relative;\n\tleft: 17px;\n}\n\n.container.songs .date.last {\n\tposition: relative;\n\tleft: 10px;\n}\n\n.container.songs .song:active {\n\t/* background: #212121 !important; */\n}\n\n.container.songs .song:active > * {\n\ttransform: scale(1);\n}\n\n.container.songs .song:hover {\n\t/* background: rgba(255,255,255,.1); */\n}\n\n.container.songs .song p {\n\tmargin: 0;\n}\n\n.container.songs .song .left {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 16px;\n}\n\n.container.songs .song .left .play-small {\n\tfill: #fff;\n\twidth: 16px;\n\theight: 16px;\n\topacity: 0;\n\tmargin-right: -30px;\n\tpadding: 5px;\n\tborder-radius: 50%;\n}\n\n.container.songs .song:hover .play-small {\n\topacity: 1;\n}\n\n.container.songs .song:hover p.number {\n\topacity: 0;\n}\n\n.container.songs .song .left .info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgao: 2px;\n}\n\n.container.songs .song .left .more-bottom {\n\tdisplay: flex;\n\tgap: 8px;\n}\n\n\n.container.songs .song > * {\n\tmargin: 0;\n\tfont-size: 14px;\n\tcolor: #b3b3b3;\n\tfont-family: Circular Light;\n}\n\n.container.songs .song p.title {\n\tcolor: #fff;\n}\n\n.container.songs .song p.number, .container.songs .song p.title {\n\tfont-size: 16px;\n}\n\n.container.songs .song img {\n\twidth: 40px;\n\theight: 40px;\n}\n\n.container.songs .song .right {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n}\n\n.container.songs .song .right .heart {\n\tfill: #1fb955;\n\tborder-radius: 50%;\n\tpadding: 5px;\n}\n\n.container.songs .song .right .dots {\n\tfill: #fff;\n\twidth: 16px;\n\theight: 16px;\n\topacity: 0;\n\tborder-radius: 50%;\n}\n\n.container.songs .song:hover .dots {\n\topacity: 1;\n}\n\n.size {\n\tbox-shadow: 0 0 0px #1b1a1a, 0 0 0px #323232, inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #323232;\n\tbackground: #262626;\n\tborder-left: 4px solid #1fb955;\n\tborder-radius: 4px;\n\topacity: 0;\n\ttransition: 0.3s;\n\theight: 0;\n}\n\n.size code {\n\tfont-size: 15px;\n}\n\n@media only screen and (max-width: 850px) {\n\t.size {\n\t\topacity: 1;\n\t\tmargin: 30px 0;\n\t\theight: auto;\n\t\tpadding: 10px;\n\t}\n}\n\n" }} />
      </div>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  