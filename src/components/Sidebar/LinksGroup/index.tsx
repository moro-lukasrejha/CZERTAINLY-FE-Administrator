import cx from "classnames";
import React, { useCallback, useState } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { Collapse } from "reactstrap";

import style from "./LinksGroup.module.scss";

interface ChildrenLink {
  name: string;
  link: string;
}

interface Props {
  header: React.ReactNode;
  headerLink?: string;
  childrenLinks?: ChildrenLink[];
  glyph?: string;
  className?: string;
}

function LinksGroup({
  header,
  headerLink = "",
  childrenLinks,
  glyph,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  if (!childrenLinks) {
    return (
      <li className={cx(style.headerLink, className)}>
        <NavLink to={headerLink} activeClassName={style.headerLinkActive}>
          <div>
            <i className={glyph} /> <span className={style.menuLabel}>{header}</span>
          </div>
        </NavLink>
      </li>
    );
  }

  return (
    <Route
      path={headerLink}
      children={({ match }) => (
        <li className={cx(style.headerLink, className)}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cx({
              [style.headerLinkActive]:
                !!match && match.url.indexOf(headerLink) > 0,
            })}
            onClick={toggle}
          >
            <div>
              <i className={glyph} /> <span>{header}</span>
            </div>
            <b
              className={cx("fa fa-angle-left arrow", style.arrow, {
                [style.arrowActive]: isOpen,
              })}
            />
          </a>
          <Collapse className={style.panel} isOpen={isOpen}>
            <ul>
              {childrenLinks.map((child) => (
                <li key={child.name}>{child.name}</li>
              ))}
            </ul>
          </Collapse>
        </li>
      )}
    />
  );
}

export default LinksGroup;