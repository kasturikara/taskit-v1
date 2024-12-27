const PublicPages = () => {
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  if (storedUser) {
    window.location.href = "/";
  } else {
    window.location.href = "/login";
  }
};

export default PublicPages;
