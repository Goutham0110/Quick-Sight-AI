import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NavbarMenu({ label, id, menu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [path, setPath] = React.useState("/");
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (path) => {
    console.log("path", path);
    if (!!path) setPath(path);
    setAnchorEl(null);
  };

  React.useEffect(() => {
    navigate(path);
  }, [path]);

  return (
    <>
      <Button
        id={`${id}-btn`}
        aria-controls={open ? `${id}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        {label}
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `${id}-btn`,
        }}
      >
        {menu.map((item, index) => (
          <MenuItem
            onClick={() => handleClose(item.path)}
            key={index}
            id={item.path.slice(1)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
