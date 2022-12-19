import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Input from '../shared/Input';

function HeaderSearch() {
  const [value, setValue] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    if (value !== "") {
      history.push("/search/" + value);
    }
  }
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={(e) => { search(e) }}>
        <Input type="search" placeholder="Nhập từ khóa tìm kiếm ..." onChange={(e) => {
          setValue(e.target.value);
        }} />
      </form>
    </div>
  );
}

export default HeaderSearch;
