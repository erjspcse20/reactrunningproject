import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { compose } from 'redux';
//import { mailFolderListItems, otherMailFolderListItems } from '../components/navigation/NavigationLink';
import { logoutUser } from '../actions/LoginProcessAction';
import AuthorizedRoute from './AuthorizedRoute';
import { Link, Route, Switch } from 'react-router-dom';
import Test from '../containers/Test';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: '-webkit-flex',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
  },
});

class DashboardRoute extends React.Component {
  state = {
    open: false,
  };

  onLogoutClick = () => {
    this.props.logoutUser();
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div >
        {/*<AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <Grid item xs={1}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon/>
            </IconButton>
            </Grid>
              <Grid item xs={9}>
            <Typography variant="title" color="inherit" noWrap>
              <Link to="/dashboard" style={{ textDecoration: 'none', color : 'white' }}>FlightSkipper Admin</Link>
            </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={this.onLogoutClick}>Logout</Button>
            </Grid>
          </Toolbar>

        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
          </div>
          <Divider/>

          <List>{mailFolderListItems}</List>

          <Divider/>

          <List>{otherMailFolderListItems}</List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}/>
            <Test />

          <Switch>

          </Switch>
      </main>*/}


      <Test />
      </div>
    );
  }
}



DashboardRoute.defaultProps = {
  isMenuListLoading: false,
};

function mapStateToProps(state) {
  const {} = state;
  return {};
}

//export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps, {logoutUser}))(DashboardRoute);
export default connect(mapStateToProps, {logoutUser})(DashboardRoute);

