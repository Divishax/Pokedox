const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ padding: "10px", maxWidth: "1250px", margin: "0 auto" }}>
      {children}
    </div>
  );
};

export default Layout;
