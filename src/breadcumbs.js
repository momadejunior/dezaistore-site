import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav style={{ '--bs-breadcrumb-divider': '' }} className='breadcumb-nav' aria-label="breadcrumb">
      <ol className="breadcrumb">
        <BreadcrumbItem link="/" text="Home" />
        {pathnames.map((name, index) => (
          <BreadcrumbItem
            key={index}
            link={`/${pathnames.slice(0, index + 1).join('/')}`}
            text={name}
            isActive={index === pathnames.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ link, text, isActive }) => {
  const itemClass = isActive ? 'breadcrumb-item active' : 'breadcrumb-item';

  return (
    <li className={itemClass} aria-current={isActive ? 'page' : undefined}>
      {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
    </li>
  );
};

export default Breadcrumb;
