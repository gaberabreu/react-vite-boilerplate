import { forwardRef } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";

type LinkBehaviorProps = Omit<LinkProps, "to"> & { href: LinkProps["to"] };

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(({ href, ...rest }, ref) => {
  return (
    <Link
      ref={ref}
      to={href}
      activeProps={{ className: "Mui-selected" }}
      {...rest}
    />
  );
});

export default LinkBehavior;
