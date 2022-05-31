import React, { ReactElement } from "react";
import { useMap } from "@umijs/hooks";

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const [, { set: setShow, get: getShow }] = useMap<string, boolean>([]);

  return (
    <div>
      {menuConfig.map(({ title, subItems }) => (
        <div id={title} data-test-id={`first-level-${title.toLowerCase()}`}>
          {title}
          {subItems && subItems.length > 0 && (
            <React.Fragment>
              <button
                data-test-id={`button-${title.toLowerCase()}`}
                onClick={() => setShow(title, !getShow(title))}
              >
                Expand
              </button>
              {getShow(title) && (
                <ul data-test-id={`ul-${title.toLowerCase()}`}>
                  {subItems.map((subItem) => (
                    <li
                      id={subItem}
                      data-test-id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
}

export default Solution;
