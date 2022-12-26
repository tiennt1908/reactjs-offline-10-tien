import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeaderMenus() {
  const menu = useSelector((state) => state.menu.menus);


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
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
