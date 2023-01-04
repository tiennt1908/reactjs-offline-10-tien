import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../store/user/actions';

function HeaderMenus() {
  const menu = useSelector((state) => state.menu.menus);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actLogout());
  }
  function renderMultipleMenu(list) {
    return (
      <ul className="header-nav__lists">
        {
          list.map((e) => {
            return (
              <li key={e.id}>
                <a href={e.url}>{e.title}</a>
                {
                  e.child.length > 0 && renderMultipleMenu(e.child)
                }
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        {
          renderMultipleMenu(menu)
        }
        <ul className="header-nav__lists">
          <li className="user">
            {
              !user?.id && (
                <Link to="/login">
                  <i className="icons ion-person" /> Tài khoản
                </Link>
              )
            }
            {
              user?.id && (
                <>
                  <Link to="/">
                    <i className="icons ion-person" />{user.name}
                  </Link>
                  <ul className="header-nav__lists">
                    <li>
                      <Link to="/" onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
