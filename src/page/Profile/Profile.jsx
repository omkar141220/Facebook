import './profile.css'
import Rightbar from '../../Components/rightbar/Rightbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Topbar from '../../Components/topbar/Topbar'
import Feed from '../../Components/feed/Feed'

export default function Profile() {
    return (
      <> 
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="src\assets\Person\3.webp"
                alt=""
              />
              <img
                className="profileUserImg"
                src="src\assets\Person\7.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">OMKAR FALAKE</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
  }