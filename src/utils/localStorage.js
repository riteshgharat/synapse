// localStorage class implementation
class LocalStorage {
  // Function to save current theme
  setTheme = theme => {
    localStorage.setItem("isDark", JSON.stringify(theme));
  };

  // Function to get current theme
  getTheme = () => {
    const theme = localStorage.getItem("isDark");
    return theme ? JSON.parse(theme) : false; // Default to light mode (false) if not set
  };

  // Function to get navbar state
  getNavbarState = () => {
    const storedState = localStorage.getItem("isNavbarOpen");
    return storedState ? JSON.parse(storedState) : false; // default to false if not set
  };

  // Function to save navbar state
  setNavbarState = isOpen => {
    localStorage.setItem("isNavbarOpen", JSON.stringify(isOpen));
  };
}

const localStore = new LocalStorage();

window.onload = () => {
  if (localStore.getTheme() === undefined) {
    localStore.setTheme(false); // Default to light mode if not set
  }
  if (localStore.getNavbarState() === undefined) {
    localStore.setNavbarState(false); // Default navbar state to closed if not set
  }
};

export default localStore;