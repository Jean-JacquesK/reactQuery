import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className='d-flex align-items-center p-1 m-0  mb-5 text-black justify-content-around bg-secondary'>
      <NavLink to={"/"} className='d-flex align-items-center '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-camera-fill text-warning'
          viewBox='0 0 16 16'
        >
          <path d='M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
          <path d='M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z' />
        </svg>
      </NavLink>

      <NavLink
        to={"artists"}
        className='m-0 text-decoration-none fs-5 text-warning'
      >
        Artistes
      </NavLink>
      <NavLink
        to={"albums"}
        className='m-0 text-decoration-none fs-5 text-warning'
      >
        Albums
      </NavLink>
    </div>
  );
}

export default Navbar;
