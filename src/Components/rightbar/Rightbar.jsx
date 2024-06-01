import './rightbar.css'
import { Users } from '../../../dummyData'
import OnlineFriends from '../onlineFriends/OnlineFriends'
const Rightbar = ({profile}) => {
  const HomeRightbar =()=>{
    return (
      <>
      <div className="birthdayContainer">
        <img className='birthdayImg' src="src\assets\Person\gift.png" alt="" />
        <span className="birthdayText">
        <b>ABCD</b> and <b>23 other friends</b> hav a birthday today.
        </span>
      </div>
          <img className='rightbarAd' src="src\assets\Person\2.jpeg" alt="" />
          <h4 className='rigthbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
          {Users.map((u)=>(
            <OnlineFriends key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Pune</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">KOLHAPUR</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">RelationShip:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarInfoItem">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Person\3.webp" alt="" />
        <span className="rightbarFollowingName">PRATHMESH</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Person\7.png" alt="" />
        <span className="rightbarFollowingName">MO</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Person\1.jpeg" alt="" />
        <span className="rightbarFollowingName">VIVEK</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Person\2.jpeg" alt="" />
        <span className="rightbarFollowingName">AJAY</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Post\5.jpg" alt="" />
        <span className="rightbarFollowingName">OMKAR</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Post\1.jpg" alt="" />
        <span className="rightbarFollowingName">SHALISH</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Post\8.jpg" alt="" />
        <span className="rightbarFollowingName">OM</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
      </div>
  )
}


export default Rightbar