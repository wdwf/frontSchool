const Menu = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...rest}
    >
      <path
        fill="#000"
        d="M12.65 18h-9v-2h9v2zm9-5h-18v-2h18v2zm0-5h-9V6h9v2z"
      ></path>
    </svg>
  );
};

export default Menu;
