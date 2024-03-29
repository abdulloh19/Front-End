import { Box, Container, transition } from "@chakra-ui/react";
import { LayoutProps } from "./layout.props";
import Header from "./header/Header";
import { FunctionComponent, useState } from "react";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
// import Sidebar from "src/interface/sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((p) => !p);
  return (
    <Box maxW={"full"} overflow={"hidden"}>
      <Header onToggle={onToggle} />
      <Sidebar toggle={toggle} />
      <Box mt={"11vh"} pl={{ base: 0, lg: "320px" }} minH={"90vh"} transition={"all .4s ease"}>
        <Container maxW={"conatiner.lg"}>{children}</Container>
      </Box>
      <Footer />
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
