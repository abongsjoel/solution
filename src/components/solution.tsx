import React, { ReactElement } from "react";

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const _showMap = new Map<string, boolean>();

  const [_showMenu, setShowMenu] = React.useState<Map<string, boolean>>();

  const _onExpand = (title: string) => {
    if (_showMenu && _showMenu.get(title)) {
      _showMap.set(title, false);
    } else {
      _showMap.clear();
      _showMap.set(title, true);
    }
    setShowMenu(_showMap);
  };

  return (
    <div>
      {menuConfig.map(({ title, subItems }) => (
        <div
          key={title}
          id={title}
          data-test-id={`first-level-${title.toLowerCase()}`}
        >
          {title}
          {subItems && subItems.length > 0 && (
            <React.Fragment>
              <button
                data-test-id={`button-${title.toLowerCase()}`}
                onClick={() => _onExpand(title)}
              >
                {_showMenu && _showMenu.get(title) ? "Hide" : "Expand"}
              </button>

              {_showMenu && _showMenu.get(title) && (
                <ul data-test-id={`ul-${title.toLowerCase()}`}>
                  {subItems.map((subItem) => (
                    <li
                      id={subItem}
                      key={subItem}
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
