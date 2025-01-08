import React from "react";

const Sidebar = ({ data }) => {
  return (
    <div className="col-lg-3">
      <aside className="sidebar">
        <div className="card">
          <div className="card-header">
            <h4 className="mb-0" style={{ fontSize: 20 }}>
              Filters
            </h4>
          </div>
          <div className="card-body">
            <div className="search-bar">
              <input type="text" placeholder="Search " id="searchInput" />
              <button type="button" id="searchButton">
                Search
              </button>
            </div>
            <form id="filterForm">
              <section className="filter-group">
                <h3>Category</h3>
                {data?.map((item, index) => (
                  <div key={index}>
                    <hr />
                    <label>
                      <input
                        type="checkbox"
                        name="category"
                        defaultValue="appetizers"
                      />{" "}
                      {item.category}
                    </label>
                  </div>
                ))}
              </section>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
