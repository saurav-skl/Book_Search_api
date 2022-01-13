import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Header.css";

const headerStyle = {
  cursor: "pointer",
  backgroundColor: "#F2AA4CFF",
  // width:"200px",
  "@media (maxWidth: 1000px)": {},
};

const Header = () => {
  return (
    <AppBar onClick={() => window.scroll(0, 0)} style={headerStyle}>
      <Toolbar>
        <Typography variant="h5" style={{ margin: "auto" }}>
          <strong> Books Store </strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


