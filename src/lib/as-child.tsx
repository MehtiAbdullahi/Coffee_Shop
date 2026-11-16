import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export function createPolymorphic<T extends React.ElementType>(
  defaultElement: T,
) {
  const Component = React.forwardRef<any, any>(
    ({ asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : defaultElement;

      return <Comp ref={ref} {...props} />;
    },
  );

  Component.displayName = `Polymorphic(${String(defaultElement)})`;

  return Component;
}
