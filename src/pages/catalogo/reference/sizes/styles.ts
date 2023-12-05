export const styles = {
  line: {
    position: "absolute",
    height: "150%",
    width: 2,
    background: "gray",
    transform: "rotate(50deg)",
  },
  square: {
    width: 30,
    height: 30,
    fontSize: 18,
    fontWeight: 700,
    overflow: "hidden",
  },
};

export const sx = {
  grid: {
    height: 80,
    paddingTop: 3,
    overflowY: "auto",
    overflowX: "hidden",
  },
  buttonSizeSelected: {
    borderRadius: "0%",
    minWidth: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 8,
    boxShadow: "0px 2px 6px 2px",
  },
  buttonSize: {
    minWidth: 40,
    borderRadius: "0%",
    height: 40,
    marginLeft: 2,
    marginRight: 8,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "& .MuiTouchRipple-child": {
      backgroundColor: "primary.main",
    },
  },
};