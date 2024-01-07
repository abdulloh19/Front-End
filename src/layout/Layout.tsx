import { Box, transition } from "@chakra-ui/react";
import { LayoutProps } from "./layout.props";
import Header from "./header/Header";
import { FunctionComponent, useState } from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((p) => !p);
  return (
    <Box maxW={"full"} overflow={"hidden"}>
      <Header onToggle={onToggle} />
      <Sidebar toggle={toggle} />
      <Box mt={"11vh"} pl={{ base: 0, lg: "320px" }} transition={"all .4s ease"}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
