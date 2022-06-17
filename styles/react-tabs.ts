export const reactTabsStyles = {
  ".react-tabs": { WebkitTapHighlightColor: "transparent" },
  ".react-tabs__tab-list": {
    borderBottom: "1px solid ",
    borderColor: "white",
    margin: "0 0 10px",
    padding: "0",
    marginBottom: "1.6rem"
  },
  ".react-tabs__tab": {
    display: "inline-block",
    border: "1px solid transparent",
    borderBottom: "none",
    bottom: "-1px",
    position: "relative",
    listStyle: "none",
    padding: "6px 12px",
    cursor: "pointer"
  } as any,
  ".react-tabs__tab--selected": {
    backgroundColor: "#e74d00",
    borderColor: "#e74d00",
    color: "text",
    borderRadius: "5px 5px 0 0"
  },
  ".react-tabs__tab--disabled": { color: "GrayText", cursor: "default" },
  ".react-tabs__tab:focus": {
    boxShadow: "0 0 5px hsl(208, 99%, 50%)",
    borderColor: "#e74d00",
    outline: "none"
  },
  ".react-tabs__tab:focus:after": {
    content: '""',
    position: "absolute",
    height: "5px",
    left: "-4px",
    right: "-4px",
    bottom: "-5px",
    backgroundColor: "#e74d00"
  } as any,
  ".react-tabs__tab-panel": { display: "none" },
  ".react-tabs__tab-panel--selected": { display: "block" }
}
