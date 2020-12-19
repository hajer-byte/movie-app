import React from "react";
import { Input } from "antd";
const onSearch = (value) => console.log(value);
const { Search } = Input;
function Filter(title, rate) {
  return (
    <div>
      <Search
        style={{ margin: "1rem", width: "77rem" }}
        placeholder="search a movie"
        allowClear
        onSearch={onSearch}
        size="large"
      />
    </div>
  );
}

export default Filter;
