import React from 'react';

function SearchBar(props) {
    return (
       
             <div className="form-group has-search input-group" style={{ maxWidth: "40%" }}>
                        {/* <span className="fa fa-search form-control-feedback"></span> */}
                        {/* <span className='form-control-feedback'> <img src={SearchIcon} className="Img"/></span> */}
                        {/* <HiSearch /> */}
                        <input type="text" class="form-control" placeholder="Find your service here" ></input>
                        <div className="input-group-append">
                            <button className="btn searchBar" type="button">
                                Search
                            </button>

                        </div>
                    </div>
        
    );
}

export default SearchBar;