import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CoustomLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ borderBottom: match ? "solid" : "none" ,color: match? "rgb(243, 91, 121)":"gray"}}
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
};

export default CoustomLink;