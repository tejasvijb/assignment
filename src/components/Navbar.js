import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    return (
        <div className="navbar">
          <div>KYC Hub</div>
          <div className='userIcon'>User<AccountCircleIcon/></div>
        </div>
    )
}